import './App.scss';
import TeamCard from './components/TeamCard/TeamCard';
import team from "./data/team"


function App() {
  const teamMembers = [...team];
  return (
    <div className="App">
      <h1 className='app-title'>Ticket Tracker</h1>
      <TeamCard teamArr={teamMembers}/>
    </div>
  );
}

export default App;
