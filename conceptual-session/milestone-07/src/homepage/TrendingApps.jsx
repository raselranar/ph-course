"use client";
import CardContainer from "@/app/components/UI/CardContainer";
import Loading from "@/app/components/UI/Loading";
import { useData } from "@/context/DataProvider";

const TrendingApps = () => {
  const { data, loading } = useData();

  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-center">Title</h2>
      <p className="text-gray-500 text-center mt-2">description</p>
      <CardContainer data={data} loading={loading} />
    </section>
  );
};
export default TrendingApps;
