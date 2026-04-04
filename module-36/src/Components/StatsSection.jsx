import { FaRegStar } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

export default function StatsSection() {
  return (
    <section className="bg-primary-gradient container mx-auto rounded-2xl">
      <div className="py-15 place-items-center grid gap-4 text-center grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 ">
        <div className="text-white">
          <div className="font-extrabold text-4xl/snug sm:text-5xl/snug md:text-6xl/20.5 flex flex-col items-center">
            <LuUsers />
            <h2 className="">50K+</h2>
          </div>
          <h3 className="font-medium sm:text-2xl">Active Users</h3>
        </div>
        <div className="text-white">
          <div className="font-extrabold text-4xl/snug sm:text-5xl/snug md:text-6xl/20.5 flex flex-col items-center">
            <IoSparklesOutline />
            <h2>200+</h2>
          </div>
          <h3 className="font-medium sm:text-2xl">Premium Tools</h3>
        </div>

        <div className="text-white">
          <div className="font-extrabold text-4xl/snug sm:text-5xl/snug md:text-6xl/20.5 flex flex-col items-center">
            <FaRegStar />
            <h2>4.9</h2>
          </div>
          <h3 className="font-medium sm:text-2xl">Rating</h3>
        </div>
      </div>
    </section>
  );
}
