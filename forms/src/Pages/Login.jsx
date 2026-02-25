import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import SignUp from "./SignUp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/LoginSchema";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login data", data);
    reset();
  };

  return (
    <div>
      {signUp ? (
        <SignUp />
      ) : (
        <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 mx-auto container p-10 bg-white/20 rounded-[10px] w-fit md:w-[450px] lg:w-[450px] h-fit backdrop-blur-sm shadow-lg">
          <form
            className="w-full flex flex-wrap justify-center gap-5 flex-col items-center"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-xl font-bold text-white">Login</h1>

            {/* Email Input  */}

            <Input
              type="email"
              id="email"
              label="Email"
              htmlFor="email"
              name="email"
              register={{ ...register("email") }}
              errors={errors.email}
            />

            {/* password input */}

            <Input
              type="password"
              id="password"
              label="Password"
              htmlFor="password"
              name="password"
              register={{ ...register("password") }}
              errors={errors.password}
            />

            <p className="text-white">
              Don't Have any Account{" "}
              <span
                className="text-[#8c52ef] hover:cursor-pointer"
                onClick={() => setSignUp(true)}
              >
                Signup
              </span>
            </p>

            <Button btnText="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
