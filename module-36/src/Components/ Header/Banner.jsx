import bannerImage from "../../assets/banner.png";
import playButtonImage from "../../assets/Play.png";
import GradientButton from "../UI/GradientButton";
import BadgeDot from "../../assets/badge_dot.png";
export default function Banner() {
  return (
    <div className="hero container mx-auto py-15">
      <div className="hero-content gap-8 lg:gap-42 flex-col-reverse lg:flex-row-reverse ">
        <img src={bannerImage} className="object-cover rounded-lg shadow-2xl" />
        <div>
          <div className="flex gap-3 px-4 py-2 w-fit rounded-full bg-[#ecefffb7]  items-center mx-auto sm:mx-0 outline outline-gray-200 mb-2">
            <img src={BadgeDot} className="size-4 object-cover" />
            <span className="font-bold bg-primary-gradient text-xs sm:text-base bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h1 className="text-center sm:text-left font-extrabold text-3xl/snug sm:text-4xl/snug md:text-5xl/snug  lg:text-6xl/21 text-[#101727]/90">
            Supercharge Your <br className="hidden lg:block" />
            Digital Workflow
          </h1>
          <p className="py-6 text-gray-500 lg:text-lg text-base max-w-md">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-4 flex-col sm:flex-row *:btn-block sm:*:w-auto">
            <GradientButton text="Explore Products" />
            <button className="btn border-2 cursor-pointer rounded-full border-[#5746d6]">
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
