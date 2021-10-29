import TeamMember from "./TeamMember";

const TeamList = ({ team, removeFromTeam, setShowDetails, modalID }) => {
  return (
    <div className="container my-2">
      <div className="row justify-content-center g-4">
        {team.map((e) => (
          <TeamMember
            key={e.id}
            hero={e}
            removeFromTeam={removeFromTeam}
            setShowDetails={setShowDetails}
            modalID={modalID}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamList;
