import { useFont } from "./FontLoader";

const Spectacular = () => {
  const MontrealBold = useFont("MontrealBold");
  return (
    <div className="h-screen flex justify-center items-center">
      <p
        className={`${MontrealBold.className} text-8xl flex flex-col justify-center items-center gap-5 text-[#d0d0d0]`}
      >
        <span className="m-auto">to make</span>
        <span>something</span>
        <span>spectacular</span>
      </p>
    </div>
  );
};
export default Spectacular;
