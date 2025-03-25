import React, { useState } from 'react';
import './Calculadora.css';

const Calculadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
    };

    const handleMultiplicar = () => {
        const multiplicacion = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicacion);
    };

    const handleDividir = () => {
        if (parseFloat(num2) !== 0) {
            const division = parseFloat(num1) / parseFloat(num2);
            setResultado(division);
        } else {
            setResultado('Error: División por cero');
        }
    };

    const handleLimpiar = () => {
        setNum1('');
        setNum2('');
        setResultado(null);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <div className="botones">
                <button onClick={handleSumar}>Sumar</button>
                <button onClick={handleRestar}>Restar</button>
                <button onClick={handleMultiplicar}>Multiplicar</button>
                <button onClick={handleDividir}>Dividir</button>
            </div>
            {resultado !== null && (
                <div className="resultado-container">
                    <p>Resultado: {resultado}</p>
                    <button 
                        className="boton-limpiar" 
                        onClick={handleLimpiar}
                    >
                        ✖
                    </button>
                </div>
            )}
        </div>
    );
};

export default Calculadora;