import React, { useState } from 'react';
import MemberInfoForm from "./Components/MemberInfoForm"
import TeamMembers from "./Components/TeamMembers"
import './App.css';

function App() {

  const [teamMembers, setTeamMembers] = useState([{
    name: "Ron Weasly",
    email: "iplaywizardschess@gmail.com",
    role: "Wizard"
  },
  {
    name: "Buddha",
    email: "buddhadog@woofwoof.com",
    role: "Your Best Friend"
  }
]) 

const [editing, setEditing] = React.useState(false)
const [editMember, setEditMember] = React.useState({})

const handleEdit = (teamMember) => {
  setEditing(true)
  setEditMember(teamMember)
}
const handleDelete = (deleteMember) => {
  setTeamMembers(teamMembers.filter(member =>  member.name !== deleteMember.name ))
}


return (
  <div className="App">
    <h1>Team</h1>

    <MemberInfoForm 
      teamMembers={teamMembers} 
      setTeamMembers={setTeamMembers}
      editing={editing}
      setEditing={setEditing}
      editMember={editMember}
      setEditMember={setEditMember}
    />

    <TeamMembers 
      teamMembers={teamMembers}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  </div>
);
}

export default App;
