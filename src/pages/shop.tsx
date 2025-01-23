import { useProducts } from "../services/product-service";

export function Shop() {
  const { data } = useProducts("1", "20");

  return <>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</>;
}
