import React from "react";

export default function ContactUs() {
  return (
    <div className="px-4 py-6 bg-contact bg-cover sm:px-0">
      <div className="container my-12 m-auto sm:w-10/12">
        <div className="md:grid md:grid-cols-2 md:gap-1">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-5xl font-bold leading-10 text-white">
                Contact Us
              </h3>
              <p className="mt-6 text-normal text-white">
                Te iisque labitur eos, nec sale argumentum scribentur,
                <br /> augue disputando in vim. Erat fugit sit at, ius lorem.
              </p>
              <ul className="mt-6 text-white leading-8">
                <li>
                  Email: <span>info@company.com</span>
                </li>
                <li>
                  Phone: <span>361-688-5824</span>
                </li>
                <li>
                  Address:{" "}
                  <span>4826 White Avenue, Corpus Christi, New York</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 md:col-span-1">
            <form action="#" method="POST">
              <div className="overflow-hidden">
                <div className="px-4 py-5 sm:px-0 sm:py-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 md:col-span-3">
                      <label
                        htmlFor="your-name"
                        className="block text-base text-acquamarine"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="your-name"
                        id="your-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-acquamarine focus:border-acquamarine block w-full shadow-sm sm:text-sm border-acquamarine rounded-md bg-transparent"
                      />
                    </div>

                    <div className="col-span-6 md:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-base text-acquamarine"
                      >
                        Your Email
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        className="mt-1 focus:ring-acquamarine focus:border-acquamarine block w-full shadow-sm sm:text-sm border-acquamarine rounded-md bg-transparent"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="message"
                        className="block text-acquamarine"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        id="message"
                        autoComplete="message"
                        className="mt-1 focus:ring-acquamarine focus:border-acquamarine block w-full shadow-sm sm:text-sm border-acquamarine rounded-md bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6">
                  <button
                    type="submit"
                    className="w-full justify-center py-2 px-4 rounded-full font-semibold text-slate-900 bg-acquamarine hover:-translate-y-1 duration-300 hover:ease-in-out hover:text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
