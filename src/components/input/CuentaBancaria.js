import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';
import { useClabeBancaria } from '../../hooks/useClabeBancaria';

export const CuentaBancaria = () => {
    const [option, setoption] = useState(false);

    const showOptions = ({ currentTarget }) => {
        console.log(currentTarget.className);
        currentTarget.className === 'cuentaBancaria__main d-flex justify-content-between pointer mt-3' && setoption(!option);
    }
    const { clabeBancariaV, clabeCorrecta } = useClabeBancaria();
    //useContex
    // const userContex = useContext(UserContex);
    // console.log('userContex',rsocial, ncomercial);

    return (
        <>
            <div className="cuentaBancaria__main d-flex justify-content-between pointer mt-3" onClick={showOptions}>
                <h5>Cuenta bancaria</h5>
                {!option && <FaArrowDown className="colorIcon" />}
            </div>
            {
                option
                &&
                <>
                    <div className="cuentaBancaria-container">
                        <input
                            type="text"
                            placeholder="número de tarjeta"
                            name="cinterbancaria"
                            onChange={clabeBancariaV}
                        />
                        <input
                            type="text"
                            placeholder="banco"
                            name="banco"
                            className="dos"
                        />
                    </div>
                    {
                        clabeCorrecta === false &&
                        <div className="alert alert-danger mt-1" role="alert">
                            El número de tarjeta no es correcto. Debe incluir 13 dígitos permitidos en VISA. O 16 siendo <h6>VISA,MASTERCARD Y DISCOVER</h6>
                        </div>
                    }
                </>
            }

        </>
    )
}
