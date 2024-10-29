import React, { useState } from "react";
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <h2>String State {firstName} Variables</h2>
      <p>{firstName}</p>
      <input
        className="form-control"
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <h3>{firstName}</h3>
      <hr />
    </div>
  );
}
