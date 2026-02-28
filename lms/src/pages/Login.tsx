import { useForm, type SubmitHandler } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema } from "../schema/loginSchema";

interface InputForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>({
    // resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<InputForm> = (data) => console.log(data);

  return (
    <div className="p-[20px] w-full h-full flex justify-center items-center">
      <div className="h-fit w-fit flex flex-col md:flex-row justify-between p-[20px] border rounded-lg gap-[20px]">
        {/* Image Container  */}
        <div className="flex flex-col p-[10px] w-[50%]">
          <div className="w-[150px] h-[150px] mx-auto">
            <img
              src="https://png.pngtree.com/png-clipart/20231021/original/pngtree-watercolor-library-book-clip-art-png-image_13391689.png"
              alt=""
            />
          </div>
          <p className="font-bold text-center">LSM</p>
        </div>

        {/* separate line  */}
        <div className="w-[1px] h-auto bg-black"></div>

        {/* Input form  */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-[50%]">
          {/* Login Email form   */}
          <Input
            type="email"
            id="email"
            label="Email"
            htmlFor="email"
            name="email"
            register={register}
            errors={errors.email}
          />

          <Input
            type="password"
            id="password"
            label="Password"
            htmlFor="password"
            name="password"
            register={register}
            errors={errors?.password}
          />

          <Button title="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
