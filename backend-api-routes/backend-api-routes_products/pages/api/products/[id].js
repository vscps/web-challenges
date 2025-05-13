import { getProductById } from "@/services/productServices";
export default function handleProductID(request, response) {
  const { id } = request.query;
  const product = getProductById(id);
  if (!product) {
    response.status(400);
    response.end("Product not found with id " + id);
  }

  return response.status(200).json(product);
}
