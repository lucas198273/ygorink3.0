// src/components/SocialMediaSection.tsx
import React from 'react';
import { FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';

const SocialMediaSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/assets/img2.webp"
          alt="DJ KAZAK"

          className="mx-auto mb-6 w-32 h-32 rounded-full object-cover shadow-lg"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
          Conecte-se com DJ KAZAK
        </h2>
        <p className="mb-6 text-lg text-gray-300">
          Siga o artista nas redes sociais e acompanhe os lançamentos mais recentes.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://youtube.com/@listen_kazak?si=WWjfE2QBzP4pNmdH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaYoutube className="w-10 h-10 mb-2" />
            <span className="text-sm">YouTube</span>
          </a>
          <a
            href="https://www.tiktok.com/@listen_kazak?_t=ZM-8wW1Kr6GF4H&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaTiktok className="w-10 h-10 mb-2" />
            <span className="text-sm">TikTok</span>
          </a>
          <a
            href="https://www.instagram.com/listen_kazak?igsh=MTJyM2M2eWtuc29qag%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-white hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram className="w-10 h-10 mb-2" />
            <span className="text-sm">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
