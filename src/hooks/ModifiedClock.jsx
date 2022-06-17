import React, { useEffect, useState } from "react";

const ModifiedClock = () => {
    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José",
    };
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const timerID = setInterval(() => {
            tick();
        }, 1000);
        return () => {
            clearInterval(timerID);
        };
    });

    const tick = () => {
        setState({
            ...state,
            fecha: new Date(),
            edad: state.edad + 1,
        });
    };
    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {state.nombre} {state.apellidos}
            </h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
};

export default ModifiedClock;
