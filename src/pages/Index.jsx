import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const audioRef = useRef(null);
  const [showIframe, setShowIframe] = useState(false);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 3;
      audioRef.current.play();
      setTimeout(() => {
        audioRef.current.pause();
      }, 2000);
    }
    setShowIframe(true);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <Button
          onClick={playAudio}
          className="bg-red-500 text-white text-2xl p-4 rounded-full"
        >
          Play Sound
        </Button>
        <audio ref={audioRef} src="https://www.youtube.com/embed/VRq4I1a1iVw?start=3" />
        {showIframe && (
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
        )}
      </div>
    </div>
  );
};

export default Index;