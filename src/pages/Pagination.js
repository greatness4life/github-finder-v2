const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className={
              page === currentPage
                ? "rounded-md border-r-2 border mr-4 py-2 px-4 text-white bg-black focus:ring ring-slate-200 hover:bg-black focus:outline-none cursor-text"
                : "rounded-md border-r-2 border bg-slate-300 mr-4 py-2 px-4 hover:bg-slate-600 hover:text-white"
            }
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
