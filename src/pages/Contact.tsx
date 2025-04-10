import { useState, useEffect } from "react";
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
  reply: string; // Add this field
  replied_at: string | null; // Add this field
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userMessages, setUserMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const { toast } = useToast();

  // Check auth state and fetch messages on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        fetchUserMessages(user.email);
      }
    };

    fetchUser();

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setUser(session?.user ?? null);
          if (session?.user) {
            fetchUserMessages(session.user.email);
          }
        } else if (event === "SIGNED_OUT") {
          setUser(null);
          setUserMessages([]);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Validation Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error } = await supabase.from("contact_messages").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        service: formData.service || null,
        message: formData.message.trim(),
        user_id: user?.id || null,
      });

      if (error) throw error;

      toast({ title: "Success!", description: "Message sent!" });
      setFormData({ name: "", email: "", service: "", message: "" });

      // Refresh messages using the email from form data
      fetchUserMessages(formData.email.trim());
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
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
              {/* Left Column - Form and Message History */}
              <div className="space-y-12">
                {/* Message Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below, and one of our AI specialists will
                    get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full border-gray-300 rounded-lg focus:ring-adrig-blue focus:border-adrig-blue"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="w-full border-gray-300 rounded-lg focus:ring-adrig-blue focus:border-adrig-blue"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Select a Service
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={handleServiceChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-automation">
                            AI Automation
                          </SelectItem>
                          <SelectItem value="data-analysis">
                            Data Analysis
                          </SelectItem>
                          <SelectItem value="chatbot-development">
                            Chatbot Development
                          </SelectItem>
                          <SelectItem value="workflow-automations">
                            Workflow Automations
                          </SelectItem>
                          <SelectItem value="llm-development">
                            LLM Development
                          </SelectItem>
                          <SelectItem value="ai-consulting">
                            AI Consulting
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or requirements"
                        required
                        className="w-full min-h-[150px] border-gray-300 rounded-lg focus:ring-adrig-blue focus:border-adrig-blue"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-adrig-blue text-white hover:bg-blue-700 transition-colors py-6"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                </div>

                {/* Message History - Shown when there are messages for the current email */}
                {userMessages.length > 0 && (
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
                    ) : (
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

                            {/* Reply section */}
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
                    )}
                  </div>
                )}
              </div>

              {/* Right Column - Contact Information and Map */}
              <div className="flex flex-col space-y-8">
                {/* Contact Information Card */}
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
                          123 Tech Avenue, Silicon Valley, CA 94043
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
                        <p className="text-gray-600 mt-1">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail
                        className="mr-4 text-adrig-blue flex-shrink-0 mt-1"
                        size={24}
                      />
                      <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-gray-600 mt-1">info@adrigai.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-96 bg-gray-200 rounded-xl flex-grow">
                  {/* Map placeholder */}
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
