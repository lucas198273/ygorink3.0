import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TattooItem {
  name: string;
  image: string;
}

interface CategorySectionProps {
  category: string;
}

export default function CategorySection({ category }: CategorySectionProps) {
  // Inicia AOS uma vez quando o componente monta
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const tattoos: Record<string, TattooItem[]> = {
    fineline: [
      { name: "Retrato de Leão", image: "/assets/fineline/fnl1.jpeg" },
      { name: "Retrato de Leão", image: "/assets/fineline/fnl2.jpeg" },
      { name: "Retrato de Leão", image: "/assets/fineline/fnl3.jpeg" },
      { name: "Retrato de Leão", image: "/assets/fineline/fnl4.jpeg" },
      { name: "Rosto Feminino", image: "/assets/fineline/fnl5.jpeg" },
      { name: "Rosto Feminino", image: "/assets/fineline/fnl6.jpeg" },
      { name: "Rosto Feminino", image: "/assets/fineline/fnl7.jpeg" },
      { name: "Rosto Feminino", image: "/assets/fineline/fnl8.jpeg" },
      { name: "Rosto Feminino", image: "/assets/fineline/fnl9.jpeg" },
      { name: "Rosto Feminino", image: "/assets/fineline/fnl10.jpeg" },
    ],
    blackwork: [
      { name: "Caveira Sombria", image: "/assets/blackwork/blk1.jpeg" },
      { name: "Caveira Sombria", image: "/assets/blackwork/blk2.jpeg" },
      { name: "Caveira Sombria", image: "/assets/blackwork/blk3.jpeg" },
      { name: "Caveira Sombria", image: "/assets/blackwork/blk4.jpeg" },
      { name: "Caveira Sombria", image: "/assets/blackwork/blk5.jpeg" },
      { name: "Serpente Tribal", image: "/assets/blackwork/blk6.jpeg" },
      { name: "Navegação", image: "/assets/blackwork/blk7.jpeg" },
      { name: "Navegação", image: "/assets/blackwork/blk8.jpeg" },
      { name: "Navegação", image: "/assets/blackwork/blk9.jpeg" },
      { name: "Navegação", image: "/assets/blackwork/blk10.jpeg" },
      { name: "Navegação", image: "/assets/blackwork/blk11.jpeg" },
      { name: "Navegação", image: "/assets/blackwork/blk12.jpeg" },
      { name: "Navegação", image: "/assets/blackwork/blk13.jpeg" },
      { name: "Navegação", image: "/assets/blackwork/blk14.jpeg" },
    ],
  };

  const items: TattooItem[] = tattoos[category] ?? [];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="mb-16">
      <h3
        className="text-3xl font-semibold text-center text-white mb-6 capitalize"
        data-aos="fade-up"
      >
        {category}
      </h3>

      <div className="relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="
                  flex-none 
                  w-[60%] sm:w-1/2 
                  md:w-1/3 lg:w-1/4 
                  xl:w-1/5 
                "
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="
                  bg-[#111] 
                  rounded-xl 
                  overflow-hidden 
                  h-[360px] 
                  flex 
                  items-center 
                  justify-center 
                  shadow-[0_8px_20px_rgba(0,0,0,0.3)] 
                  transition-transform 
                  duration-300 
                  ease-out 
                  hover:-translate-y-2
                ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full 
                      h-full 
                      object-cover 
                      transition-transform 
                      duration-300 
                      ease-in-out 
                      hover:scale-105 
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="
            absolute 
            top-1/2 
            left-2 
            -translate-y-1/2 
            bg-[#e84c3d] 
            text-white 
            p-2 
            rounded-full 
            z-10
            hover:bg-[#d43c2d]
          "
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="
            absolute 
            top-1/2 
            right-2 
            -translate-y-1/2 
            bg-[#e84c3d] 
            text-white 
            p-2 
            rounded-full 
            z-10
            hover:bg-[#d43c2d]
          "
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
