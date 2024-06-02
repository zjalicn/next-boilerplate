import * as React from "react";
import { SignUpForm } from "@/components/SignUpForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default async function SignUpPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
          <Separator className="mt-4" />
          <p className="mt-4">
            Already have an account? <Link href="sign-in">Sign In</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
