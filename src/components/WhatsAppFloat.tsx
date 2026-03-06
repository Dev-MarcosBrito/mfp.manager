import whatsappIcon from "../assets/whatsapp.png"

const WHATSAPP_URL = "https://wa.me/55047988736368"

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      aria-label="Abrir conversa no WhatsApp para solicitar demonstração"
    >
      <img
        src={whatsappIcon}
        alt=""
        className="h-8 w-8"
        aria-hidden
      />
    </a>
  )
}

export default WhatsAppFloat
export { WHATSAPP_URL }
