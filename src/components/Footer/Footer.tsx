import { FaInstagram, FaYoutube, } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold mb-4 md:mb-0">DJ KAZAK</h2>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/listen_kazak?igsh=MTJyM2M2eWtuc29qag%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@listen_kazak?si=WWjfE2QBzP4pNmdH"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
        
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} DJ Projeto. Todos os direitos reservados.
      </div>
    </footer>
  );
}
