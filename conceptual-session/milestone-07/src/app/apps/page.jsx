"use client";
import { useData } from "@/context/DataProvider";
import CardContainer from "../components/UI/CardContainer";

const Apps = () => {
  const { data, loading } = useData();
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold text-center">Title</h2>
      <p className="text-gray-500 text-center mt-2">description</p>
      <CardContainer data={data} loading={loading} />
    </section>
  );
};
export default Apps;
