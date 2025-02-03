import React from 'react';
import { Toaster } from 'sonner';
import { ClientToastRegister } from './toast-client';
import { ServerToastRegister } from './toast-server';

type ToasterProps = React.ComponentProps<typeof Toaster>;

export const ToasterProvider = ({ ...props }: ToasterProps) => {
  return (
    <>
      <ServerToastRegister />
      <ClientToastRegister />
      <Toaster {...props} />
    </>
  );
};
