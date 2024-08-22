import localFont from "next/font/local";

const MontrealBold = localFont({
  src: "../../../public/fonts/NeueMontreal-Bold.otf",
});
const Montreal = localFont({
  src: "../../../public/fonts/NeueMontreal-Regular.otf",
});
const MontrealMedium = localFont({
  src: "../../../public/fonts/NeueMontreal-Medium.otf",
});
const Avgard = localFont({
  src: "../../../public/fonts/AVGARDD 2.woff",
});
const AvgardLight = localFont({
  src: "../../../public/fonts/AVGARDN 2.woff",
});
const Pangaia = localFont({
  src: "../../../public/fonts/PPPangaia-Bold.otf",
});

const fonts = {
  MontrealBold,
  Montreal,
  MontrealMedium,
  Avgard,
  Pangaia,
  AvgardLight,
};

export const useFont = (fontName: keyof typeof fonts) => fonts[fontName];
