'use client';

import { useState } from 'react';

interface InputAreaProps {
  onGenerate: (
    settings: {
      prompt: string;
      count: number;
      width: number;
      height: number;
    }
  ) => void;
}

export default function InputArea({ onGenerate }: InputAreaProps) {
  const [prompt, setPrompt] = useState('');
  const [count, setCount] = useState(1);
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({ prompt, count, width, height });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
            Prompt
          </label>
          <textarea
            id="prompt"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe what you want to create..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="count" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Images
          </label>
          <input
            type="number"
            id="count"
            min={1}
            max={4}
            className="w-full p-2 border border-gray-300 rounded-md"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-2">
              Width
            </label>
            <input
              type="number"
              id="width"
              step={8}
              min={256}
              max={2048}
              className="w-full p-2 border border-gray-300 rounded-md"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
              Height
            </label>
            <input
              type="number"
              id="height"
              step={8}
              min={256}
              max={2048}
              className="w-full p-2 border border-gray-300 rounded-md"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Generate
        </button>
      </form>
    </div>
  );
}