"use client";
import Link from "next/link";
import Card from "./Card";
import Loading from "./Loading";

const CardContainer = ({ data, loading }) => {
  if (loading) return <Loading />;
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
      {data.map((appInfo) => (
        <Link key={appInfo.id} href={`/apps/${appInfo.id}`}>
          <Card appInfo={appInfo} />
        </Link>
      ))}
    </section>
  );
};
export default CardContainer;
