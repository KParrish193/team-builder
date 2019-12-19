import React, { useState } from 'react';
import NewMemberForm from "./Components/NewMemberForm"
import TeamMember from "./Components/TeamMember"
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([{
    name: "Arnold",
    email: "arnolddude@gmail.com",
    role: "Dude"
  },
  {
    name: "Buddha",
    email: "buddhadog@woofwoof.com",
    role: "Dog"
  }
]) 

return (
  <div className="App">
    <h1>Team</h1>

    <NewMemberForm 
      teamMembers={teamMembers} 
      setTeamMembers={setTeamMembers}
    />

    <TeamMembers 
      teamMembers={teamMembers} 
    />
  </div>
);

function TeamMembers(props) {
const renderTeamMember = function mapperFn(member) {
  return <TeamMember 
            member={member}
          />
}

return (
  <div className="team-members">
    {props.teamMembers.map(renderTeamMember)}
  </div>
  )}
}

export default App;
