import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center gap-4 ">
            <a
              href="/"
              className="block whitespace-nowrap bg-gray-300 p-3 rounded-lg"
            >
              <img
                src="/marius-wagner-logo-transparent-background.webp"
                alt="Marius Wagner Logo"
                width={180}
                height={60}
                className={`object-contain w-auto transition-all duration-300 h-10`}
                style={{ display: "block" }}
                loading="eager"
              />
            </a>
            <div>
              <h3 className="text-white font-bold mb-4">Marius Wagner</h3>
              <p className="text-sm">Student & Developer</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#projects" className="hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-blue-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://github.com/Marius1501"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/marius-wagner-b39524210/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:marius-wagner-contact@mailbox.org"
                className="hover:text-blue-400 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Marius Wagner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
