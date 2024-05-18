import React from "react";

// Results component to display user data
const Results = ({ data }) => {
  const { firstName, lastName, email, password, confirmPassword } = data;

  // Function to render each field with label and value
  const renderField = (label, value) => (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <p>
        {label}: {value}
      </p>
    </div>
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Results</h2>
      {renderField("First Name", firstName)}
      {renderField("Last Name", lastName)}
      {renderField("Email", email)}
      {renderField("Password", password)}
      {renderField("Confirm Password", confirmPassword)}
    </div>
  );
};

export default Results;
