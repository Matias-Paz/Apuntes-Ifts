import { Calendar, dayjsLocalizer } from "react-big-calendar";
import ModalCalendar from "../ModalCalendar/ModalCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import "./CalendarSection.css";
import { useState } from "react";

const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "Sin eventos",
};

const myEventsList = [
  {
    start: dayjs("2024-4-11T00:00:00").toDate(),
    end: dayjs("2024-4-11T23:59:59").toDate(),
    title: "Evaluación diagnóstica de Análisis Matemático",
    teacher: "Graciela Medici",
  },

  {
    start: dayjs("2024-4-30T00:00:00").toDate(),
    end: dayjs("2024-4-30T23:59:59").toDate(),
    title: "Primer parcial de Lógica Computacional",
    teacher: "María Alicia Piñeiro",
  },

  {
    start: dayjs("2024-5-16T00:00:00").toDate(),
    end: dayjs("2024-5-1623:59:59").toDate(),
    title: "Primer parcial de Análisis Matemático",
    teacher: "María Alicia Piñeiro",
    description: `"Es una fecha posible, depende si hay paro de colectivos", dijo la profesora.`,
  },

  {
    start: dayjs("2024-5-29T00:00:00").toDate(),
    end: dayjs("2024-5-29T23:59:59").toDate(),
    title: "Primer parcial de Administración de Base de Datos",
    teacher: "Gustavo Virtos",
  },

  {
    start: dayjs("2024-5-31T00:00:00").toDate(),
    end: dayjs("2024-5-3123:59:59").toDate(),
    title: "Primer parcial de Tecnicas en Programación",
    teacher: "Fernando Melissani",
    description: `El examen será de múltiple opción y abarcará temas como print, tipos de datos, operadores y variables, comentarios e input, bucles (for, while, else), listas, tuplas, diccionarios, sin incluir break, continue, funciones y excepciones.`,
  },

  {
    start: dayjs("2024-6-18T00:00:00").toDate(),
    end: dayjs("2024-6-18T23:59:59").toDate(),
    title: "Segundo parcial de Lógica Computacional",
    teacher: "María Alicia Piñeiro",
  },
  {
    start: dayjs("2024-06-25T00:00:00").toDate(),
    end: dayjs("2024-06-25T23:59:59").toDate(),
    title: "Recuperatorio de Lógica Computacional",
    teacher: "María Alicia Piñeiro",
  },
  {
    start: dayjs("2024-6-27T00:00:00").toDate(),
    end: dayjs("2024-6-27T23:59:59").toDate(),
    title: "Recuperación de Análisis Matemático",
    description: `"Es una fecha posible", dijo la profesora. No la tomen como definitiva.`,
    teacher: "Graciela Medici",
  },
  {
    start: dayjs("2024-7-02T00:00:00").toDate(),
    end: dayjs("2024-7-02T23:59:59").toDate(),
    title: "Cierre de notas de Lógica Computacional",
    teacher: "María Alicia Piñeiro",
  },
  {
    start: dayjs("2024-7-05T00:00:00").toDate(),
    end: dayjs("2024-7-05T23:59:59").toDate(),
    title: "Recuperación de Elementos de Análisis Matemático",
    description: `"Es una fecha posible", dijo la profesora. No la tomen como definitiva.`,
    teacher: "Graciela Medici",
  },
  {
    start: dayjs("2024-7-15T00:00:00").toDate(),
    end: dayjs("2024-7-26T23:59:59").toDate(),
    title: "Receso invernal",
  },
];

dayjs.locale("es");

const CalendarSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const localizer = dayjsLocalizer(dayjs);
  const today = dayjs();
  const dayNumber = today.format("D");
  const dayName = today.format("dddd");
  const monthName = today.format("MMMM");
  const year = today.format("YYYY");

  const handleEventClick = event => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log(today);

  return (
    <>
      <section className="calendarSection">
        <div className="container">
          <h3 className="title">Calendario de fechas</h3>
          <div className="timetable__date">
            <h4>Fecha de hoy:</h4>
            <p>
              <span className="timetable__paragraph--capitalize">
                {dayName}
              </span>
              ,&nbsp;
              {dayNumber} de{" "}
              <span className="timetable__paragraph--capitalize">
                {monthName}
              </span>{" "}
              de{" "}
              <span className="timetable__paragraph--capitalize">{year}</span>
            </p>
          </div>
          <Calendar
            className="calendarSection__calendar"
            messages={messages}
            localizer={localizer}
            events={myEventsList}
            views={["month", "agenda"]}
            onSelectEvent={handleEventClick}
          />
        </div>
      </section>
      <ModalCalendar
        active={showModal}
        event={selectedEvent}
        onClose={closeModal}
      />
    </>
  );
};

export default CalendarSection;
