import Header from "./components/Header";
import Footer from "./components/Footer";
import RecipeCard from "./components/RecipeCard";

const receitas = [
  {
    id: 1,
    titulo: "Feijoada de domingo",
    descricao:
      "A feijoada que a vovó fazia, com linguiça, costela e um refogado de couve na hora.",
    categoria: "Prato principal",
    tempoPreparo: "3h",
    dificuldade: "Difícil",
  },
  {
    id: 2,
    titulo: "Bolo de fubá cremoso",
    descricao:
      "Massa fofinha por fora e cremosa por dentro, ótimo pra acompanhar o café da tarde.",
    categoria: "Sobremesa",
    tempoPreparo: "50min",
    dificuldade: "Fácil",
  },
  {
    id: 3,
    titulo: "Risoto de cogumelos",
    descricao:
      "Arbóreo mexido devagar, com um caldo de legumes bem temperado e um toque de parmesão.",
    categoria: "Prato principal",
    tempoPreparo: "40min",
    dificuldade: "Médio",
  },
  {
    id: 4,
    titulo: "Pão caseiro de fermentação natural",
    descricao:
      "Casca crocante, miolo macio. Precisa de paciência, mas o cheiro na cozinha vale cada minuto.",
    categoria: "Padaria",
    tempoPreparo: "18h",
    dificuldade: "Difícil",
  },
  {
    id: 5,
    titulo: "Salada morna de grão-de-bico",
    descricao:
      "Grão-de-bico assado com páprica, tomate seco e limão. Leve e pronta em minutos.",
    categoria: "Entrada",
    tempoPreparo: "25min",
    dificuldade: "Fácil",
  },
  {
    id: 6,
    titulo: "Moqueca de peixe",
    descricao:
      "Leite de coco, dendê, pimentão colorido e coentro fresco cozinhando tudo junto na panela de barro.",
    categoria: "Prato principal",
    tempoPreparo: "1h",
    dificuldade: "Médio",
  },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12 flex-1 w-full">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-2xl font-semibold text-oliva-900">
            Receitas da casa
          </h2>
          <span className="text-sm text-oliva-900/50">
            {receitas.length} receitas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {receitas.map((receita) => (
            <RecipeCard
              key={receita.id}
              titulo={receita.titulo}
              descricao={receita.descricao}
              categoria={receita.categoria}
              tempoPreparo={receita.tempoPreparo}
              dificuldade={receita.dificuldade}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
