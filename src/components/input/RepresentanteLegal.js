import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';
import { useRfc } from '../../hooks/useRfc';
export const RepresentanteLegal = () => {
    const [option, setoption] = useState(false);

    const showOptions = ({ currentTarget }) => {
        console.log(currentTarget.className);
        currentTarget.className === 'rlegal__main mt-3 d-flex justify-content-between pointer' && setoption(!option);
    }

    const {validatorRfc,esCorrecto} = useRfc();
    console.log('Es correcto?',esCorrecto);

    return (
        <>
            <div className="rlegal__main mt-3 d-flex justify-content-between pointer" onClick={showOptions}>
                <h5>Representante legal</h5>
                {!option && <FaArrowDown className="colorIcon" />}
            </div>
            {
                option
                &&
                <>
                    <div className="rlegal__container">
                        <input
                            type="text"
                            name="representante"
                            placeholder="Nombre"
                        />

                        <input
                            type="date"
                            name="rnacimiento"
                        />
                        <input
                            type="text"
                            name="rentidadf"
                            placeholder="Entidad federativa"
                        />
                        <input
                            type="text"
                            name="rpaisnacimiento"
                            placeholder="país de nacimiento"
                        />
                        <input
                            type="text"
                            name="rnacionalidad"
                            placeholder="nacionalidad"
                        />
                        <input
                            type="text"
                            name="rcurp"
                            placeholder="CURP"
                        />
                        <input
                            type="text"
                            name="rrfc"
                            placeholder="RFC"
                            onChange={ validatorRfc }
                        />
                        <input
                            type="text"
                            name="rdomicilio"
                            placeholder="calle"
                        />
                        <input
                            type="text"
                            name="restadoCivil"
                            placeholder="Estado civil"
                        />
                        <input
                            type="text"
                            name="remail"
                            placeholder="correo electrónico"
                        />
                        <input
                            type="number"
                            name="rtelefono"
                            placeholder="teléfono"
                        />
                    </div>
                    <div className="gender">
                        <label className="gender__title">Sexo</label>
                        <input
                            type="radio"
                            value="hombre"
                            name="rhombre"
                            className="circle"
                        />
                        <label className="gender">Hombre</label><br />
                        <input
                            type="radio"
                            value="mujer"
                            name="rmujer"
                            className="circle"
                        />
                        <label className="gender">Mujer</label><br />
                    </div>
                    {
                            esCorrecto === ''&&<h1></h1>,
                            esCorrecto===false&&
                            <div className="alert alert-danger mt-1" role="alert">
                                El formato del Rfc No es correcto
                            </div>
                    }
                </>
            }
        </>
    )
}
