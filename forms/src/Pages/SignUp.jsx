import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Login from "./Login";
import { SignupSchema } from "../schema/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignUp = () => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    // Send the form data to the server using fetch API
    await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        let id = data.id;

        // Show a success toast message with the user id
        toast.success(`User created successfully with id ${id}`, {
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });

    // reset the form after submission
    reset();
  };

  return (
    <div>
      {login ? (
        <Login />
      ) : (
        <div className=" bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-400 mx-auto container p-10 bg-white/20 rounded-[10px] w-fit  md:w-[450px] lg:w-[450px] h-fit backdrop-blur-sm shadow-lg">
          <form
            className="w-full flex flex-wrap justify-center gap-5 flex-col items-center"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-xl font-bold text-white">Sign Up </h1>

            {/* Email Input  */}

            <Input
              type="text"
              id="firstName"
              htmlFor="firstName"
              label="First Name"
              name="firstName"
              register={{ ...register("firstName") }}
              errors={errors.firstName}
            />

            {/* password input */}

            <Input
              type="text"
              id="lastName"
              label="Last Name"
              htmlFor="lastName"
              name="lastName"
              register={{ ...register("lastName") }}
              errors={errors.lastName}
            />

            {/* confirm password input */}

            <Input
              type="number"
              id="age"
              label="Age"
              htmlFor="age"
              name="age"
              register={{ ...register("age") }}
              errors={errors.age}
            />

            <p className="text-white">
              Already have Account ?{" "}
              <span
                className="text-[#8c52ef] hover:cursor-pointer"
                onClick={() => setLogin(true)}
              >
                Login
              </span>
            </p>

            <Button btnText="Submit" loading={loading} />
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
