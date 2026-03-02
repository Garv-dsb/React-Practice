import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLibraryStore } from "../../store/libraryStore";
import Input from "../../components/Input";
import toast from "react-hot-toast";

interface InputProps {
  bookName: string;
  assignedTo: string;
  available: string;
  status: boolean;
  username: string;
}

const Add = () => {
  const navigate = useNavigate();
  const { booksData, userData, assignedBookToUser, loading } =
    useLibraryStore();

  // Function to redirect to Go Back
  const navigateToBack = () => {
    navigate("/");
  };

  // use form hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputProps>({});

  // Watch the Selected Field
  const bookSelected = watch("bookName");
  const userSelected = watch("assignedTo");

  // Find the Selected Book
  const selectedBook = booksData.find((book) => book.bookName === bookSelected);

  // submit Handler
  const onSubmit: SubmitHandler<InputProps> = (data) => {
    if (selectedBook?.status === false) {
      assignedBookToUser(selectedBook?.id, data?.assignedTo);
      toast.success("Book Assigned Successfully");
      navigate("/");
    } else {
      toast.error("Book is already Assigned");
    }

    // send to the function
  };

  return (
    <div className="h-fit w-full bg-white rounded-2xl gap-[30px] shadow-lg hover:shadow-xl transition-shadow px-[10px] py-[15px] space-y-9">
      {/* Container for go back button  */}

      <div className="flex justify-between items-center p-[10px]">
        <h3 className="font-bold text-[#9A92AE]">Books</h3>
        <div>
          <Button title="Go Back" clickHanler={navigateToBack} />
        </div>
      </div>

      {/* form to Add the Data */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-[50%] lg:w-[50%] space-y-3 p-2"
      >
        <div className="columns-1 md:columns-2 flex flex-col gap-4">
          {/* Select the BOOk  */}
          <span className="space-y-2">
            <label className="text-slate-700 font-semibold text-sm">
              Book Name
            </label>
            <select
              {...register("bookName", { required: "Book Name is required" })}
              className="flex justify-between items-center outline-none border border-gray-300 rounded-lg px-4 py-3 bg-white hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-200 w-full "
            >
              <option value="">---Select The book---</option>
              {booksData.map((book) => {
                return (
                  <option key={book.id} value={book.bookName}>
                    {book.bookName}
                  </option>
                );
              })}
            </select>
            <p
              className={`text-red-500 font-medium text-xs mt-1 ${errors ? "visible" : "opacity-0"}`}
            >
              {errors.bookName?.message}
            </p>
          </span>

          {/* Book is selected then access the User  */}
          {bookSelected && (
            <span className="space-y-2">
              <label className="text-slate-700 font-semibold text-sm">
                User Name
              </label>
              <select
                {...register("assignedTo", {
                  required: "User Name is required",
                })}
                className="flex justify-between items-center outline-none border border-gray-300 rounded-lg px-4 py-3 bg-white hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all duration-200 w-full "
              >
                <option value="">---Select The User---</option>
                {userData.map((user, idx) => {
                  return (
                    <option key={idx} value={user.username}>
                      {user.username}
                    </option>
                  );
                })}
              </select>
              <p
                className={`text-red-500 font-medium text-xs mt-1 ${errors ? "visible" : "opacity-0"}`}
              >
                {errors.assignedTo?.message}
              </p>
            </span>
          )}
          {/* set the Availablity to False or 'NO'  */}
          {userSelected && (
            <Input
              type="text"
              name="available"
              id="available"
              label="Book Available Now"
              htmlFor="available"
              register={register}
              defaultValue="NO"
              isDisabled={true}
              isError={false}
            />
          )}
          {userSelected && (
            <Input
              type="text"
              name="status"
              id="status"
              label="Status Of the Book"
              htmlFor="status"
              register={register}
              defaultValue="Not Available"
              isDisabled={true}
              isError={false}
            />
          )}
        </div>

        <Button title="Assign" loading={loading} />
      </form>
    </div>
  );
};

export default Add;
