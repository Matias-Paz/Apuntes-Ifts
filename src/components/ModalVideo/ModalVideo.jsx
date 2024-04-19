import YoutubePlayer from "react-player/youtube";
import { useEffect } from "react";
import "./ModalVideo.css";

const ModalVideo = ({ isOpen, onClose, video }) => {
  useEffect(() => {
    const header = document.querySelector("header");

    if (isOpen && !header.classList.contains("header--top")) {
      header.classList.add("header--top");
    }
  }, [isOpen]);

  return (
    <section
      className={`modalVideo ${!isOpen ? "modalVideo--opacity" : ""}`}
      onClick={onClose}
    >
      <YoutubePlayer id="youtubeRecordingVideo" url={video} controls={true} />
    </section>
  );
};

export default ModalVideo;
