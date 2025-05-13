import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) return <div>Lade Produkt...</div>;
  if (error) return <div>Fehler beim Laden des Produkts.</div>;
  if (!data) return <div>Produkt nicht gefunden.</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>
        <strong>Description:</strong> {data.description}
      </p>
    </div>
  );
}
