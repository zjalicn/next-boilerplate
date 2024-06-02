import React, { useContext } from "react";
import { signOut } from "@/actions/auth.actions";
import { Button } from "./ui/button";
import { useSession } from "@/providers/session-provider";

export default async function Header() {
  const { user } = useSession();

  return (
    <div className="flex flex-1 justify-between p-4">
      <div>LOGO</div>
      {user && (
        <div className="flex gap-2 items-center">
          <>
            {JSON.stringify(user)}
            <form action={signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </>
        </div>
      )}
    </div>
  );
}
