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
import { register } from "@/lib/actions";
import { FormButtons } from "../FormButtons";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function SignUpForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "newuser",
      email: "newuser@gmail.com",
      password: "111111",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await register(data);

    if (result === "Already registered" || result === "Something went wrong.") {
      toast({
        title: "Sign Up Error",
        description: `${result} for ${data.email}` || "Failed to sign in",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sign Up Success",
        description: "Successfully signed up to your account",
      });
      router.push("/users/sign_in");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
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
