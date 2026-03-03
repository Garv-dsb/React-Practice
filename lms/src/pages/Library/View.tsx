import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLibraryStore } from "../../store/libraryStore";
import Button from "../../components/Button";

const View = () => {
  const { id } = useParams();
  const { booksData } = useLibraryStore();

  // const find the single data and store into the array
  const singleBookData = booksData.find((book) => {
    return book?.id === Number(id);
  });

  const navigate = useNavigate();

  // Function to redirect to Go Back
  const navigateToBack = () => {
    navigate("/");
  };

  return (
    <div className="h-fit w-full bg-white  rounded-2xl gap-[30px] shadow-lg hover:shadow-xl transition-shadow px-[10px] py-[15px]">
      <div className="bg-neutral-primary-soft block max-w-sm p-6  rounded-base shadow-xs">
        <h2 className="font-extrabold text-2xl text-[#9A92AE]">
          Book Information
        </h2>
        <h5 className="mb-1 text-sm font-semibold tracking-tight text-heading leading-8">
          Book Name :{" "}
          <span className="text-sm opacity-60">{singleBookData?.bookName}</span>
        </h5>
        <h5 className="mb-1 text-sm font-semibold tracking-tight text-heading leading-8">
          Assigned To:{" "}
          <span className="text-sm opacity-60">
            {singleBookData?.assignedTo === ""
              ? "Not Assigned"
              : singleBookData?.assignedTo}
          </span>
        </h5>
        <h5
          className={`mb-1 text-sm font-semibold tracking-tight text-heading leading-8 `}
        >
          Book Availablity :{" "}
          <span
            className={`text-sm  ${singleBookData?.available === "NO" ? "bg-red-100 font-extrabold opacity-70" : "opacity-60"}`}
          >
            {singleBookData?.available === "NO"
              ? "Not Available "
              : "Available"}
          </span>
        </h5>

        <Button title="Go Back" clickHanler={navigateToBack} />
      </div>
    </div>
  );
};

export default View;
