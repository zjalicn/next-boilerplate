import "@/app/globals.css";
import { validateRequest } from "@/lib/lucia";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

// Currently Next.js middleware only supports running on the edge runtime which is incompatible with
// Lucia (which uses the crypto library running on node.js). This is a workaround for the time being

type Props = {
  children: ReactNode;
};

export default async function ProtectedLayout({ children }: Props) {
  return <>{children}</>;
}
