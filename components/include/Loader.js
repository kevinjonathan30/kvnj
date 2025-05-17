import React from 'react';

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-bar">
        <span className="loader-text">KVNJ</span>
        <div className="loader-progress" />
      </div>
      <style jsx>{`
        .loader-overlay {
          position: fixed;
          z-index: 9999;
          inset: 0;
          background: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-bar {
          position: relative;
          width: 320px;
          height: 48px;
          background: #1e293b;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .loader-text {
          position: absolute;
          width: 100%;
          text-align: center;
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          z-index: 2;
          letter-spacing: 0.2em;
        }
        .loader-progress {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #60a5fa, #38bdf8);
          animation: loader-move 1.2s cubic-bezier(0.4,0,0.2,1) forwards;
          z-index: 1;
        }
        @keyframes loader-move {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}