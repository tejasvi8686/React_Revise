import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div class="w-full flex justify-center items-center border-2 fixed bottom-0 bg-slate-100">
      <div class="flex justify-between w-11/12 max-w-[700px] py-2">
        <div class="flex gap-x-2">
          {page > 1 && (
            <button
              class="rounded-md border-2 px-4 py-1"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              class="rounded-md border-2 px-4 py-1"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p class="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
