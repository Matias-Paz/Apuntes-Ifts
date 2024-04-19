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
    title: "Tercera Clase",
    teacher: "María Alicia Piñeiro",
    date: "16-04-2024",
    disable: true,
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
    title: "Tercera Clase",
    teacher: "Graciela Medici",
    date: "18-04-2024",
    disable: true,
  },
];
