import React from "react";
import Image from "next/image";

const brands = [
  {
    id: "brand-1",
    img: {
      src: "/img/client-1.png",
      alt: "Brand 1",
    },
  },
  {
    id: "brand-2",
    img: {
      src: "/img/client-2.png",
      alt: "Brand 2",
    },
  },
  {
    id: "brand-3",
    img: {
      src: "/img/client-3.png",
      alt: "Brand 3",
    },
  },
  {
    id: "brand-4",
    img: {
      src: "/img/client-4.png",
      alt: "Brand 4",
    },
  },
  {
    id: "brand-5",
    img: {
      src: "/img/client-5.png",
      alt: "Brand 5",
    },
  },
  {
    id: "brand-6",
    img: {
      src: "/img/client-6.png",
      alt: "Brand 6",
    },
  },
];

export default function Brands() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container sm:w-9/12 md:w-10/12 m-auto">
        <div className="flex flex-row flex-wrap w-full content-center text-center md:flex-nowrap">
          {brands.map((b) => (
            <div
              key={b.id}
              className="w-full self-center p-2 sm:w-2/6 md:w-1/6 sm:p-3"
            >
              <Image src={b.img.src} width={181} height={71} alt={b.img.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
