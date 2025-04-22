export default function App() {
  return <Button disabled={false} style="color: red" text="Hallo"></Button>;
}

function Button({ color, disabled, text }) {
  function handleClick() {
    alert("Du hast mich angeklickt!");
  }
  return (
    <button disabled={disabled} style={{ color: color }} onClick={handleClick}>
      {text}
    </button>
  );
}
