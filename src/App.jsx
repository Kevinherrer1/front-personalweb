import React, { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/hola`)
    .then((response) => response.json())
    .then((data) => setMensaje(data.mensaje))
    .catch((error) => console.error("Error al hacer fetch:", error));
}, []);


  return (
    <div>
      <h1>Mensaje desde la API en render:</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
