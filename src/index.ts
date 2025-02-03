import { ExternalToast, toast as toastSonner, Toaster, ToasterProps, ToastT, useSonner } from 'sonner';
import { ToasterProvider } from './toast-provider';
import { toast as toastServer } from './state';

const toast = typeof window === 'undefined' ? toastServer : toastSonner;

export {
  toastSonner,
  toastServer,
  toast,
  Toaster,
  type ExternalToast,
  type ToastT,
  type ToasterProps,
  useSonner,
  ToasterProvider,
};
