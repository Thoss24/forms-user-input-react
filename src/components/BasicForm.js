import useInputAgain from "../hooks/use_input_again";

const notEmpty = (value) => value !== "";
const includesAtSymbol = (value) => value.includes('@')

const BasicForm = (props) => {

  const {
    formInput: firstNameInputValue,
    formInputIsValid: firstNameInputIsValid,
    formInputIsInvalid: firstNameInputIsInvalid,
    handleInput: firstNameInputHandler,
    handleBlur: firstNameBlurHandler,
    reset: resetFirstName
  } = useInputAgain(notEmpty);

  const {
    formInput: lastNameInputValue,
    formInputIsValid: lastNameInputIsValid,
    formInputIsInvalid: lastNameInputIsInvalid,
    handleInput: lastNameInputHandler,
    handleBlur: lastNameBlurHandler,
    reset: resetLastName
  } = useInputAgain(notEmpty);

  const {
    formInput: emailInputValue,
    formInputIsValid: emailInputIsValid,
    formInputIsInvalid: emailInputIsInvalid,
    handleInput: emailInputHandler,
    handleBlur: emailBlurHandler,
    reset: resetEmail
  } = useInputAgain(includesAtSymbol);

  let formIsValid = false;

  if (firstNameInputIsValid && emailInputIsValid && lastNameInputIsValid) {
      formIsValid = true
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetEmail();
    resetFirstName();
    resetLastName();
  };

  const firstNameInputClasses = firstNameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameInputHandler} onBlur={firstNameBlurHandler} value={firstNameInputValue}/>
          {firstNameInputIsInvalid && <p className="error-text">First name field cannot be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameInputHandler} onBlur={lastNameBlurHandler} value={lastNameInputValue}/>
          {lastNameInputIsInvalid && <p className="error-text">Last name field cannot be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email-address'>E-Mail Address</label>
        <input type='text' id='email-address' onChange={emailInputHandler} onBlur={emailBlurHandler} value={emailInputValue}/>
        {emailInputIsInvalid && <p className="error-text">Email field must include '@'.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
