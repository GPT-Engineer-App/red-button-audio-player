import React, { useRef } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 3;
      audioRef.current.play();
      setTimeout(() => {
        audioRef.current.pause();
      }, 2000);
    }
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
      </div>
    </div>
  );
};

export default Index;