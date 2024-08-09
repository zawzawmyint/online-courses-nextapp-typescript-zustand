"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { authenticate } from "@/lib/actions";
import { FormButtons } from "../FormButtons";
import { ToastAction } from "@/components/ui/toast";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "user@nextmail.com",
      password: "123456",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const result = await authenticate(formData);

    if (
      result === "Invalid credentials." ||
      result === "Something went wrong."
    ) {
      toast({
        title: "Sign In Error",
        description: result || "Failed to sign in",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sign In Success",
        description: "Successfully signed in to your account",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
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
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormButtons />
      </form>
    </Form>
  );
}
