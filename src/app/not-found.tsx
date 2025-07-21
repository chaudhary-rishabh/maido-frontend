import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-green-400">404 - Page Not Found</h1>
            <p className="text-gray-600 mt-4">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/" className="mt-4 px-6 py-2 text-white bg-green-400 rounded-lg hover:bg-green-600 transition-all">
                Go to Home
            </Link>
        </div>
    );
}
