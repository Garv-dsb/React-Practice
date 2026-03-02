import { useForm, type SubmitHandler } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/loginSchema";
import { useLoginStore } from "../store/loginStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface InputForm {
  username: string;
  password: string;
}

const Login = () => {
  const { loading, submitUser } = useLoginStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<InputForm> = async (data) => {
    const res = await submitUser(data.username, data.password);

    // if the token is accessible then save it to the localstorage
    if (res?.data) {
      navigate("/");
      toast.success("Login Successfully");
    } else {
      toast.error("An Error occurred!");
    }
  };

  return (
    <div className="p-[20px] w-full h-full flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="h-fit w-fit flex flex-col md:flex-row justify-between p-[30px] bg-white border border-gray-200 rounded-2xl gap-[30px] shadow-lg hover:shadow-xl transition-shadow">
        {/* Image Container  */}
        <div className="flex flex-col p-[10px] w-full md:w-[50%] lg:w-[50%] justify-center">
          <div className="w-[150px] h-[150px] mx-auto">
            <img
              src="https://png.pngtree.com/png-clipart/20231021/original/pngtree-watercolor-library-book-clip-art-png-image_13391689.png"
              alt="LMS Logo"
            />
          </div>
          <p className="font-bold text-center text-2xl text-[#9A92AE] 0 mt-3">
            LMS
          </p>
          <p className="text-center text-gray-500 text-sm mt-1">
            Library Management System
          </p>
        </div>

        {/* separate line  */}
        <div className="w-[1px] h-auto bg-gray-300 to-transparent"></div>

        {/* Input form  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-[50%] lg:w-[50%]"
        >
          {/* Login Email form   */}
          <Input
            type="text"
            id="username"
            label="Username"
            htmlFor="username"
            name="username"
            register={register}
            errors={errors?.username}
            isError={true}
          />

          <Input
            type="password"
            id="password"
            label="Password"
            htmlFor="password"
            name="password"
            register={register}
            errors={errors?.password}
            isError={true}
          />

          <Button title="submit" loading={loading} />
        </form>
      </div>
    </div>
  );
};

export default Login;
