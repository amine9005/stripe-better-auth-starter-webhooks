import { FormEvent } from "react";
import { UseFormReturn } from "react-hook-form";

export async function checkAndWatchForm(
  e: FormEvent,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>,
) {
  e.preventDefault();
  form.trigger();
  form.watch(() => {
    form.trigger();
  });
}
