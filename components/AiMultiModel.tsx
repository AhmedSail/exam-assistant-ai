"use client";
import React from "react";
import AiModelList from "@/shared/AiModelList";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Lock, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const AiMultiModel = () => {
  const [model, setModel] = React.useState(AiModelList);
  const onToggle = (modelName: string, value: boolean) => {
    setModel(
      model.map((m) => (m.model === modelName ? { ...m, enable: value } : m)),
    );
  };
  return (
    <div className="flex flex-1 h-[75vh] border-b ">
      <div className="flex h-full  pb-4">
        {model.map((item) => (
          <div
            key={item.model}
            className={`flex flex-col  border-r p-5 gap-5 h-full shrink-0 overflow-auto hover:bg-muted/5 transition-colors ${item.enable ? "flex-1 min-w-[300px]" : "flex-none min-w-[100px]"}`}
          >
            <div className="flex w-full h-[50px] items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10  rounded-lg bg-white border p-1 shadow-sm shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.model}
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold leading-none">
                    {item.model}
                  </span>
                  {item.premium && (
                    <Badge
                      variant="secondary"
                      className="w-fit text-[10px] px-1.5 py-0 h-4 font-normal"
                    >
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
              {item.enable ? (
                <Switch
                  checked={item.enable}
                  onCheckedChange={(checked) => onToggle(item.model, checked)}
                />
              ) : (
                <MessageSquare
                  onClick={() => onToggle(item.model, true)}
                  className="text-muted-foreground hover:text-foreground"
                />
              )}
            </div>

            <div className="flex flex-col gap-2">
              {item.enable && (
                <Select>
                  <SelectTrigger className="w-full bg-background/50">
                    <SelectValue placeholder="Select version" />
                  </SelectTrigger>
                  <SelectContent>
                    {item.subModel.map((subModel) => (
                      <SelectItem key={subModel.name} value={subModel.name}>
                        <div className="flex items-center justify-between w-full gap-2">
                          <span>{subModel.name}</span>
                          {subModel.premium && (
                            <Badge
                              variant="outline"
                              className="text-[10px] px-1 py-0 h-5 text-muted-foreground"
                            >
                              Pro
                            </Badge>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            {item.premium && item.enable && (
              <div className="flex items-center justify-center h-full">
                <Button className="w-full">
                  <Lock />
                  Upgrade to unlock
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiMultiModel;
