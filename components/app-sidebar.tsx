"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Moon, Plus, Sun, User } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center items-center ">
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
          <div>
            {theme === "dark" ? (
              <Sun
                onClick={() => setTheme("light")}
                className="w-4 h-4 cursor-pointer"
              />
            ) : (
              <Moon
                onClick={() => setTheme("dark")}
                className="w-4 h-4 cursor-pointer"
              />
            )}
          </div>
        </div>
        <Button className="h-12">
          <Plus />
          New Chat
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-5">
          <h2 className="text-lg font-bold">Chat</h2>
          <p className="text-sm text-muted-foreground">
            Sign in to start chatting with multiple AI models
          </p>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button className="h-12">
          <User className="w-4 h-4" />
          Sign In/Sign Up
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
