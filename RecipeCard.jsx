const DIFICULDADE_ESTILO = {
  Fácil: {
    barra: "bg-oliva-700",
    selo: "bg-oliva-700/10 text-oliva-700",
  },
  Médio: {
    barra: "bg-mostarda",
    selo: "bg-mostarda/15 text-mostarda",
  },
  Difícil: {
    barra: "bg-tijolo-600",
    selo: "bg-tijolo-600/10 text-tijolo-600",
  },
};

export default function RecipeCard({
  titulo,
  descricao,
  categoria,
  tempoPreparo,
  dificuldade = "Fácil",
}) {
  const estilo = DIFICULDADE_ESTILO[dificuldade] ?? DIFICULDADE_ESTILO.Fácil;

  return (
    <article className="flex bg-white rounded-lg overflow-hidden border border-oliva-900/10 shadow-sm">
      <div className={`w-1.5 shrink-0 ${estilo.barra}`} />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-oliva-900 leading-snug">
            {titulo}
          </h3>
          <span
            className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${estilo.selo}`}
          >
            {dificuldade}
          </span>
        </div>

        <p className="text-sm text-oliva-900/70 leading-relaxed">
          {descricao}
        </p>

        <div className="flex items-center justify-between text-xs mt-1 pt-3 border-t border-oliva-900/10">
          <span className="font-medium text-tijolo-600">{categoria}</span>
          <span className="text-oliva-900/50">{tempoPreparo} de preparo</span>
        </div>
      </div>
    </article>
  );
}
