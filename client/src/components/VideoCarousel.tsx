import { useState, useEffect, useRef } from 'react';

interface VideoCarouselProps {
  videos: string[];
  className?: string;
}

export default function VideoCarousel({ videos, className = '' }: VideoCarouselProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videos.length === 0) return;

    const currentVideo = videoRef.current;
    if (!currentVideo) return;

    const handleVideoEnd = () => {
      setIsTransitioning(true);
      
      // Start transition to next video
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    };

    currentVideo.addEventListener('ended', handleVideoEnd);

    return () => {
      currentVideo.removeEventListener('ended', handleVideoEnd);
    };
  }, [videos, currentVideoIndex]);

  useEffect(() => {
    // Auto-play when video changes
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, [currentVideoIndex]);

  if (videos.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Current Video */}
      <video
        ref={videoRef}
        src={videos[currentVideoIndex]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      
      {/* Next Video (for smooth transitions) */}
      <video
        ref={nextVideoRef}
        src={videos[(currentVideoIndex + 1) % videos.length]}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        muted
        playsInline
        preload="auto"
      />
      
      {/* Overlay to ensure content is readable */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[0.5px]" />
      
      {/* Video indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentVideoIndex(index);
              setIsTransitioning(false);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideoIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}