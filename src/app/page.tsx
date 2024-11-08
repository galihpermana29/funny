'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
export default function Home() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      (audioRef.current as any).play();
    }
  }, []);
  return (
    <div>
      <audio controls autoPlay loop ref={audioRef}>
        <source
          src={
            'https://res.cloudinary.com/braiwjaya-university/video/upload/v1731082428/olpa_obssce.mp3'
          }
          type="audio/mpeg"
        />
      </audio>

      <Image
        src={
          'https://res.cloudinary.com/braiwjaya-university/image/upload/v1731082430/olpa_kxopsy.jpg'
        }
        alt="olpa"
        width={100}
        height={100}
        className="w-full h-screen"
      />
    </div>
  );
}
