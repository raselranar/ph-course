import { useLoaderData, useParams } from "react-router";

export default function BookDetails() {
  const { id } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === Number(id));
  return (
    <section className="mt-10">
      <div className="mx-auto container max-w-6xl card grid grid-cols-1 lg:grid-cols-2 p-4 lg:card-side bg-base-100 shadow-sm">
        <div>
          <img src={book.image} className="" alt="Album" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>By: {book.author}</p>
          <p>{book.category}</p>
          <p>
            <span className="font-bold">Review</span>
            {book.review}
          </p>
          <div className="">
            <p>Tag</p>
            <div className="">
              {book.tags.map((tag, i) => (
                <div key={i} className="badge badge-secondary">
                  #{tag}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3 flex flex-col max-w-xs">
              <div className="flex justify-between">
                <p className="text-gray-500">Number of Pages:</p>
                <span className="font-bold">{book.totalPages}</span>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Publisher:</p>
                <span className="font-bold">{book.publisher}</span>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Year of Publishing:</p>
                <span className="font-bold">{book.yearOfPublishing}</span>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Rating:</p>
                <span className="font-bold">{book.rating}</span>
              </div>
            </div>
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </section>
  );
}
