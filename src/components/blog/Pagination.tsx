'use client';

import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`px-4 py-2 rounded-lg border ${
          currentPage === 1
            ? 'border-gray-800 text-gray-600 cursor-not-allowed'
            : 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black'
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </motion.button>
      
      {pages.map((page) => (
        <motion.button
          key={page}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg ${
            currentPage === page
              ? 'bg-teal-400 text-black'
              : 'border border-gray-800 text-gray-400 hover:border-teal-400'
          }`}
        >
          {page}
        </motion.button>
      ))}

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className={`px-4 py-2 rounded-lg border ${
          currentPage === totalPages
            ? 'border-gray-800 text-gray-600 cursor-not-allowed'
            : 'border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black'
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </motion.button>
    </div>
  );
}
