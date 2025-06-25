// src/pages/CatalogoPage.tsx
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Spacer from "../components/Spacer/Spacer";

const catalogoImages = [
  "/tattoo1.jpg",
  "/tattoo2.jpg",
  "/tattoo3.jpg",
  "/tattoo4.jpg",
  "/tattoo5.jpg",
  "/tattoo6.jpg",
];

const CatalogoPage: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <main className="bg-black text-white min-h-screen py-20 px-5 md:px-20">
      <Spacer />
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Explore nossos trabalhos mais recentes — tatuagens com traço, arte e história.
        </p>
      </header>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 capitalize text-center md:text-left">
          Trabalhos em destaque
        </h2>

        <div className="relative">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-5 p-2">
              {catalogoImages.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_100%] max-w-full sm:flex-[0_0_50%] sm:max-w-[50%] lg:flex-[0_0_33.3333%] lg:max-w-[33.3333%] xl:flex-[0_0_25%] xl:max-w-[25%] box-border"
                >
                  <div className="bg-[#111] rounded-xl overflow-hidden h-[280px] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:-translate-y-1">
                    <img
                      src={src}
                      alt={`Tatuagem ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões */}
          {canScrollPrev && (
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -translate-y-1/2 left-2 bg-[#1f1f1f] text-white p-3 rounded-full z-10 cursor-pointer hover:bg-white hover:text-black transition"
              aria-label="Anterior"
            >
              &#8592;
            </button>
          )}
          {canScrollNext && (
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#1f1f1f] text-white p-3 rounded-full z-10 cursor-pointer hover:bg-white hover:text-black transition"
              aria-label="Próximo"
            >
              &#8594;
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default CatalogoPage;
