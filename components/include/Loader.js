import React from 'react';

// Loader: Animated loading bar with "KVNJ" text
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900">
      <div className="relative w-80 h-12 bg-gray-800 rounded-full overflow-hidden flex items-center justify-center">
        <span className="absolute w-full text-center text-white text-xl font-burtons font-bold z-20">
          KVNJ
        </span>
        <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-700 to-blue-400 z-10 animate-loaderMove" />
      </div>
      <style jsx>{`
        @keyframes loaderMove {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loaderMove {
          animation: loaderMove 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
