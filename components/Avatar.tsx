import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/cmoi.webp"
        alt="avatar"
        width={737}
        height={678}
        priority
        sizes="(min-width: 1200px) 737px, 100vw"
        className="translate-z-0 w-full h-auto"
      />
    </div>
  );
};

export default Avatar;