import { useState } from "react";
import type { UseFormRegister, FieldError } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputForm {
  username: string;
  password: string;
}

interface InputProps {
  type: string;
  htmlFor: string;
  id: string;
  name: keyof InputForm;
  register: UseFormRegister<InputForm>;
  errors?: FieldError;
  label: string;
}

const Input = ({
  type,
  htmlFor,
  id,
  name,
  register,
  errors,
  label,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-2 w-full mb-1">
      <label htmlFor={htmlFor} className="text-slate-700 font-semibold text-sm">
        {label}
      </label>

      {/* Input container  */}
      <div className="flex justify-between items-center outline-none border border-gray-300 rounded-lg px-4 py-3 bg-white hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-200 w-full ">
        <input
          type={showPassword && type === "password" ? "text" : type}
          id={id}
          {...register(name)}
          className="outline-none border-none bg-transparent flex-1 text-gray-800 placeholder-gray-400 text-sm"
          placeholder={`Enter your ${label.toLowerCase()}`}
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
      <p
        className={`text-red-500 font-medium text-xs mt-1 ${errors ? "visible" : "opacity-0"}`}
      >
        {errors?.message || "no error"}
      </p>
    </div>
  );
};

export default Input;
