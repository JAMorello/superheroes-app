import TeamMember from "./TeamMember";

const TeamList = ({ team }) => {
  return (
    <>
      {team.map((e) => (
        <TeamMember key={e.id} hero={e} />
      ))}
    </>
  );
};

export default TeamList;
