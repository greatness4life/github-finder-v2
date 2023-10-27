import Skeleton from "react-loading-skeleton";

const Loader = () => {
  return (
    <div className="w-full mx-auto lg:w-10/12">
      <div className="mb-4 p-4">
        <Skeleton width={120} height={30} />
      </div>
      <div className="md:flex gap-4">
        <div className="rounded-lg shadow-xl card image-full">
          <Skeleton style={{ width: "20rem", height: "20rem" }} />
        </div>
        <div className="py-6 flex-1">
          <Skeleton count={3} height={40} style={{ marginBottom: "1.5rem" }} />
        </div>
      </div>

      <div className="w-full py-5 mb-6 rounded-lg shadow-md stats stats-vertical lg:stats-horizontal">
        <Skeleton height={100} />
      </div>
      <div className="rounded-lg shadow-lg card bg-base-100">
        <div className="card-body">
          <Skeleton count={5} height={200} style={{ marginBottom: ".6rem" }} />
        </div>
      </div>
    </div>
  );
};
export default Loader;
