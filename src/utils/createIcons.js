import { PRIVATE } from "../config/paths";

export function createIconPrimary(technique) {
  return [
    {
      href: `${PRIVATE}/${technique}#start`,
      ariaLabel: "Botón de inicio",
      img: "/icon-home.png",
      alt: "icono de inicio",
      text: "Inicio",
    },
    {
      href: `${PRIVATE}/${technique}#topics`,
      ariaLabel: "Botón de temas",
      img: "/icon-note.png",
      alt: "icono de temas",
      text: "Temas",
    },
    {
      href: `${PRIVATE}/${technique}#task`,
      ariaLabel: "Botón de tarea",
      img: "/icon-studio.png",
      alt: "icono de tarea",
      text: "Tarea",
    },
  ];
}

export function createIconSecondary(technique) {
  return [
    {
      href: `${PRIVATE}/${technique}#start`,
      ariaLabel: "Botón de inicio",
      img: "/icon-home.png",
      alt: "icono de inicio",
      text: "Inicio",
    },
    {
      href: `${PRIVATE}/${technique}#grabacion`,
      ariaLabel: "Botón de temas",
      img: "/icon-recording.png",
      alt: "icono de temas",
      text: "Grabacíon",
    },
    {
      href: `${PRIVATE}/${technique}#topics`,
      ariaLabel: "Botón de temas",
      img: "/icon-note.png",
      alt: "icono de temas",
      text: "Temas",
    },
    {
      href: `${PRIVATE}/${technique}#task`,
      ariaLabel: "Botón de tarea",
      img: "/icon-studio.png",
      alt: "icono de tarea",
      text: "Tarea",
    },
  ];
}

export function createIconTertiary(technique) {
  return [
    {
      href: `${PRIVATE}/${technique}#start`,
      ariaLabel: "Botón de inicio",
      img: "/icon-home.png",
      alt: "icono de inicio",
      text: "Inicio",
    },
    {
      href: `${PRIVATE}/${technique}#grabacion`,
      ariaLabel: "Botón de temas",
      img: "/icon-recording.png",
      alt: "icono de temas",
      text: "Grabacíon",
    },
    {
      href: `${PRIVATE}/${technique}#topics`,
      ariaLabel: "Botón de temas",
      img: "/icon-note.png",
      alt: "icono de temas",
      text: "Temas",
    },
  ];
}

export function createIconRecord(technique) {
  return [
    {
      href: `${PRIVATE}/${technique}#start`,
      ariaLabel: "Botón de inicio",
      img: "/icon-home.png",
      alt: "icono de inicio",
      text: "Inicio",
    },
    {
      href: `${PRIVATE}/${technique}#grabacion`,
      ariaLabel: "Botón de temas",
      img: "/icon-recording.png",
      alt: "icono de temas",
      text: "Grabacíon",
    },
  ];
}
