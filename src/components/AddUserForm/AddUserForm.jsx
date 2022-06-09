import React from "react";
import "./AddUserForm.scss";

const AddUserForm = (props) => {
  
  const {handleSubmit} = props;
  return (
   <div>
    <form onSubmit={handleSubmit} className="form">
            <h2>Add New User</h2>
            <label>
              Enter name:
              <input
                className="form__input"
                type="text"
                name="name"
                
              />
            </label>
            <label>
              Enter role:
              <input
                className="form__input"
                type="text"
                name="role"
                
              />
            </label>
            <input type="submit" />
          </form>
        </div>
  );
};

export default AddUserForm;
