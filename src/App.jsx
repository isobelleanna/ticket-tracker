import './App.scss';
import TeamCard from './components/TeamCard/TeamCard';
import team from "./data/team"
import Title from './components/Title/Title';


function App() {
  const teamMembers = [...team];
  return (
    <div className="App">
      <Title titleText="Ticket Tracker"/>
      <TeamCard teamArr={teamMembers}/>
    </div>
  );
}

export default App;
