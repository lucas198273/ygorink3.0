// components/WhatsAppModal.tsx
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  artName: string;
  phoneNumber: string;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  artName,
  phoneNumber,
}: Props) {
  const [medida, setMedida] = useState("");
  const [local, setLocal] = useState("");
  const [idade, setIdade] = useState("");
  const [tamanho, setTamanho] = useState("");

  if (!isOpen) return null;

  const message = encodeURIComponent(
    `Olá! Tenho interesse na arte "${artName}".\n\n` +
    `Informações do cliente:\n` +
    `📍 Local da tatuagem: ${local}\n` +
    `📏 Medida: ${medida}\n` +
    `📐 Tamanho estimado: ${tamanho}\n` +
    `🎂 Idade: ${idade}`
  );

  const link = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
      <div className="bg-white text-gray-800 rounded-xl w-full max-w-lg p-6 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Solicitar Arte: {artName}</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Local da tatuagem</label>
            <input
              type="text"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Ex: Braço, perna..."
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Medida (em cm)</label>
            <input
              type="text"
              value={medida}
              onChange={(e) => setMedida(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Ex: 10x15"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Tamanho estimado</label>
            <input
              type="text"
              value={tamanho}
              onChange={(e) => setTamanho(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Pequeno, médio ou grande"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Idade</label>
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Ex: 25"
            />
          </div>

          <div className="flex flex-col gap-2 mt-6">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-center px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Enviar via WhatsApp
            </a>
            <button
              type="button"
              onClick={onClose}
              className="border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-100 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
