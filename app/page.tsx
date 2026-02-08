"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import React from "react";

const page = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <h1>page</h1>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
      <Button onClick={() => setTheme("light")}>Light</Button>
    </div>
  );
};

export default page;
