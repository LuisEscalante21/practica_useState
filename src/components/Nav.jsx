import React from "react";

const Nav = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">Prueba de Nav</div>
                <ul className="flex space-x-4">
                <li>
                        <a href="/About" className="hover:text-gray-200">
                            Contactame
                        </a>
                    </li>
                <li>
                        <a href="/Card" className="hover:text-gray-200">
                            Card
                        </a>
                    </li>
                    <li>
                        <a href="/Calculadora" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/Todo" className="hover:text-gray-200">
                            Todo List
                        </a>
                    </li>
                    <li>
                        <a href="/registroEstudiantes" className="hover:text-gray-200">
                            Registro de Estudiantes
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;