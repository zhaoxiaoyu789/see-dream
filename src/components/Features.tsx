// ... existing code ...

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features of <span className="text-purple-600">Seedream</span> AI Image Generator</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">Text-to-Image Generation with Seedream</h3>
            <p>Simply type your desired scene or concept, and Seedream's powerful AI will render it into a stunning image. From fantastical landscapes to intricate character designs, Seedream brings your words to life.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">Customizable Aspect Ratios in Seedream</h3>
            <p>Choose from a variety of aspect ratios (e.g., 1:1, 9:16, 16:9) to perfectly frame your creations for different platforms and uses. Seedream ensures your images fit every need.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">High-Resolution Outputs from Seedream</h3>
            <p>Generate images in high definition, suitable for printing, digital displays, and professional projects. Seedream delivers crisp, clear, and detailed artwork every time.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">Style Transfer Capabilities of Seedream</h3>
            <p>Experiment with different artistic styles, from impressionistic to cyberpunk, to give your images a unique flair. Seedream offers a diverse palette for your artistic expression.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">Intuitive User Interface of Seedream</h3>
            <p>Our platform is designed for ease of use, allowing both beginners and experienced artists to navigate and create with minimal effort. Discover the simplicity of Seedream.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md bg-white">
            <h3 className="text-2xl font-semibold mb-4">Fast Processing with Seedream AI</h3>
            <p>Leveraging cloud-based AI, Seedream processes your requests quickly, providing results in seconds. Spend less time waiting and more time creating with Seedream.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;