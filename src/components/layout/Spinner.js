import Loading from "./assets/Loading.gif";
const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        width={180}
        src={Loading}
        alt="Loading..."
        className="text-center mx-auto"
      />
    </div>
  );
};
export default Spinner;
