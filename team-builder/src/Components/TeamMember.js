import React from 'react';

function TeamMember({member, handleEdit, handleDelete}) { return (
    <div className="team-member">
        <p><span>Name: {member.name}</span></p>
        <p><span>Email: {member.email}</span></p>
        <p><span>Role: {member.role}</span></p>
        <div className="edit/delete">
            <button onClick={() => handleEdit(member)}>Edit</button>
            <button onClick={() => handleDelete(member)}>Delete</button>
        </div>
    </div>
    )}

export default TeamMember;