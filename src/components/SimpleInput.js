import { useState } from 'react'

const SimpleInput = (props) => {

  const [name, setName]  = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const handleFormSubmission = (event) => {
    event.preventDefault()

    setIsTouched(true)

    if (name.trim().length === 0) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }

    console.log(name)
    setName('')
  };


  const handleInput = (event) => {
    setName(event.target.value)
  };

  const nameInputIsInvalid = !isValid && isTouched // name input is invalid if isTouched is true and isValid is false

  const formControlValid = nameInputIsInvalid ? 'form-control invalid': 'form-control'
 
  return (
    <form onSubmit={handleFormSubmission}>
      <div className={formControlValid}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={handleInput} value={name}/>
      </div>
      {nameInputIsInvalid && <p class="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
