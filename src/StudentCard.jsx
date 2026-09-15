function StudentCard(props) {
    function handleClick() {
        window.alert(
            `${props.name}\n${props.course} - ${props.year}\nSkills: ${props.skills.join(", ")}`
        );
    }
    return (
        <div className="student-card">
            <div className="card-topline">
                <span className="avatar">{props.name.charAt(0)}</span>
                <span className={props.isStudent ? "status active" : "status"}>
                    {props.isStudent ? "Current student" : "Alumni"}
                </span>
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
            <button onClick={handleClick}>View Profile</button>
        </div>
    );
}

export default StudentCard;