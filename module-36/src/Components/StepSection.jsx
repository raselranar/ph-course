import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

function Card({ number, icon, heading, description }) {
  return (
    <div className="p-6 flex flex-col gap-4 items-center h-94 shadow-md border border-gray-300 rounded-xl max-w-95">
      {/* card number */}
      <div className="flex justify-end w-full">
        <span className="px-3 py-2.5 text-white font-bold text-sm bg-primary-gradient rounded-full">
          {number}
        </span>
      </div>
      {/* icon */}
      <div className="bg-pink-100/50 p-5 rounded-full w-fit">
        <img className="w-fit" src={icon} alt="" />
      </div>
      <h3 className="font-bold text-2xl">{heading}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
}

export default function StepSection() {
  return (
    <section className="py-15 md:py-20 px-3">
      <div className="container mx-auto">
        {/* heading part */}
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold text-3xl/relaxed lg:text-5xl">
            Get Started in 3 Steps
          </h2>
          <p className="text-[14px] mt-2 sm:text-lg text-center text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* cards */}
        <div className="w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 mt-10">
          <Card
            number="01"
            icon={userIcon}
            heading="Create Account"
            description="Sign up for free in seconds. No credit card required to get started."
          />
          <Card
            number="02"
            icon={packageIcon}
            heading="Choose Products"
            description="Browse our catalog and select the tools that fit your needs."
          />
          <Card
            number="03"
            icon={rocketIcon}
            heading="Start Creating"
            description="Download and start using your premium tools immediately."
          />
        </div>
      </div>
    </section>
  );
}
