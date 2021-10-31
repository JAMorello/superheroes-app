const AddButton = ({
  hero,
  checkExistence,
  checkAlignment,
  memberQuantity,
  addToTeam,
}) => {
  return (
    <div className="d-grid">
      <button
        className="btn text-white fw-bold"
        style={{
          backgroundColor: `#${checkExistence(hero) ? "7DDE33" : "563091"}`,
        }}
        disabled={
          checkExistence(hero) || checkAlignment(hero) || memberQuantity === 6
        }
        onClick={() => addToTeam(hero)}
      >
        {checkExistence(hero)
          ? "On Team"
          : memberQuantity === 6
          ? "Team Complete"
          : checkAlignment(hero)
          ? "Axis Filled"
          : "Add"}
      </button>
    </div>
  );
};

export default AddButton;
