
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LogIn } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignup: () => void;
}

export const LoginDialog = ({ open, onOpenChange, onSwitchToSignup }: LoginDialogProps) => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is just a placeholder for actual authentication logic
    console.log(values);
    toast({
      title: "Login Attempt",
      description: `Attempted login with email: ${values.email}`,
    });
    
    // Close dialog after submission
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl flex justify-center items-center gap-2">
            <LogIn className="h-5 w-5" />
            Login to ADRIG AI
          </DialogTitle>
          <DialogDescription className="text-center">
            Enter your credentials to access your account
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-adrig-blue hover:bg-blue-700">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </form>
        </Form>
        
        <DialogFooter className="flex flex-col items-center gap-2 sm:items-center">
          <div className="text-sm text-center">
            <Button variant="link" onClick={() => {
              onOpenChange(false);
              // Add your "forgot password" logic here
            }} className="p-0">
              Forgot Password?
            </Button>
          </div>
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <Button variant="link" onClick={() => {
              onOpenChange(false);
              onSwitchToSignup();
            }} className="p-0">
              Sign Up
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
