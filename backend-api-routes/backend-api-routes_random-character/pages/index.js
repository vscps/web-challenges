import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);
  console.log(data);
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
