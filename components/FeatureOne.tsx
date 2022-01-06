import React from "react";
import Image from "next/image";

export default function FeatureOne() {
  return (
    <div className="w-full py-12 px-4 sm:px-0 custom-gradient">
      <div className="flex flex-wrap w-full content-center justify-center max-w-full md:flex-nowrap md:w-10/12 sm:w-9/12 sm:m-auto">
        <div className="text-center md:text-left">
          <h2 className="font-sans font-bold text-5xl text-zinc-800 my-8">
            Take a look inside
          </h2>
          <p>
            Te iisque labitur eos, nec sale argumentum scribentur no,
            <br /> augue disptando in vim. Erat fugit sit at, ius lorem sederunt
            deterruisset no.
          </p>
          <a
            href="#"
            className="inline-block cursor-pointer py-3 px-7 my-6 rounded-full text-white font-bold bg-slate-800 hover:bg-slate-900 hover:-translate-y-1 duration-300 hover:ease-in-out"
          >
            Learn More
          </a>
        </div>
        <div className="self-center">
          <Image
            alt="Feature One"
            src="/img/feature-1.png"
            width={599}
            height={352}
          />
        </div>
      </div>
    </div>
  );
}
