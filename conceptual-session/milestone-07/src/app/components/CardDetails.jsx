"use client";
import { useData } from "@/context/DataProvider";
import Card from "./UI/Card";
import Loading from "./UI/Loading";

const CardDetails = ({ appId }) => {
  const { data, loading } = useData();
  const app = data.find((item) => item.id === Number(appId));
  //   showing  loading state
  if (loading) return <Loading />;
  return (
    <div className="flex justify-center mt-8">
      <Card appInfo={app} />
    </div>
  );
};
export default CardDetails;
