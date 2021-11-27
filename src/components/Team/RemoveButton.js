import { useDispatch } from "react-redux";
import { removeMember } from "../../redux/features/teamSlice";

const RemoveButton = ({ hero }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn text-white fw-bold mt-sm-2"
      style={{ backgroundColor: "#563091" }}
      onClick={() => dispatch(removeMember(hero))}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
