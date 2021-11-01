import React from 'react'
import { Domicilio } from './Domicilio'

export const Input = () => {
    return (
        <>
            <form className="form__main mr ml mt-4">
                <h4 className="form__title d-flex justify-content-center">Rellenar el formulario</h4>
                <label>Razón Social</label>
                <input
                    type="text"
                    name="rsocial"
                    className="form-input-gral"
                />

                <label>Nombre comercial</label>
                <input
                    type="text"
                    name="ncomercial"
                />
                <label>Nacionalidad</label>
                <input
                    type="text"
                    name="nacionalidad"
                />
                <label>Fecha de constitución</label>
                <input
                    type="date"
                    name="date"
                    className="form__date"
                />
                <label>RFC</label>
                <input
                    type="text"
                    name="rfc"
                />
                <label>Régimen fiscal</label>
                <input
                    type="text"
                    name="rfc"
                />
                <label>Industria</label>
                <input
                    type="text"
                    name="rfc"
                />
                <Domicilio/>
            </form>
        </>
    )
}
