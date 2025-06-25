import React from "react";

const AboutSection: React.FC = () => {
  const photoSrc = "/assets/artista/img1.png";

  return (
    <section
      className="bg-black text-white px-6 py-16 md:px-20 lg:px-32"
      data-aos="fade-up"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Texto */}
        <div
          className="text-center md:text-left md:flex-1 max-w-xl"
          data-aos="fade-left"
        >
          <h2 className="text-4xl font-extrabold mb-6 tracking-tight text-white/90">
            Sobre o Artista
          </h2>
          <p className="text-lg leading-relaxed text-white/80">
            Sou apaixonado por arte desde a infância e, há 5 anos, transformei essa paixão em profissão. A tatuagem é minha forma de expressão, permitindo que eu crie marcas únicas e significativas para cada pessoa.
            <br /><br />
            Trabalho principalmente com os estilos <strong className="text-white font-semibold">fine line</strong> e <strong className="text-white font-semibold">blackwork</strong>, focando em traços precisos e significados profundos. Para mim, tatuar é mais do que estética: é um processo de conexão e transformação.
            <br /><br />
            Hoje, vivo do que amo, ajudando as pessoas a eternizar suas histórias através da arte.
          </p>
        </div>

        {/* Imagem */}
        <div
          className="w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-lg ring-1 ring-white/10"
          data-aos="fade-right"
        >
          <img
            src={photoSrc}
            alt="Tatuador"
            className="w-full h-auto object-cover rounded-3xl transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
