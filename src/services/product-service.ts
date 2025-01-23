import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";
import { BASE_API_URL } from "../constants";

type ApiResponse = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
  };
  data: any;
};

export const useProducts = (page: string, pageSize: string) =>
  useQuery<Product[]>({
    queryKey: ["products", page, pageSize],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_API_URL}/products?page_size=${pageSize}&page=${page}`,
      );
      if (!response.ok) throw Error("Failed to fetch...");
      const apiResponse: ApiResponse = await response.json();
      return apiResponse.data;
    },
  });

export const useProduct = (productId: string) =>
  useQuery<Product>({
    queryKey: ["products", productId],
    queryFn: async () => {
      const response = await fetch(`${BASE_API_URL}/products/${productId}`);
      if (!response.ok) throw Error("Failed to fetch...");
      const apiResponse: ApiResponse = await response.json();
      return apiResponse.data;
    },
  });
