export default function Button({ handleEvent, name, isActive }) {
  return (
    <button
      className={"button" + (isActive ? " selected" : "")}
      onClick={handleEvent}
    >
      {name}
    </button>
  );
}
