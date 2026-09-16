import { useState } from "react";

function StudentCard(props) {
    const [showProfile, setShowProfile] = useState(false);

    function handleClick() {
        if (showProfile === false) {
            setShowProfile(true);
        } else {
            setShowProfile(false);
        }
    }
    return (
        <div className="student-card">
            <div className="card-topline">
                <span className="avatar">{props.name}</span>
                <span className="status">{props.status}</span>
            </div>
            <h2>{props.name}</h2>
            <p className="course">{props.course}</p>
            <div className="details">
                <p><strong>Year</strong>{props.year}</p>
                <p><strong>Age</strong>{props.age}</p>
            </div>
            <h3>Skills</h3>
            <div className="skills">
                {props.skills.map((skill) => (
                    <span className="skill" key={skill}>{skill}</span>
                ))}
            </div>
            {showProfile && (
                <div className="profile-details">
                    <p><strong>Email:</strong>{props.email}</p>
                    <p><strong>Location:</strong>{props.location}</p>
                    <p><strong>About:</strong>{props.about}</p>
                </div>
            )}
            <button onClick={handleClick}>
                {showProfile ? "Hide Profile" : "View Profile"}
            </button>
        </div>
    );
}

export default StudentCard;