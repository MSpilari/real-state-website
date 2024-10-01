import Image from "next/image";
import HeroDesktop from "@/src/assets/HeroDesktop.png";
import HeroLaptop from "@/src/assets/HeroLaptop.png";
import HeroMobile from "@/src/assets/HeroMobile.png";

const HeroImages = () => {
  return (
    <div>
      <Image
        className="block md:hidden rounded-md"
        alt="Hero Mobile"
        src={HeroMobile}
      />
      <Image
        className="hidden md:block lg:hidden rounded-md "
        alt="Hero Laptop"
        src={HeroLaptop}
      />
      <Image
        className="hidden lg:block rounded-md"
        alt="Hero Desktop"
        src={HeroDesktop}
      />
    </div>
  );
};

export { HeroImages };
