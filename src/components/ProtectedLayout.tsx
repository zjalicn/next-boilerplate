"use client";

import "@/app/globals.css";
import { useSession } from "@/providers/session-provider";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import Header from "./Header";

// Currently Next.js middleware only supports running on the edge runtime which is incompatible with
// Lucia (which uses the crypto library running on node.js). This is a workaround for the time being

type Props = {
  children: ReactNode;
};

export default async function ProtectedLayout({ children }: Props) {
  const { user } = useSession();
  const router = useRouter();

  if (!user) router.push("sign-in");

  return (
    <>
      <Header />
      {children}
    </>
  );
}
