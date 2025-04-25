export default function App() {
  return <Smiley isHappy={true} />;
}

function Smiley({ isHappy }) {
  if (isHappy) {
    return <p>&#128516;</p>;
  } else {
    return <p>&#128529;</p>;
  }
}
