import { useState } from "react";
import RepoItem from "./RepoItem";
import Pagination from "../../pages/Pagination";

const RepoList = ({ repos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = repos.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Respositories
        </h2>
        {currentPosts.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
        <Pagination
          totalPosts={repos.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export default RepoList;
