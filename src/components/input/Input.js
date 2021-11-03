import React from 'react'
import { Domicilio } from './Domicilio'
import { Localizacion } from './Localizacion'
import { RepresentanteLegal } from './RepresentanteLegal';
import { CuentaBancaria } from './CuentaBancaria';
import { Buton } from '../butons/Buton';
import { useForm } from '../../hooks/useForm';
import { useRfc } from '../../hooks/useRfc';

export const Input = () => {
    //our hooks
    const [formState, handleInputChange] = useForm({
        rsocial: 'BMW Ibérica S.A',
        ncomercial: '',
        nacionalidad: '',
        date: '',
        rfc: '',
        rfiscal: '',
        industria: '',
        domicilio: '',
        exterior: '',
        interior: '',
        cp: '',
        colonia: '',
        ciudad: '',
        entidad: '',
        pais: '',
        fileComprobante: '',
        telefono: 3123104335,
        email: '',
        representante: '',
        rnacimiento: '',
        rentidadf: '',
        rpaisnacimiento: '',
        rnacionalidad: '',
        rcurp: '',
        rrfc: '',
        rdomicilio: '',
        restadoCivil: '',
        remail: '',
        rtelefono: '',
        rhombre: '',
        rmujer: '',
        cinterbancaria: '',
        banco: ''
    });

    const {
        rsocial,
        ncomercial,
        nacionalidad,
        date,
        rfc,
        rfiscal,
        industria,
        domicilio,
        exterior,
        interior,
        cp,
        colonia,
        ciudad,
        entidad,
        pais,
        fileComprobante,
        telefono,
        email,
        representante,
        rnacimiento,
        rentidadf,
        rpaisnacimiento,
        rnacionalidad,
        rcurp,
        rrfc,
        rdomicilio,
        restadoCivil,
        remail,
        rtelefono,
        rhombre,
        rmujer,
        cinterbancaria,
        banco
    } = formState;


    const hanleLogin = (e) => {
        e.preventDefault();
        console.log(rsocial, ncomercial, nacionalidad, date, rfc, rfiscal, industria, domicilio, exterior, interior, cp, colonia, ciudad, entidad, pais, telefono, email, fileComprobante, representante, rnacimiento, rentidadf, rpaisnacimiento, rnacionalidad, rcurp, rrfc, rdomicilio, restadoCivil, remail, rtelefono, rhombre, rmujer, cinterbancaria, banco);
    }
    const { validatorRfc, esCorrecto } = useRfc();

    return (
        <>
            <form className="form__main mr ml mt-4" onSubmit={hanleLogin}>
                <h4 className="form__title d-flex justify-content-center">Rellenar el formulario</h4>
                <label>Razón Social</label>
                <input
                    type="text"
                    name="rsocial"
                    className="form-input-gral"
                    value={rsocial}
                    onChange={handleInputChange}
                />

                <label>Nombre comercial</label>
                <input
                    type="text"
                    name="ncomercial"
                    value={ncomercial}
                    onChange={handleInputChange}
                />
                <label>Nacionalidad</label>
                <input
                    type="text"
                    name="nacionalidad"
                    value={nacionalidad}
                    onChange={handleInputChange}
                />
                <label>Fecha de constitución</label>
                <input
                    type="date"
                    name="date"
                    className="form__date"
                    value={date}
                    onChange={handleInputChange}
                    required
                />
                <label>RFC</label>
                <input
                    type="text"
                    name="rfc"
                    value={rfc.toUpperCase()}
                    onChange={e => { handleInputChange(e); validatorRfc(e) }}
                    required
                />
                {
                    esCorrecto === false &&
                    <div className="alert alert-danger mt-1" role="alert">
                        El formato de RFC No es correcto!
                    </div>
                }
                <label>Régimen fiscal</label>
                <input
                    type="text"
                    name="rfiscal"
                    value={rfiscal}
                    onChange={handleInputChange}
                />
                <label>Industria</label>
                <input
                    type="text"
                    name="industria"
                    value={industria}
                    onChange={handleInputChange}
                />
                <Domicilio />
                <Localizacion className="localizacion" />
                <RepresentanteLegal />
                <CuentaBancaria />
                <Buton />
            </form>
        </>
    )
}
