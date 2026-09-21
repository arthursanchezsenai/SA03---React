import { useState } from "react";

function RecipeForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("Prato principal");
  const [dificuldade, setDificuldade] = useState("Fácil");
  const [tempoPreparo, setTempoPreparo] = useState("");

  function aoEnviar(evento) {
    evento.preventDefault();
    if (titulo.trim() === "") return;

    onAdicionar({
      titulo,
      categoria,
      dificuldade,
      tempoPreparo: tempoPreparo.trim() === "" ? "—" : tempoPreparo,
    });
    setTitulo("");
    setTempoPreparo("");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="bg-white rounded-lg shadow-sm border border-oliva-900/10 p-5 mb-8 flex flex-wrap gap-3 items-end"
    >
      <div className="flex-1 min-w-[200px]">
        <label className="block text-sm font-semibold text-oliva-900/70 mb-1">
          Nova receita
        </label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Qual receita você quer guardar?"
          className="w-full border border-oliva-900/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tijolo-600"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-oliva-900/70 mb-1">
          Categoria
        </label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border border-oliva-900/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tijolo-600"
        >
          <option>Prato principal</option>
          <option>Entrada</option>
          <option>Sobremesa</option>
          <option>Padaria</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-oliva-900/70 mb-1">
          Dificuldade
        </label>
        <select
          value={dificuldade}
          onChange={(e) => setDificuldade(e.target.value)}
          className="border border-oliva-900/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tijolo-600"
        >
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-oliva-900/70 mb-1">
          Tempo de preparo
        </label>
        <input
          type="text"
          value={tempoPreparo}
          onChange={(e) => setTempoPreparo(e.target.value)}
          placeholder="ex.: 40min"
          className="w-28 border border-oliva-900/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tijolo-600"
        />
      </div>

      <button
        type="submit"
        className="bg-tijolo-600 hover:bg-tijolo-500 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
      >
        + Adicionar receita
      </button>
    </form>
  );
}

export default RecipeForm;
