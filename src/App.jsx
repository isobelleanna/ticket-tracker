import "./App.scss";
import TeamCard from "./components/TeamCard/TeamCard";
import team from "./data/team";
import Title from "./components/Title/Title";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import {useState} from "react";
import Button from "./components/Button/Button";

function App() {
  const [teamMembers, setTeamMembers] = useState(team);
  const [formActive, setFormActive] = useState(false);

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

  const toggleForm = () => {
    setFormActive(!formActive)
  }
  console.log(formActive)
  return (
    <div className="App">
      <nav className="nav">
        <Title titleText="Ticket Tracker" />
        {!formActive && <div onClick={toggleForm}><Button buttonText="Add New User" /></div>}
        {formActive && <AddUserForm handleSubmit={handleSubmit} toggleForm={toggleForm}/>}
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
