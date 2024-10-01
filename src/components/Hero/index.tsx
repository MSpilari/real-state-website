import { HeroImages } from "./HeroImages";

const Hero = () => {
  return (
    <section className="w-full flex flex-col md:flex-row-reverse items-center justify-center md:justify-between my-10 md:px-20">
      <HeroImages />

      <div className="flex flex-col w-[95%] mx-auto items-center justify-center self-end">
        <div className="w-full z-10 mx-auto flex flex-col justify-center mb-2">
          <h1 className="w-full font-semibold text-2xl my-2 xl:text-6xl overflow-hidden">
            Discover Your Dream Property with Estatein
          </h1>
          <p className="font-medium text-sm xl:text-lg text-grey-60">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2 mb-4">
          <button className="px-5 py-4 w-full rounded-md border border-grey-15">
            Learn More
          </button>
          <button className="px-5 py-4 w-full rounded-md bg-purple-60">
            Browse Properties
          </button>
        </div>

        <div className="w-full flex flex-wrap gap-3 items-center text-center justify-center lg:justify-between md:flex-nowrap ">
          <div className="flex flex-col p-4 justify-center items-center border border-grey-15 rounded-md">
            <p className="font-bold text-2xl xl:text-3xl">200+</p>
            <p className="font-medium text-sm xl:text-lg text-grey-60">
              Happy Customers
            </p>
          </div>

          <div className="flex flex-col p-4 justify-center items-center border border-grey-15 rounded-md">
            <p className="font-bold text-2xl xl:text-3xl">10k+</p>
            <p className="font-medium text-sm xl:text-lg text-grey-60">
              Properties For Clients
            </p>
          </div>

          <div className="flex flex-col p-4 justify-center items-center border border-grey-15 rounded-md">
            <p className="font-bold text-2xl xl:text-3xl">16+</p>
            <p className="font-medium text-sm xl:text-lg text-grey-60">
              Years Of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
