import { fredoka } from "../fonts";
export default function NeuButton() {
  return (
    <button
      className={`${fredoka.className} px-6 py-2 bg-neutral-800 text-white w-fit opacity-60 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
    >
      LOGIN
    </button>
  );
}
