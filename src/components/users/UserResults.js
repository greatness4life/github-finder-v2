import { useContext, useState } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
import ResultPagination from "../../pages/ResultPagination";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);
  const [page, setPage] = useState(1);
  const userData = users?.slice(page * 20 - 20, page * 20);

  if (!loading) {
    return (
      <>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {userData.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
        <ResultPagination setPage={setPage} page={page} users={users} />
      </>
    );
  } else {
    return <Spinner />;
  }
};
export default UserResults;
