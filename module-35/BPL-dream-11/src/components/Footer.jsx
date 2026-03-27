import footer_logo from "../assets/logo-footer.png";
import SubscribeSection from "./SubscribeSection";
export default function Footer() {
  return (
    <footer className=" bg-[#06091A] text-neutral-content pb-4">
      <SubscribeSection />
      <div className="-mt-30">
        <img className="mx-auto" src={footer_logo} alt="logo" />
      </div>
      <div className="container mx-auto px-4 mt-16 grid gap-4 justify-center grid-rows-3 sm:grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title">About Us</h6>
          <p className="max-w-xs text-center sm:w-full sm:text-left">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </nav>
        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col items-center sm:items-start">
          <h6 className="footer-title ">Subscribe</h6>
          <p className="text-gray-500 mb-2">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex w-full justify-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="input text-gray-500 rounded-xl rounded-r-none outline-none"
            />
            <button className="btn rounded-xl rounded-l-none border-l-0  bg-linear-to-l from-[#c974ab] from-5%  to-[#f8ca59] to-95%">
              Subscribe
            </button>
          </div>
        </nav>
      </div>
      <hr className="my-6 text-gray-700" />
      <aside className="mx-auto">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - Your Company All Rights
          Reserved.
        </p>
      </aside>
    </footer>
  );
}
