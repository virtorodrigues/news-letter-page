"use client";

import Image from "next/image";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessageComponent } from "./ErrorMessageComponent";
import { NewsLetterFormSchema, NewsLetterType } from "./formSchema";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export function NewsLetterForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsLetterType>({
    resolver: zodResolver(NewsLetterFormSchema),
    defaultValues: {
      name: "",
      email: "",
      level: "unchecked",
      useTerms: undefined,
    },
  });

  console.log(errors);

  async function handleSubmitRegisterNewsLetter(data: NewsLetterType) {
    console.log("dasd");
    return new Promise((resolve: any) => {
      setTimeout(() => {
        resolve();
        successRegisterToast();
        reset();
      }, 3000);
    });
  }

  function successRegisterToast() {
    toast("Você foi inscrito com sucesso!", {
      bodyClassName: "text-white",
      bodyStyle: { background: "#07bc0c" },
      progressStyle: { background: "#FFF0F0" },
      style: { background: "#07bc0c" },
    });
  }

  return (
    <>
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
              } flex flex-row items-center gap-3 rounded-md px-4 w-full bg-gray-500 text-white`}
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
                  autoComplete="on"
                  placeholder="Seu nome completo"
                  className="placeholder:text-gray-300 outline-none h-14 py-4 w-full bg-gray-500 text-white autofill:transition-colors autofill:duration-[5000s]"
                  {...register("name")}
                />
              </Form.Control>
            </div>

            <ErrorMessageComponent errorValue={errors.name} />
          </Form.Field>

          <Form.Field className="flex flex-col gap-2 w-full" name="email ">
            <div
              className={`${
                errors.email && "border-red-500 border-2"
              } flex flex-row items-center gap-3 rounded-md px-4 w-full bg-gray-500 text-white`}
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
                  autoComplete="on"
                  placeholder="Digite seu e-mail"
                  className="placeholder:text-gray-300 outline-none h-14 py-4 w-full bg-gray-500 text-white autofill:transition-colors autofill:duration-[5000s]"
                  {...register("email")}
                />
              </Form.Control>
            </div>

            <ErrorMessageComponent errorValue={errors.email} />
          </Form.Field>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-gray-100">
            Qual o seu nível em programação?
          </span>
          <Controller
            name="level"
            control={control}
            render={({ field }) => (
              <RadioGroup.Root
                id="level"
                value={field.value}
                onValueChange={field.onChange}
                aria-label="View density"
                className="flex xs:flex-col md:flex-row flex-1 gap-2"
              >
                <RadioGroup.Item
                  id="level-beginner"
                  value="level-beginner"
                  className="data-[state=checked]:border-pink-300 data-[state=checked]:bg-gray-500 flex flex-1 justify-center rounded-md cursor-pointer border border-gray-500"
                >
                  <span className="p-4 text-sm text-left w-full h-full">
                    😎&nbsp;Estou começando em programação
                  </span>
                </RadioGroup.Item>
                <RadioGroup.Item
                  id="level-pro"
                  value="level-pro"
                  className="data-[state=checked]:border-pink-300 data-[state=checked]:bg-gray-500 flex flex-1 justify-center rounded-md cursor-pointer border border-gray-500"
                >
                  <span className="p-4 text-sm text-left w-full h-full">
                    🤓&nbsp;Já sou dev e tenho conhecimento
                  </span>
                </RadioGroup.Item>
              </RadioGroup.Root>
            )}
          />

          <ErrorMessageComponent errorValue={errors.level} />
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

          <ErrorMessageComponent errorValue={errors.useTerms} />
        </div>

        <Form.Submit asChild>
          <button
            disabled={isSubmitting}
            className="disabled:cursor-not-allowed disabled:opacity-40 bg-pink-300  hover:(not:disabled):bg-pink-500 duration-500 p-[0.875rem] rounded-md font-bold"
          >
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
      <ToastContainer />
    </>
  );
}
