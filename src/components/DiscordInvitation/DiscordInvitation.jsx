import "./DiscordInvitation.css";

const DiscordInvitation = () => {
  return (
    <>
      <section className="discordInvitation">
        <div className="discordInvitation__container">
          <h3 className="title">¡Únete a nuestra comunidad en Discord!</h3>
          <div className="discordInvitation__subcontainer">
            <p>
              ¿Tienes preguntas sobre los apuntes? ¿Quieres discutir temas con
              otros estudiantes o compartir tus propias notas? ¡Entonces nuestra
              comunidad de Discord es el lugar perfecto para ti!
            </p>
            <a
              target="_black"
              className="discordInvitation__link"
              href="https://discord.gg/TqyMBvvmaM"
            >
              Aceptar invitación
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiscordInvitation;
