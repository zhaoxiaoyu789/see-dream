// ... existing code ...

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-20 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Unleash Your Creativity with <span className="text-yellow-300">Seedream</span> AI Image Generator</h1>
        <p className="text-xl mb-8">Transform your ideas into stunning visuals effortlessly. Seedream makes AI art accessible to everyone.</p>
        <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300">
          Start Creating with Seedream Now
        </button>
      </div>
    </section>
  );
};

export default Hero;