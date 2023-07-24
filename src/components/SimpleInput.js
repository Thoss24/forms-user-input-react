import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredNameIsValid = name.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && isTouched; // name input is invalid if isTouched is true and isValid is false

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setIsTouched(true);

    if (!enteredNameIsValid) {
      return 
    }

    setName("");
    setIsTouched(false)
  };

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true) 
  };

  const formControlValid = nameInputIsInvalid
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
