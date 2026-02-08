import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { Button } from "./ui/button";

const AppHeader = () => {
  return (
    <div className="p-3 w-screen shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <h1 className="text-lg font-bold">Exam Assistant AI</h1>
        </div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default AppHeader;
