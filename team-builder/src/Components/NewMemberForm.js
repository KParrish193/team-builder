import React from 'react';

function NewMemberForm(props) {
    const [newTeamMember, setNewTeamMember] = React.useState({
        name: "",
        email: "",
        role: ""
    })
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.setTeamMembers([...props.teamMembers, newTeamMember])
        setNewTeamMember({
            name: "",
            email: "",
            role: ""
        })
    }
    
    const handleChange = (event) => {
        setNewTeamMember({...newTeamMember, [event.target.name]: event.target.value })
    }
    
    return (
    
        <form onSubmit={handleSubmit}>
        <div className="inputContainer">
        <input 
            type="text"
            name="name"
            placeholder="First Name, Last Name"
            onChange={handleChange}
            value={newTeamMember.name}
        />
        </div>
    
        <div className="inputContainer">
        <input 
            type="text"
            name="email"
            placeholder="someone@example.com"
            onChange={handleChange}
            value={newTeamMember.email}
        />
        </div>
    
        <div className="inputContainer">
        <input 
            type="text"
            name="role"
            placeholder="What do you do?"
            onChange={handleChange}
            value={newTeamMember.role}
        />
        </div>

        <button role="submit">Add New Member</button>
        </form>
        )}

export default NewMemberForm