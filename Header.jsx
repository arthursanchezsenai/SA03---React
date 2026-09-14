export default function Header() {
  return (
    <header className="bg-oliva-900 text-manteiga-100">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-1">
        <span className="text-mostarda text-sm tracking-wide font-medium">
          receitas de casa, guardadas com carinho
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold">
          Fogão Aceso
        </h1>
        <p className="text-manteiga-200/80 max-w-md mt-1">
          O caderno de receitas da família, organizado para nunca mais
          perder aquele prato de domingo.
        </p>
      </div>
    </header>
  );
}
