import { useState } from "react";

export const useEmail = () => {
    const [emailCorrecto, setemailCorrecto] = useState();

    const emailValidator = ({ target }) => {
        const regexEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

        console.log(regexEmail.test(target.value));
        setemailCorrecto(regexEmail.test(target.value));
    }

    return {
        emailValidator,
        emailCorrecto
    }
}
