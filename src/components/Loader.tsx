"use client";
import React, { useEffect, useState } from "react";

const Loader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center">
      {/* You can embed your GIF here */}
      <iframe
        src="https://giphy.com/embed/8desOxQqrretyGGfFI/video"
        width="300"
        height="300"
        frameBorder="0"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  );
};

export default Loader;