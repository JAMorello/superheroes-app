const RemoveButton = ({ hero, removeFromTeam }) => {
  return (
    <button
      className="btn text-white fw-bold mt-sm-2"
      style={{ backgroundColor: "#563091" }}
      onClick={() => removeFromTeam(hero)}
    >
      Remove
    </button>
  );
};

export default RemoveButton;
