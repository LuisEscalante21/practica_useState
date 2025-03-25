import React, { useState } from 'react';

const RegistroEstudiantes = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [carnet, setCarnet] = useState('');
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = () => {
    if (nombre && edad && carnet) {
      const nuevoEstudiante = {
        nombre,
        edad: parseInt(edad),
        carnet,
      };

      // Agregar estudiante al listado
      setEstudiantes((prevEstudiantes) => [...prevEstudiantes, nuevoEstudiante]);

      // Limpiar los campos de entrada
      setNombre('');
      setEdad('');
      setCarnet('');
    } else {
      // Opcional: Agregar un mensaje si los campos están vacíos
      alert('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-black">Registro de Estudiantes</h1>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-3 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <input
            type="number"
            placeholder="Edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full p-3 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <input
            type="text"
            placeholder="Carnet"
            value={carnet}
            onChange={(e) => setCarnet(e.target.value)}
            className="w-full p-3 bg-gray-200 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />

          <button
            onClick={agregarEstudiante}
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Agregar
          </button>
        </div>

        <div>
      <h2 className="text-lg font-semibold mb-4 text-black">Listado:</h2>
      {estudiantes.length > 0 ? (
        estudiantes.map((estudiante, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 mb-2 rounded-md flex justify-between"
          >
            <div className="flex space-x-4">
              <span className="text-black"><b>Nombre:</b> {estudiante.nombre}</span>
              <span className="text-black"><b>Edad: </b>{estudiante.edad}</span>
              <span className="text-black"><b>Carnet:</b> {estudiante.carnet}</span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-black">No hay estudiantes registrados.</p>
      )}
    </div>

      </div>
    </div>
  );
};

export default RegistroEstudiantes;
