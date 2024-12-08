'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconSearch } from '@tabler/icons-react';

interface BlogSearchProps {
  onSearch: (query: string) => void;
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="relative group w-full max-w-md">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000" />
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full px-4 py-3 pl-12 bg-black/30 border border-gray-800 rounded-lg focus:outline-none focus:border-teal-400 text-white"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        >
          <IconSearch className="w-5 h-5 text-gray-400" />
        </motion.button>
      </div>
    </form>
  );
}
