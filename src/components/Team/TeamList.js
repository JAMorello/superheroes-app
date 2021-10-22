import TeamMember from "./TeamMember";

const TeamList = ({ team, removeFromTeam, setShowDetails }) => {
  return (
    <>
      {team.map((e) => (
        <TeamMember key={e.id} hero={e} removeFromTeam={removeFromTeam} setShowDetails={setShowDetails} />
      ))}
    </>
  );
};

export default TeamList;
