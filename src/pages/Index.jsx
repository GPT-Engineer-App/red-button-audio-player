import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showIframe, setShowIframe] = useState(false);

  const showIframe = () => {
    setShowIframe(true);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        {showIframe ? (
          <iframe
            width="186"
            height="105"
            src="https://www.youtube.com/embed/GP7-HIeNnNg?si=WOdxqKryRrGz4KjO&amp;controls=0&amp;start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        ) : (
          <Button
            onClick={showIframe}
            className="bg-red-500 text-white text-2xl p-4 rounded-full"
          >
            Play Sound
          </Button>
        )}
      </div>
    </div>
  );
};

export default Index;