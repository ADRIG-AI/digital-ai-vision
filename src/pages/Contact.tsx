import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import supabase from "../helper/supabaseClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Phone, Mail, Send, History } from "lucide-react";

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: any) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}

interface Message {
  id: string;
  email: string;
  name: string;
  service: string;
  message: string;
  created_at: string;
  status: string;
  reply: string;
  replied_at: string | null;
  user_id: string | null;
  is_verified: boolean;
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  const [userMessages, setUserMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [widgetId, setWidgetId] = useState<string | null>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const turnstileLoaded = useRef(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  // Initialize Turnstile CAPTCHA
  useEffect(() => {
    if (user || turnstileLoaded.current || !import.meta.env.VITE_TURNSTILE_SITE_KEY) return;

    const loadTurnstile = () => {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        turnstileLoaded.current = true;
        initializeTurnstile();
      };
      script.onerror = () => {
        console.error("Failed to load Turnstile script");
        toast({
          title: "Security Error",
          description: "Failed to load security check. Please refresh the page.",
          variant: "destructive",
        });
      };
      document.body.appendChild(script);
    };

    const initializeTurnstile = () => {
      if (!window.turnstile || !captchaRef.current) {
        console.error("Turnstile not available or container missing");
        return;
      }

      try {
        if (widgetId) {
          window.turnstile.remove(widgetId);
        }

        const id = window.turnstile.render(captchaRef.current, {
          sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
          callback: (token: string) => {
            console.log("CAPTCHA verified with token:", token);
            setCaptchaToken(token);
          },
          "expired-callback": () => {
            console.log("CAPTCHA expired");
            setCaptchaToken(null);
          },
          "error-callback": () => {
            console.log("CAPTCHA error");
            setCaptchaToken(null);
          },
        });
        setWidgetId(id);
      } catch (error) {
        console.error("Error initializing Turnstile:", error);
      }
    };

    loadTurnstile();

    return () => {
      if (window.turnstile && widgetId) {
        window.turnstile.remove(widgetId);
      }
    };
  }, [user]);

  // Handle user authentication state
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Reset form when user changes
  useEffect(() => {
    form.reset({
      name: user?.user_metadata?.name || user?.email?.split('@')[0] || "",
      email: user?.email || "",
      service: "",
      message: "",
    });

    if (user?.email) {
      fetchUserMessages(user.email);
    } else {
      setUserMessages([]);
    }
  }, [user]);

  const fetchUserMessages = async (email: string) => {
    setLoadingMessages(true);
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .or(`and(user_id.eq.${user?.id},is_verified.eq.true),and(email.eq.${email},is_verified.eq.true)`)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setUserMessages(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      });
    } finally {
      setLoadingMessages(false);
    }
  };

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    
    try {
      console.log("Form submission started with values:", values);
      
      if (!user && !captchaToken) {
        throw new Error("Please complete the CAPTCHA challenge");
      }

      if (user) {
        // Authenticated submission
        const { error } = await supabase.from("contact_messages").insert({
          ...values,
          user_id: user.id,
          is_verified: true,
        });
        
        if (error) throw error;
        
        toast({
          title: "Success!",
          description: "Your message has been sent",
        });
      } else {
        // Unauthenticated submission with CAPTCHA
        console.log("Submitting with CAPTCHA token:", captchaToken);
        
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-captcha-and-submit`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({
              ...values,
              token: captchaToken,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("API Error:", errorData);
          throw new Error(errorData.error || "Failed to submit form");
        }

        const result = await response.json();
        toast({
          title: "Success!",
          description: result.message || "Message submitted successfully",
        });
      }

      form.reset({ ...form.getValues(), service: "", message: "" });

      if (user?.email) {
        await fetchUserMessages(user.email);
      }
    } catch (error: any) {
      console.error("Submission failed:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
      
      if (!user && window.turnstile && widgetId) {
        window.turnstile.reset(widgetId);
        setCaptchaToken(null);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-adrig-blue text-white py-20">
          <div className="container mx-auto px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Have questions? Our team is ready to help with your AI needs.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Your name"
                                readOnly={!!user}
                                className={user ? "bg-gray-100" : ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                placeholder="your@email.com"
                                readOnly={!!user}
                                className={user ? "bg-gray-100" : ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Needed</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ai-automation">AI Automation</SelectItem>
                                <SelectItem value="data-analysis">Data Analysis</SelectItem>
                                <SelectItem value="chatbot-development">Chatbot Development</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Tell us about your project..."
                                className="min-h-[150px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {!user && (
                        <div 
                          ref={captchaRef}
                          className="cf-turnstile" 
                          style={{ 
                            minHeight: '65px',
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        />
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 bg-adrig-blue hover:bg-blue-700"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <Send className="mr-2" size={18} />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2" size={18} />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </div>

                {user && (
                  <div className="bg-gray-50 p-6 rounded-xl border">
                    <div className="flex items-center gap-2 mb-4">
                      <History className="text-adrig-blue" size={20} />
                      <h3 className="text-xl font-semibold">Your Messages</h3>
                    </div>

                    {loadingMessages ? (
                      <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-adrig-blue" />
                      </div>
                    ) : userMessages.length > 0 ? (
                      <div className="space-y-4">
                        {userMessages.map((message) => (
                          <div key={message.id} className="border-b pb-4 last:border-0">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">
                                  {message.service || "General Inquiry"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {new Date(message.created_at).toLocaleString()}
                                </p>
                              </div>
                              {message.status === "replied" && (
                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  Replied
                                </span>
                              )}
                            </div>
                            <p className="mt-2 text-gray-700">{message.message}</p>
                            {message.reply && (
                              <div className="mt-3 pl-3 border-l-2 border-adrig-blue/30">
                                <p className="text-sm text-gray-500">Our response:</p>
                                <p className="text-gray-700">{message.reply}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 text-center py-4">No messages yet</p>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-xl border">
                  <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="text-adrig-blue mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-semibold">Our Office</h3>
                        <p className="text-gray-600 mt-1">
                          123 AI Street, Tech City, TN 600073
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="text-adrig-blue mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600 mt-1">(+91) 9876543210</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="text-adrig-blue mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600 mt-1">contact@adrig.co.in</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-96 bg-gray-100 rounded-xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
                    <div className="text-center p-6">
                      <MapPin className="mx-auto text-adrig-blue/30" size={48} />
                      <p className="mt-4 text-gray-500">Our office location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;