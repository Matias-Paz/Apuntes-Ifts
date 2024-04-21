import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Header from "../../components/Header/Header";
import Start from "../../components/Start/Start";
import Footer from "../../components/Footer/Footer";
import { classicPrivateIcons } from "../../components/Header/headerInfo.js";
import { allRecordings } from "./videosClass.js";
import "./Video.css";
import { useParams } from "react-router-dom";

const Video = () => {
  const { id } = useParams();
  const [mainVideoId, setMainVideoId] = useState("");
  const [mainVideoTitle, setMainVideoTitle] = useState("");
  const [mainVideoSubject, setMainVideoSubject] = useState("");
  const [mainVideoTeacher, setMainVideoTeacher] = useState("");

  useEffect(() => {
    const foundVideo = allRecordings.find(item => item.videoId === id);

    if (foundVideo) {
      const { link, title, subject, teacher } = foundVideo;

      setMainVideoId(link);
      setMainVideoTitle(title);
      setMainVideoSubject(subject);
      setMainVideoTeacher(teacher);
    } else {
      setMainVideoTitle("Video no encontrado");
    }
  }, [id]);

  const handleVideoClick = (subject, link, title, teacher) => {
    setMainVideoSubject(subject);
    setMainVideoId(link);
    setMainVideoTitle(title);
    setMainVideoTeacher(teacher);
  };

  const filteredVideos = allRecordings.filter(
    video => video.subject === mainVideoSubject
  );

  const notFilteredVideos = allRecordings.filter(
    video => video.subject !== mainVideoSubject
  );

  return (
    <>
      <Header items={classicPrivateIcons} />
      <main>
        <Start title={"Video"} />
        <div className="video" id="recording">
          <div className="video__container container">
            <div className="video__title">
              <h3 className="title">Grabaciones de clases</h3>
              {/* <h4>
                {mainVideoTitle} de {mainVideoTeacher}
              </h4> */}
            </div>
            <div className="video__content">
              <YouTube
                key={mainVideoId}
                videoId={mainVideoId}
                className="custom-youtube-player"
              />

              <ul className="video__list">
                {filteredVideos.map(
                  ({ link, title, img, subject, teacher }, index) => (
                    <li
                      key={index}
                      className={`video__button ${
                        link === mainVideoId ? "video__button--active" : ""
                      }`}
                      onClick={() =>
                        handleVideoClick(subject, link, title, teacher)
                      }
                    >
                      <img src={img} alt={title} />
                      <div>
                        <p>{`${index + 1}. ${title}`}</p>
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Video;
