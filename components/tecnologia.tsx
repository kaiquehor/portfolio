const tecnologias = [
  {
    id: 1,
    nome: "JavaScript",
    nivel: "Avançado",
    categoria: "Frontend",
  },
  {
    id: 2,
    nome: "TypeScript",
    nivel: "Intermediário",
    categoria: "Frontend",
  },
  {
    id: 3,
    nome: "React",
    nivel: "Avançado",
    categoria: "Frontend",
  },
  {
    id: 4,
    nome: "Next.js",
    nivel: "Intermediário",
    categoria: "Frontend",
  },
  {
    id: 5,
    nome: "Tailwind CSS",
    nivel: "Intermediário",
    categoria: "Frontend",
  },
  {
    id: 6,
    nome: "Node.js",
    nivel: "Intermediário",
    categoria: "Backend",
  },
  {
    id: 7,
    nome: "Express",
    nivel: "Básico",
    categoria: "Backend",
  },
  {
    id: 8,
    nome: "PostgreSQL",
    nivel: "Básico",
    categoria: "Banco de Dados",
  },
  {
    id: 9,
    nome: "Git",
    nivel: "Intermediário",
    categoria: "Ferramentas",
  },
  {
    id: 10,
    nome: "GitHub",
    nivel: "Intermediário",
    categoria: "Ferramentas",
  },
];

export default function Tecnologia() {
  const categorias = ["Frontend", "Backend", "Banco de Dados", "Ferramentas"];

  return (
    <section id="tecnologia" className="relative w-full py-24 px-6">
      <h1>Minhas Tecnologias</h1>
      <p>Essas são as tecnologias que eu mais utilizo</p>

      {categorias.map((categoria) => (
        <div key={categoria} className="w-full max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-5">{categoria}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tecnologias
              .filter((tecnologia) => tecnologia.categoria === categoria)
              .map((tecnologia) => (
                <div
                  key={tecnologia.id}
                  className="rounded-xl border border-blue-500/20 bg-zinc-900 p-5 transition hover:border-blue-500"
                >
                  <h3 className="text-lg font-semibold">{tecnologia.nome}</h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Nível: {tecnologia.nivel}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}
