Sonner-SSR is a specialized toast component designed for Next.js applications, inspired by the [Sonner](https://sonner.emilkowal.ski/) library. It offers a streamlined and opinionated approach to displaying toast notifications within the Next.js framework.

## Features

- Seamless integration with Next.js
- Customizable themes
- Easy-to-use API
- Lightweight and performant

## Installation

To start using the library, install it in your project:

```bash
npm install sonner-ssr
```

## Usage

Create a `<ToasterProvider />` component.

```jsx
"use client";

import { useTheme } from "next-themes";
import { Toaster } from "sonner-ssr";

type ToasterProps = React.ComponentProps<typeof Toaster>;

const ToasterProvider = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Toaster
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { ToasterProvider };
```

Add `<ToasterProvider />` to your app. It will be the place where all your toasts will be rendered. After that, you can use `toast()` from anywhere in your app.

```jsx
'use server';

import { ToasterProvider, toast } from 'sonner-ssr';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className={cn('app-body bg-background font-sans antialiased', inter.variable)}>
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
```

## Example

Here's an example of how to trigger a toast notification:

```jsx
import { toast } from 'sonner-ssr';

function notify() {
  toast('This is a toast notification!');
}
```

## Documentation

Find the full API reference in the [documentation](https://sonner.emilkowal.ski/getting-started).
