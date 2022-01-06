import Image from "next/image";

export default function Jumbotron() {
  return (
    <header className="flex flex-row content-center bg-jumbo bg-cover py-8 text-center m-auto">
      <div className="px-4 w-full sm:mx-8 m-auto">
        <div className="w-full text-left">
          <a href="#">
            <Image src="/img/logo.png" width={80} height={80} alt="Logo" />
          </a>
        </div>
        <h1 className="font-sans font-bold text-white text-7xl leading-[1.1] my-12">
          A New Way
          <br />
          To Start Business
        </h1>
        <p className="font-light text-white text-xl leading-normal my-6">
          Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico
          mentitum duo.
          <br /> Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae
          admodum voluptatum per.
        </p>
        <a
          className="select-none inline-block font-sans font-bold text-gray-900 bg-acquamarine my-8 py-3 px-8 rounded-full hover:text-white"
          href="#"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
