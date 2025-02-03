import * as sonner from 'sonner';
import { Toaster, ExternalToast, ToastT } from 'sonner';
export { ExternalToast, ToastT, Toaster, ToasterProps, toast as toastSonner, useSonner } from 'sonner';
import * as react from 'react';
import react__default from 'react';

declare enum TOAST_INDICATOR {
    info = "info",
    warn = "warn",
    error = "error",
    success = "success"
}
type ToastInternalProperties = "id" | "indicator" | "expired" | "dismisable" | "duration";
interface Toast {
    id: string;
    dismisable: boolean;
    indicator: TOAST_INDICATOR;
    duration: number;
    title?: string;
    description?: string;
}

type ToasterProps = react__default.ComponentProps<typeof Toaster>;
declare const ToasterProvider: ({ ...props }: ToasterProps) => react__default.JSX.Element;

declare const toast$1: ((title: string, toast?: Omit<Toast, ToastInternalProperties>) => void) & {
    info: (title: string, toast?: Omit<Toast, ToastInternalProperties>) => void;
    warn: (title: string, toast?: Omit<Toast, ToastInternalProperties>) => void;
    error: (title: string, toast?: Omit<Toast, ToastInternalProperties>) => void;
    success: (title: string, toast?: Omit<Toast, ToastInternalProperties>) => void;
};

declare const toast: (((title: string, toast?: Omit<Toast, ToastInternalProperties>) => void) & {
    info: (title: string, toast?: Omit<Toast, ToastInternalProperties>) => void;
    warn: (title: string, toast?: Omit<Toast, ToastInternalProperties>) => void;
    error: (title: string, toast?: Omit<Toast, ToastInternalProperties>) => void;
    success: (title: string, toast?: Omit<Toast, ToastInternalProperties>) => void;
}) | (((message: (() => React.ReactNode) | react.ReactNode, data?: ExternalToast) => string | number) & {
    success: (message: ((() => React.ReactNode) | react.ReactNode) | React.ReactNode, data?: ExternalToast) => string | number;
    info: (message: ((() => React.ReactNode) | react.ReactNode) | React.ReactNode, data?: ExternalToast) => string | number;
    warning: (message: ((() => React.ReactNode) | react.ReactNode) | React.ReactNode, data?: ExternalToast) => string | number;
    error: (message: ((() => React.ReactNode) | react.ReactNode) | React.ReactNode, data?: ExternalToast) => string | number;
    custom: (jsx: (id: number | string) => React.ReactElement, data?: ExternalToast) => string | number;
    message: (message: ((() => React.ReactNode) | react.ReactNode) | React.ReactNode, data?: ExternalToast) => string | number;
    promise: <ToastData>(promise: Promise<ToastData> | (() => Promise<ToastData>), data?: {
        id?: number | string;
        duration?: number;
        icon?: React.ReactNode;
        richColors?: boolean;
        invert?: boolean;
        closeButton?: boolean;
        dismissible?: boolean;
        action?: sonner.Action | React.ReactNode;
        cancel?: sonner.Action | React.ReactNode;
        onDismiss?: (toast: ToastT) => void;
        onAutoClose?: (toast: ToastT) => void;
        cancelButtonStyle?: React.CSSProperties;
        actionButtonStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        unstyled?: boolean;
        className?: string;
        classNames?: sonner.ToastClassnames;
        descriptionClassName?: string;
        position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
    } & {
        loading?: string | React.ReactNode;
        success?: react.ReactNode | ((data: ToastData) => React.ReactNode | string | Promise<React.ReactNode | string>);
        error?: react.ReactNode | ((data: any) => React.ReactNode | string | Promise<React.ReactNode | string>);
        description?: react.ReactNode | ((data: any) => React.ReactNode | string | Promise<React.ReactNode | string>);
        finally?: () => void | Promise<void>;
    }) => (string & {
        unwrap: () => Promise<ToastData>;
    }) | (number & {
        unwrap: () => Promise<ToastData>;
    }) | {
        unwrap: () => Promise<ToastData>;
    };
    dismiss: (id?: number | string) => string | number;
    loading: (message: ((() => React.ReactNode) | react.ReactNode) | React.ReactNode, data?: ExternalToast) => string | number;
} & {
    getHistory: () => (ToastT | sonner.ToastToDismiss)[];
    getToasts: () => (ToastT | sonner.ToastToDismiss)[];
});

export { ToasterProvider, toast, toast$1 as toastServer };
