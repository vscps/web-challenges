import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function addPeople() {
    setPeople(people + 1);
    console.log(people);
  }

  function removePeople() {
    if (people >= 1) {
      setPeople(people - 1);
    }
    console.log(people);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={addPeople} onDelete={removePeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
