"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AppHeader from "@/components/app-header";
import { useUser } from "@clerk/nextjs";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { user } = useUser();

  React.useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      CreateUser();
    }
  }, [user]);

  const CreateUser = async () => {
    if (!user?.primaryEmailAddress?.emailAddress) return;

    const userRef = doc(db, "users", user.primaryEmailAddress.emailAddress);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.primaryEmailAddress.emailAddress,
        name: user.fullName,
        createdAt: new Date().toISOString(),
        remainingMsg: 5,
        plan: "Free",
        credits: 1000, // Free plan credits
      });
    }
  };

  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <AppHeader />
          {children}
        </main>
      </SidebarProvider>
    </NextThemesProvider>
  );
}
