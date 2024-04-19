import ModalVideo from "../ModalVideo/ModalVideo";
import { useState } from "react";
import arrowVideo from "/arrow-video.png";
import "./YoutubeRecording.css";

const YoutubeRecording = ({
  urlPrimary,
  urlSecondary,
  urlTertiary,
  imgVideoPrimary,
  imgVideoSecondary,
  imgVideoTertiary,
  text,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = videoUrl => {
    setSelectedVideo(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section
        className="youtubeRecording classSubjects__section section"
        id="grabacion"
      >
        <h4 className="title">Grabacion de clase</h4>

        <div className="youtubeRecording__imgs">
          <div className="youtubeRecording__imgs-container">
            <div
              className="youtubeRecording__play"
              onClick={() => openModal(urlPrimary)}
            >
              {urlSecondary && (
                <p className={`youtubeRecording__paragraph`}>Parte 1</p>
              )}
              <div className="youtubeRecording__play-icon">
                <img src={arrowVideo} alt="flecha de reproducir" />
              </div>
            </div>
            <img className="youtubeRecording__img" src={imgVideoPrimary} />
          </div>
          {urlSecondary && (
            <div className="youtubeRecording__imgs-container">
              <div
                className="youtubeRecording__play"
                onClick={() => openModal(urlSecondary)}
              >
                <p className={`youtubeRecording__paragraph`}>Parte 2</p>

                <div className="youtubeRecording__play-icon">
                  <img src={arrowVideo} alt="flecha de reproducir" />
                </div>
              </div>
              <img className="youtubeRecording__img" src={imgVideoSecondary} />
            </div>
          )}
          {urlTertiary && (
            <div className="youtubeRecording__imgs-container">
              <div
                className="youtubeRecording__play"
                onClick={() => openModal(urlTertiary)}
              >
                <p className={`youtubeRecording__paragraph`}>Parte 3</p>

                <div className="youtubeRecording__play-icon">
                  <img src={arrowVideo} alt="flecha de reproducir" />
                </div>
              </div>
              <img className="youtubeRecording__img" src={imgVideoTertiary} />
            </div>
          )}
        </div>
        {text && <p className="classSubjects__grid--color">{text}</p>}
      </section>
      <ModalVideo
        isOpen={modalOpen}
        onClose={closeModal}
        video={selectedVideo}
      />
    </>
  );
};

export default YoutubeRecording;
