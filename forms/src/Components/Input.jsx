import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ type, htmlFor, id, name, register, errors, label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={htmlFor} className="text-white font-bold">
        {label}
      </label>

      {/* Input container  */}
      <div className="flex justify-between  outline-none border-b border-white text-white bg-transparent w-full">
        <input
          type={showPassword && type === "password" ? "text" : type}
          id={id}
          {...register}
          name={name}
          className="outline-none bg-transparent"
        />

        {/* Eye toggle for password input */}
        <span>
          {type === "password" ? (
            showPassword ? (
              <FaEye
                className="text-white cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaEyeSlash
                className="text-white cursor-pointer"
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
