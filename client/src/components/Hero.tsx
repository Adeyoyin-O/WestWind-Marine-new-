import { ReactNode, useRef, useEffect } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Use first video from backgroundVideos if provided, otherwise fallback to single backgroundVideo
  const videoSource = backgroundVideos?.[0] || backgroundVideo;

  // Initialize video
  useEffect(() => {
    if (!videoSource) return;
    
    const video = videoRef.current;
    if (!video) return;

    // Configure video properties
    video.preload = 'auto';
    video.playsInline = true;
    video.muted = true;
    video.loop = true;
    video.controls = false;
    video.setAttribute('webkit-playsinline', 'true');
    video.setAttribute('playsinline', 'true');
    
    // Set source and play
    video.src = videoSource;
    video.load();
    
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn('Video autoplay failed:', error);
      }
    };

    // Play when video can start
    video.addEventListener('canplay', playVideo);
    
    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, [videoSource]);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {videoSource ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            playsInline
            muted
            loop
            autoPlay
          />
        ) : backgroundImage ? (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f172abd]" />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className="text-lg sm:text-xl text-cyan-300 mb-6 font-medium">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {/* Overlay Content - Positioned above video */}
          <div className="relative z-20">
            {children}
          </div>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 relative z-20">
              <Button
                onClick={onPrimaryClick}
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {primaryButtonText}
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={onSecondaryClick}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
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