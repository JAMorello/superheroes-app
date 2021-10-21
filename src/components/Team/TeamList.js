import TeamMember from "./TeamMember";

const TeamList = ({ team, removeFromTeam }) => {
  return (
    <>
      {team.map((e) => (
        <TeamMember key={e.id} hero={e} removeFromTeam={removeFromTeam} />
      ))}
    </>
  );
};

export default TeamList;
