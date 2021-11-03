import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';
import { useCurp } from '../../hooks/useCurp';
//our hooks
import { useEmail } from '../../hooks/useEmail';
import { usePhone } from '../../hooks/usePhone';
import { useRfc } from '../../hooks/useRfc';




export const RepresentanteLegal = () => {
    const [option, setoption] = useState(false);
    
    const showOptions = ({ currentTarget }) => {
        console.log(currentTarget.className);
        currentTarget.className === 'rlegal__main mt-3 d-flex justify-content-between pointer' && setoption(!option);
    }
    const { emailValidator, emailCorrecto } = useEmail()
    const { validatorRfc, esCorrecto } = useRfc();
    const { phoneValidation, correcto } = usePhone();
    const {curpValidation,curpCorrecto} = useCurp();
    
    // useEffect(() => {
    //     console.log('la curp cambió')
    // }, [curpCorrecto]);
    
    // useContex
    // const{rrfc}= useContext(UserContex);
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
                         <div className = "rlegal-nacimiento">
                            <label>Fecha de nacimiento</label>
                            <input
                                type="date"
                                name="rnacimiento"
                            />
                        </div>
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
                            onChange = {curpValidation}
                        />
                        <input
                            type="text"
                            name="rrfc"
                            placeholder="RFC"
                            onChange={e=>{validatorRfc(e)}}
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
                            onChange={emailValidator}
                        />
                        <input
                            type="number"
                            name="rtelefono"
                            placeholder="teléfono"
                            onChange={phoneValidation}
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
                        esCorrecto === false &&
                        <div className="alert alert-danger mt-1" role="alert">
                            El formato de RFC No es correcto!, asegúrese de estar escrito en mayúsculas y contar con 13 caracteres!
                        </div>
                    }
                    {
                        correcto === false &&
                        <div className="alert alert-danger mt-1" role="alert">
                            El número ingresado no es correcto. Debe ser mayor a 8 caracteres.
                        </div>
                    }
                    {
                        emailCorrecto === false &&
                        <div className="alert alert-danger mt-1" role="alert">
                            La cuenta de correo que ingresó no es válida : example@gmail.com
                        </div>
                    }
                    {
                        curpCorrecto === false &&
                        <div className="alert alert-danger mt-1" role="alert">
                            El formato de curp ingresado es incorrecto, verifique los caracteres!.
                        </div>
                    }
                </>
            }
        </>
    )
}
