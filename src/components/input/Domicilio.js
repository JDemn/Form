import React, { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';

export const Domicilio = () => {
    
    const [show, setshow] = useState(false);
    
    const addOptions = ({ currentTarget }) => {
        currentTarget.className === 'domicilio__main pointer mt-3' && setshow(!show);
    }

    return (
        <>
            <div className="domicilio__main pointer mt-3" onClick={addOptions} >
                {!show && <FaArrowDown className="domicilio__icon" />}
                <h2>Domicilio</h2>
            </div>
            {
                show
                &&
                <div className="domicilio__container">
                    <>
                        <input
                            type="text"
                            placeholder="Calle o avenida"
                            name="domicilio"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Número exterior"
                            name="exterior"
                        />
                        <input
                            type="number"
                            placeholder="Número interior"
                            name="interior"
                        />
                        <input
                            type="number"
                            placeholder="Código postal"
                            name="cp"
                        />
                        <input
                            type="text"
                            placeholder="Colonia o urbanización"
                            name="colonia"
                        />
                        <input
                            type="text"
                            placeholder="Ciudad o población"
                            name="ciudad"
                        />
                        <input
                            type="text"
                            placeholder="Entidad federativa o estado"
                            name="entidad"
                        />
                        <input
                            type="text"
                            placeholder="País"
                            name="pais"
                        />
                    </>
                </div>
            }

        </>
    )
}
