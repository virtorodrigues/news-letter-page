import { z } from "zod";

export const NewsLetterFormSchema = z.object({
  name: z.string().min(1, { message: "Insira um nome válido" }),
  email: z
    .string()
    .min(3, { message: "Insira um email válido" })
    .email("Insira um email válido"),
  level: z
    .enum(["level-beginner", "level-pro", "unchecked"], {
      required_error: "Selecione seu nível em programação",
      invalid_type_error: "Selecione seu nível em programação",
    })
    .refine((val) => val !== "unchecked", {
      message: "Selecione seu nível em programação",
    }),
  useTerms: z
    .boolean({
      required_error: "Concorde com os termos e políticas de privacidade",
      invalid_type_error: "Concorde com os termos e políticas de privacidade",
    })
    .refine((val) => val === true, {
      message: "Concorde com os termos e políticas de privacidade",
    }),
});

export type NewsLetterType = z.infer<typeof NewsLetterFormSchema>;
