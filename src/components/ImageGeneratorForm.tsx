'use client';

import { useState } from 'react';
import Sidebar from './generator/Sidebar';
import InputArea from './generator/InputArea';
import OutputArea from './generator/OutputArea';

export default function ImageGeneratorForm() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // 使用环境变量获取API密钥
  const API_KEY = process.env.NEXT_PUBLIC_SILICONFLOW_API_KEY;

  const handleGenerate = async (settings: {
    prompt: string;
    count: number;
    width: number;
    height: number;
  }) => {
    setIsLoading(true);
    setImages([]); // Clear previous images

    try {
      const response = await fetch('https://api.siliconflow.cn/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'Kwai-Kolors/Kolors', // 根据文档，这里使用 Kolors 模型 <mcreference link="https://docs.siliconflow.cn/cn/api-reference/images/images-generations" index="0"></mcreference>
          prompt: settings.prompt,
          image_size: `${settings.width}x${settings.height}`, // 格式为 "widthxheight" <mcreference link="https://docs.siliconflow.cn/cn/api-reference/images/images-generations" index="0"></mcreference>
          batch_size: settings.count, // 图片数量 <mcreference link="https://docs.siliconflow.cn/cn/api-reference/images/images-generations" index="0"></mcreference>
          // 可以根据需要添加其他参数，例如 guidance_scale, negative_prompt, seed 等
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate images');
      }

      const data = await response.json();
      // SiliconFlow API 返回的图片 URL 在 data.images 数组中 <mcreference link="https://docs.siliconflow.cn/cn/api-reference/images/images-generations" index="0"></mcreference>
      const generatedImageUrls = data.images.map((img: any) => img.url);
      setImages(generatedImageUrls);
    } catch (error: any) {
      console.error('Error generating images:', error.message);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-16 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InputArea onGenerate={handleGenerate} />
          <OutputArea images={images} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}