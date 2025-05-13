import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductList() {
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

  if (isLoading) return <div>Lade Produkte...</div>;
  if (error) return <div>Fehler beim Laden der Produkte.</div>;
  if (!data) return <div>Keine Daten</div>;

  return (
    <ul>
      {data.map((object) => (
        <li key={object.id}>{object.name}</li>
      ))}
    </ul>
  );
}
