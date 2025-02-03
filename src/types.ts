export enum TOAST_INDICATOR {
  info = "info",
  warn = "warn",
  error = "error",
  success = "success",
}

export type ToastInternalProperties = "id" | "indicator" | "expired" | "dismisable" | "duration";

export interface Toast {
  id: string;
  dismisable: boolean;
  indicator: TOAST_INDICATOR;
  duration: number;

  title?: string;
  description?: string;
}

export type Toasts = Array<Toast>;

export type SubscriberFn = (toast: Toast) => void;
