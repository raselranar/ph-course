import playButtonImage from "../../assets/Play.png";
import GradientButton from "../UI/GradientButton";
import { IoSparklesOutline } from "react-icons/io5";
export default function Banner() {
  return (
    <div className="hero container mx-auto py-15">
      <div className="hero-content gap-8 xl:gap-42 flex-col-reverse lg:flex-row-reverse ">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
            className="rounded-2xl w-full"
          />
        </div>
        <div className="shrink-0">
          <div className="flex gap-3 px-4 py-2 w-fit rounded-full bg-[#F3E8FF]  items-center mx-auto sm:mx-0 outline outline-gray-200 mb-2">
            <IoSparklesOutline color="#8200DB" />
            <span className="font-bold bg-primary-gradient text-xs sm:text-base bg-clip-text text-transparent">
              Revolutionize Your Workspace
            </span>
          </div>
          <h1 className="text-center sm:text-left font-extrabold text-3xl/snug sm:text-4xl/snug md:text-5xl/snug xl:text-6xl/snug text-[#101727]/90">
            Unlock Limitless
            <br className="hidden lg:block" />{" "}
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Creative Potential
            </span>
          </h1>
          <p className="py-6 text-gray-500 lg:text-lg text-base max-w-md">
            Experience the future of digital creation with our cutting-edge
            toolkit. Elevate every project, accelerate your workflow, and bring
            bold ideas to life faster than ever before.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row *:btn-block sm:*:w-auto">
            <GradientButton text="Start Now" />
            <button className="btn p-6 border-2 cursor-pointer rounded-full border-[#5746d6]">
              <span className="flex gap-4 text-base bg-primary-gradient bg-clip-text text-transparent font-bold">
                <img src={playButtonImage} alt="Play a image" />
                Watch Demo
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
