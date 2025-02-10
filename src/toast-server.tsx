import React from 'react';

import { ToastState } from './state';
import { ToastT } from './types';

function sanitizeString(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitize(node) {
  if (typeof node === 'string') {
    return sanitizeString(node);
  }

  if (React.isValidElement(node)) {
    const sanitizedProps = {};
    for (const [key, value] of Object.entries(node.props)) {
      sanitizedProps[key] = sanitize(value);
    }
    return React.cloneElement(node, sanitizedProps);
  }

  if (Array.isArray(node)) {
    return node.map(sanitize);
  }

  return node;
}

export const ToasterServerRegister = function () {
  const toasts: ToastT[] = ToastState.globalToasts.map((toast) => {
    // Remove toasts from the global state
    ToastState.removeToast(toast.id);

    // Sanitizing the contents of the toast to prevent XSS attack.
    return {
      ...toast,
      title: 'title' in toast && typeof toast.title !== 'function' ? sanitize(toast.title) : undefined,
      description:
        'description' in toast && typeof toast.description !== 'function' ? sanitize(toast.description) : undefined,
    };
  });

  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
          self.__toasts = JSON.parse(\`${JSON.stringify(toasts)}\`);
        `,
      }}
    ></script>
  );
};
