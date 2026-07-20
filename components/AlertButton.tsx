'use client'

import { Button } from "./ui/button";

interface AlertButtonProps {
  message: string;
  className?: string;
}

export default function AlertButton({ message, className }: AlertButtonProps) {
  return (
    <Button
      variant="outline"
      onClick={() => alert(message)}
      className={className}
    >
      Try it
    </Button>
  );
}