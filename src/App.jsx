import "./App.scss";
import TeamCard from "./components/TeamCard/TeamCard";
import team from "./data/team";
import Title from "./components/Title/Title";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import {useState} from "react";

function App() {
  const [teamMembers, setTeamMembers] = useState(team)

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
        id: teamMembers.length + 1,
        name: event.target.name.value,
        role: event.target.role.value
    }
    setTeamMembers([...teamMembers, newUser])
    event.target.reset();
  };
  return (
    <div className="App">
      <nav className="nav">
        <Title titleText="Ticket Tracker" />
        <AddUserForm handleSubmit={handleSubmit}/>
      </nav>
      <div className="team-cards">
        {teamMembers.map((teamMember) => (
          <TeamCard
            key={teamMember.id}
            name={teamMember.name}
            role={teamMember.role}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
