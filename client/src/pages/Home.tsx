import { useLocation, Link } from "wouter";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Workflow, Ship, Cpu, ArrowRight, Zap, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import heroBackground from "@assets/rob-lambert-9Q_pLLP_jmA-unsplash_1750155822053.jpg";
import serviceImage1 from "@assets/service11_1749934695026.jpg";
import serviceImage2 from "@assets/service10_1749934751504.jpg";
import serviceImage3 from "@assets/service7_1749934776068.jpg";
import serviceImage4 from "@assets/service8_1749934789632.jpg";
import serviceImage5 from "@assets/service9_1749934761978.jpg";
import serviceImage6 from "@assets/service18_1749934858577.jpg";
import serviceImage7 from "@assets/service14_1749934710232.jpg";
import serviceImage8 from "@assets/service23_1749934808291.jpg";
import serviceImage9 from "@assets/service20_1749934817170.jpg";
import serviceImage10 from "@assets/service19_1749934843078.jpg";
import serviceImage11 from "@assets/service17_1749934870522.jpg";
import serviceImage12 from "@assets/service15_1749934878839.jpg";
import controlPanelImage from "@assets/staff-woman-worker-work-operate-cutting-machine-lathe-cnc-engineer-modern-factory-working-woman-smart-women-worker-industry-workplace-photo_1749941219517.jpg";
import electricalPanelImage from "@assets/electricity-electrical-maintenance-service-electrician-260nw-2251896605_1749941607977.jpg";
import marineControlImage from "@assets/image_1749942411532.png";
import { useState, useEffect } from "react";

// Service Carousel Component
function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      image: serviceImage1,
      title: "Power Distribution Systems",
      description: "High-voltage electrical switchgear and distribution panels"
    },
    {
      image: serviceImage2,
      title: "Industrial Control Systems",
      description: "Advanced automation and process control solutions"
    },
    {
      image: serviceImage3,
      title: "Electrical Installations",
      description: "Complete electrical switchboard and control panel systems"
    },
    {
      image: serviceImage4,
      title: "Marine Power Systems",
      description: "Specialized electrical systems for maritime applications"
    },
    {
      image: serviceImage5,
      title: "Testing & Commissioning",
      description: "Professional testing and system commissioning services"
    },
    {
      image: serviceImage6,
      title: "Control Panel Design",
      description: "Custom electrical control and monitoring systems"
    },
    {
      image: serviceImage7,
      title: "Infrastructure Cabling",
      description: "Structured cabling and electrical infrastructure systems"
    },
    {
      image: serviceImage8,
      title: "Generator Systems",
      description: "Industrial power generation and backup systems"
    },
    {
      image: serviceImage9,
      title: "Civil Engineering",
      description: "Foundation and structural work for electrical installations"
    },
    {
      image: serviceImage10,
      title: "Cable Installation",
      description: "Underground and overhead cable installation services"
    },
    {
      image: serviceImage11,
      title: "Industrial Equipment",
      description: "Heavy-duty industrial electrical equipment and installations"
    },
    {
      image: serviceImage12,
      title: "Project Construction",
      description: "Complete project execution from design to commissioning"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-96 bg-white rounded-2xl overflow-hidden shadow-xl">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
              <p className="text-sm opacity-90">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Side Arrow Navigation */}
      <button
        onClick={() => goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <button
        onClick={() => goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>


    </div>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();

  const handleExploreServices = () => {
    setLocation("/products-services");
  };

  const handleGetQuote = () => {
    setLocation("/contact");
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero
        title="Your EPIC Partner in Engineering Excellence"
        subtitle="From electrical systems to control infrastructure, we bring precision, expertise, and reliability to every stage of your project lifecycle."
        backgroundImage={heroBackground}
        showButtons
        onPrimaryClick={handleExploreServices}
        onSecondaryClick={handleGetQuote}
        primaryButtonText="Explore"
        secondaryButtonText="Get a Quote"
      />

      {/* Stats Highlight Strip */}
      <section className="bg-gradient-to-r from-gray-50 to-slate-100 py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <div className="text-center group p-6 rounded-lg bg-white/60 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:scale-105 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">13+ Years of Proven Delivery</h3>
              <p className="text-sm text-slate-700 group-hover:text-slate-600 transition-colors duration-300">Trusted expertise in<br />complex engineering projects</p>
            </div>
            
            <div className="text-center group p-6 rounded-lg bg-white/60 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:scale-105 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Workflow className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">EPIC Services, All in One Place</h3>
              <p className="text-sm text-slate-700 group-hover:text-slate-600 transition-colors duration-300">Complete engineering, procurement, installation & commissioning</p>
            </div>
            
            <div className="text-center group p-6 rounded-lg bg-white/60 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:scale-105 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Ship className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">Powering Land & Sea</h3>
              <p className="text-sm text-slate-700 group-hover:text-slate-600 transition-colors duration-300">Specialized solutions for<br />power and maritime industries</p>
            </div>
            
            <div className="text-center group p-6 rounded-lg bg-white/60 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:scale-105 border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-700 transition-colors duration-300">Smart Systems Integration</h3>
              <p className="text-sm text-slate-700 group-hover:text-slate-600 transition-colors duration-300">Advanced automation and<br />control system solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-slate-300 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-blue-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-slate-200 rounded-lg rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-200 rounded-lg rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Company Intro */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-sm font-medium border border-cyan-100">
                <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                About West Wind Marine Electronics Ltd
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Marine Electronics
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Excellence Since 2011</span>
              </h2>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                West Wind Marine Electronics Ltd is a leading Nigerian engineering company specializing in comprehensive marine electronics and instrumentation services. We deliver cutting-edge electrical systems, navigation equipment, and maritime control solutions that power vessels and offshore operations...
              </p>
              
              <div className="pt-4">
                <Link href="/about" className="group inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold text-base transition-colors duration-300">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            
            {/* Right Side - Services Carousel */}
            <div className="relative">
              <ServiceCarousel />
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, rgba(251, 146, 60, 0.04) 0%, transparent 40%),
              linear-gradient(45deg, transparent 49%, rgba(148, 163, 184, 0.02) 49%, rgba(148, 163, 184, 0.02) 51%, transparent 51%)
            `,
            backgroundSize: '800px 800px, 600px 600px, 60px 60px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-50 to-red-50 text-orange-700 rounded-full text-sm font-semibold mb-4 border border-orange-100">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
              Our Solutions
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Tailored Expertise for Every Project
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our comprehensive range of specialized services designed to power your success
            </p>
          </div>

          {/* Creative Uneven Layout */}
          <div className="grid grid-cols-12 gap-6 mb-12">
            {/* Large Service Card - Spans 7 columns */}
            <div className="col-span-12 lg:col-span-7 group">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
                <img 
                  src={electricalPanelImage}
                  alt="Technician working on electrical distribution panel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <div className="inline-flex items-center justify-center px-3 py-1 bg-orange-600/80 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                    Power Systems
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Power Distribution & Control</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Advanced electrical switchgear, distribution panels, and high-voltage power systems engineered for industrial and maritime applications
                  </p>
                </div>
              </div>
            </div>

            {/* Two Smaller Cards - Each spans 5 columns, stacked vertically */}
            <div className="col-span-12 lg:col-span-5 space-y-6">
              <div className="group">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <img 
                    src={controlPanelImage}
                    alt="Female engineer operating CNC machinery in modern factory"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-2px]">
                    <div className="inline-flex items-center justify-center px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                      Automation
                    </div>
                    <h3 className="text-lg font-bold mb-2">Industrial Control Systems</h3>
                    <p className="text-xs opacity-90">
                      Cutting-edge automation and process control solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <img 
                    src={marineControlImage}
                    alt="Marine control room with navigation and monitoring systems"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:translate-y-[-2px]">
                    <div className="inline-flex items-center justify-center px-3 py-1 bg-cyan-600/80 backdrop-blur-sm rounded-full text-xs font-medium mb-2">
                      Maritime
                    </div>
                    <h3 className="text-lg font-bold mb-2">Marine Electronics</h3>
                    <p className="text-xs opacity-90">
                      Specialized electronic systems for maritime vessels
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stylish Explore Button */}
          <div className="text-center">
            <Link href="/products-services">
              <Button 
                className="group relative px-8 py-4 bg-white border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 font-semibold rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative flex items-center">
                  Explore Full Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
