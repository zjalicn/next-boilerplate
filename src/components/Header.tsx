"use client";

import React from "react";
import { signOut } from "@/actions/auth.actions";
import { Button } from "./ui/button";
import { useSession } from "@/providers/session-provider";

export default async function Header() {
  const { user } = useSession();

  return (
    <div className="flex flex-1 justify-between items-center p-4 border-solid bg-gray-100">
      <div>LOGO</div>
      {user && (
        <div className="flex gap-2 items-center">
          {user.id.toString()}
          <form action={signOut}>
            <Button type="submit">Sign Out</Button>
          </form>
        </div>
      )}
    </div>
  );
}
