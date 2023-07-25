import useInput from "../hooks/use_input";

const SimpleInput = () => {

  const { handleInput, inputBlurHandler, inputValue, isTouched, enteredInputIsInvalid, enteredInputIsValid, formInputClasses, formIsValid } = useInput();

  const handleFormSubmission = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={formInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={handleInput} onBlur={inputBlurHandler} />
      </div>
      <div className={formInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" onChange={handleInput} onBlur={inputBlurHandler} />
      </div>
      {enteredInputIsInvalid && <p class="error-text">Name must not be empty.</p>}
      {enteredInputIsInvalid && <p class="error-text">Email must not be empty.</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
