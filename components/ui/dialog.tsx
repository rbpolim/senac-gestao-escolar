"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Children, useEffect, useState } from "react";
import "@/components/ui/styles/dialog.css";
import { Cross2Icon } from '@radix-ui/react-icons';
import { useTheme } from "next-themes";

interface Dialog {
  buttonText: string;
  children: React.ReactNode;
}

const Modal = ({ buttonText, children }: Dialog) => {

  const { theme } = useTheme()
  const [backgroundColor, setBackgroundColor] = useState("white")

  useEffect(()=>{
    switch(theme){
      case "light":
        setBackgroundColor("white")
      case "dark":
        setBackgroundColor("dark")
      default:
        setBackgroundColor("white")
    }
  },[])

  return(
  <Dialog.Root >
    <Dialog.Trigger asChild>
      <Button size="sm" className="btn btn-primary btn-sm">
        {buttonText}
      </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content style={{backgroundColor:backgroundColor}} className="DialogContent">{children}</Dialog.Content>
    </Dialog.Portal>
    
  </Dialog.Root>
  )
};

export default Modal;
