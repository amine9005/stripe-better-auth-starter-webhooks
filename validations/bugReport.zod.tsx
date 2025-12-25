"use client";
import { useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";
// import { toast } from "react-sonner";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(200, "Description must be at most 100 characters."),
});

// function onSubmit(data: z.infer<typeof formSchema>) {
//   toast("You submitted the following values:", {
//     description: (
//       <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
//         <code>{JSON.stringify(data, null, 2)}</code>
//       </pre>
//     ),
//     position: "bottom-right",
//     classNames: {
//       content: "flex flex-col gap-2",
//     },
//     style: {
//       "--border-radius": "calc(var(--radius)  + 4px)",
//     } as React.CSSProperties,
//   });
// }

export const useBugReportForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return form;
};

export type schemaType = z.infer<typeof formSchema>;

export type FormType = UseFormReturn<schemaType>;
