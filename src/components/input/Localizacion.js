import React from 'react'
import { useEmail } from '../../hooks/useEmail'
import { usePhone } from '../../hooks/usePhone';

export const Localizacion = () => {

    const { emailValidator, esCorrecto } = useEmail();
    console.log('Es correcto?', esCorrecto);

    const { phoneValidation, correcto } = usePhone();
    console.log('phone correcto?', correcto);


    return (
        <div className="localizacion__main mt-4">
            <label>Comprobante de domicilio</label>
            <input
                type="file"
                name="fileComprobante"
                className="localizacion__input mb-2"
            />
            <label>Número de teléfono</label>
            <input
                type="number"
                placeholder="..."
                name="telefono"
                onChange={phoneValidation}
            />
            {
                correcto === '' && <h1></h1>,
                correcto === false &&
                <div className="alert alert-danger mt-1" role="alert">
                    El número que ingreso no es válido, asegurese de que sea un número existente!.
                </div>
            }
            <label>Dirección de correo electrónico</label>
            <input
                type="email"
                placeholder="juan@example.com"
                name="email"
                onChange={emailValidator}
            />
            {
                esCorrecto === '' && <h1></h1>,
                esCorrecto === false &&
                <div className="alert alert-danger mt-1" role="alert">
                    La cuenta de correo que ingresó no es válida : example@gmail.com
                </div>
            }
        </div>
    )
}
