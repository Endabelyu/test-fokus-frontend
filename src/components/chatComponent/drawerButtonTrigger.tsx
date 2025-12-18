import { Sparkles } from "lucide-react";
import { Button } from "../ui/button";

interface DrawerTriggerButtonProps {
  onClick: () => void;
  hasUnread?: boolean;
  isDrawerOpen: boolean;
}

const DrawerTriggerButton = ({
  onClick,
  hasUnread,
  isDrawerOpen,
}: DrawerTriggerButtonProps) => {
  if (isDrawerOpen) return null;

  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full! bg-emerald-300 hover:bg-emerald-400 text-emerald-900 fab-pulse z-30 md:hidden block"
      size="icon"
      variant="submit"
    >
      <div className="relative">
        <Sparkles className="w-8 h-8  text-white" />
      </div>
      {hasUnread && (
        <span className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-emerald-300 hover:bg-emerald-400 text-emerald-900 fab-pulse z-30" />
      )}
    </Button>
  );
};

export default DrawerTriggerButton;
