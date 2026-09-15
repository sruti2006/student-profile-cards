import StudentCard from "./StudentCard";
function App() {
  return (
    <div className="app">
      <h1>Student Profiles</h1>
      <div className="card-container">
        <StudentCard
          name="Priya"
          course="BBA"
          year="3rd Year"
          age={21}
          isStudent={true}
          skills={["C++", "C#"]}
        />
        <StudentCard
          name="Amit"
          course="Electronics"
          year="1st Year"
          age={23}
          isStudent={true}
          skills={["React", "JavaScript", "Python"]}
        />
        <StudentCard
          name="Sara"
          course="Graphic Design"
          year="Graduate"
          age={25}
          isStudent={false}
          skills={["Photoshop", "Illustrator"]}
        />
      </div>
    </div>
  );
}

export default App;