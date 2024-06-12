"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ProductType } from "@/app/(pages)/products/page";

type ComponentProps = { product: ProductType };

export default async function ProductCard({ product }: ComponentProps) {
  const handleAddToCart = () => {
    console.log(product);
  };

  const getPrice = () => {
    return product.price / 100.0;
  };

  return (
    <Card className="w-[350px] h-fit pt-4 pb-4">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{product.name}</CardTitle>
          <p>${getPrice()}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <Separator className="mt-2 mb-2" />
        <div className="flex-1">
          <p>{product.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex float-right">
        <Button onClick={handleAddToCart}>Add To Cart</Button>
      </CardFooter>
    </Card>
  );
}
