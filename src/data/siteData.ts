export const WSP_NUMBER = import.meta.env.PUBLIC_WSP_NUMBER || "";
export const WSP_MESSAGE = encodeURIComponent("¡Hola! Quisiera más información sobre las reuniones del Ministerio Catedral de Fuego.");
export const WSP_CHANNEL = import.meta.env.PUBLIC_WSP_CHANNEL || "";
export const SPOTIFY_URL = import.meta.env.PUBLIC_SPOTIFY_URL || "";
export const RADIO_STREAM_URL = import.meta.env.PUBLIC_RADIO_STREAM_URL || "";
export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@ministeriocatedraldefuego?si=tjjvBBqS8QNFZEpt",
  facebook: "https://www.facebook.com/share/1DrRHAtW8d/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/apostolmaicosuarez?stkn=MXZwM3kwc2hhN3F3Mw==",
  spotify: SPOTIFY_URL,
  whatsappChannel: WSP_CHANNEL,
  radio: RADIO_STREAM_URL
};

export const NOVEDADES = [
  {
    id: 1,
    titulo: "40 Días de Ayuno y Oración",
    subtitulo: "Congregacional · ¡Súmate!",
    fecha: "Del Miércoles 4 de Noviembre al Domingo 13 de Diciembre",
    targetDate: "2026-11-04T00:00:00",
    invitados: "4 Etapas Estratégicas (10 Días cada una)",
    imagen: "/images/dias-de-ayuno.jpg",
    detalle: "Un tiempo para activar la revelación de la Palabra y direccionar la oración para alcanzar respuestas. Acompañamiento de Lunes a Viernes vía grupo de WhatsApp.",
    linkBtn: `https://wa.me/${WSP_NUMBER}?text=${encodeURIComponent("¡Hola! Quisiera sumarme a los 40 Días de Ayuno y Oración.")}`,
    btnText: "Sumarme al Ayuno",
    isExternal: false
  },
  {
    id: 2,
    titulo: "Congreso de Mujeres",
    subtitulo: "Cuando una Mujer se levanta, una generación se Transforma",
    fecha: "Día 14 de Noviembre · 18:30 hs",
    targetDate: "2026-11-14T18:30:00",
    invitados: "Profeta Soledad Suárez (Anfitriona) & Profeta Daniela Larrea (Bs As)",
    imagen: "/images/congreso-mujeres.jpg",
    detalle: "Una tarde en la presencia de Dios. Entrada libre y gratuita. Te invita Ministerio Catedral de Fuego.",
    linkBtn: `https://wa.me/${WSP_NUMBER}?text=${encodeURIComponent("¡Hola! Quisiera más información para asistir al Congreso de Mujeres el 14 de Noviembre.")}`,
    btnText: "Inscribirme / Consultar",
    isExternal: false
  },
  {
    id: 3,
    titulo: "Escuchá FM 95.7 Cristiana",
    subtitulo: "Con el Apóstol Maico Suárez y su equipo radial",
    fecha: "De Lunes a Viernes 9:00 y 19:00 hs · Domingos 12:00 hs",
    targetDate: null,
    invitados: "Radio Cristiana FM 95.7",
    imagen: "/images/radio-fm957.jpg",
    detalle: "Sintoniza la radio o escuchanos en vivo online a través de nuestra señal de transmisión digital.",
    linkBtn: RADIO_STREAM_URL,
    btnText: "Escuchar Radio en Vivo",
    isExternal: true
  },
  {
    id: 4,
    titulo: "Escuela de Danza Linaje Escogido",
    subtitulo: "Inscripción Abierta",
    fecha: "Formación Espiritual, Artística y Alabanza",
    targetDate: null,
    invitados: "Ministerio Catedral de Fuego",
    imagen: "/images/linaje-escogido.jpg",
    detalle: "Alabanza que impacta y transforma. Danzamos para la gloria de Dios. ¡Sumate a la Escuela de Danza!",
    linkBtn: `https://wa.me/5493414687620?text=${encodeURIComponent("¡Hola! Quisiera inscribirme en la Escuela de Danza Linaje Escogido.")}`,
    btnText: "Inscribirme por WhatsApp",
    isExternal: false
  }
];