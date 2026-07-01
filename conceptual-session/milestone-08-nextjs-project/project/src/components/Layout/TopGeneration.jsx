import CardComponent from "../UI/CardComponent";
import { getData } from "@/lib/fetchData";

const TopGeneration = async () => {
  const data = await getData();
  const topData = data.slice(0, 8);

  return (
    <section className="mt-6">
      <h2 className="font-bold text-2xl mb-4">Top Generations</h2>
      {/* card container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topData.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
export default TopGeneration;
