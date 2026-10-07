const tecnologias = [
    { id: 1, nome: "JavaScript", nivel: "Avançado" },
    { id: 2, nome: "TypeScript", nivel: "Intermediário" },
    { id: 3, nome: "React", nivel: "Avançado" },
]


export default function Tecnologia() {
    return (
        <section id="tecnologia">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>Minhas Tecnologias</h1>
                <p>Essas são as tecnologias que eu mais utilizo</p>
                {tecnologias.map((tecnologia) => (
                    <div key={tecnologia.id} className="flex flex-row gap-3">
                        <h2>{tecnologia.nome}</h2>
                        <p>{tecnologia.nivel}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}