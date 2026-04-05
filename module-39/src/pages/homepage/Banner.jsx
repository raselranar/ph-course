import heroImage from "../../assets/hero.png";
export default function Banner() {
  return (
    <div className="hero  bg-base-200 min-h-screen">
      <div className="hero-content gap-4 lg:gap-20 flex-col lg:flex-row-reverse">
        <img src={heroImage} className="max-w-sm rounded-2xl shadow-2xl" />
        <div className="max-w-xl">
          <h1 className="text-4xl/snug sm:text-5xl/snug  lg:text-6xl/snug font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn bg-green-500 text-white/80">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
}
