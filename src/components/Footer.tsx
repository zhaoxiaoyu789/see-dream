import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Seedream. All rights reserved.</p>
        <nav className="flex justify-center space-x-6">
          <a href="/privacy-policy" className="hover:text-purple-400 transition duration-300">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-purple-400 transition duration-300">Terms of Service</a>
          <a href="/contact" className="hover:text-purple-400 transition duration-300">Contact Us</a>
        </nav>
        <p className="mt-4 text-gray-400">Empowering creativity with Seedream AI.</p>
      </div>
    </footer>
  );
};

export default Footer;