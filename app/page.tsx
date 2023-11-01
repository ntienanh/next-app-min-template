"use client";
import React from "react";

export default function HomePage() {
  const [products, setProducts] = React.useState<any[]>([]);
  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const product = await res.json();
    console.log(product.data);
    setProducts(product.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{textAlign:'center',paddingBottom:24}}>
      Test deploy
      <div
        style={{ padding: 8, display: "flex", justifyContent: "space-between" }}
      >
        {products.map((product, idx) => {
          return (
            <div key={idx}>
              {product.attributes.name} -{" "}
              <img
                src={`${product.attributes.image?.data.attributes.url}`}
                width={50}
                height={50}
                alt="no img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
