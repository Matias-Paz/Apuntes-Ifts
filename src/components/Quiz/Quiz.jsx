import "./Quiz.css";

const Quiz = ({ text, href }) => {
  return (
    <a className="quiz" href={href} rel="noopener noopener" target="_blank">
      <span>{text}</span>
      <svg
        className="quiz__svg"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
      </svg>
    </a>
  );
};

export default Quiz;
