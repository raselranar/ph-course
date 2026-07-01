import BookingWithDate from "@/components/UI/BookingWithDate";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";

const Destination = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch("http://localhost:5000/destination", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div key={item._id} className="">
          <Card>{item.name}</Card>
          <BookingWithDate id={item._id} />
        </div>
      ))}
    </div>
  );
};
export default Destination;
