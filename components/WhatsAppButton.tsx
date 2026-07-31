const WHATSAPP_NUMBER = "5537998749559";
const DEFAULT_MESSAGE =
  "Olá! Gostaria de saber mais sobre os equipamentos Olympo Steel.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-gold)] border border-[var(--color-gold)] text-[var(--color-ink)] shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-[var(--color-gold-soft)] hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full border border-[var(--color-ink)] opacity-30 animate-ping" />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="relative w-5 h-5"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.94 9.94 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.25-4.37c0-4.52 3.68-8.2 8.24-8.2 2.2 0 4.27.86 5.83 2.42a8.15 8.15 0 0 1 2.41 5.8c0 4.52-3.68 8.21-8.25 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.45-1.37-1.7-.14-.24-.02-.37.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31s-.86.84-.86 2.05.88 2.38 1 2.55c.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
      </svg>
    </a>
  );
}
