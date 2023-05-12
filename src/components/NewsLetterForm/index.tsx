"use client";

import Image from "next/image";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export function NewsLetterForm() {
  const NewsLetterFormSchema = z.object({
    name: z.string().min(1, { message: "Insira um nome válido" }),
    email: z.string().email({ message: "Insira um email válido" }),
    level: z.enum(["level-beginner", "level-pro"], {
      required_error: "Selecione seu nível em programação",
      invalid_type_error: "Selecione seu nível em programação",
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

  type NewsLetterType = z.infer<typeof NewsLetterFormSchema>;

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<NewsLetterType>({
    resolver: zodResolver(NewsLetterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      level: undefined,
      useTerms: undefined,
    },
  });

  console.log(errors);

  function handleSubmitRegisterNewsLetter(data: NewsLetterType) {
    console.log(data);
  }

  return (
    <Form.Root
      onSubmit={handleSubmit(handleSubmitRegisterNewsLetter)}
      className="xs:p-4 md:p-8 md:min-w-[26.75rem]
        rounded-md max-w-sm flex flex-col gap-6 bg-gray-700 h-full"
    >
      <strong className="text-xl leading-8">Inscreva-se gratuitamente</strong>
      <div className="flex flex-col gap-3">
        <Form.Field className="flex flex-col gap-2 w-full" name="name">
          <div
            className={`${
              errors.name && "border-red-500 border-2"
            } flex flex-row items-center gap-2 rounded-md px-4 w-full bg-gray-500 text-white`}
          >
            <Image
              src="/user-icon.svg"
              alt=""
              width={22}
              height={25}
              priority
            />
            <Form.Control asChild>
              <input
                id="name"
                type="text"
                autoComplete="on"
                placeholder="Seu nome completo"
                className="placeholder:text-gray-300 outline-none h-14 py-4 w-full bg-gray-500 text-white autofill:transition-colors autofill:duration-[5000s]"
                {...register("name")}
              />
            </Form.Control>
          </div>

          <div className="flex items-center gap-2">
            {errors.name && (
              <>
                <Image
                  src="/error-icon.svg"
                  alt=""
                  width={18}
                  height={20}
                  priority
                />
                <span className="text-red-500 text-sm">
                  {errors.name?.message}
                </span>
              </>
            )}
          </div>
        </Form.Field>

        <Form.Field className="flex flex-col gap-2 w-full" name="email ">
          <div
            className={`${
              errors.email && "border-red-500 border-2"
            } flex flex-row items-center gap-2 rounded-md px-4 w-full bg-gray-500 text-white`}
          >
            <Image
              src="/message-icon.svg"
              alt=""
              width={22}
              height={25}
              priority
            />
            <Form.Control asChild>
              <input
                id="email"
                type="email"
                autoComplete="on"
                placeholder="Digite seu e-mail"
                className="placeholder:text-gray-300 outline-none h-14 py-4 w-full bg-gray-500 text-white autofill:transition-colors autofill:duration-[5000s]"
                {...register("email")}
              />
            </Form.Control>
          </div>

          <div className="flex items-center gap-2">
            {errors.email && (
              <>
                <Image
                  src="/error-icon.svg"
                  alt=""
                  width={18}
                  height={20}
                  priority
                />
                <span className="text-red-500 text-sm">
                  {errors.email?.message}
                </span>
              </>
            )}
          </div>
        </Form.Field>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-gray-100">Qual o seu nível em programação?</span>
        <Controller
          name="level"
          control={control}
          render={({ field }) => (
            <RadioGroup.Root
              id="level"
              name="level"
              value={field.value}
              onValueChange={field.onChange}
              aria-label="View density"
              className="flex xs:flex-col md:flex-row flex-1 gap-2"
            >
              <RadioGroup.Item
                id="level-pro"
                value="level-pro"
                className="data-[state=checked]:border-pink-300 data-[state=checked]:bg-gray-500 flex flex-1 justify-center rounded-md cursor-pointer border border-gray-500"
              >
                <span className="p-4 text-sm text-left">
                  🤓 Já sou dev e tenho conhecimento
                </span>
              </RadioGroup.Item>
              <RadioGroup.Item
                id="level-beginner"
                value="level-beginner"
                className="data-[state=checked]:border-pink-300 data-[state=checked]:bg-gray-500 flex flex-1 justify-center rounded-md cursor-pointer border border-gray-500"
              >
                <span className="p-4 text-sm text-left w-full h-full">
                  😎 Estou começando em programação
                </span>
              </RadioGroup.Item>
            </RadioGroup.Root>
          )}
        />
        <div className="flex items-center gap-2">
          {errors.level && (
            <>
              <Image
                src="/error-icon.svg"
                alt=""
                width={18}
                height={20}
                priority
              />
              <span className="text-red-500 text-sm">
                {errors.level?.message}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Controller
            name="useTerms"
            control={control}
            render={({ field }) => (
              <Checkbox.Root
                id="useTerms"
                name="useTerms"
                onCheckedChange={field.onChange}
                className="h-4 w-4 data-[state=checked]:bg-pink-300 bg-white rounded"
              >
                <Checkbox.Indicator className="text-white flex">
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
            )}
          />
          <label className="text-gray-100 text-sm" htmlFor="useTerms">
            Concordo com o &nbsp;
            <span className="underline">Termos</span>&nbsp;e&nbsp;
            <span className="underline">Políticas de privacidade.</span>
          </label>
        </div>
        <div className="flex items-center gap-2">
          {errors.useTerms && (
            <>
              <Image
                src="/error-icon.svg"
                alt=""
                width={18}
                height={20}
                priority
              />
              <span className="text-red-500 text-sm">
                {errors.useTerms?.message}
              </span>
            </>
          )}
        </div>
      </div>

      <Form.Submit asChild>
        <button className="bg-pink-300 hover:bg-pink-500 duration-500 p-[0.875rem] rounded-md font-bold">
          QUERO RECEBER
        </button>
      </Form.Submit>
      <div className="flex gap-3 border-t border-gray-500 pt-6 items-center">
        <Image
          src="/react-icon.svg"
          className="opacity-60"
          alt=""
          width={33}
          height={33}
          priority
        />
        <span className="text-gray-100 text-sm">
          Nós respeitamos sua privacidade. Cancele sua assinatura a hora que
          quiser 😀
        </span>
      </div>
    </Form.Root>
  );
}
