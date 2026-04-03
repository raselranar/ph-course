import { useLoaderData } from "react-router";

export default function UserDetails() {
  const userDetails = useLoaderData();
  console.log(userDetails);
  return (
    <div>
      <h2>{userDetails.name}</h2>
      <p>{userDetails.website}</p>
      <p>{userDetails.email}</p>
    </div>
  );
}
