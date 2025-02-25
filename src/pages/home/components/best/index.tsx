import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";
import { Roboto } from "next/font/google";
import StarRating from "@/src/components/estrellas";
import productData from "@/src/utils/calificacion";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const BestComponent = () => {
  const [ratings, setRatings] = useState([0, 0, 0, 0]);

  const handleRatingChange = (index: number, newRating: number) => {
    const updatedRatings = [...ratings];
    updatedRatings[index] = newRating;
    setRatings(updatedRatings);
    console.log(`Calificación para el producto ${index + 1}: ${newRating} estrellas`);
  };

  return (
    <div className="best">
      <div className="container-best">
        <h1 className={`best-title ${roboto.className}`}>
          <span style={{ color: "rgba(246, 61, 61, 1)" }}>Best </span>Seller
        </h1>
        <div className="container-best-card">
          {productData.map((product, index) => (
            <div key={product.id} className="card-best-one">
              <Image
                src={product.image}
                alt={product.title}
                className="best-image"
                width={270}
                height={270}
                priority
              />
              <StarRating
                initialRating={ratings[index]}
                onRatingChange={(newRating) => handleRatingChange(index, newRating)}
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestComponent;
