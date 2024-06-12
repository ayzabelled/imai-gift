"use client"

import React, { useEffect } from 'react';
import anime from 'animejs';
import Image from 'next/image';

interface SplashScreenProps {
  finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 3,
      duration: 2000,
      easing: "easeInOutExpo",
    });
  }, [finishLoading]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-clip">
          <Image
            src="/hug.gif"
            alt="Hug"
            className="unoptimized"
            width={1100}
            height={1100}
            ></Image>
   </main>
  );
};

export default SplashScreen;