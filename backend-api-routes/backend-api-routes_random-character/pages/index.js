import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);
  if (isLoading) return <div>Lade Daten...</div>;
  if (error) return <div>Fehler beim Laden der Daten.</div>;
  if (!data) return <div>Keine Daten gefunden.</div>;
  return (
    <div>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {String(value)}
          </li>
        ))}
      </ul>
    </div>
  );
}
