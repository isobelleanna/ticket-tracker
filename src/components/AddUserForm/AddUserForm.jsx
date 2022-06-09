import React from "react";
import "./AddUserForm.scss";
import whiteCross from "../../assets/images/white-cross.png";

const AddUserForm = (props) => {
  
  const {handleSubmit, toggleForm} = props;
  return (
   <div>
    <form onSubmit={handleSubmit} className="form">
      <img className="form__cross" src={whiteCross} alt="White cross" onClick={toggleForm}/>
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
            <input className="form__submit" type="submit" />
          </form>
        </div>
  );
};

export default AddUserForm;
