import Image from "next/image";

const Card = ({ appInfo }) => {
  console.log(appInfo);
  return (
    <div className="card max-w-md bg-base-100 shadow-sm">
      <figure className="">
        <Image
          src={appInfo.image}
          alt="Shoes"
          width={200}
          height={200}
          className="object-fill rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {appInfo.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Install</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
