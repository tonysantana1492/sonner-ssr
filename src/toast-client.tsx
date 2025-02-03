"use client";

import React from "react";

import { toast } from "sonner";

import { state } from "./state";
import type { Toast } from "./types";
import { TOAST_INDICATOR } from "./types";

const dispatchNotification = (notification: Toast) => {
  if (notification.indicator === TOAST_INDICATOR.success) {
    toast.success(notification.title, notification);
    return;
  }

  if (notification.indicator === TOAST_INDICATOR.error) {
    toast.error(notification.title, notification);
    return;
  }

  toast.info(notification.title, notification);
};

export const ClientToastRegister = () => {
  const windowObject =
    typeof window != "undefined" ? (window as Window & { toasts?: Toast[] }) : undefined;

  const [isComponentMounted, setComponentMounted] = React.useState<boolean>(false);

  // Once the component is loaded, marking the component has loaded.
  React.useEffect(function () {
    setComponentMounted(true);
  }, []);

  // Loading the toasts that have been hydrated from server
  React.useEffect(
    function () {
      if (!isComponentMounted) return;

      if (typeof windowObject == "undefined") return;

      if (typeof windowObject.toasts == "undefined") return;

      const notifications = windowObject.toasts;

      for (const notification of notifications) {
        dispatchNotification(notification);
      }

      state.subscribe((notification) => {
        dispatchNotification(notification);
      });
    },
    [isComponentMounted],
  );

  return null;
};
