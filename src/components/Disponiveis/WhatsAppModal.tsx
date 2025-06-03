// components/WhatsAppModal.tsx

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
  if (!isOpen) return null;

  const link = `https://wa.me/${phoneNumber}?text=Olá! Tenho interesse na arte "${artName}".`;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white rounded-xl p-8 max-w-[90%] text-center text-gray-900">
        <h3 className="text-xl font-semibold mb-4">Deseja falar via WhatsApp sobre:</h3>
        <p className="mb-6">
          <strong className="text-lg">{artName}</strong>
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-md mb-4 hover:bg-green-600 transition"
        >
          Abrir WhatsApp
        </a>
        <br />
        <button
          onClick={onClose}
          className="mt-2 bg-transparent border border-red-600 text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
