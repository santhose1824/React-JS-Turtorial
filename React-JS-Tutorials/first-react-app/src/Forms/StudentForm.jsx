import React, { useState } from "react";
import "./StudentForm.css";
const StudentForm = () => {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentCourse, setStudentCourse] = useState("science");
  const handleNameChange = (e) => {
    setStudentName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setStudentAge(e.target.value);
  };
  const handleCourseChange = (e) => {
    setStudentCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Student Form</h1>
      <div className="input">
        <label htmlFor="">Student Name :</label>
        <input
          type="text"
          value={studentName}
          onChange={handleNameChange}
          placeholder="Enter your Name"
        />
      </div>
      <div className="input">
        <label htmlFor="">Student Age:</label>
        <input
          type="text"
          value={studentAge}
          onChange={handleAgeChange}
          placeholder="Enter your Age"
        />
      </div>
      <div className="dropDown">
      <label htmlFor="">Course :</label>
        <select value={studentCourse} onChange={handleCourseChange}>
          <option value="science">Science</option>
          <option value="maths">Maths</option>
          <option value="english">English</option>
          <option value="social">Social</option>
          <option value="tamil">Tamil</option>
        </select>
      </div>
      <button type="submit">Regiseter</button>
    </form>
  );
};

export default StudentForm;
