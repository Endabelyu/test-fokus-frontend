import MathRenderer from "../mathRenderer";
import type { Message } from "../interface/chatInterface";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";
  // const isMobile = useIsMobile();

  return (
    <div
      className={`flex items-start gap-3 p-4 message-enter ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
          isUser ? "bg-amber-600 text-white" : "bg-emerald-500 text-white"
        }`}
      >
        {isUser ? "U" : "J"}
      </div>

      {/* Message Bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-amber-600 text-white rounded-tr-md"
            : "bg-emerald-500 text-white rounded-tl-md"
        }`}
      >
        <div className="text-sm leading-relaxed whitespace-pre-wrap">
          <MathRenderer text={message.content} />
        </div>
        <div className={`text-xs mt-2 ${"text-user-white"}`}>
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
