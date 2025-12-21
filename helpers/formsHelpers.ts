import { FormEvent } from "react";
import { UseFormReturn } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkAndWatchForm(e: FormEvent, form: UseFormReturn<any>) {
  e.preventDefault();
  form.trigger();
  form.watch(() => {
    form.trigger();
  });
}
