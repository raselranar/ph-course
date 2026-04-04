import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-bold tracking-tighter text-white">
                AI Tools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-center text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} AI Tools. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
