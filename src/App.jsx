import "./App.scss";
import TeamCard from "./components/TeamCard/TeamCard";
import team from "./data/team";
import Title from "./components/Title/Title";
import AddUserForm from "./components/AddUserForm/AddUserForm";

function App() {
  const teamMembers = [...team];
  return (
    <div className="App">
      <nav className="nav">
        <Title titleText="Ticket Tracker" />
        <AddUserForm />
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
