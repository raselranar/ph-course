import { ArrowDownToLine, CircleDollar, HeartFill } from "@gravity-ui/icons";
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function CardComponent({ data }) {
  const { id, title, imageUrl, category, likes, downloads } = data;
  return (
    <Card className="border relative border-gray-300/70">
      <Chip className="absolute right-6 top-6">{category}</Chip>
      <Image
        src={imageUrl}
        className="object-cover w-full h-70 rounded-xl"
        alt={title}
        width={200}
        height={200}
      />
      <Card.Header>
        <Card.Title className="font-medium text-base">{title}</Card.Title>
      </Card.Header>
      <Card.Footer className="flex flex-col gap-4">
        <div className="flex gap-4 w-full">
          {/* Likes */}
          <div className="flex gap-2 items-center">
            <HeartFill />
            <p>{likes}</p>
          </div>
          <Separator orientation="vertical" />
          {/* Downloads */}
          <div className="flex gap-2 items-center">
            <ArrowDownToLine />
            <p>{downloads}</p>
          </div>
        </div>
        <Link href={`/all-photos/${id}`} className="w-full">
          <Button variant="outline" fullWidth>
            View
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}
