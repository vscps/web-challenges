export default function App() {
  return <Sum valueA={6} valueB={9} />;
}

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <p>
      The sum of {valueA} and {valueB} is {result}.
    </p>
  );
}
