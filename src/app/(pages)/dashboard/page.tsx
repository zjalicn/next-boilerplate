import * as React from "react";
import ProtectedLayout from "@/components/ProtectedLayout";

export default async function SignUpPage() {
  return (
    <ProtectedLayout>
      <div className="min-h-screen bg-background antialiased flex justify-center items-center">
        <p>Protected Route</p>
      </div>
    </ProtectedLayout>
  );
}
