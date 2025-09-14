interface OutputAreaProps {
  images: string[];
  isLoading: boolean;
}

export default function OutputArea({ images, isLoading }: OutputAreaProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 w-full">
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : images.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <Image
                src={image}
                alt={`Generated image ${index + 1}`}
                width={500}
                height={300}
                unoptimized={true}  // 添加这个属性以避免可能的优化错误
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64 text-gray-500">
          Generated images will appear here
        </div>
      )}
    </div>
  );
}