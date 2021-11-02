import { useState } from "react";


export const useRfc = () => {
    const [esCorrecto, setesCorrecto] = useState();
    const validatorRfc = ({ target }) => {
        const rfc = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
        console.log(rfc.test(target.value));
        setesCorrecto(rfc.test(target.value));
    }

    return {
        validatorRfc,
        esCorrecto
    }
}
