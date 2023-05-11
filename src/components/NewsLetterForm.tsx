"use client";

import Image from "next/image";
import * as Form from "@radix-ui/react-form";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export function NewsLetterForm() {
  return (
    <Form.Root
      className="xs:p-4 md:p-8 md:min-w-[26.75rem]
        rounded-md max-w-sm flex flex-col gap-6 bg-gray-700"
    >
      <strong className="text-xl leading-8">Inscreva-se gratuitamente</strong>
      <div className="flex flex-col gap-2">
        <Form.Field className="flex flex-col gap-2 w-full" name="email ">
          <div className="flex flex-row items-center gap-3 rounded-md px-4 w-full bg-gray-500 text-white">
            <Image
              src="/user-icon.svg"
              alt=""
              width={22}
              height={25}
              priority
            />
            <Form.Control asChild>
              <input
                placeholder="Seu nome completo"
                className="placeholder:text-gray-300 outline-none h-14 py-4 w-full bg-gray-500 text-white"
                type="name"
                required
              />
            </Form.Control>
          </div>

          <div className="flex items-baseline justify-between">
            <Form.Message className="text-100" match="valueMissing">
              Seu nome completo
            </Form.Message>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="typeMismatch"
            >
              Insira um nome válido
            </Form.Message>
          </div>
        </Form.Field>

        <Form.Field className="flex flex-col gap-2 w-full" name="email ">
          <div className="flex flex-row items-center gap-3 rounded-md px-4 w-full bg-gray-500 text-white">
            <Image
              src="/message-icon.svg"
              alt=""
              width={22}
              height={25}
              priority
            />
            <Form.Control asChild>
              <input
                placeholder="Digite seu e-mail"
                className="placeholder:text-gray-300 outline-none h-14 py-4 w-full bg-gray-500 text-white"
                type="email"
                required
              />
            </Form.Control>
          </div>

          <div className="flex items-baseline justify-between">
            <Form.Message className="text-100" match="valueMissing">
              Seu nome completo
            </Form.Message>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="typeMismatch"
            >
              Insira um email válido
            </Form.Message>
          </div>
        </Form.Field>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-gray-100">Qual o seu nível em programação?</span>
        <RadioGroup.Root
          className="flex xs:flex-col md:flex-row flex-1 gap-2"
          defaultValue="default"
          aria-label="View density"
        >
          <RadioGroup.Item
            className="data-[state=checked]:border-purple-500 data-[state=checked]:bg-gray-500 flex flex-1 justify-center rounded-md cursor-pointer border border-gray-500"
            value="default"
            id="r1"
          >
            <span className="p-4 text-sm text-left w-full h-full">
              😎 Estou começando em programação
            </span>
          </RadioGroup.Item>

          <RadioGroup.Item
            className="data-[state=checked]:border-purple-500 data-[state=checked]:bg-gray-500 flex flex-1 justify-center rounded-md cursor-pointer border border-gray-500"
            value="confortable"
            id="r2"
          >
            <span className="p-4 text-sm text-left">
              🥷🏼 Já sou dev e tenho conhecimento
            </span>
          </RadioGroup.Item>
        </RadioGroup.Root>
      </div>

      <div className="flex items-center gap-2 ">
        <Checkbox.Root
          className="h-4 w-4 data-[state=checked]:bg-purple-300 bg-white rounded"
          id="c1"
        >
          <Checkbox.Indicator className="text-white">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="text-gray-100 text-sm" htmlFor="c1">
          Concordo com o &nbsp;
          <span className="underline">Termos</span>&nbsp;e&nbsp;
          <span className="underline">Políticas de privacidade.</span>
        </label>
      </div>

      <Form.Submit asChild>
        <button className="bg-purple-500 hover:bg-purple-600 duration-500 p-[0.875rem] rounded-md font-bold">
          QUERO RECEBER
        </button>
      </Form.Submit>
      <div className="flex gap-3 border-t border-gray-500 pt-6 items-center">
        <Image
          src="/rocketseat-icon.svg"
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
