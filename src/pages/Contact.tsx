import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
  MapPin,
  Phone,
  Mail,
  Send,
  History,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import supabase from "../helper/supabaseClient";

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

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.user_metadata?.name || user.email?.split('@')[0] || '',
        email: user.email || '',
        service: '',
        message: '',
      });
      fetchUserMessages(user.email);
    } else {
      form.reset({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setUserMessages([]);
    }
  }, [user, form]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session?.user ?? null);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const fetchUserMessages = async (email: string) => {
    setLoadingMessages(true);
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .select(
          "id, name, email, service, message, created_at, status, reply, replied_at"
        )
        .eq("email", email)
        .order("created_at", { ascending: false });

      if (error) throw error;

      setUserMessages(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load your messages",
        variant: "destructive",
      });
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleServiceChange = (value: string) => {
    form.setValue("service", value);
  };

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: values.name,
        email: values.email,
        service: values.service || null,
        message: values.message,
        user_id: user?.id || null,
      });

      if (error) throw error;

      toast({ title: "Success!", description: "Message sent!" });
      form.reset({ ...form.getValues(), service: "", message: "" });

      // Only fetch messages if user is logged in
      if (user) {
        fetchUserMessages(values.email);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <section className="bg-adrig-blue text-white py-20">
          <div className="container mx-auto px-8 lg:px-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get in Touch
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Have questions about our AI solutions? Ready to start your digital
              transformation journey? We're here to help!
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below, and one of our AI specialists will
                    get back to you within 24 hours.
                  </p>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Your name"
                                readOnly={!!user}
                                className={user ? "bg-gray-100 cursor-not-allowed" : ""}
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
                                placeholder="Your email address"
                                readOnly={!!user}
                                className={user ? "bg-gray-100 cursor-not-allowed" : ""}
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
                            <FormLabel>Select a Service</FormLabel>
                            <Select onValueChange={handleServiceChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ai-automation">AI Automation</SelectItem>
                                <SelectItem value="data-analysis">Data Analysis</SelectItem>
                                <SelectItem value="chatbot-development">Chatbot Development</SelectItem>
                                <SelectItem value="workflow-automations">Workflow Automations</SelectItem>
                                <SelectItem value="llm-development">LLM Development</SelectItem>
                                <SelectItem value="ai-consulting">AI Consulting</SelectItem>
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
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Tell us about your project or requirements"
                                className="min-h-[150px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="w-full bg-adrig-blue hover:bg-blue-700 py-6"
                      >
                        {form.formState.isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
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

                {/* Only show message history if user is logged in */}
                {user && (
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <History className="mr-2 text-adrig-blue" size={20} />
                      <h3 className="text-xl font-semibold">
                        Your Message History
                      </h3>
                    </div>

                    {loadingMessages ? (
                      <div className="flex justify-center py-8">
                        <svg
                          className="animate-spin h-6 w-6 text-adrig-blue"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    ) : userMessages.length > 0 ? (
                      <div className="space-y-4">
                        {userMessages.map((message) => (
                          <div
                            key={message.id}
                            className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">
                                  {message.service || "General Inquiry"}
                                </p>
                                <p className="text-sm text-gray-500">
                                  {new Date(
                                    message.created_at
                                  ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                              <div className="flex items-center">
                                {message.status === "replied" && (
                                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-2">
                                    Replied
                                  </span>
                                )}
                                <MessageSquare
                                  className="text-adrig-blue/70"
                                  size={18}
                                />
                              </div>
                            </div>
                            <p className="mt-2 text-gray-700 text-sm">
                              {message.message}
                            </p>

                            {message.reply && (
                              <div className="mt-4 pl-4 border-l-4 border-adrig-blue/30">
                                <div className="flex items-center text-sm text-gray-500 mb-1">
                                  <span className="font-medium text-adrig-blue">
                                    ADRiG Team
                                  </span>
                                  {message.replied_at && (
                                    <span className="mx-2">•</span>
                                  )}
                                  {message.replied_at && (
                                    <span>
                                      {new Date(
                                        message.replied_at
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      })}
                                    </span>
                                  )}
                                </div>
                                <p className="text-gray-700 text-sm mt-1">
                                  {message.reply}
                                </p>
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

              <div className="flex flex-col space-y-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h2 className="text-3xl font-bold mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin
                        className="mr-4 text-adrig-blue flex-shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-lg">
                          Office Location
                        </h3>
                        <p className="text-gray-600 mt-1">
                        kovil, 2, Sangothi amman, 3rd Cross St, 
                        Sembakkam, Chennai, Tamil Nadu 600073
                       
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone
                        className="mr-4 text-adrig-blue flex-shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-lg">Phone</h3>
                        <p className="text-gray-600 mt-1">(+91) 994210530</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail
                        className="mr-4 text-adrig-blue flex-shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-600 mt-1">contact@adrig.co.in</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-96 bg-gray-200 rounded-xl flex-grow">
                  <div className="w-full h-full flex items-center justify-center">
                    <MapPin size={60} className="text-adrig-blue/30" />
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