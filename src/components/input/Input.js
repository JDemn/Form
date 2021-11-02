import React from 'react'
import { Domicilio } from './Domicilio'
import { Localizacion } from './Localizacion'
import { RepresentanteLegal } from './RepresentanteLegal';
import { CuentaBancaria } from './CuentaBancaria';
import { Buton } from '../butons/Buton';
import { useForm } from '../../hooks/useForm';
export const Input = (props) => {
    console.log(props)
    const [formState, haleInputChange] = useForm({
        rsocial: 'S.A de C.V',
        ncomercial: 'walmart',
        nacionalidad: 'mexicana',
        date: '',
        rfc: 'DEMG9610297JA',
        rfiscal: '',
        industria: 'alimentos',
        domicilio: 'verde valle',
        exterior: 34,
        interior: 2323,
        cp: 28750,
        colonia: 'verde valle',
        ciudad: 'villa de alvarez',
        entidad: 'Colima',
        pais: 'mexico',
        fileComprobante: '',
        telefono: 3123104335,
        email: 'example@gmail.com',
        representante : 'Deniz M',
        rnacimiento : '',
        rentidadf : 'Jalisco',
        rpaisnacimiento : 'Mexico',
        rnacionalidad : 'mexicana',
        rcurp  : 'DEMG961029HJCNND02',
        rrfc : 'DEMG9610277JA',
        rdomicilio : 'Higuera de peters',
        restadoCivil : 'soltero',
        remail : 'jdeniz1@gmail.com',
        rtelefono : 31231234234,
        rhombre : '',
        rmujer : '',
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
        rmujer 
    } = formState;


    const hanleLogin = (e) => {
        e.preventDefault();
        console.log(rsocial, ncomercial, nacionalidad, date, rfc, rfiscal, industria, domicilio, exterior, interior, cp, colonia, ciudad, entidad, pais, telefono, email, fileComprobante,representante,rnacimiento,rentidadf,rpaisnacimiento,rnacionalidad,rcurp,rrfc,rdomicilio,restadoCivil,remail,rtelefono,rhombre,rmujer);
    }
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
                    onChange={haleInputChange}
                />

                <label>Nombre comercial</label>
                <input
                    type="text"
                    name="ncomercial"
                    value={ncomercial}
                    onChange={haleInputChange}
                />
                <label>Nacionalidad</label>
                <input
                    type="text"
                    name="nacionalidad"
                    value={nacionalidad}
                    onChange={haleInputChange}
                />
                <label>Fecha de constitución</label>
                <input
                    type="date"
                    name="date"
                    className="form__date"
                    value={date}
                    onChange={haleInputChange}
                />
                <label>RFC</label>
                <input
                    type="text"
                    name="rfc"
                    value={rfc}
                    onChange={haleInputChange}
                />
                <label>Régimen fiscal</label>
                <input
                    type="text"
                    name="rfiscal"
                    value={rfiscal}
                    onChange={haleInputChange}
                />
                <label>Industria</label>
                <input
                    type="text"
                    name="industria"
                    value={industria}
                    onChange={haleInputChange}
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
