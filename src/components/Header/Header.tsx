// components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed inset-x-0 top-0 h-20 bg-[#e84c3d] text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between relative">

        {/* Logo sempre centralizada */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-white focus:outline-none z-50"
          aria-label="Abrir menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-green-400 transition">Início</Link>
          <Link to="/portfolio" className="hover:text-orange-400 transition">Portfólio</Link>
          <Link to="/contato" className="hover:text-green-400 transition">Contato</Link>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="fixed top-20 left-0 w-full bg-black text-white p-6 flex flex-col space-y-6 md:hidden z-40">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-400">Início</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="hover:text-orange-400">Portfólio</Link>
          <Link to="/contato" onClick={() => setMenuOpen(false)} className="hover:text-green-400">Contato</Link>
        </nav>
      )}
    </header>
  );
}
