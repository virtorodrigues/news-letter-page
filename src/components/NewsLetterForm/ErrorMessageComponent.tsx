import Image from "next/image";
import { FieldError } from "react-hook-form";

interface ErrorMessageComponentProps {
  errorValue: FieldError | undefined;
}

export function ErrorMessageComponent({
  errorValue,
}: ErrorMessageComponentProps) {
  return (
    <div className="flex items-center gap-2">
      {errorValue && (
        <>
          <Image src="/error-icon.svg" alt="" width={18} height={20} priority />
          <span className="text-red-500 text-sm">{errorValue?.message}</span>
        </>
      )}
    </div>
  );
}
