import {
  CALENDAR,
  CORRELATIVIDADES,
  RECORDING,
  SCHEDULE,
} from "../../config/paths";

export const classicIcons = [
  {
    href: "/#start",
    ariaLabel: `${import.meta.env.VITE_API}/#start`,
    img: "/icon-note.png",
    alt: "icono de inicio",
    text: "Inicio",
  },
  {
    href: `${import.meta.env.VITE_API}${CALENDAR}#start`,
    ariaLabel: "Botón de calendario",
    img: "/icon-calendar.png",
    alt: "icono de calendario",
    text: "Calendario",
  },
  {
    href: `${import.meta.env.VITE_API}${CORRELATIVIDADES}#start`,
    ariaLabel: "Botón de materias correlativas",
    img: "/icon-studio.png",
    alt: "icono de materias correlativas",
    text: "Correlatividades",
  },
  {
    href: `${import.meta.env.VITE_API}${SCHEDULE}#start`,
    ariaLabel: "Horarios",
    img: "/icon-reloj.png",
    alt: "icono de reloj",
    text: "Horarios",
  },
];

export const classicPrivateIcons = [
  {
    href: "/#start",
    ariaLabel: `${import.meta.env.VITE_API}/#start`,
    img: "/icon-note.png",
    alt: "icono de inicio",
    text: "Inicio",
  },
  // {
  //   href: "/#start",
  //   ariaLabel: `${import.meta.env.VITE_API}/#start`,
  //   img: "/icon-note.png",
  //   alt: "icono de apuntes",
  //   text: "Apuntes",
  // },
  {
    href: `${import.meta.env.VITE_API}${RECORDING}#start`,
    ariaLabel: "Grabacion",
    img: "/icon-recording.png",
    alt: "icono de grabacion",
    text: "Grabacion",
  },
  {
    href: `${import.meta.env.VITE_API}${CALENDAR}#start`,

    ariaLabel: "Botón de calendario",
    img: "/icon-calendar.png",
    alt: "icono de calendario",
    text: "Calendario",
  },
  {
    href: `${import.meta.env.VITE_API}${SCHEDULE}#start`,
    ariaLabel: "Horarios",
    img: "/icon-reloj.png",
    alt: "icono de reloj",
    text: "Horarios",
  },
  {
    href: `${import.meta.env.VITE_API}${CORRELATIVIDADES}#start`,
    ariaLabel: "Botón de materias correlativas",
    img: "/icon-studio.png",
    alt: "icono de materias correlativas",
    text: "Correlatividades",
  },
];
