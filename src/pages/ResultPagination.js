import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const ResultPagination = ({ setPage, page, users }) => {
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= users.length / 20 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  const length = users.length / 20;
  const array = Array.from({ length });

  if (users.length > 0) {
    return (
      <div className="flex justify-center items-center mt-10">
        <span
          className={page > 1 ? "cursor-pointer" : " opacity-0"}
          onClick={() => selectPageHandler(page - 1)}
        >
          <GrCaretPrevious size={20} className=" text-zinc-600" />
        </span>
        {array.map((_, i) => {
          return (
            <span
              key={i}
              className={`${
                page === i + 1
                  ? "px-3 py-1 bg-slate-900 text-slate-200 focus:ring ring-slate-500 mx-2 rounded-md"
                  : "px-3 py-1 bg-slate-500 mx-2 rounded-md cursor-pointer hover:text-white hover:outline-none"
              }`}
              onClick={() => selectPageHandler(i + 1)}
            >
              {i + 1}
            </span>
          );
        })}

        <span
          className={page < users.length / 20 ? "cursor-pointer" : " opacity-0"}
          onClick={() => selectPageHandler(page + 1)}
        >
          <GrCaretNext size={20} color="#000" />
        </span>
      </div>
    );
  }
};
export default ResultPagination;
