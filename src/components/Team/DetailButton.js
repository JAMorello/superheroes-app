import { useDispatch } from "react-redux";
import { changeDetails } from "../../redux/features/detailsSlice";

const DetailButton = ({ hero }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn text-white fw-bold "
      style={{ backgroundColor: "#7DDE33" }}
      onClick={() => dispatch(changeDetails(hero))}
      data-bs-toggle="modal"
      data-bs-target={`#heroDetailModal`}
    >
      Details
    </button>
  );
};

export default DetailButton;
