import Link from 'next/link';
import React from 'react';

export function Breadcrumb({ currentPage }: { currentPage: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm font-medium text-gray-500 mb-8 w-fit hover:shadow-md transition-shadow">
      <Link href="/" className="flex items-center gap-2 hover:text-blue-600 transition-colors group">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-500 group-hover:text-blue-600 transition-colors"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span>Home</span>
      </Link>
      <span className="mx-1 text-gray-300">/</span>
      <span className="text-gray-900 font-semibold">{currentPage}</span>
    </div>
  );
}
