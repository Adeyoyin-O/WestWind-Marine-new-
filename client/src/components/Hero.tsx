import { ReactNode, useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  backgroundImage?: string;
  backgroundVideo?: string;
  backgroundVideos?: string[];
  showButtons?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  children,
  backgroundImage,
  backgroundVideo,
  backgroundVideos,
  showButtons = false,
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonText = "Explore Our Services",
  secondaryButtonText = "Get a Quote"
}: HeroProps) {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideoElement, setActiveVideoElement] = useState<1 | 2>(1);
  
  // Use backgroundVideos if provided, otherwise fallback to single backgroundVideo
  const videoSources = backgroundVideos || (backgroundVideo ? [backgroundVideo] : []);
  
  useEffect(() => {
    if (videoSources.length === 0) return;
    
    const currentVideo = activeVideoElement === 1 ? video1Ref.current : video2Ref.current;
    const nextVideo = activeVideoElement === 1 ? video2Ref.current : video1Ref.current;
    
    if (!currentVideo || !nextVideo) return;
    
    let transitionScheduled = false;
    
    const handleVideoTransition = () => {
      if (transitionScheduled) return;
      transitionScheduled = true;
      
      const nextIndex = currentVideoIndex === videoSources.length - 1 ? 0 : currentVideoIndex + 1;
      
      // Prepare next video for immediate playback
      if (nextVideo.src !== videoSources[nextIndex]) {
        nextVideo.src = videoSources[nextIndex];
        nextVideo.load();
      }
      
      nextVideo.currentTime = 0;
      
      // Start next video immediately and switch visibility
      const playPromise = nextVideo.play();
      
      if (playPromise) {
        playPromise.then(() => {
          // Switch active video element after next video starts
          setCurrentVideoIndex(nextIndex);
          setActiveVideoElement(activeVideoElement === 1 ? 2 : 1);
        }).catch(console.error);
      } else {
        // Fallback for browsers that don't return a promise
        setCurrentVideoIndex(nextIndex);
        setActiveVideoElement(activeVideoElement === 1 ? 2 : 1);
      }
    };
    
    // Preload next video when current video is halfway through
    const handlePreload = () => {
      if (currentVideo.duration && currentVideo.currentTime) {
        const progress = currentVideo.currentTime / currentVideo.duration;
        const nextIndex = currentVideoIndex === videoSources.length - 1 ? 0 : currentVideoIndex + 1;
        
        // Preload next video when current is 50% complete
        if (progress >= 0.5 && nextVideo.src !== videoSources[nextIndex]) {
          nextVideo.src = videoSources[nextIndex];
          nextVideo.load();
        }
      }
    };
    
    // Multiple event listeners for maximum reliability
    const handleTimeUpdate = () => {
      if (currentVideo.duration && currentVideo.currentTime) {
        handlePreload();
        
        const timeRemaining = currentVideo.duration - currentVideo.currentTime;
        // Switch 0.03 seconds before end for maximum smoothness
        if (timeRemaining <= 0.03 && !transitionScheduled) {
          handleVideoTransition();
        }
      }
    };
    
    const handleEnded = () => {
      if (!transitionScheduled) {
        handleVideoTransition();
      }
    };
    
    // Add multiple event listeners for reliability
    currentVideo.addEventListener('timeupdate', handleTimeUpdate);
    currentVideo.addEventListener('ended', handleEnded);
    
    return () => {
      currentVideo.removeEventListener('timeupdate', handleTimeUpdate);
      currentVideo.removeEventListener('ended', handleEnded);
    };
  }, [currentVideoIndex, activeVideoElement, videoSources]);
  
  useEffect(() => {
    if (videoSources.length === 0) return;
    
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    
    if (!video1 || !video2) return;
    
    // Configure video properties for seamless playback
    [video1, video2].forEach(video => {
      video.preload = 'auto';
      video.playsInline = true;
      video.muted = true;
      video.loop = false;
    });
    
    // Initialize first video
    video1.src = videoSources[0];
    video1.load();
    
    // Wait for first video to be ready then start playing
    const handleCanPlay = () => {
      video1.play().catch(console.error);
      video1.removeEventListener('canplaythrough', handleCanPlay);
    };
    
    video1.addEventListener('canplaythrough', handleCanPlay);
    
    // Preload second video if available
    if (videoSources.length > 1) {
      video2.src = videoSources[1];
      video2.load();
    }
    
    return () => {
      video1.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, [videoSources]);
  return (
    <section className="relative bg-slate-900 text-white py-24 lg:py-40 overflow-hidden">
      {/* Background - Video or Animated geometric background */}
      <div className="absolute inset-0">
        {videoSources.length > 0 ? (
          <>
            {/* Video background - dual video elements for seamless transitions */}
            <video 
              ref={video1Ref}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ${
                activeVideoElement === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              autoPlay
              muted
              playsInline
              preload="auto"
            />
            <video 
              ref={video2Ref}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ${
                activeVideoElement === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              muted
              playsInline
              preload="auto"
            />
            {/* Video overlay for better text readability */}
            <div className="absolute inset-0 bg-slate-900/70 z-20"></div>
          </>
        ) : (
          <>
            {/* Primary gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900"></div>
            
            {/* Floating geometric shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 border border-teal-400/20 rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute top-20 right-20 w-24 h-24 bg-teal-500/10 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-cyan-400/15 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-xl rotate-45"></div>
            
            {/* Dynamic grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" 
                   style={{
                     backgroundImage: `linear-gradient(rgba(20,184,166,0.3) 1px, transparent 1px), 
                                     linear-gradient(90deg, rgba(20,184,166,0.3) 1px, transparent 1px)`,
                     backgroundSize: '60px 60px'
                   }}>
              </div>
            </div>
            
            {/* Animated waves */}
            <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
                    fill="rgba(20,184,166,0.1)" 
                    className="animate-pulse">
              </path>
              <path d="M0,80 C300,40 900,120 1200,80 L1200,120 L0,120 Z" 
                    fill="rgba(6,182,212,0.1)">
              </path>
            </svg>
            
            {/* Diagonal accent line */}
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-400/10 to-transparent transform rotate-45 translate-x-48 -translate-y-48"></div>
            </div>
          </>
        )}
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-30">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg lg:text-xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto font-normal">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Button 
                size="lg"
                className="blue-gradient hover:opacity-90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base w-full sm:w-48 flex items-center justify-center gap-2"
                onClick={onPrimaryClick}
              >
                {primaryButtonText}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-base backdrop-blur-sm bg-transparent w-full sm:w-48 flex items-center justify-center gap-2"
                onClick={onSecondaryClick}
              >
                Get a Quote
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
}
