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
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 mx-4">
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
                <p>
                  We design, procure, install, commission, repair, and maintain Navigation, communication, instrumentation, automation, and electrical equipment.
                </p>
                <p>
                  West Wind Marine Electronics Ltd is customer and solution-oriented company. We are determined to grow organically into knowledge-based organization and a pace setter in the marine Navigation and communication around Gulf of Guinea.
                </p>
              </div>
            </div>
            <div className="elevated-card p-10 bg-gradient-to-br from-white via-blue-50 to-white border border-gray-200 shadow-lg relative overflow-hidden">
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


        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-20 h-20 border-2 border-[var(--primary-blue)] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-16 h-16 border-2 border-[var(--bright-coral)] rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 mx-4">
            <div className="modern-card p-6 bg-white border border-gray-200 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--primary-blue)] to-transparent opacity-10 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-blue)] to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 tracking-tight">Our Vision</h3>
                <div className="w-8 h-0.5 bg-[var(--primary-blue)] rounded-full mb-3"></div>
                <p className="text-gray-600 leading-relaxed">
                  To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
                </p>
              </div>
            </div>

            <div className="modern-card p-6 bg-white border border-gray-200 shadow-lg relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--bright-coral)] to-transparent opacity-10 rounded-bl-3xl"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary-blue)] to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Compass className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 tracking-tight">Our Mission</h3>
                <div className="w-8 h-0.5 bg-[var(--primary-blue)] rounded-full mb-3"></div>
                <p className="text-gray-600 leading-relaxed">
                  To provide solution-oriented services to our customers, shareholders and stakeholders.
                </p>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="modern-card p-6 bg-white border border-gray-200 shadow-lg mt-8 mx-4">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Award className="h-6 w-6 text-[var(--primary-blue)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] mb-3 tracking-tight">Our Core Values</h3>
              <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
                Our core values are centered on understanding customers' needs, providing professional services beyond expectations and taking full responsibility for our actions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-[var(--primary-blue)]" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[var(--primary-dark)] mb-2">Customer Focus</h4>
                <p className="text-gray-600 leading-relaxed text-sm">Understanding and exceeding expectations through dedicated service and attention to detail</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-5 h-5 text-[var(--primary-blue)]" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[var(--primary-dark)] mb-2">Excellence</h4>
                <p className="text-gray-600 leading-relaxed text-sm">Delivering professional services beyond expectations with the highest quality standards</p>
              </div>
              
              <div className="text-center group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-[var(--primary-blue)]" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[var(--primary-dark)] mb-2">Responsibility</h4>
                <p className="text-gray-600 leading-relaxed text-sm">Taking full accountability for our actions and maintaining ethical business practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
