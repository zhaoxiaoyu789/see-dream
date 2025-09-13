const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-to" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How to Use <span className="text-purple-600">Seedream</span>: Your Simple Guide to AI Art</h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-8 text-center">Creating stunning AI art with Seedream is incredibly straightforward. Follow these simple steps to bring your visions to life:</p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">1. Enter Your Prompt in Seedream</h3>
            <p>Start by describing the image you want to create in the text input field. Be as descriptive as possible! For example, try "A futuristic city at sunset, with flying cars and neon lights, highly detailed, cinematic." The more detail you provide, the better Seedream can understand your vision.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">2. Choose Your Shape and Dimensions with Seedream</h3>
            <p>Select the desired aspect ratio and resolution for your image. Seedream offers various options like 1:1 (square), 9:16 (portrait), or 16:9 (landscape) to suit your specific needs. This helps Seedream tailor the output to your preferred format.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">3. Generate Your Image with Seedream AI</h3>
            <p>Click the "Generate" button and let Seedream's powerful AI do its magic. In a matter of seconds, your unique image will appear. You can then download it or refine your prompt for further iterations. It's that easy to create with Seedream!</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">4. Explore and Refine Your Seedream Creations</h3>
            <p>Don't be afraid to experiment! Adjust your prompts, try different styles, and generate multiple variations. Seedream encourages exploration, allowing you to discover endless creative possibilities. Share your amazing Seedream art with the world!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;