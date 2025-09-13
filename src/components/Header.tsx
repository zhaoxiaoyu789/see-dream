import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <h2 className="text-2xl font-bold text-gray-800">Seedream AI</h2>
        </Link>
        <p className="ml-4 text-gray-600 hidden md:block">Free Online AI Image Generator</p>
      </div>
      <div>
        <Link href="/photo-editor" className="text-blue-600 hover:underline">
          Photo Editor
        </Link>
      </div>
    </nav>
  );
}