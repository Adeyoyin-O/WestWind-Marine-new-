import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Compass, Award, MonitorSpeaker, Zap, Building, Factory, Globe, Settings, Heart, Trophy, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import aboutHeroImage from "@assets/alexander-kovalev-mIG_NqkYBoI-unsplash_1749906855750.jpg";

export default function About() {
  return (
    <div className="page-transition">
      {/* Header Section */}
      <section className="relative bg-slate-900 text-white py-16 overflow-hidden">
        {/* Animated geometric background */}
        <div className="absolute inset-0">
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
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-teal-600/20 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <Building className="w-4 h-4 mr-2" />
              About Our Company
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Excellence in Marine Electronics and Navigation Systems since 2011
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12 mx-4">
            <div className="px-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-dark)] mb-6 tracking-tight">Who We Are</h2>
              <div className="space-y-6 text-lg text-black leading-relaxed">
                <p>
                  <strong className="text-black">West Wind Marine Electronics Ltd</strong>, is a company registered under the corporate affairs commission of Nigeria on the 5th Feb 2019 with RC number: 1558935.
                </p>
                <p>
                  West Wind Marine Electronics Ltd is a company borne out of Passion to provide top-notch services and solutions to customers in the areas of Navigation, communication, automation, and electrical solutions in the Maritime industry particularly in Nigeria and across Africa.
                </p>
                <p>
                  We are unique in the services we render by providing customers with quality service and competitive solutions. We are a solution provider and integrator of Navigation and communication equipment.
                </p>
              </div>
            </div>
            <div className="elevated-card p-10 bg-gradient-to-br from-white via-blue-50 to-white border border-gray-200 shadow-lg relative overflow-hidden mt-16">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--primary-blue)] to-transparent opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[var(--bright-coral)] to-transparent opacity-10 rounded-tr-full"></div>
              
              <div className="grid grid-cols-2 gap-10 text-center relative z-10">
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">2019</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Established</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">6+</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">100%</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Customer Focused</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-2xl font-bold text-[var(--bright-coral)] mb-2">1558935</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">RC Number</div>
                </div>

              </div>
            </div>
          </div>

          {/* Extended paragraphs */}
          <div className="mx-4 px-4">
            <div className="space-y-6 text-lg text-black leading-relaxed">
              <p>
                We design, procure, install, commission, repair, and maintain Navigation, communication, instrumentation, automation, and electrical equipment.
              </p>
              <p>
                West Wind Marine Electronics Ltd is customer and solution-oriented company. We are determined to grow organically into knowledge-based organization and a pace setter in the marine Navigation and communication around Gulf of Guinea.
              </p>
            </div>
          </div>


        </div>
      </section>

      {/* Marine Equipment Carousel */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <div className="carousel-container">
              <div className="carousel-track flex transition-transform duration-1000 ease-in-out">
                {/* Slide 1: Communication Station + VDR Equipment */}
                <div className="carousel-slide flex-shrink-0 w-full flex gap-4">
                  <div className="w-1/2">
                    <img 
                      src="/attached_assets/picture1 (1)_1751545685776.png" 
                      alt="Marine Communication Station"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-1/2">
                    <img 
                      src="/attached_assets/picture4_1751545786694.png" 
                      alt="VDR Equipment"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Slide 2: Ship Bridge + Marine Safety Equipment */}
                <div className="carousel-slide flex-shrink-0 w-full flex gap-4">
                  <div className="w-1/2">
                    <img 
                      src="/attached_assets/picture5_1751545770506.png" 
                      alt="Ship Bridge Systems"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-1/2">
                    <img 
                      src="/attached_assets/picture2_1751545792279.png" 
                      alt="Marine Safety Equipment"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>

                {/* Slide 3: Port Operations (single image centered) */}
                <div className="carousel-slide flex-shrink-0 w-full flex justify-center">
                  <div className="w-3/4">
                    <img 
                      src="/attached_assets/picture3 (1)_1751545692156.png" 
                      alt="Port Operations"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .carousel-container {
            position: relative;
            overflow: hidden;
          }
          
          .carousel-track {
            animation: slide 12s infinite;
          }
          
          @keyframes slide {
            0% { transform: translateX(0); }
            25% { transform: translateX(0); }
            33.33% { transform: translateX(-100%); }
            58.33% { transform: translateX(-100%); }
            66.66% { transform: translateX(-200%); }
            91.66% { transform: translateX(-200%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          {/* Timeline Style Layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--primary-blue)] via-[var(--bright-coral)] to-[var(--primary-blue)] rounded-full"></div>
            
            {/* Vision & Mission - Side by Side */}
            <div className="relative mb-16">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Vision */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg border-l-4 border-[var(--primary-blue)] relative">
                    <div className="absolute -right-4 top-6 w-8 h-8 bg-[var(--primary-blue)] rounded-full border-4 border-white shadow-lg lg:block hidden"></div>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl font-bold text-[var(--primary-blue)] mr-3">01</div>
                      <div>
                        <Target className="h-6 w-6 text-[var(--primary-blue)] mb-1" />
                        <h3 className="text-xl font-bold text-[var(--primary-dark)]">Our Vision</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
                    </p>
                    <div className="text-sm text-gray-500 mt-3 font-semibold">Future Focused</div>
                  </div>
                </div>

                {/* Mission */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 shadow-lg border-r-4 border-[var(--bright-coral)] relative">
                    <div className="absolute -left-4 top-6 w-8 h-8 bg-[var(--bright-coral)] rounded-full border-4 border-white shadow-lg lg:block hidden"></div>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl font-bold text-[var(--bright-coral)] mr-3">02</div>
                      <div>
                        <Compass className="h-6 w-6 text-[var(--bright-coral)] mb-1" />
                        <h3 className="text-xl font-bold text-[var(--primary-dark)]">Our Mission</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      To provide solution-oriented services to our customers, shareholders and stakeholders.
                    </p>
                    <div className="text-sm text-gray-500 mt-3 font-semibold">Service Driven</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values - Center */}
            <div className="relative">
              <div className="text-center mb-12">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-blue)] to-[var(--bright-coral)] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-6xl font-bold text-gradient bg-gradient-to-r from-[var(--primary-blue)] to-[var(--bright-coral)] bg-clip-text text-transparent mb-2">03</div>
                <h3 className="text-3xl font-bold text-[var(--primary-dark)] mb-4">Our Core Values</h3>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Our core values are centered on understanding customers' needs, providing professional services beyond expectations and taking full responsibility for our actions.
                </p>
              </div>

              {/* Values Cards */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="group text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-rose-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-pink-500"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-50 to-rose-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 text-rose-500" />
                    </div>
                    <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Customer Focus</h4>
                    <p className="text-gray-600 leading-relaxed">Understanding and exceeding expectations through dedicated service and attention to detail</p>
                  </div>
                </div>

                <div className="group text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-8 h-8 text-amber-500" />
                    </div>
                    <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">Delivering professional services beyond expectations with the highest quality standards</p>
                  </div>
                </div>

                <div className="group text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h4 className="text-xl font-bold text-[var(--primary-dark)] mb-3">Responsibility</h4>
                    <p className="text-gray-600 leading-relaxed">Taking full accountability for our actions and maintaining ethical business practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
