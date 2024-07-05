import { useMontrealFont } from "./FontLoader";

const Infinity = () => {
  const Montreal = useMontrealFont();
  return (
    <div className="h-screen flex justify-center items-center text-[#d0d0d0]">
      <h1 className={`${Montreal.className} text-8xl `}>
        Infinity Possibilities
      </h1>
    </div>
  );
};
export default Infinity;
