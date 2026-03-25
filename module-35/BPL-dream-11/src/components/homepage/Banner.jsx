import bgShadow from "../../assets/bg-shadow.png";
import bannerMain from "../../assets/banner-main.png";

export default function Banner() {
  return (
    <div
      className=" bg-cover bg-black py-16 rounded-3xl"
      style={{ backgroundImage: `url(${bgShadow})` }}
    >
      <div className="flex flex-col items-center gap-6">
        <img src={bannerMain} alt="" />
        <div className="text-center space-y-4">
          <h2 className="text-4xl text-white">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h2>
          <p className="text-2xl text-white">Beyond Boundaries Beyond Limits</p>
        </div>
        <button className="py-2 px-4 outline outline-yellow-400 rounded-md bg-yellow-300 outline-offset-4 ">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
}
