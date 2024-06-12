export type ProductType = {
  name: string;
  description: string;
  price: number;
};

export const testProducts: ProductType[] = [
  { name: "testProduct1", description: "test description", price: 3099 },
  { name: "testProduct2", description: "test description", price: 4599 },
  { name: "testProduct3", description: "test description", price: 499 },
  { name: "testProduct4", description: "test description", price: 3199 },
  { name: "testProduct5", description: "test description", price: 3299 },
];
