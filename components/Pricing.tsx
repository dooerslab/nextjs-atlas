import React from "react";

export default function Pricing() {
  return (
    <div className="py-12 px-0 my-16">
      <div className="container m-auto w-full ">
        <h2 className="font-sans font-bold text-5xl text-center text-zinc-800 mb-6">
          Check out pricing
        </h2>
        <div className="flex flex-wrap w-full content-center justify-center text-center md:flex-nowrap sm:w-10/12 md:w-11/12 m-auto">
          <div className="w-full py-4 px-2 mt-8 md:w-1/3">
            <div>
              <h4 className="uppercase font-semibold text-2xl my-6">Startup</h4>
              <div className="font-bold text-xl my-4 text-zinc-800">
                $<span className="text-8xl">0</span>/MO.
              </div>
              <ul className="leading-10">
                <li>Up to 5 Documents</li>
                <li>Up to 3 Reviews</li>
                <li>5 team Members</li>
                <li>Limited Support</li>
              </ul>
              <a
                href="#"
                className="inline-block cursor-pointer py-3 px-7 my-6 rounded-full font-bold border-2 border-slate-900 hover:text-white hover:bg-slate-900 hover:-translate-y-2 duration-300 hover:ease-in-out"
              >
                Get Free
              </a>
            </div>
          </div>
          <div className="w-full py-4 px-2 mt-8 bg-slate-900 text-white rounded-md md:w-1/3">
            <div>
              <h4 className="uppercase font-semibold text-2xl my-6">Startup</h4>
              <div className="font-bold text-xl my-4">
                $<span className="text-8xl">10</span>/MO.
              </div>
              <ul className="leading-10">
                <li>Up to 15 Documents</li>
                <li>Up to 10 Reviews</li>
                <li>25 team Members</li>
                <li>Limited Support</li>
              </ul>
              <a
                href="#"
                className="inline-block cursor-pointer py-3 px-7 my-6 rounded-full font-bold text-slate-900 bg-acquamarine hover:-translate-y-2 duration-300 hover:ease-in-out hover:text-white"
              >
                Get Free
              </a>
            </div>
          </div>
          <div className="w-full py-4 px-2 mt-8 md:w-1/3">
            <div>
              <h4 className="uppercase font-semibold text-2xl my-6">
                Professional
              </h4>
              <div className="font-bold text-xl my-4 text-zinc-800">
                $<span className="text-8xl">30</span>/MO.
              </div>
              <ul className="leading-10">
                <li>Unlimited Documents</li>
                <li>Unlimited Reviews</li>
                <li>Unlimited Members</li>
                <li>Unlimited Support</li>
              </ul>
              <a
                href="#"
                className="inline-block cursor-pointer py-3 px-7 my-6 rounded-full font-bold border-2 border-slate-900 hover:text-white hover:bg-slate-900 hover:-translate-y-1 duration-300 hover:ease-in-out"
              >
                Get Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
