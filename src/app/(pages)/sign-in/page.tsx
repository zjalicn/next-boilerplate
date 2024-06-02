import { SignInForm } from "@/components/SignInForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { validateRequest } from "@/lib/lucia";
import Link from "next/link";
import { redirect } from "next/navigation";
import * as React from "react";

export default async function SignUpPage() {
  const { user } = await validateRequest();

  if (user) {
    return redirect("/");
  }

  return (
    <div className="min-h-screen bg-background font-sans antialiased flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
          <Separator className="mt-4" />
          <p className="mt-4">
            Don't have an account? <Link href="sign-up">Sign Up</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
