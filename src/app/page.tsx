"use client";

import { useSession } from "@/providers/session-provider";
import { useRouter } from "next/navigation";

export default async function Home() {
  const { user } = useSession();
  const router = useRouter();

  if (user) {
    router.push("dashboard");
  } else {
    router.push("sign-in");
  }
}
