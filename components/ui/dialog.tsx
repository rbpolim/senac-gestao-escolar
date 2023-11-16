"use client"
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from "@/components/ui/button"
import { Children, useState } from 'react';
import '@/components/ui/styles/dialog.css'


interface Dialog{
    buttonText:string
    children: React.ReactNode
}

const Modal = ({buttonText, children}:Dialog) => (
    <Dialog.Root>
    <Dialog.Trigger asChild>
       <Button size="sm" className="btn btn-primary btn-sm">
            {buttonText}
       </Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
  );
  
  export default Modal;