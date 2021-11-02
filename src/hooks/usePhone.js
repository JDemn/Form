import { useState } from "react";
//validation of phone number
export const usePhone = () => {
    const [correcto,setorrecto] = useState();
    const phoneValidation =({target})=>{
        const phone = /^[(]?[+]?(d{2}|d{3})[]?[s]?((d{6}|d{8})|(d{3}[*.-s]){3}|(d{2}[*.-s]){4}|(d{4}[*.-s]){2})|\d{8}|\d{10}|\d{12}$/;
        // const phone = /^[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-\s]){3}|(\d{2}[\*\.\-\s]){4}|(\d{4}[\*\.\-\s]){2})|\d{8}|\d{10}|\d{12}$/;
        console.log(phone.test(target.value));
        setorrecto(phone.test(target.value));
    }

    return {
        phoneValidation,
        correcto
    }
}
