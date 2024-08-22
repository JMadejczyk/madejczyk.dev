import { useFont } from "./FontLoader";

const Infinity = () => {
  const MontrealBold = useFont("MontrealBold");
  return (
    <div className="h-screen flex justify-center items-center text-[#d0d0d0]">
      <h1 className={`${MontrealBold.className} text-8xl `}>
        Infinity Possibilities
      </h1>
    </div>
  );
};
export default Infinity;
