interface ButtonProps {
  title: string;
  clickHanler?: () => void;
  loading?: boolean;
  isNotAssign?: boolean;
}

const Button = ({ title, clickHanler, loading, isNotAssign }: ButtonProps) => {
  return (
    <button
      onClick={clickHanler}
      className={`p-3 w-fit bg-[#9A92AE] text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700  font-semibold transition-all duration-200 shadow-md hover:shadow-lg  text-sm ${loading ? "cursor-not-allowed" : "hover:cursor-pointer"} ${isNotAssign ? "bg-red-300" : " bg-[#9A92AE]"}`}
    >
      {loading ? "Wait..." : title}
    </button>
  );
};

export default Button;
