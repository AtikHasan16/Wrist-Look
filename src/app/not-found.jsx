import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { MdAccessTime } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-base-100 px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Icon */}
        <div className="relative mb-8">
          <div className="text-8xl font-bold text-primary opacity-20 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <MdAccessTime className="w-24 h-24 text-primary animate-pulse" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-base-content/70 mb-8 max-w-md mx-auto">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted, or the URL might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn btn-primary gap-2">
            <BiHomeAlt className="w-5 h-5" />
            Back to Home
          </Link>
          <Link href="/watches" className="btn btn-outline gap-2">
            Browse Watches
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-base-200 rounded-box">
          <h3 className="font-semibold mb-2">Looking for something?</h3>
          <ul className="text-sm text-base-content/70 space-y-1">
            <li>
              Check out our{" "}
              <Link href="/watches" className="link link-primary">
                watch collection
              </Link>
            </li>
            <li>
              Visit the{" "}
              <Link href="/" className="link link-primary">
                homepage
              </Link>
            </li>
            <li>
              Need help?{" "}
              <Link href="/contact" className="link link-primary">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
