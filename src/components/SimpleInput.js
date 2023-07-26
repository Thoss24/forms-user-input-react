import useInput from "../hooks/use_input";

const SimpleInput = () => {

  const { 
    inputValue: nameValue,
    handleInput: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
    inputIsValid: nameInputIsValid,
    inputIsInvalid: nameInputIsInvalid,
    reset: resetName,
  } = useInput(val => val.trim() !== "");

  const { 
    inputValue: emailValue,
    handleInput: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    inputIsValid: emailInputIsValid,
    inputIsInvalid: emailInputIsInvalid,
    reset: resetEmail,
  } = useInput(val => val.includes('@'));

  let formIsValid = false;

  if (nameInputIsValid && emailInputIsValid) {
    formIsValid = true
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    resetName();
    resetEmail();
    console.log(emailValue, nameValue)
  };

  const nameInputClasses = nameInputIsInvalid // if name input is empty and the form has been interacted with by user set invalid class, otherwise keep valid class
  ? "form-control invalid"
  : "form-control";

  const emailInputClasses = emailInputIsInvalid // if name input is empty and the form has been interacted with by user set invalid class, otherwise keep valid class
  ? "form-control invalid"
  : "form-control";


  return (
    <form onSubmit={handleFormSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputHandler} onBlur={nameBlurHandler} value={nameValue}/>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" onChange={emailInputHandler} onBlur={emailBlurHandler} value={emailValue}/>
      </div>
      {nameInputIsInvalid && <p class="error-text">Name must not be empty.</p>}
      {emailInputIsInvalid && <p class="error-text">Email must include `@`.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
