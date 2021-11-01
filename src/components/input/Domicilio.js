import React, { useState } from 'react'

export const Domicilio = () => {
    const [show, setshow] = useState(false);

    const addOptions = () => {
        setshow(!show);
    }

    return (
        <div className="domicilio__main pointer" onClick={addOptions}>
            {!show && <h3>Domicilio</h3>}  
            {/* Añadir el evento on click solo en el incono de flecha */}
            {
                show
                &&
                <>
                    <input
                        type="text"
                        placeholder="Calle o avenida"
                        name="domicilio"
                    />
                    <input
                        type="number"
                        placeholder="Número exterior"
                        name="exterior"
                    />
                    <input
                        type="numer"
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
            }
        </div>
    )
}
