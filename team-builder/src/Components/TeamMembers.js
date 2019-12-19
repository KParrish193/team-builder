import React from 'react';
import TeamMember from './TeamMember';

function TeamMembers(props) {
    const renderTeamMember = function mapperFn(member) {
        return <TeamMember 
                member={member}
                handleEdit={props.handleEdit} 
                handleDelete={props.handleDelete}
            />
    }

    return (
        <div className="team-members">
        {props.teamMembers.map(renderTeamMember)}
        </div>
        )}

export default TeamMembers; 