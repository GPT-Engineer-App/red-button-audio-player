import React from "react";

const FireIframe = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative p-4">
        <div className="absolute inset-0 bg-[url('/images/fire.gif')] bg-cover bg-center opacity-75"></div>
        <iframe
          width="186"
          height="105"
          src="https://www.youtube.com/embed/GP7-HIeNnNg?si=WOdxqKryRrGz4KjO&amp;controls=0&amp;start=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="relative z-10"
        ></iframe>
      </div>
    </div>
  );
};

export default FireIframe;