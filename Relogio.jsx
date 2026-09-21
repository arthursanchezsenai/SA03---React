import { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("🔥 Relogio MONTADO — fogo aceso");
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // função de limpeza: roda quando o componente sai da tela
    return () => {
      console.log("💨 Relogio DESMONTADO — fogo apagado");
      clearInterval(intervalo);
    };
  }, []); // [] = roda só na montagem

  return (
    <span className="font-mono text-mostarda text-sm bg-oliva-800 px-3 py-1 rounded-lg">
      {hora}
    </span>
  );
}

export default Relogio;
