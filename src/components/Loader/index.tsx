"use client";
import { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <div className="absolute bg-grid-300 bg-repeat bg-white top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-50">
      {/* Customize your loader content/style here */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-t-blue-500"></div>
    </div>
  ) : null;
};

export default Loader;
