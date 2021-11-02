import React from 'react'
import { useEmail } from '../../hooks/useEmail'

export const Localizacion = () => {
    
    const { emailValidator, esCorrecto } = useEmail();
    console.log('Es correcto?',esCorrecto);

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
            />
            <label>Dirección de correo electrónico</label>
            <input
                type="email"
                placeholder="juan@example.com"
                name="email"
                onChange={emailValidator}
            />
            {   
                esCorrecto === ''&&<h1></h1>,
                esCorrecto===false&&
                <div className="alert alert-danger mt-1" role="alert">
                    Formato de contraseña incorrecto
                </div>
            }
        </div>
    )
}
