import React from "react";
import { Link } from "react-router-dom";

export default function CompProductCard({
  product,
  categoria,
  showLink = true,
}) {
  return (
    <div>
      {showLink && (
        <Link
          className="block rounded-lg max-w-[17rem] h-full p-4 shadow-sm shadow-indigo-100"
          to={`/detalhes/${categoria}/${product._id}`}
        >
          <div className="h-[16rem]">
            <img
              alt={product.title}
              src={product.thumbnail_urls[1]}
              className="h-full w-full p-1 object-contain"
            />
          </div>
          <div
            className="mt-2 text-start max-w-[14.7rem] tooltip tooltip-dark transition ease-in-out duration-700"
            data-tip={`${product.title}`}
          >
            <div className="text-[17px] font-bold uppercase truncate ">
              {product.title}
            </div>
          </div>
          <div className="mt-2 space-y-3">
            <p className="text-[15px]">R$ {product.price.toFixed(2)} <span className="text-[12px]">sem juros</span></p>
            <p className="text-[16px] font-bold">
              {product.price >= 1000
                ? "12x de R$ " + (product.price / 12).toFixed(2)
                : "10x de R$ " + (product.price / 10).toFixed(2)}
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}
