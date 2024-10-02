import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; {currentYear} venkataseshtej.tech All rights reserved.
      </small>
      <p className="text-xs">
        Built with{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Next.js
        </a>{" "}
      </p>
    </footer>
  );
}
