import { DATABASE, LOGIC, MATH, TECHNIQUE } from "../../config/paths";

export const cardsBase = [
  {
    title: "Primera Clase",
    teacher: "Gustavo Virtos",
    date: "03-04-2024",
    disable: false,

    link: `${import.meta.env.VITE_API}${DATABASE}/1#start`,
  },
  {
    title: "Segunda Clase",
    teacher: "Gustavo Virtos",
    date: "08-04-2024",
    disable: false,
    link: `${import.meta.env.VITE_API}${DATABASE}/2#start`,
  },
  {
    title: "Tercera Clase",
    teacher: "Gustavo Virtos",
    date: "10-04-2024",
    disable: false,
    link: `${import.meta.env.VITE_API}${DATABASE}/3#start`,
  },

  {
    title: "Cuarta Clase",
    date: "15-04-2024",
    img: "/video-base.webp",
    teacher: "Gustavo Virtos",
    link: `${import.meta.env.VITE_API}${DATABASE}/4#start`,
  },
  {
    title: "Quinta Clase",
    date: "18-04-2024",
    img: "/video-base.webp",
    teacher: "Gustavo Virtos",
    link: `${import.meta.env.VITE_API}${DATABASE}/5#start`,
  },
  {
    title: "Sexta Clase",
    date: "24-04-2024",
    img: "/video-base.webp",
    teacher: "Gustavo Virtos",
    link: `${import.meta.env.VITE_API}${DATABASE}/6#start`,
  },
];

export const cardsCoding = [
  {
    title: "Presentacion y reglas",
    teacher: "Fernando Melissani",
    date: "25-03-2024",
    link: `${import.meta.env.VITE_API}${TECHNIQUE}/1#start`,
    disable: false,
  },
  {
    title: `Clase introductoria`,
    teacher: "Fernando Melissani",
    date: "05-04-2024",
    link: `${import.meta.env.VITE_API}${TECHNIQUE}/2#start`,
    disable: false,
  },
  {
    title: "Función print()",
    teacher: "Fernando Melissani",
    date: "08-04-2024",
    disable: false,
    link: `${import.meta.env.VITE_API}${TECHNIQUE}/3#start`,
  },
  {
    title: "Tipos de datos",
    teacher: "Fernando Melissani",
    date: "12-04-2024",
    disable: false,
    link: `${import.meta.env.VITE_API}${TECHNIQUE}/4#start`,
  },
  {
    title: "Operadores y Variables",
    teacher: "Fernando Melissani",
    date: "15-04-2024",
    disable: false,
    link: `${import.meta.env.VITE_API}${TECHNIQUE}/5#start`,
  },
  {
    title: "Comentarios e input()",
    teacher: "Fernando Melissani",
    date: "19-04-2024",
    disable: false,
    link: `${import.meta.env.VITE_API}${TECHNIQUE}/6#start`,
  },
  {
    title: "Decisiones y bucles",
    teacher: "Fernando Melissani",
    date: "22-04-2024",
    disable: false,
    link: `${import.meta.env.VITE_API}${TECHNIQUE}/7#start`,
  },
];

export const cardsLogic = [
  {
    title: "Lógica Proposional",
    teacher: "María Alicia Piñeiro",
    date: "26-03-2024",
    link: `${import.meta.env.VITE_API}${LOGIC}/1#start`,
    disable: false,
  },
  {
    title: "Leyes Lógicas",
    teacher: "María Alicia Piñeiro",
    date: "09-04-2024",
    link: `${import.meta.env.VITE_API}${LOGIC}/2#start`,
    disable: false,
  },
  {
    title: "Lógica de Predicados",
    teacher: "María Alicia Piñeiro",
    date: "16-04-2024",
    link: `${import.meta.env.VITE_API}${LOGIC}/3#start`,
    disable: false,
  },
  {
    title: "Repaso del Parcial",
    teacher: "María Alicia Piñeiro",
    date: "23-04-2024",
    link: `${import.meta.env.VITE_API}${LOGIC}/4#start`,
    disable: false,
  },
];

export const cardsMath = [
  {
    title: "Primera Clase",
    teacher: "Graciela Medici",
    date: "04-04-2024",
    link: `${import.meta.env.VITE_API}${MATH}/1#start`,
    disable: false,
  },
  {
    title: "Repaso de Tarea",
    teacher: "Graciela Medici",
    date: "11-04-2024",
    link: `${import.meta.env.VITE_API}${MATH}/2#start`,
    disable: false,
  },
  {
    title: "Practica de Actividad 1",
    teacher: "Graciela Medici",
    date: "18-04-2024",
    link: `${import.meta.env.VITE_API}${MATH}/3#start`,
    disable: false,
  },
  {
    title: "Practica de Actividad 2",
    teacher: "Graciela Medici",
    date: "25-04-2024",
    link: `${import.meta.env.VITE_API}${MATH}/4#start`,
    disable: false,
  },
];

// export const allRecordings = [
//   // --------------------------------------------------------------
//   },
//   {
//     subject: "logic",
//     title: "Funciones proposicionales (Parte 1)",
//     date: "16-04-2024",
//     teacher: "María Alicia Piñeiro",
//     img: "/video-logica.webp",
//     link: "https://www.youtube.com/watch?v=bA3OvkZpgFY",
//   },
//   {
//     subject: "logic",
//     title: "Funciones proposicionales (Parte 2)",
//     date: "16-04-2024",
//     teacher: "María Alicia Piñeiro",
//     img: "/video-logica.webp",
//     link: "https://www.youtube.com/watch?v=aI-G5V-IGfA",
//   },
//   {
//     subject: "logic",
//     title: "Repaso antes del parcial",
//     date: "23-04-2024",
//     teacher: "María Alicia Piñeiro",
//     img: "/video-logica.webp",
//     link: "https://www.youtube.com/watch?v=TZT12GccQYk",
//   },

//   {
//     subject: "mathematical",
//     title: "Primera Clase (Parte 1)",
//     date: "04-04-2024",
//     teacher: "Graciela Medici",
//     img: "/video-matematica.webp",
//     link: "https://www.youtube.com/watch?v=Wu5NaHW4HTA",
//   },
//   {
//     subject: "mathematical",
//     title: "Primera Clase (Parte 2)",
//     date: "04-04-2024",
//     teacher: "Graciela Medici",
//     img: "/video-matematica.webp",
//     link: "https://www.youtube.com/watch?v=1ezz92xfX8Y",
//   },
//   {
//     subject: "mathematical",
//     title: "Repaso de tarea anterior (Parte 1)",
//     date: "11-04-2024",
//     teacher: "Graciela Medici",
//     img: "/video-matematica.webp",
//     link: "https://youtu.be/oaoG3J8P7XI",
//   },
//   {
//     subject: "mathematical",
//     title: "Repaso de tarea anterior (Parte 2)",
//     date: "11-04-2024",
//     teacher: "Graciela Medici",
//     img: "/video-matematica.webp",
//     link: "https://youtu.be/Qz6sisPGdcE",
//   },
//   {
//     subject: "mathematical",
//     title: "Repaso con actividades nuevas",
//     date: "18-04-2024",
//     teacher: "Graciela Medici",
//     img: "/video-matematica.webp",
//     link: "https://youtu.be/4diGN3AepV0",
//   },

//   {
//     subject: "technique",
//     title: "Clase introductoria de Python",
//     date: "05-04-2024",
//     teacher: "Fernando Melissani",
//     img: "/video-tecnica.webp",
//     link: "https://www.youtube.com/watch?v=Y6132WfbxnE",
//   },
//   {
//     subject: "technique",
//     title: "Funcion Print() de Python",
//     date: "08-04-2024",
//     img: "/video-tecnica.webp",
//     teacher: "Fernando Melissani",
//     link: "https://www.youtube.com/watch?v=496qc6IA7qo",
//   },
//   {
//     subject: "technique",
//     title: "Tipos de datos de Python",
//     date: "12-04-2024",
//     img: "/video-tecnica.webp",
//     teacher: "Fernando Melissani",
//     link: "https://www.youtube.com/watch?v=QLn8OmS-ZJA",
//   },
//   {
//     subject: "technique",
//     title: "Operadores y variables de Python",
//     date: "15-04-2024",
//     teacher: "Fernando Melissani",
//     img: "/video-tecnica.webp",
//     link: "https://www.youtube.com/watch?v=CtNcRtcQ950",
//   },
//   {
//     subject: "technique",
//     title: "Comentarios e input()",
//     date: "19-04-2024",
//     teacher: "Fernando Melissani",
//     img: "/video-tecnica.webp",
//     link: "https://youtu.be/lXkyl7c8M2E",
//   },
//   {
//     subject: "technique",
//     title: "Decisiones en python",
//     date: "22-04-2024",
//     teacher: "Fernando Melissani",
//     img: "/video-tecnica.webp",
//     link: "https://www.youtube.com/watch?v=tmAiDgwWYuM",
//   },
// ];
