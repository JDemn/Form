import React, { useEffect } from 'react'
import { useEmail } from '../../hooks/useEmail'
import { usePhone } from '../../hooks/usePhone';

export const Localizacion = () => {

    const { emailValidator, emailCorrecto } = useEmail();
    console.log('Es correcto?', emailCorrecto);

    const { phoneValidation, correcto } = usePhone();
    console.log('phone correcto?', correcto);

    const uploadFile = ({ target }) => {
        const file = target.files;
        console.log('data file', file);
        const reader = new FileReader();
        reader.readAsDataURL(file[0])
        reader.onload = ({ target }) => {
            console.log('img', target.result);
        }
    }
    useEffect(()=>{
        // console.log('Email validation cambió!');
    },[emailValidator, phoneValidation])
    

    return (
        <div className="localizacion__main mt-4">
            <label>Comprobante de domicilio</label>
            <input
                type="file"
                name="fileComprobante"
                className="localizacion__input mb-2"
                onChange={uploadFile}
            />
            <label>Número de teléfono</label>
            <input
                type="number"
                placeholder="..."
                name="telefono"
                onChange={phoneValidation}
            />
            {
                correcto === false &&
                <div className="alert alert-danger mt-1" role="alert">
                    El número ingresado no es correcto. Debe ser mayor a 8 caracteres.
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
                emailCorrecto === false &&
                <div className="alert alert-danger mt-1" role="alert">
                    La cuenta de correo que ingresó no es válida : example@gmail.com
                </div>
            }
        </div>
    )
}
