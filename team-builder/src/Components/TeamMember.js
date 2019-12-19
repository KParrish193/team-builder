import React from 'react';

function TeamMember({member}) { return (
    <div className="team-member">
        <p><span>Name: {member.name}</span></p>
        <p><span>Email: {member.email}</span></p>
        <p><span>Role: {member.role}</span></p>
    </div>
    )}

export default TeamMember;