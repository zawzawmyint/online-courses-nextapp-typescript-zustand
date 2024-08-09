"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

import { sql } from "@vercel/postgres";
import { getUser } from "./data";
import { hash } from "bcrypt-ts";

// ...

export async function authenticate(formData: FormData) {
  try {
    await signIn("credentials", formData);
    redirect("/");
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function register(form: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    const user = await getUser(form.email);

    if (user) {
      return "Already registered";
    }

    const hashedPassword = await hash(form.password, 10);

    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${form.username}, ${form.email}, ${hashedPassword})
      ON CONFLICT (id) DO NOTHING;
    `;

    console.log(`Registered ${form.username}`);
    return "success";
  } catch (error) {
    console.error("Error registering user:", error);
    return "Something went wrong.";
  }
}
