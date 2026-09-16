import StudentCard from "./StudentCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">Campus directory</p>
        <h1>Student Profiles</h1>
        <p className="intro">
          Meet the people learning, creating, and building what comes next.
        </p>
      </header>
      <div className="card-container">
        <StudentCard
          name="Priya"
          course="BBA"
          year="3rd Year"
          age={21}
          isStudent={true}
          status="Current student"
          skills={["C++", "C#"]}
          email="priya@gmail.com"
          location="Delhi"
          about="Business and strategy enthusiast"
        />
        <StudentCard
          name="Amit"
          course="Electronics"
          year="1st Year"
          age={23}
          isStudent={true}
          status="Current student"
          skills={["React", "JavaScript", "Python"]}
          email="amit@gmail.com"
          location="Odisha"
          about="Backend development enthusiast"
        />
        <StudentCard
          name="Sara"
          course="Graphic Design"
          year="Graduate"
          age={25}
          isStudent={false}
          status="Graduated"
          skills={["Photoshop", "Illustrator"]}
          email="sara@gmail.com"
          location="Maharashtra"
          about="Visual design and branding enthusiast"
        />
      </div>
    </div>
  );
}

export default App;