import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredNameIsValid = name.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && isTouched; // name input is invalid if isTouched is true and name is empty

  let formIsValid = false

  if (enteredNameIsValid) {
    formIsValid = true
  }

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setIsTouched(true); // user has interacted with the form input

    if (!enteredNameIsValid) { // if input name is empty on submission return
      return 
    }

    setName(""); // reset input value on form submission
    setIsTouched(false) // set is touched to false (fresh form after submission)
  };

  const handleInput = (event) => { // onchange of the input set name to current input value
    setName(event.target.value);
  };

  const inputBlurHandler = () => { // onblur of input set is touched to true
    setIsTouched(true) 
  };

  const formControlValid = nameInputIsInvalid // if name input is empty and the form has been interacted with by user set invalid class, otherwise keep valid class
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={formControlValid}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={handleInput} onBlur={inputBlurHandler} value={name} />
      </div>
      {nameInputIsInvalid && <p class="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
