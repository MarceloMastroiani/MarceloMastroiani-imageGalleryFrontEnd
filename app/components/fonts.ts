//Buscar fuentes en google fonts y importarlas aca
import { EB_Garamond } from "next/font/google";
import { Fredoka } from "next/font/google";

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["600"],
});

export const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400"],
});
