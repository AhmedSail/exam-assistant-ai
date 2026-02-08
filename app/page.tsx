"use client";
import ChatInputBox from "@/components/ChatInputBox";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";

const page = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <ChatInputBox />
    </div>
  );
};

export default page;
