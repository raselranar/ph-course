import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

export default function Card({ book }) {
  return (
    <Link
      to={`/details/${book.bookId}`}
      className="card bg-base-100 shadow-sm border border-gray-300 pt-4">
      <figure>
        <img
          src={book.image}
          alt="Shoes"
          className="object-cover h-76.5 rounded-xl"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2">
          {book.tags.map((tag, i) => (
            <div key={i} className="badge badge-secondary">
              {tag}
            </div>
          ))}
        </div>

        <h2 className="card-title">{book.bookName}</h2>
        <p>By: {book.author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{book.category}</div>
          <div className="badge badge-outline">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
}
