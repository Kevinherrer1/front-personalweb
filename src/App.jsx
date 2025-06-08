import React, { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/hola`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMensaje(data.mensaje);
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
