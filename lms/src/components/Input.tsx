import React, { useState } from "react";
import type { UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
  type: string;
  htmlFor: string;
  id: string;
  name: string;
  register: UseFormRegister<any>;
  errors?: any;
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
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={htmlFor} className="text-black font-bold">
        {label}
      </label>

      {/* Input container  */}
      <div className="flex justify-between outline-none border-b border-black text-black bg-transparent w-full">
        <input
          type={showPassword && type === "password" ? "text" : type}
          id={id}
          {...register}
          name={name}
          className="outline-none border-none bg-transparent"
        />

        {/* Eye toggle for password input */}
        <span>
          {type === "password" ? (
            showPassword ? (
              <FaEye
                className="text-black cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEyeSlash
                className="text-black cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )
          ) : null}
        </span>
      </div>

      {/* errors  */}
      <p
        className={`text-red-500 font-bold text-md ${errors ? "visible" : "opacity-0"}`}
      >
        {errors?.message || "No errors"}
      </p>
    </div>
  );
};

export default Input;
