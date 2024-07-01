import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const audioRef = useRef(null);

  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(true);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <Button
          onClick={handleClick}
          className="bg-red-500 text-white text-2xl p-4 rounded-full"
        >
          Play Sound
        </Button>
        {showIframe ? (
          <iframe
            width="186"
            height="105"
            src="https://www.youtube.com/embed/GP7-HIeNnNg?si=WOdxqKryRrGz4KjO&amp;controls=0&amp;start=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <audio ref={audioRef} src="https://www.youtube.com/embed/VRq4I1a1iVw?start=3" />
        )}
      </div>
    </div>
  );
};

export default Index;