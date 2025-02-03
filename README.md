Sonner-SSR is an opinionated toast component for Next based on [sonner](https://sonner.emilkowal.ski/).

## Usage

To start using the library, install it in your project:

```bash
npm install sonner-ssr
```

Add `<ToasterProvider />` to your app, it will be the place where all your toasts will be rendered.
After that you can use `toast()` from anywhere in your app.

```jsx
'use server'

import { ToasterProvider, toast } from 'sonner-ssr';

export default AppPage() {
  return (
    <div>
      <ToasterProvider />
      <button onClick={() => toast('My first toast')}>Give me a toast</button>
    </div>
  );
}
```

## Documentation

Find the full API reference in the [documentation](https://sonner.emilkowal.ski/getting-started).