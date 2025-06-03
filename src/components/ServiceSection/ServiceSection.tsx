import CategorySection from "../CategorySection/CategorySection"

export default function Service() {
  // Aqui basta listar os nomes das categorias existentes em `CategorySection`
  const categories = ["fineline", "blackwork"];

  return (
    <section className="bg-black py-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-12">
        Artes Desenvolvidas
      </h2>

      {categories.map((category) => (
        <CategorySection key={category} category={category} />
      ))}

      <footer className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tatuador • Todos os direitos reservados
      </footer>
    </section>
  );
}
