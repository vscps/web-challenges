export default function App() {
  return <Greeting name="Daniel" />;
}

function Greeting({ name }) {
  if (name == "Sven") {
    return <p>Hello, Coach!</p>;
  } else {
    return <p>Hello, {name}!</p>;
  }
}
