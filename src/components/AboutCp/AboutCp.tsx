// src/components/About.tsx

import 'aos/dist/aos.css';

function AboutCp() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bloco de Informações */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4" data-aos="fade-down" data-aos-delay="550">
              <div className="w-20 h-20 relative">
                <img
                  src="/assets/businesimg/logo.png"
                  alt="Logo do Estúdio"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h2
                className="text-white text-4xl font-bold"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                Nosso Estúdio
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <p
                className="text-white text-lg"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Atendemos em nossa sede localizada no coração da cidade. Venha conhecer nosso
                espaço e desfrutar de um ambiente acolhedor e criativo!
              </p>
              <div className="w-full h-64 rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9897350156!2d-44.19941862643786!3d-19.966933939456432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c3506cfa1881%3A0xba77fec8f0b36b!2sAudax%20Studio%20Tattoo!5e0!3m2!1spt-BR!2sbr!4v1741203465263!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Estúdio"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bloco de Fotos */}
          <div className="flex flex-col gap-6">
            <h3
              className="text-white text-3xl font-semibold"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Nosso Espaço
            </h3>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-48 rounded-md overflow-hidden group"
                >
                  <img
                    src={`/assets/businesimg/img${i}.jpeg`}
                    alt={`Foto do Estúdio ${i}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCp;
