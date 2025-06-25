// components/ArtistaPreview.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function ArtistaPreview() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const goToAboutPage = () => {
    navigate("/about");
  };

  return (
    <section className="flex justify-center py-12 px-4">
      <div
        className="
          flex 
          flex-wrap 
          gap-8 
          bg-black bg-opacity-40 
          rounded-xl 
          shadow-[0_4px_12px_rgba(0,0,0,0.4)] 
          overflow-hidden 
          max-w-[900px] 
          w-full 
          p-4 
          md:flex-nowrap 
          md:gap-8
        "
        data-aos="fade-up"
      >
        {/* Imagem do artista */}
        <img
          src="/assets/artista/imgartista.png"
          alt="Artista"
          className="
            w-[300px] 
            max-h-[200px] 
            object-contain 
            rounded-md 
            flex-shrink-0 
            bg-black 
            md:w-[300px] 
            md:max-h-[200px] 
            sm:w-full 
            sm:max-h-[300px]
          "
        />

        {/* Informações do artista */}
        <div
          className="
            flex-1 
            p-4 
            flex 
            flex-col 
            justify-center 
            md:pl-4 
            sm:text-center
          "
        >
          <h3 className="text-2xl font-bold text-white mb-2">Nome do Artista</h3>
          <p className="text-base text-gray-300 mb-4">
            Mais de 10 anos criando tatuagens únicas. Conheça o estilo, inspirações
            e trajetória deste artista.
          </p>
          <button
            onClick={goToAboutPage}
            className="
              bg-red-600 
              text-white 
              px-5 
              py-2 
              rounded-md 
              text-base 
              transition 
              duration-200 
              ease-in-out 
              hover:bg-red-700 
              hover:scale-105 
              self-start 
              sm:self-center
            "
          >
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}
