import React from "react";
import { Button } from "../ui/button";
import { Lightbulb, ListOrdered } from "lucide-react";

type QuickChatProps = {
  onHint: () => void;
  onRevealSteps: () => void;
  disabled: boolean;
};

const QuickChat = ({ onHint, onRevealSteps, disabled }: QuickChatProps) => {
  return (
    <div className="buttonSection border-y-2 flex gap-2 items-center p-4 bg-white">
      <Button
        variant="hint"
        size="sm"
        className="h-10"
        onClick={onHint}
        disabled={disabled}
      >
        <Lightbulb className="w-4 h-4 accent-blue-500" /> Give me a Hint
      </Button>
      <Button
        variant="step"
        size="sm"
        className="h-10"
        onClick={onRevealSteps}
        disabled={disabled}
      >
        <ListOrdered className="w-4 h-4 accent-blue-500" /> Reveal Steps
      </Button>
    </div>
  );
};

export default QuickChat;
