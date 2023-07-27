import { useReducer } from 'react'

const defaultFormState = {
    formInput: '',
    isTouched: false
};

const formReducer = (state, action) => {
    if (action.type === 'INPUT_VAL') {
        return {formInput: action.formInput, isTouched: state.isTouched}
    } 
    if (action.type === 'TOUCHED') {
        return {formInput: state.formInput, isTouched: true}
    }
    if (action.type === 'RESET') {
        return {formInput: "", isTouched: false}
    }

    return formReducer
};

const useInputAgain = (validate) => {
    const [formState, setFormState] = useReducer(formReducer, defaultFormState);

    const formInputIsValid = validate(formState.formInput)
    const formInputIsInvalid = !formInputIsValid && formState.isTouched;

    const handleInput = (event) => {
        setFormState({
            type: 'INPUT_VAL',
            formInput: event.target.value
        });
    };

    const handleBlur = () => {
        setFormState({
            type: 'TOUCHED'
        });
    };

    const reset = () => {
        setFormState({
            type: 'RESET'
        })
    };

    return {
        formInput: formState.formInput,
        formInputIsValid,
        formInputIsInvalid,
        handleInput,
        handleBlur,
        reset
    }
};

export default useInputAgain;