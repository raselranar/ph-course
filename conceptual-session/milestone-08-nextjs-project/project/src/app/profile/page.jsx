"use client";
import UpdateUserProfile from "@/components/UI/UserUpdateModal";
import { authClient } from "@/lib/auth-client";
import { PencilToSquare } from "@gravity-ui/icons";
import { Avatar, Button, Card } from "@heroui/react";

const Profile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <Card className="max-w-md mx-auto mt-4 flex flex-col gap-4 items-center">
      {" "}
      <Avatar className="size-30">
        <Avatar.Image
          alt={user?.name}
          src={user?.image}
          referrerPolicy="no-referrer"
        />
        <Avatar.Fallback className="text-2xl font-medium">
          {user?.name.charAt(0).toLocaleUpperCase()}
        </Avatar.Fallback>
      </Avatar>
      <h2 className="text-2xl font-medium">{user?.name}</h2>
      <p className="text-gray-400">{user?.email}</p>
      <UpdateUserProfile />
    </Card>
  );
};
export default Profile;
