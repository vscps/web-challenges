import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, handleRoll }) {
  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={value} />
    </button>
  );
}
