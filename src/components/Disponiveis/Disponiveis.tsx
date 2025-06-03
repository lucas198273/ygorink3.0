import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import WhatsAppModal from "./WhatsAppModal";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Art {
  name: string;
  image: string;
}

const arts: Art[] = [
  { name: "Arte 1", image: "/assets/dp1.jpeg" },
  { name: "Arte 2", image: "/assets/dp2.jpeg" },
  { name: "Arte 3", image: "/assets/dp3.jpeg" },
  { name: "Arte 4", image: "/assets/dp4.jpeg" },
  { name: "Arte 5", image: "/assets/dp5.jpeg" },
  { name: "Arte 6", image: "/assets/dp6.jpeg" },
  { name: "Arte 8", image: "/assets/dp8.jpeg" },
  { name: "Arte 9", image: "/assets/dp9.jpeg" },
  { name: "Arte 10", image: "/assets/dp10.jpeg" },
  { name: "Arte 11", image: "/assets/dp11.jpeg" },
  { name: "Arte 12", image: "/assets/dp12.jpeg" },
];

export default function Disponiveis() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState("");
  const phoneNumber = "31992311011";

  const handleWhatsAppClick = (artName: string) => {
    setSelectedArt(artName);
    setIsModalOpen(true);
  };

  return (
    <section className=" py-16"      style={{ backgroundImage: "url('./assets/bg.jpeg')" }}
>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Artes Disponíveis</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {arts.map((art, index) => (
                <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 px-2">
                  <div className="bg-black rounded-2xl h-96 shadow-lg flex items-center justify-center overflow-hidden relative">
                    <img
                      src={art.image}
                      alt={art.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full bg-black/70 p-4 text-white text-center">
                      <h4 className="text-lg font-semibold mb-2">{art.name}</h4>
                      <button
                        onClick={() => handleWhatsAppClick(art.name)}
                        className="bg-[#25D366] hover:bg-[#1ebc5c] text-white px-4 py-2 rounded-md transition"
                      >
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600 transition z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        artName={selectedArt}
        phoneNumber={phoneNumber}
      />
    </section>
  );
}
