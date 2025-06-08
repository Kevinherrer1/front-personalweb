import React, { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/hola") // Asegúrate que esta ruta exista en tu backend NestJS
      .then((response) => response.json())
      .then((data) => {
        console.log(data);         // { mensaje: "Hola mundo" }
        setMensaje(data.mensaje); // Guardamos el mensaje en el estado
      })
      .catch((error) => {
        console.error("Error al hacer fetch:", error);
      });
  }, []);

  return (
    <div>
      <h1>Mensaje desde la API:</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
