import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Eins</Button>
      <Button>Zwei</Button>
      <Button>Drei</Button>
      <Button>Vier</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
