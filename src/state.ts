import { nanoid } from 'nanoid';

import type { SubscriberFn, Toast, ToastInternalProperties, Toasts } from './types';
import { TOAST_INDICATOR } from './types';

class Observable {
  private toasts: Toasts;
  private subscribers: Array<SubscriberFn>;

  get globalToasts() {
    return this.toasts;
  }

  public constructor() {
    this.toasts = [];
    this.subscribers = [];
  }

  /**
   * The function allows entities to register a subscriber that
   * allows entities to listen to changes in state.
   */
  public subscribe(subscriberFn: SubscriberFn) {
    this.subscribers.push(subscriberFn);
  }

  /**
   * The function is responsible for notifying the subscriber
   * that a new toast has been added.
   *
   * NOTE: the state is managed by the subscribers and independent of the
   * global state.
   *
   */
  public createToast(toast: Omit<Toast, ToastInternalProperties>, indicator: TOAST_INDICATOR) {
    const { description, title } = toast;

    const toastObject: Toast = {
      id: nanoid(),
      dismisable: false,
      title,
      indicator,
      description,
      duration: 5000,
    };

    // Adding the toast to the global state.
    this.toasts = [toastObject, ...this.toasts];

    // Notifying the subscribers about the creation of the toast.
    this.subscribers.forEach(subscriber => {
      subscriber(toastObject);
    });
  }

  public removeToast(toastId: string) {
    this.toasts = this.toasts.filter(toast => toast.id !== toastId);
  }
}
export const state = new Observable();

const basicCreateFn =
  (indicator: TOAST_INDICATOR = TOAST_INDICATOR.info) =>
  (title: string, toast?: Omit<Toast, ToastInternalProperties>) =>
    state.createToast({ ...toast, title }, indicator);

export const toast = Object.assign(basicCreateFn(), {
  info: basicCreateFn(TOAST_INDICATOR.info),
  warn: basicCreateFn(TOAST_INDICATOR.warn),
  error: basicCreateFn(TOAST_INDICATOR.error),
  success: basicCreateFn(TOAST_INDICATOR.success),
});
