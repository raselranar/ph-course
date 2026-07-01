import CardComponent from "@/components/UI/CardComponent";
import { getData } from "@/lib/fetchData";

const page = async () => {
  const data = await getData();

  return (
    <section className="mt-6">
      <h2 className="font-bold text-2xl mb-4">ALL Photos</h2>
      {/* card container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};
export default page;
