export default function SubscribeSection() {
  return (
    <section className="max-w-335 mx-auto w-10/12 border p-6 rounded-3xl relative -top-40">
      <div className="py-22 px-4 rounded-xl flex flex-col items-center  bg-linear-45 from-[#c0e9f4] via-white to-[#fad999] via-80%">
        <h2 className="text-3xl text-black">Subscribe to our Newsletter</h2>
        <h3 className="mt-2 text-gray-500 mb-6">
          Get the latest updates and news right in your inbox!
        </h3>
        <div className="flex gap-4 w-full justify-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="input rounded-xl text-gray-500 "
          />
          <button className="btn rounded-xl bg-linear-to-r from-[#c974ab] from-5%  to-[#f8ca59] to-95%">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
