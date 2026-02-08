import React from "react";
import { Progress } from "./ui/progress";

const UsageCreditProgress = () => {
  return (
    <div className="p-3 border rounded-2xl">
      <h2 className="text-lg font-semibold">Free Plan</h2>
      <p className="text-sm text-gray-600">0/5 Messages Used</p>
      <Progress value={33} />
    </div>
  );
};

export default UsageCreditProgress;
