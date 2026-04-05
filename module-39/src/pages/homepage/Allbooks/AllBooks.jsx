import { use } from "react";
import Card from "./Card";

const booksDataFetch = fetch("/booksData.json").then((res) => res.json());
export default function AllBooks() {
  const booksData = use(booksDataFetch);
  return (
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-6">Books</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {booksData.map((book) => (
            <Card book={book} key={book.bookId} />
          ))}
        </div>
      </div>
    </section>
  );
}
