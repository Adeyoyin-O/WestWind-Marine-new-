import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  backgroundImage?: string;
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
  showButtons = false,
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonText = "Explore Our Services",
  secondaryButtonText = "Get a Quote"
}: HeroProps) {
  return (
    <section className="relative bg-slate-900 text-white py-24 lg:py-40 overflow-hidden">
      {/* Animated geometric background */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900"></div>
        
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
        
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
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {typeof title === 'string' ? title : title}
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
