"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ActionBtnProps {
  icon: JSX.Element;
  onClick: () => void;
  disabled?: boolean;
}

const ActionBtn = ({ icon, onClick, disabled = false }: ActionBtnProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(!!disabled && "pointer-events-none cursor-not-allowed")}
    >
      <Button
        variant={"outline"}
        size={"icon"}
        disabled={disabled}
        className={cn(!!disabled && "pointer-events-none cursor-not-allowed")}
      >
        {icon}
      </Button>
    </motion.button>
  );
};

export default ActionBtn;
