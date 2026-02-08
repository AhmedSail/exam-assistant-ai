"use client";

import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mic, Send, Paperclip, Image, X } from "lucide-react";
import AiMultiModel from "./AiMultiModel";

const ChatInputBox = () => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const imageInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
    e.target.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() && files.length === 0) return;

    console.log("Sending:", message, "Files:", files);
    setMessage("");
    setFiles([]);
  };

  return (
    <div>
      <div>
        <AiMultiModel />
      </div>
      <div className="fixed bottom-0 left-0 w-full p-4 pb-6 z-50">
        <div className="max-w-3xl mx-auto w-full">
          {files.length > 0 && (
            <div className="flex gap-2 mb-2 overflow-x-auto py-2 px-1">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="relative group bg-muted border rounded-lg p-2 flex items-center gap-2 pr-8 shrink-0"
                >
                  <div className="text-xs truncate max-w-[150px] font-medium">
                    {file.name}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="absolute right-1 top-1 p-1 hover:bg-background rounded-full transition-colors"
                  >
                    <X className="size-3 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-2 w-full bg-background border rounded-[26px] px-2 py-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
            <input
              type="file"
              ref={imageInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
              accept="image/*"
            />
            <div className="flex items-center gap-1 pb-1">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground shrink-0 w-8 h-8"
                onClick={() => fileInputRef.current?.click()}
              >
                <Paperclip className="size-5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground shrink-0 w-8 h-8"
                onClick={() => imageInputRef.current?.click()}
              >
                <Image className="size-5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground shrink-0 w-8 h-8"
              >
                <Mic className="size-5" />
              </Button>
            </div>

            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 min-h-[44px] max-h-[200px] border-0 shadow-none focus-visible:ring-0 px-2 py-3 bg-transparent resize-none field-sizing-content"
              rows={1}
            />

            <div className="pb-1">
              <Button
                type="submit"
                size="icon"
                className="rounded-full shrink-0 w-9 h-9"
                disabled={!message.trim() && files.length === 0}
              >
                <Send className="size-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInputBox;
