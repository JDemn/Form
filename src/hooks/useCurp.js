import { useState } from "react";

//return if a curp was writen success
export const useCurp = ({target}) => {
    const [esCorrecto, setesCorrecto] = useState();
    const curp = /^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/;
    console.log(target.value.test(curp));
    const curpValidation =()=>{
        setesCorrecto(target.value.test(curp));  
    }

    return {
        curpValidation,
        esCorrecto
    }
}