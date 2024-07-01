import React, { useRef } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showIframe, setShowIframe] = useState(false);
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 3;
      audioRef.current.play();
      setTimeout(() => {
        audioRef.current.pause();
      }, 2000);
    }
    const iframe = document.createElement("iframe");
    iframe.width = "186";
    iframe.height = "105";
    iframe.src = "https://www.youtube.com/embed/GP7-HIeNnNg?si=WOdxqKryRrGz4KjO&controls=0&start=1";
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    document.getElementById("iframe-container").appendChild(iframe);
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
        <div id="iframe-container"></div>
      </div>
    </div>
  );
};

export default Index;