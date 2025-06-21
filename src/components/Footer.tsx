import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="space-x-6">
          <a href="#features" className="hover:underline hover:underline-offset-4">
            Features
          </a>
          <a href="#pricing" className="hover:underline hover:underline-offset-4">
            Pricing
          </a>
          <a href="#contact" className="hover:underline hover:underline-offset-4">
            Contact
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GiRi Technologies. All rights reserved.
        </p>

        <p className="text-xs text-gray-600">
          Built with ❤️ using Next.js, Tailwind CSS, and Shadcn UI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
