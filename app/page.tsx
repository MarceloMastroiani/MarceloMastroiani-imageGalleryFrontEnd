import Link from "next/link";
import InfinitiScroll from "./components/appPage/infinitiScroll.componet";
import NeuButton from "./components/appPage/neubutton.component";
import { ebGaramond, fredoka } from "./components/fonts";

export default function Home() {
  return (
    <main className="presentation-container">
      <div>
        <h1
          className={`${ebGaramond.className} text-center text-5xl text-gray-50 mt-7 opacity-70`}
        >
          Welcome to Galerry
        </h1>

        <div>
          <InfinitiScroll />
        </div>

        <div className=" flex justify-center mb-5">
          <div className="flex flex-col items-center mt-20 bg-gradient-to-l from-neutral-950 via-neutral-900 to-neutral-950 p-5 w-1/2 ">
            <p
              className={`${fredoka.className} text-center text-xl text-gray-50 opacity-70 h-fit w-fit mb-7 mt-3`}
            >
              This gallery works as a social network to upload photos and show
              the art of photography, creating inspirations that inspire other
              people.
            </p>
            <Link
              href="/login"
              className=" text-gray-50 hover:text-gray-300 transition-all duration-200 ease-in-out text-2xl"
            >
              <NeuButton />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
