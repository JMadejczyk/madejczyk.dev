import localFont from "next/font/local";

const Montreal = localFont({
  src: "../../../public/fonts/PPNeueMontreal-Bold.otf",
});
const Avgard = localFont({
  src: "../../../public/fonts/AVGARDD 2.woff",
});

export const useMontrealFont = () => Montreal;

export const useAvgardFont = () => Avgard;
