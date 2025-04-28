import "./StatusCheck.css";
import { useState } from "react";
import { useEffect } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const statusIcon = "⁉️";
  const [status, setStatus] = useState(statusIcon);
  // Something needs to change here…
  // ↙️
  function handleCheckApiStatus() {
    async function checkState() {
      try {
        const response = await fetch(apiStatusUrl);
        const data = await response.json();
        console.log(data);
        setStatus(data.status == "Ok" ? "✅" : "❌");
        console.log(status);
      } catch (error) {
        console.log(error);
      }
    }

    checkState();
    /**
     * Hint 1:
     * Use the `fetch()` function to send a request to `apiStatusUrl`.
     *
     * Hint 2:
     * The `fetch()` function returns a promise that resolves to a Response
     * object.
     *
     * Hint 3:
     * The Response object has a `ok` property which is true if the response
     * is okay and false if it is not.
     **/
    // --v-- write your code here --v--
    // --^-- write your code here --^--
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{status}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
