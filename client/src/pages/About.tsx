import { useEffect } from "react";
import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Compass, Award, MonitorSpeaker, Zap, Building, Factory, Globe, Settings, Heart, Trophy, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { setupHashNavigation } from "@/lib/hashNavigation";
import aboutHeroImage from "@assets/alexander-kovalev-mIG_NqkYBoI-unsplash_1749906855750.jpg";
import communicationStation from "@assets/picture1 (1)_1751545685776.png";
import vdrEquipment from "@assets/picture4_1751545786694.png";
import shipBridge from "@assets/picture5_1751545770506.png";
import safetyEquipment from "@assets/picture2_1751545792279.png";
import portOperations from "@assets/picture3 (1)_1751545692156.png";

export default function About() {
  // Setup hash navigation for any potential hash links
  useEffect(() => {
    const cleanup = setupHashNavigation(undefined, 100);
    return cleanup;
  }, []);

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
                  <strong className="text-black">West Wind Marine Electronics Ltd</strong> is a company registered under the corporate affairs commission of Nigeria on the 5th Feb 2019 with RC number: 1558935.
                </p>
                <p>
                  Recently, we opened another branch in Dakar Senegal, West wind Marine Electronics Sarl, on the 21st February 2025 with company registration number SN DKR 2025 B 882.
                </p>
                <p>West Wind Marine Electronics Ltd is a company borne out of Passion to provide top-notch services and solutions to customers in the areas of Navigation, communication, automation, and electrical solutions in the Maritime industry across Gulf of Guinea and Africa.</p>
                <p>
                  We are unique in the services we render by providing customers with quality service and competitive solutions. We are a solution provider and integrator of navigation and communication equipment.
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
                We design, procure, install, commission, repair, and maintain navigation, communication, instrumentation, automation, and electrical equipment.
              </p>
              <p>
                West Wind Marine Electronics Ltd is a customer and solution-oriented company. We are determined to grow organically into knowledge-based organization and a pace setter in marine navigation and communication around the Gulf of Guinea.
              </p>
              <p>West Wind Marine Electronics, as a progressive company, has just added ABS approval to its list of IACS approvals for both Lagos and Dakar offices.</p>
              <p>
                Currently, we are ABS, DNV, LR, and BV approved. Effort is in place to have ClassNK added to the list
              </p>
            </div>
          </div>


        </div>
      </section>
      {/* Marine Equipment Gallery */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="w-full">
          <div className="flex w-full gap-1">
            <div className="flex-1">
              <img 
                src={communicationStation} 
                alt="Marine Communication Station"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex-1">
              <img 
                src={vdrEquipment} 
                alt="VDR Equipment"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex-1">
              <img 
                src={shipBridge} 
                alt="Ship Bridge Systems"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex-1">
              <img 
                src={safetyEquipment} 
                alt="Marine Safety Equipment"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="flex-1">
              <img 
                src={portOperations} 
                alt="Port Operations"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>


      </section>
      {/* Vision & Mission */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Vision & Mission - Side by Side */}
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Vision */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border-l-4 border-[var(--primary-blue)]">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-[var(--primary-blue)] mr-3" />
                  <h3 className="text-xl font-bold text-[var(--primary-dark)]">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be a World Class Solutions Provider and Systems Integrator in the Power and Maritime Industries.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 shadow-md border-l-4 border-[var(--bright-coral)]">
                <div className="flex items-center mb-4">
                  <Compass className="h-6 w-6 text-[var(--bright-coral)] mr-3" />
                  <h3 className="text-xl font-bold text-[var(--primary-dark)]">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide solution-oriented services to our customers, shareholders and stakeholders.
                </p>
              </div>
            </div>

            {/* Core Values - Center */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[var(--primary-blue)] mr-3" />
                <h3 className="text-xl font-bold text-[var(--primary-dark)]">Our Core Values</h3>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Our core values are centered on understanding customers' needs, providing professional services beyond expectations and taking full responsibility for our actions.
              </p>
            </div>

            {/* Values Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Heart className="w-6 h-6 text-rose-500 mr-3" />
                  <h4 className="font-bold text-[var(--primary-dark)]">Customer Focus</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">Understanding and exceeding expectations through dedicated service and attention to detail</p>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Trophy className="w-6 h-6 text-amber-500 mr-3" />
                  <h4 className="font-bold text-[var(--primary-dark)]">Excellence</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">Delivering professional services beyond expectations with the highest quality standards</p>
              </div>

              <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3" />
                  <h4 className="font-bold text-[var(--primary-dark)]">Responsibility</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">Taking full accountability for our actions and maintaining ethical business practices</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
