"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { Button } from "./ui/button";
import { SignInButton, useUser, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const AppHeader = () => {
  const { user } = useUser();
  return (
    <div className="p-3 w-screen shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-lg font-bold">Exam Assistant AI</h1>
        </div>
        {user ? (
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-9 h-9",
              },
            }}
          />
        ) : (
          <SignInButton mode="modal">
            <Button>
              <User className="w-4 h-4" />
              Sign In
            </Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
