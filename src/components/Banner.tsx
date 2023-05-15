import Image from "next/image";

type Props = {};

function Banner({}: Props) {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:[500px] xl:h-[600px] 2xl:h-[700px]">
      <h1>I am the banner</h1>
      <Image
        src="https://links.papareact.com/0fm"
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
