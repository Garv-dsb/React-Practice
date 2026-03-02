import { useState } from "react";
import type { UseFormRegister, FieldError } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputForm {
  username: string;
  password: string;
  available: string;
  status: boolean;
}

interface InputProps {
  type: string;
  htmlFor: string;
  id: string;
  name: keyof InputForm;
  register: UseFormRegister<InputForm>;
  errors?: FieldError;
  label: string;
  defaultValue?: string;
  isDisabled?: boolean;
  isError?: boolean;
}

const Input = ({
  type,
  htmlFor,
  id,
  name,
  register,
  errors,
  isError,
  label,
  defaultValue,
  isDisabled,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-[6px] w-full mb-1">
      <label htmlFor={htmlFor} className="text-slate-700 font-semibold text-sm">
        {label}
      </label>

      {/* Input container  */}
      <div
        className={`flex justify-between items-center outline-none border border-gray-300 rounded-lg px-4 py-3  hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-200 w-full ${isDisabled ? "bg-gray-300" : " bg-white"}`}
      >
        <input
          type={showPassword && type === "password" ? "text" : type}
          id={id}
          {...register(name)}
          className={`outline-none border-none bg-transparent flex-1 text-gray-800 placeholder-gray-400 text-sm p-0`}
          placeholder={`Enter your ${label.toLowerCase()}`}
          defaultValue={defaultValue}
          disabled={isDisabled}
        />

        {/* Eye toggle */}
        <span>
          {type === "password" ? (
            showPassword ? (
              <FaEye
                className="text-[#9A92AE] cursor-pointer  ml-2"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEyeSlash
                className="text-[#9A92AE] cursor-pointer ml-2"
                onClick={togglePasswordVisibility}
              />
            )
          ) : null}
        </span>
      </div>

      {/* errors  */}
      {isError ? (
        <p
          className={`text-red-500 font-medium text-[10px] mt-1 ${errors ? "visible" : "opacity-0"}`}
        >
          {errors?.message || "no error"}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
