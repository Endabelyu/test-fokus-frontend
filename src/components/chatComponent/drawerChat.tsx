import React from "react";
import { Drawer, DrawerContent } from "../ui/drawer";

type DrawerChatProps = {
  children?: React.ReactNode;
  isDrawerOpen: boolean;
  setISDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DrawerChat = ({
  children,
  isDrawerOpen,
  setISDrawerOpen,
}: DrawerChatProps) => {
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        onDrag={(e, percent) => {
          // e.stopPropagation();
          if (percent > 0.25) {
            setISDrawerOpen(false);
          }
          // setISDrawerOpen(false);
        }}
      >
        <DrawerContent>{children}</DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerChat;
