import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Seedream. All rights reserved.</p>
        <p className="mt-4 text-gray-400">Empowering creativity with Seedream AI.</p>
      </div>
    </footer>
  );
};

export default Footer;