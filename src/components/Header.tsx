import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, UserPlus, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServicesDropdown from "./ServicesDropdown";
import { useIsMobile } from "@/hooks/use-mobile";
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignupDialog";
import supabase from "../helper/supabaseClient";
import { useToast } from "@/hooks/use-toast";
import Adrig_Logo from "../assets/Adrig_logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [signupDialogOpen, setSignupDialogOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();
  const location = useLocation();
  const { toast } = useToast();

  // Check auth state on mount
  useEffect(() => {
    setLoading(true);

    const getSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) throw error;
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error getting session:", error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Toggle scrolled state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openLoginDialog = () => setLoginDialogOpen(true);
  const openSignupDialog = () => setSignupDialogOpen(true);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({ title: "Signed out successfully" });
    } catch (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-adrig-blue">ADRIG</span>
              <span className="font-bold text-xl text-black ml-1">AI</span>
            </Link>
            <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Adrig_Logo}
                alt="ADRIG Logo"
                className="h-8 mr-2" // Adjusted height and margin
              />
              <div className="flex items-baseline">
                {" "}
                {/* Added this wrapper for better text alignment */}
                <span className="font-bold text-2xl text-adrig-blue">
                  ADRIG
                </span>
                <span className="font-bold text-xl text-black ml-1">AI</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <ServicesDropdown />

              <Link
                to="/about"
                className={`text-adrig-black hover:text-adrig-blue transition-colors ${
                  location.pathname === "/about"
                    ? "font-semibold text-adrig-blue"
                    : ""
                }`}
              >
                About
              </Link>

              <Link
                to="/blog"
                className={`text-adrig-black hover:text-adrig-blue transition-colors ${
                  location.pathname === "/blog" ||
                  location.pathname.startsWith("/blog/")
                    ? "font-semibold text-adrig-blue"
                    : ""
                }`}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className={`text-adrig-black hover:text-adrig-blue transition-colors ${
                  location.pathname === "/contact"
                    ? "font-semibold text-adrig-blue"
                    : ""
                }`}
              >
                Contact
              </Link>

              <div className="flex items-center space-x-3">
                {user ? (
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center text-sm">
                      <User size={16} className="mr-1" />
                      {user.user_metadata?.name || user.email?.split("@")[0]}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      onClick={handleSignOut}
                    >
                      <LogOut size={16} />
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="border-adrig-blue text-adrig-blue hover:bg-adrig-blue hover:text-white"
                      onClick={openLoginDialog}
                    >
                      <LogIn size={18} className="mr-1" /> Login
                    </Button>
                    <Button
                      variant="default"
                      className="bg-adrig-blue hover:bg-blue-700"
                      onClick={openSignupDialog}
                    >
                      <UserPlus size={18} className="mr-1" /> Sign Up
                    </Button>
                  </>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-adrig-black"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobile && (
            <div
              className={`
              md:hidden bg-white absolute left-0 right-0 px-4 py-5 shadow-lg
              transition-all duration-300 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-100 top-full visible"
                  : "opacity-0 top-[calc(100%-10px)] invisible"
              }
            `}
            >
              <nav className="flex flex-col space-y-4">
                <div className="border-b border-gray-200 py-2">
                  <span className="font-medium mb-2 block">Services</span>
                  <div className="pl-4 flex flex-col space-y-3 mt-2">
                    <Link
                      to="/services/ai-automation"
                      className="text-adrig-black hover:text-adrig-blue"
                    >
                      AI Automation
                    </Link>
                  </div>
                </div>

                <Link
                  to="/about"
                  className={`text-adrig-black hover:text-adrig-blue py-2 ${
                    location.pathname === "/about"
                      ? "font-semibold text-adrig-blue"
                      : ""
                  }`}
                >
                  About
                </Link>

                <Link
                  to="/blog"
                  className={`text-adrig-black hover:text-adrig-blue py-2 ${
                    location.pathname === "/blog"
                      ? "font-semibold text-adrig-blue"
                      : ""
                  }`}
                >
                  Blog
                </Link>

                <Link
                  to="/contact"
                  className={`text-adrig-black hover:text-adrig-blue py-2 ${
                    location.pathname === "/contact"
                      ? "font-semibold text-adrig-blue"
                      : ""
                  }`}
                >
                  Contact
                </Link>

                <div className="pt-2 flex flex-col space-y-3">
                  {user ? (
                    <>
                      <div className="flex items-center justify-center space-x-2 py-2">
                        <User size={16} className="text-adrig-blue" />
                        <span className="text-sm">
                          {user.user_metadata?.name ||
                            user.email?.split("@")[0]}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        onClick={handleSignOut}
                      >
                        <LogOut size={18} className="mr-1" /> Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        className="w-full border-adrig-blue text-adrig-blue hover:bg-adrig-blue hover:text-white"
                        onClick={() => {
                          setIsMenuOpen(false);
                          openLoginDialog();
                        }}
                      >
                        <LogIn size={18} className="mr-1" /> Login
                      </Button>
                      <Button
                        variant="default"
                        className="w-full bg-adrig-blue hover:bg-blue-700"
                        onClick={() => {
                          setIsMenuOpen(false);
                          openSignupDialog();
                        }}
                      >
                        <UserPlus size={18} className="mr-1" /> Sign Up
                      </Button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Login and Signup Dialogs */}
      <LoginDialog
        open={loginDialogOpen}
        onOpenChange={setLoginDialogOpen}
        onSwitchToSignup={() => {
          setLoginDialogOpen(false);
          setSignupDialogOpen(true);
        }}
      />

      <SignupDialog
        open={signupDialogOpen}
        onOpenChange={setSignupDialogOpen}
        onSwitchToLogin={() => {
          setSignupDialogOpen(false);
          setLoginDialogOpen(true);
        }}
      />
    </>
  );
};

export default Header;
