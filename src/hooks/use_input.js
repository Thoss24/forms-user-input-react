import { useState } from "react";

const useInput = () => {
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const enteredInputIsValid = inputValue.trim() !== '';
    const enteredInputIsInvalid = !enteredInputIsValid && isTouched;

    const handleInput = (event) => { 
        setInputValue(event.target.value);
    };

    const inputBlurHandler = () => { 
        setIsTouched(true) 
    };

    const formInputClasses = enteredInputIsValid // if name input is empty and the form has been interacted with by user set invalid class, otherwise keep valid class
    ? "form-control invalid"
    : "form-control";

    let formIsValid = false

    if (enteredInputIsValid) {
      formIsValid = true
    }

    return {
        handleInput,
        inputBlurHandler,
        inputValue,
        isTouched,
        enteredInputIsInvalid,
        enteredInputIsValid, 
        formInputClasses,
        formIsValid
    }
};

export default useInput