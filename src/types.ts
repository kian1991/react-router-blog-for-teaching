export type BlogPost = {
  id: number;
  title: string;
  text: string;
  date: string;
  tag: string;
  likes: number;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: unknown;
  stockQuantity: number;
  warehouseId: number | null;
  createdAt: string;
  updatedAt: string;
};
