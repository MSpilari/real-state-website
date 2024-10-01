import Image from "next/image";
import LogoDesktop from "@/src/assets/Logo_desktop.png";
import LogoLaptop from "@/src/assets/Logo_laptop.png";
import LogoMobile from "@/src/assets/Logo_mobile.png";

const Logos = () => {
  return (
    <>
      <Image className="block md:hidden" alt="Logo Mobile" src={LogoMobile} />
      <Image
        className="hidden md:block xl:hidden"
        alt="Logo Laptop"
        src={LogoLaptop}
      />
      <Image className="hidden xl:block" alt="Logo Desktop" src={LogoDesktop} />
    </>
  );
};

export { Logos };
