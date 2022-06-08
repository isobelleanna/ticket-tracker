import React, { useState } from "react";
import "./AddUserForm.scss";

const AddUserForm = () => {
  let index = 11;
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
        id: index,
        name: event.target.name.value,
        role: event.target.role.value
    }
    index += 1
    console.log(newUser)
  };

  return (
   <div>
    <form onSubmit={handleSubmit} className="form">
            <h2>Add New User</h2>
            <label>
              Enter name:
              <input
                className="form__input"
                type="text"
                name="role"
                
              />
            </label>
            <label>
              Enter role:
              <input
                className="form__input"
                type="text"
                name="name"
                
              />
            </label>
            <input type="submit" />
          </form>
        </div>
  );
};

export default AddUserForm;
