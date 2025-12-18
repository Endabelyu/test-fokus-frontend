import { useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MousePointer2 } from "lucide-react";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled: boolean;
};

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      {/* <form className="flex gap-6 w-full"> */}
      <div className="flex gap-6 w-full justify-between">
        <Input
          id="answer"
          type="text"
          placeholder="Enter your answer here ..."
          ref={inputRef}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const input = inputRef.current;
              if (!input) return;

              const text = input.value.trim();
              if (!text) return;

              onSend(text);

              // clear input
              input.value = "";
            }
          }}
          disabled={disabled}
        />
        <Button
          variant="submit"
          className="self-end"
          size={"lg"}
          onClick={() => {
            const input = inputRef.current;
            if (!input) return;

            const text = input.value.trim();
            if (!text) return;

            onSend(text);
            // clear input
            input.value = "";
          }}
        >
          <MousePointer2 className="w-4 h-4 accent-accent rotate-90" />
        </Button>{" "}
      </div>

      {/* </form> */}
    </>
  );
};

export default ChatInput;
