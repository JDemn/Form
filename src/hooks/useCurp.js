import { useState } from "react";

//return if a curp was writen success
export const useCurp = () => {
    const [curpCorrecto, setcurpCorrecto] = useState('');

    const curpValidation = ({ target }) => {
        const curp = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
        console.log(curp.test(target.value));
        setcurpCorrecto(curp.test(target.value));
    }

    return {
        curpValidation, curpCorrecto
    }
}
