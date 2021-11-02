import { useState } from 'react'
//validation of account with masterCard, visa and Discover
export const useClabeBancaria = () => {
    const [clabeCorrecta, setclabeCorrecta] = useState();

    const clabeBancariaV =({target})=>{
        const clabe = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/
        console.log(clabe.test(target.value));
        setclabeCorrecta(clabe.test(target.value));
    }

    return {
        clabeBancariaV,
        clabeCorrecta
    }
}
