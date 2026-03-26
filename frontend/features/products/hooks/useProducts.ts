"use client";

import { useEffect, useState } from "react";

import { Product } from "../types";
import { getProducts } from "../services/productService";
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data: Product[]) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return { products, loading };
};