function StudentCard(props) {
    return (
        <div className="student-card">
            <h2>{props.name}</h2>
            <p>Course: {props.course}</p>
            <p>Year: {props.year}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            <h3>Skills:</h3>
            {props.skills.map((skill) => (
                <p key={skill}>{skill}</p>
            ))}
        </div>
    );
}

export default StudentCard;