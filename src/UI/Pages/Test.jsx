
import React, { useState } from 'react';


const Alerta = () => {
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const toggleAlerta = () => {
        setMostrarAlerta(!mostrarAlerta);
    };

    return (
        <div>
            <button onClick={toggleAlerta}>Mostrar/Esconder Alerta</button>
            <div className={`absolute transform w-full max-w-md z-50 ${mostrarAlerta ? 'animate-slideIn block top-[1.5%]' : 'animate-slideOut top-[-3%]'} `}>
                <div className="bg-red-500 text-white p-4 rounded shadow-md">
                    <span className="float-right cursor-pointer" onClick={toggleAlerta}>&times;</span>
                    <p>¡Esta es una alerta!</p>
                </div>
            </div>
        </div>
    );
};

export default () => {

    return(
        <div>
            none
        </div>
    )
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Alerta />
        </div>
    );
}