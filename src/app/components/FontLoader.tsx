import localFont from "next/font/local";

const Montreal = localFont({
  src: "../../../public/fonts/PPNeueMontreal-Bold.otf",
});
const Avgard = localFont({
  src: "../../../public/fonts/AVGARDD 2.woff",
});
const Pangaia = localFont({
  src: "../../../public/fonts/PPPangaia-Bold.otf",
});
const AvgardLight = localFont({
  src: "../../../public/fonts/AVGARDN 2.woff",
});

export const useMontrealFont = () => Montreal;

export const useAvgardFont = () => Avgard;
export const useAvgardFontLight = () => AvgardLight;

export const usePangaiaFont = () => Pangaia;
