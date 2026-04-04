export default function StatsSection() {
  return (
    <section className="bg-primary-gradient">
      <div className="py-15 place-items-center grid gap-4 text-center grid-rows-3 sm:grid-rows-1 sm:grid-cols-5 container mx-auto">
        <div className="text-white">
          <h2 className="font-extrabold text-4xl/snug sm:text-5xl/snug md:text-6xl/20.5">
            50K+
          </h2>
          <h3 className="font-medium sm:text-2xl">Active Users</h3>
        </div>
        <div className="hidden sm:flex divider divider-horizontal before:bg-white after:bg-white"></div>
        <div className="text-white">
          <h2 className="font-extrabold text-4xl/snug sm:text-5xl/snug md:text-6xl/20.5">
            200+
          </h2>
          <h3 className="font-medium sm:text-2xl">Premium Tools</h3>
        </div>
        <div className="hidden sm:flex divider divider-horizontal before:bg-white after:bg-white"></div>

        <div className="text-white">
          <h2 className="font-extrabold text-4xl/snug sm:text-5xl/snug md:text-6xl/20.5">
            4.9
          </h2>
          <h3 className="font-medium sm:text-2xl">Rating</h3>
        </div>
      </div>
    </section>
  );
}
