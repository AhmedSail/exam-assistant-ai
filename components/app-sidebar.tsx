"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  CloudLightning,
  CloudLightningIcon,
  LogOut,
  Moon,
  Plus,
  Power,
  Sun,
  User,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import AppHeader from "./app-header";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UsgeCreditProgress from "./UsgeCreditProgress";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  const { user } = useUser();
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
        {user ? (
          <Button className="h-12">
            <Plus />
            New Chat
          </Button>
        ) : (
          <SignInButton mode="modal">
            <Button className="h-12">
              <Plus />
              New Chat
            </Button>
          </SignInButton>
        )}
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-5">
          <h2 className="text-lg font-bold">Chat</h2>
          {!user && (
            <p className="text-sm text-muted-foreground">
              Sign in to start chatting with multiple AI models
            </p>
          )}
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="pb-20">
        <UsgeCreditProgress />
        {user ? (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
              <div className="flex flex-col flex-1 min-w-0">
                <span className="font-semibold text-sm truncate">
                  {user.fullName}
                </span>
                <span className="text-xs text-muted-foreground truncate">
                  {user.primaryEmailAddress?.emailAddress}
                </span>
              </div>
            </div>
            <Button className="h-12 w-full">
              <Zap className="mr-2 h-4 w-4" /> Upgrade
            </Button>
          </div>
        ) : (
          <SignInButton mode="modal">
            <Button className="h-12">
              <User className="w-4 h-4" />
              Sign In/Sign Up
            </Button>
          </SignInButton>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
