import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';
export const CuentaBancaria = () => {
    const [option, setoption] = useState(false);

    const showOptions = ({ currentTarget }) => {
        console.log(currentTarget.className);
        currentTarget.className === 'cuentaBancaria__main d-flex justify-content-between pointer mt-3' && setoption(!option);
    }
    return (
        <>
            <div className="cuentaBancaria__main d-flex justify-content-between pointer mt-3" onClick={showOptions}>
                <h5>Cuenta bancaria</h5>
                {!option && <FaArrowDown className="colorIcon" />}
            </div>
            {   
                option
                &&
                <div className="cuentaBancaria-container">
                    <input
                        type="text"
                        placeholder="clave interbancaria"
                        name = "cinterbancaria"
                    />
                    <input
                        type="text"
                        placeholder="banco"
                        name = "banco"
                        className = "dos"
                    />
                </div>
            }
        </>
    )
}
