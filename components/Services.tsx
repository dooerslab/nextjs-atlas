import React from "react";
import Image from "next/image";

const blocks = [
  {
    id: "block-1",
    img: {
      src: "/img/smart-protect-1.jpg",
      width: 181,
      height: 181,
      alt: "Smart Protect One",
    },
    label: "Anti-spam",
    desc: "Lorem ipsum dolor sit amet porro his no his deleniti",
  },
  {
    id: "block-2",
    img: {
      src: "/img/smart-protect-2.jpg",
      width: 181,
      height: 181,
      alt: "Smart Protect Two",
    },
    label: "Phishing Detect",
    desc: "Ne error antiopam usu. Sed vocen concludaturque ea",
  },
  {
    id: "block-3",
    img: {
      src: "/img/smart-protect-3.jpg",
      width: 181,
      height: 181,
      alt: "Smart Protect Three",
    },
    label: "Smart Scan",
    desc: "Et usu ocurreret elavoraret doctus prodesse assueverit.",
  },
];

export default function Services() {
  return (
    <div className="w-full my-12 px-4">
      <h1 className="w-full inline-block font-sans font-bold text-5xl text-center text-zinc-800 my-12">
        Smartest protection for your site
      </h1>
      <div className="flex flex-row flex-wrap">
        {blocks.map((b) => (
          <div
            key={b.id}
            className="text-center translate-y-0 transition-opacity ease-in w-full md:w-1/3 sm:px-4"
          >
            <Image {...b.img} alt={b.img.alt} />
            <h2 className="font-semibold text-2xl text-zinc-800">{b.label}</h2>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
