import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Sparkles, X } from "lucide-react";
import ChatInput from "./chatInput";
import QuickChat from "./quickChat";
import type { Message } from "../interface/chatInterface";
import { Button } from "../ui/button";
import ChatMessage from "./chatMessage";
import TypingIndicator from "./typingIndicator";

type ChatAreaProps = {
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
  onHint: () => void;
  onRevealSteps: () => void;
  onClose?: () => void;
  showCloseButton?: boolean;
};
const ChatArea = ({
  messages,
  isTyping,
  onSendMessage,
  onHint,
  onRevealSteps,
  onClose,
  showCloseButton,
}: ChatAreaProps) => {
  // State and Hooks
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // State and Hooks
  return (
    <div className="h-full">
      <Card className="w-full md:h-dvh h-[75dvh] pt-0 ">
        <CardHeader className="bg-emerald-100 pt-8 px-0 space-y-4">
          <div className="px-4">
            <CardTitle className="flex gap-4 justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 bg-emerald-600">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="self-center-safe space-y-1">
                  <p>Ask Jojo</p>
                  <p className="font-light">Your learning Assistent</p>
                </div>
              </div>
              {showCloseButton && onClose && (
                <div>
                  <Button
                    variant="close"
                    size="icon"
                    onClick={onClose}
                    className=" "
                  >
                    <X className="w-5 h-5 accent-background" />
                  </Button>
                </div>
              )}
            </CardTitle>
          </div>
          <QuickChat
            onHint={onHint}
            onRevealSteps={onRevealSteps}
            disabled={isTyping}
          />
        </CardHeader>
        <CardContent className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {/* Messages */}
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-jojo-light flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-jojo" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Hi! I'm Jojo 👋
              </h3>
              <p className="text-sm text-muted-foreground max-w-60">
                I'm here to help you understand this problem. Ask me anything or
                use the quick actions above!
              </p>
            </div>
          ) : (
            <>
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </>
          )}
        </CardContent>
        <CardFooter className="">
          <ChatInput onSend={onSendMessage} disabled={isTyping} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChatArea;
