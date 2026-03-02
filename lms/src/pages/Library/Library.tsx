import Button from "../../components/Button";
import { useLibraryStore } from "../../store/libraryStore";
import { useNavigate, useParams } from "react-router-dom";

const Library = () => {
  const { booksData } = useLibraryStore();
  const navigate = useNavigate();

  const redirectToAdd = () => {
    navigate("/add");
  };

  const { id } = useParams();

  const navigateToBookView = (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <div className="h-fit w-full bg-white  rounded-2xl gap-[30px] shadow-lg hover:shadow-xl transition-shadow px-[10px] py-[15px]">
      {/* table headetr  */}

      <div className="flex justify-between items-center p-[10px]">
        <h3 className="font-bold text-[#9A92AE]">Books</h3>
        <div>
          <Button title="Assign To User" clickHanler={redirectToAdd} />
        </div>
      </div>

      <div className="relative overflow-x-auto bg-neutral-primary-soft ">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          {/* Table head  */}
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium text-[#9A92AE]">
                Id
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-[#9A92AE]">
                Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-[#9A92AE]">
                Assigned To
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-[#9A92AE]">
                Availablity
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-[#9A92AE]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {booksData.map((book, idx) => {
              return (
                <tr
                  className="bg-neutral-primary border-b border-default"
                  key={idx}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {book.id}
                  </th>
                  <td className="px-6 py-4">{book.bookName}</td>
                  <td className="px-6 py-4">
                    {book.assignedTo === "" ? "Not Assigned" : book.assignedTo}
                  </td>
                  <td
                    className={`px-6 py-4 ${book.available === "NO" ? "bg-red-100 font-bold" : ""}`}
                  >
                    {book.available}
                  </td>
                  <td className="px-6 py-4">
                    <Button
                      title="view"
                      clickHanler={() => navigateToBookView(book.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Library;
