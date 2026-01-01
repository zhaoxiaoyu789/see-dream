import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Seedream. All rights reserved.</p>
        <p className="mt-4 text-gray-400">
          Empowering creativity with Seedream AI. <a href="https://pokepath-td.online/" className="text-blue-400 hover:text-blue-300">Pokepath TD</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
