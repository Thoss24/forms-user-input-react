import { useState } from "react";

const useInput = (validate) => {
    const [inputValue, setInputValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const inputIsValid = validate(inputValue);
    const inputIsInvalid = !inputIsValid && isTouched; // if input value is empty and input field has been touched

    const handleInput = (event) => { 
        setInputValue(event.target.value);
    };

    const inputBlurHandler = () => { 
        setIsTouched(true) 
    };

    const reset = () => {
        setInputValue("")
        setIsTouched(false)
    };

    return {
        inputValue,
        handleInput,
        inputBlurHandler,
        inputIsValid,
        inputIsInvalid,
        reset
    }
};

export default useInput