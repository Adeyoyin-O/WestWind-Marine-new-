import { ReactNode, useRef, useState, useEffect, useCallback } from "react";
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Use backgroundVideos if provided, otherwise fallback to single backgroundVideo
  const videoSources = backgroundVideos || (backgroundVideo ? [backgroundVideo] : []);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Video transition handler
  const handleVideoTransition = useCallback(async () => {
    if (isTransitioning || videoSources.length <= 1) return;
    
    setIsTransitioning(true);
    
    const nextIndex = (currentVideoIndex + 1) % videoSources.length;
    const currentVideo = activeVideoElement === 1 ? video1Ref.current : video2Ref.current;
    const nextVideo = activeVideoElement === 1 ? video2Ref.current : video1Ref.current;
    
    if (!nextVideo || !currentVideo) {
      setIsTransitioning(false);
      return;
    }

    try {
      // Prepare next video
      nextVideo.src = videoSources[nextIndex];
      nextVideo.currentTime = 0;
      
      // Wait for next video to be ready
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          nextVideo.removeEventListener('canplaythrough', handleCanPlay);
          reject(new Error('Video load timeout'));
        }, 3000);

        const handleCanPlay = () => {
          clearTimeout(timeout);
          nextVideo.removeEventListener('canplaythrough', handleCanPlay);
          resolve();
        };

        nextVideo.addEventListener('canplaythrough', handleCanPlay);
        nextVideo.load();
      });

      // Start next video
      await nextVideo.play();
      
      // Switch active video
      setCurrentVideoIndex(nextIndex);
      setActiveVideoElement(activeVideoElement === 1 ? 2 : 1);
      
      // Pause current video after transition
      timeoutRef.current = setTimeout(() => {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }, 500);
      
    } catch (error) {
      console.error('Video transition error:', error);
    } finally {
      setIsTransitioning(false);
    }
  }, [currentVideoIndex, activeVideoElement, videoSources, isTransitioning]);

  // Initialize video system
  useEffect(() => {
    if (videoSources.length === 0) return;
    
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    
    if (!video1 || !video2) return;

    // Configure video properties
    [video1, video2].forEach(video => {
      video.preload = 'auto';
      video.playsInline = true;
      video.muted = true;
      video.loop = false;
      video.controls = false;
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('playsinline', 'true');
      
      // Add error handling
      video.addEventListener('error', (e) => {
        console.warn('Video error:', e);
        video.load();
      });
      
      video.addEventListener('stalled', () => {
        video.load();
      });
    });

    // Initialize first video
    const initializeVideo = async () => {
      try {
        video1.src = videoSources[0];
        video1.load();
        
        await new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(() => {
            video1.removeEventListener('canplaythrough', handleCanPlay);
            reject(new Error('First video load timeout'));
          }, 5000);

          const handleCanPlay = () => {
            clearTimeout(timeout);
            video1.removeEventListener('canplaythrough', handleCanPlay);
            resolve();
          };

          video1.addEventListener('canplaythrough', handleCanPlay);
        });

        await video1.play();
        setVideosLoaded(true);
        
        // Preload second video if available
        if (videoSources.length > 1) {
          video2.src = videoSources[1];
          video2.load();
        }
        
      } catch (error) {
        console.error('Error initializing video:', error);
        // Retry once
        setTimeout(() => {
          video1.play().catch(console.error);
        }, 1000);
      }
    };

    initializeVideo();
    
    return cleanup;
  }, [videoSources, cleanup]);

  // Monitor video progress and handle transitions
  useEffect(() => {
    if (!videosLoaded || videoSources.length <= 1) return;
    
    const currentVideo = activeVideoElement === 1 ? video1Ref.current : video2Ref.current;
    if (!currentVideo) return;

    const checkProgress = () => {
      if (currentVideo.duration && currentVideo.currentTime) {
        const timeRemaining = currentVideo.duration - currentVideo.currentTime;
        
        // Transition 0.3 seconds before the end
        if (timeRemaining <= 0.3 && !isTransitioning) {
          handleVideoTransition();
        }
      }
    };

    const handleEnded = () => {
      if (!isTransitioning) {
        handleVideoTransition();
      }
    };

    // Check progress every 100ms for smooth transitions
    intervalRef.current = setInterval(checkProgress, 100);
    currentVideo.addEventListener('ended', handleEnded);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      currentVideo.removeEventListener('ended', handleEnded);
    };
  }, [activeVideoElement, videosLoaded, videoSources.length, isTransitioning, handleVideoTransition]);

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return (
    <section className="relative bg-slate-900 text-white py-24 lg:py-40 overflow-hidden">
      {/* Background - Video or Animated geometric background */}
      <div className="absolute inset-0">
        {videoSources.length > 0 ? (
          <>
            {/* Video background - dual video elements for seamless transitions */}
            <video 
              ref={video1Ref}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                activeVideoElement === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              autoPlay
              muted
              playsInline
              preload="auto"
              style={{ 
                willChange: 'opacity',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            />
            <video 
              ref={video2Ref}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                activeVideoElement === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              muted
              playsInline
              preload="auto"
              style={{ 
                willChange: 'opacity',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
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

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {description && (
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}
          
          {children}
          
          {showButtons && (
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button 
                onClick={onPrimaryClick}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {primaryButtonText}
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                onClick={onSecondaryClick}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {secondaryButtonText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}