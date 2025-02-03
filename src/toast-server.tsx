import React from "react";
import DOMPurify from "isomorphic-dompurify";

import { state } from "./state";
import type { Toast } from "./types";

const sanitize = function (content: string | undefined) {
  if (!content) return undefined;

  return DOMPurify.sanitize(content);
};

export const ServerToastRegister = function () {
  const toasts: Toast[] = state.globalToasts.map((toast) => {
    // Remove toasts from the global state
    state.removeToast(toast.id);

    // Sanitizing the contents of the toast to prevent XSS attack.
    return {
      ...toast,
      title: sanitize(toast.title),
      description: sanitize(toast.description),
    };
  });

  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          window.toasts = JSON.parse(\`${JSON.stringify(toasts)}\`);
        `,
      }}
    ></script>
  );
};
