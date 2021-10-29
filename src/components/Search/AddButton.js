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
        disabled={checkExistence(hero) || checkAlignment(hero)}
        onClick={() => addToTeam(hero)}
      >
        {memberQuantity === 6
          ? "Team Filled"
          : checkExistence(hero)
          ? "On Team"
          : checkAlignment(hero)
          ? "Axis filled"
          : "Add"}
      </button>
    </div>
  );
};

export default AddButton;
