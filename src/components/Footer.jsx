import React from "react";
import { useTranslation } from "../hooks/useTranslation";

function Footer() {
  const t = useTranslation();
  return (
    <footer className="bg-blue-700 text-white p-4 text-center">
      <p>
        &copy; 2025 Ice Diamonds Antwerp. {t("copyright")}
      </p>
      <div className="flex justify-center gap-4 mt-4">
        <a
          href="https://www.facebook.com/IceDiamondsAntwerp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("followFacebook")}
        >
          <svg
            className="w-6 h-6 text-white hover:text-blue-200 transition duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.992 22 12z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/icediamondsantwerp/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("followInstagram")}
        >
          <svg
            className="w-6 h-6 text-white hover:text-blue-200 transition duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.948 1.826 5.332.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 6.948.155 3.384 1.876 5.071 5.26 5.226 3.28.058 3.689.072 6.948.072s3.668-.014 6.948-.072c3.384-.155 5.071-1.842 5.226-5.226.058-3.28.072-3.689.072-6.948s-.014-3.668-.072-6.948c-.155-3.384-1.842-5.071-5.226-5.226C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
