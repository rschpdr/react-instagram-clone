import React, { useState, useEffect } from "react";
import axios from "axios";

function NewPost() {
  const [formState, setFormState] = useState({
    userName: "",
    postlink: "",
    description: "",
  });

  const handleInput = (event) => {
    const tempState = { ...formState };
    const field = event.currentTarget.id;
    const fieldValue = event.currentTarget.value;
    tempState[field] = fieldValue;
    setFormState(tempState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          className="form-control"
          id="userName"
          onChange={handleInput}
          value={formState.userName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="postlink">Link</label>
        <input
          type="text"
          className="form-control"
          id="postlink"
          onChange={handleInput}
          value={formState.postlink}
        />
      </div>
      <div className="form-group">
        <label htmlFor="postdescription">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          onChange={handleInput}
          value={formState.description}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewPost;
