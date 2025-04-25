import "./styles.css";
import { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  const [message, setMessage] = useState("Secret message incoming...");
  function handleShowMessage() {
    setShowMessage(!showMessage);
    console.log(showMessage);
    console.log(message);
  }

  function handleSetMessage() {
    if (!showMessage) {
      setMessage(message);
      return;
    } else {
      setMessage("The secret of Monkey Island is ... wait, no spoilers!");
    }
  }

  if (!showMessage) {
    return (
      <div className="container">
        <h1>
          Message is hidden{" "}
          <span role="img" aria-label="scream">
            😱
          </span>
        </h1>
        <button
          type="button"
          className="button"
          onClick={() => handleShowMessage()}
        >
          Show Message
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button
        type="button"
        className="button"
        onClick={() => handleShowMessage()}
      >
        Hide Message
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handleSetMessage()}
      >
        Now really show the message!
      </button>
      <h2>{message}</h2>
    </div>
  );
}
