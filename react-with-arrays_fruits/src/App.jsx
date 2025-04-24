import Card from "./components/Card";

export default function App() {
  const fruits = [
    { name: "Strawberry", id: 0, color: "red" },
    { name: "Banana", id: 1, color: "yellow" },
    { name: "Apple", id: 2, color: "green" },
    { name: "Orange", id: 3, color: "orange" },
    { name: "Kiwi", id: 4, color: "brown" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card name={fruit.name} key={fruit.id} color={fruit.color} />
      ))}
    </div>
  );
}
