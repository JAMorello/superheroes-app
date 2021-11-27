import { useSelector, useDispatch } from "react-redux";
import { addMember } from "../../redux/features/teamSlice";

const AddButton = ({ hero }) => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);

  // Check if the hero is already in the team
  const checkExistence = (heroToAdd) => {
    const heroID = heroToAdd.id;
    for (let i = 0; i < team.length; i++) {
      if (team[i].id === heroID) return true;
    }
    return false;
  };

  // Check if the team already has 3 members of the same alignment
  const checkAlignment = (heroToAdd) => {
    const alignment = heroToAdd.biography.alignment;
    const alignmentArray = team.filter(
      (e) => e.biography.alignment === alignment
    );
    return alignmentArray.length === 3;
  };

  return (
    <div className="d-grid">
      <button
        className="btn text-white fw-bold"
        style={{
          backgroundColor: `#${checkExistence(hero) ? "7DDE33" : "563091"}`,
        }}
        disabled={
          checkExistence(hero) || checkAlignment(hero) || team.length === 6
        }
        onClick={() => dispatch(addMember(hero))}
      >
        {checkExistence(hero)
          ? "On Team"
          : team.length === 6
          ? "Team Complete"
          : checkAlignment(hero)
          ? "Axis Filled"
          : "Add"}
      </button>
    </div>
  );
};

export default AddButton;
