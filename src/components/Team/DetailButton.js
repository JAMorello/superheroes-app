const DetailButton = ({ hero, setShowDetails, modalID }) => {
  return (
    <button
      className="btn text-white fw-bold "
      style={{ backgroundColor: "#7DDE33" }}
      onClick={() => setShowDetails(hero)}
      data-bs-toggle="modal"
      data-bs-target={`#heroDetailModal`}
    >
      Details
    </button>
  );
};

export default DetailButton;
