

export default function AboutIntro() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-800 text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Imagem do artista */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <img
            src="/assets/img4.webp" // Substitua pelo caminho correto da imagem
            alt="DJ KAZAK"
            loading="lazy"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        {/* Texto de introdução */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
            Sobre DJ KAZAK
          </h2>
          <p className="text-lg text-gray-800 mb-4">
            Kazak é o projeto musical criado por Lucas Bernardo, Mestre em Patologia, Biólogo, Produtor e DJ da cena underground belorizontina.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Com formação musical pela Evolve Escola de Música e mentorias personalizadas com DJs renomados da cena de BH, Kazak constrói uma identidade própria com batidas fortes e sons vibrantes, variando entre as vertentes do techno peak time, raw e hard.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Criando uma atmosfera onde os sentimentos afloram e as sensações dançam no ritmo do som, afinal, a música une as pessoas!
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Com passagens pelos maiores clubes de BH, como Deputamadre e Andaluz, se apresentou em festas de destaque na cena de BH, como Mary Jane, Hórus e Rampage, além de clubes e festas undergrounds como Área 51, Beer Love Choperia, Bêra Choperia, Yaci Nova Era, Coletivo Lado B, Coletivo Untraxx e Coletivo Techneira, totalizando mais de 200 apresentações em BH no ano de 2024!
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Destaque em 2024 como novo talento na revista House Mag, é residente do coletivo Tbtechno e co-fundador e residente do coletivo Techneira.
          </p>
          <p className="text-lg text-gray-800">
            Conheça Kazak e deixe que as batidas te levem às melhores sensações. Dance ao ritmo das batidas e vibre ao som do Techno!
          </p>
        </div>
      </div>
    </section>
  );
}
