import Image, { StaticImageData } from "next/image";

const Skill = ({
  skillImage,
  skill,
  variant,
}: {
  skillImage: StaticImageData;
  skill: string;
  variant?: string;
}) => {
  return (
    <div
      className={`w-24 h-24  rounded-2xl flex items-center ${
        variant == "dark"
          ? "border-textWhite border-2 bg-black"
          : "bg-textWhite"
      }`}
    >
      <div className=" h-14 w-[4.5rem] flex justify-center m-auto">
        <Image src={skillImage} alt={skill} />
      </div>
    </div>
  );
};
export default Skill;
