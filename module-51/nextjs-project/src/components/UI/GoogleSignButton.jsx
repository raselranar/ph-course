"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { redirect } from "next/dist/server/api-utils";

const GoogleSignButton = () => {
  const handleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log("GoogleSignButton", data);
    if (data?.success) redirect("/");
  };

  return (
    <Button onClick={handleSignIn} className="w-full" variant="tertiary">
      <Icon icon="devicon:google" />
      Sign in with Google
    </Button>
  );
};
export default GoogleSignButton;
