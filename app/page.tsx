import Link from "next/link";
import InfinitiScroll from "./components/infinitiScroll.componet";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-center text-4xl font-bold text-gray-50 mt-20">
          Welcome to IMG Gallery
        </h1>

        <InfinitiScroll />

        <p className="text-center text-xl text-gray-50 h-48 pt-10 mt-20">
          PS funciona como una red social para subir fotos y mostrar el arte de
          la fotografía, creando inspiraciones que inspiren a otras personas
        </p>

        <div className="flex justify-center items-center mr-10">
          <Link
            href="/login"
            className=" text-gray-50 hover:text-gray-300 transition-all duration-200 ease-in-out text-2xl"
          >
            <span>Enter</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
