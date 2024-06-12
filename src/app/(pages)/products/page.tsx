import * as React from "react";
import ProtectedLayout from "@/components/ProtectedLayout";
import ProductCard from "@/components/ProductCard";
import { testProducts } from "@/lib/products";

export type ProductType = {
  name: string;
  description: string;
  price: number;
};

export default function ProductsPage() {
  const GetProducts = (): ProductType[] => {
    return testProducts;
  };

  let productsList: ProductType[] = GetProducts();

  return (
    <ProtectedLayout>
      <div className="bg-background antialiased flex p-4 gap-4 flex-wrap">
        {productsList.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </ProtectedLayout>
  );
}
