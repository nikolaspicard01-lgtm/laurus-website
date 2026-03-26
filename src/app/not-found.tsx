import Link from "next/link";

export default function NotFound() {
  return (
    <div className="gradient-hero min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[8rem] sm:text-[10rem] font-extrabold leading-none font-display tracking-tight bg-clip-text text-transparent bg-linear-to-br from-blue to-blue-dark select-none">
          404
        </p>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold font-display text-navy tracking-tight">
          Page Not Found
        </h1>

        <p className="mt-4 text-lg text-text-body leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or no longer exists.
        </p>

        <Link
          href="/en/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue px-8 py-3.5 text-base font-bold text-white shadow-[var(--shadow-blue)] transition-all duration-300 hover:bg-blue-dark hover:shadow-lg hover:-translate-y-0.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
