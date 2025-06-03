// src/components/SocialMedia.tsx
import React from 'react';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const SocialMedia: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <div
          className="w-52 h-52 mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="/imgartista.png"
            alt="Ygor Tattoo"
            className="w-full h-full object-contain"
          />
        </div>

        <h2
          className="text-4xl font-semibold mb-3 text-white tracking-wide"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Artista Ygor
        </h2>

        <p
          className="text-gray-400 max-w-md mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Acompanhe os trabalhos mais recentes, bastidores e novidades nas redes sociais.
        </p>

        <div
          className="flex gap-10 flex-wrap justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <a
            href="https://instagram.com/ygor_tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-500 transition-transform hover:scale-105"
          >
            <FaInstagram className="w-7 h-7" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.tiktok.com/@ygor_tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white/70 transition-transform hover:scale-105"
          >
            <FaTiktok className="w-7 h-7" />
            <span>TikTok</span>
          </a>
          <a
            href="https://www.youtube.com/@ygor_tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-red-500 transition-transform hover:scale-105"
          >
            <FaYoutube className="w-7 h-7" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
