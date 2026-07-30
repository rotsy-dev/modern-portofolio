import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] select-none pointer-events-none">
      <Image
        src="/bulb.png"
        alt="bulb"
        width={260}
        height={200}
        sizes="(min-width: 1200px) 260px, 200px"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Bulb;