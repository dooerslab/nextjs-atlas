import React from "react";
import Image from "next/image";

export default function FeatureTwo() {
  return (
    <div className="w-full py-12 px-4 sm:px-0 bg-acquamarine">
      <div className="flex flex-wrap w-full content-center justify-center max-w-full md:flex-nowrap sm:flex-row-reverse md:w-10/12 sm:w-9/12 sm:m-auto">
        <div className="text-center md:text-left">
          <h2 className="font-sans font-bold text-5xl text-zinc-800 my-8">
            Safe and reliable
          </h2>
          <p>
            Duo suas detracto maiestatis ad, commodo lucilius invenire nec ad,
            <br />
            eum et oratio disputationi. Falli lobortis his ad
          </p>
          <a className="inline-block cursor-pointer py-3 px-7 my-6 rounded-full text-white font-bold bg-slate-800 hover:bg-slate-900 hover:-translate-y-1 duration-300 hover:ease-in-out">
            Learn More
          </a>
        </div>
        <div className="self-center">
          <Image
            alt="Feature Two"
            src="/img/feature-2.png"
            width={599}
            height={352}
          />
        </div>
      </div>
    </div>
  );
}
