import Skeleton from "react-loading-skeleton";

const CardLayout = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, id) => (
      <div className="card shadow-md compact side bg-base-100" key={id}>
        <div className="flex-row itens-center space-x-4 card-body">
          <div>
            <Skeleton circle width={56} height={56} />
          </div>
          <div className="flex-1">
            <Skeleton height={56} />
          </div>
        </div>
      </div>
    ));
};
export default CardLayout;
