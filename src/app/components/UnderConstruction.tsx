import { useFont } from "../components/FontLoader";
const UnderConstruction = () => {
  const font = useFont("AvgardLight");
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <h1 className={`${font.className}`}>
        This website is under construction...
      </h1>
    </div>
  );
};
export default UnderConstruction;
