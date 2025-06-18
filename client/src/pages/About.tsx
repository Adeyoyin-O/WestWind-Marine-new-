import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Compass, Award, MonitorSpeaker, Zap, Building, Factory, Globe, Settings, Heart, Trophy, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import aboutHeroImage from "@assets/alexander-kovalev-mIG_NqkYBoI-unsplash_1749906855750.jpg";

export default function About() {
  return (
    <div className="page-transition">
      {/* About Hero */}
      <Hero
        title="About Us"
        subtitle="Excellence in Marine Electronics and Navigation Systems since 2011"
        backgroundImage={aboutHeroImage}
      />

      {/* Who We Are */}
      <section className="section-spacing bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 mx-4">
            <div className="px-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary-dark)] mb-6 tracking-tight">Who We Are</h2>
              <div className="space-y-6 text-lg text-black leading-relaxed">
                <p>
                  <strong className="text-black">WEST WIND MARINE ELECTRONICS LTD</strong> is an independent service provider offering a comprehensive range of marine electronics, navigation systems, and instrumentation services.
                </p>
                <p>
                  We are a company registered under the Corporate Affairs Commission of Nigeria on July 26th, 2011 with RC number 968009.
                </p>
                <p>
                  We specialize in the engineering, procurement, installation, and commissioning (EPIC) of marine electronics, navigation systems, communication equipment, and vessel automation systems, aiming to establish ourselves as a leading force in the maritime electronics industry.
                </p>
              </div>
            </div>
            <div className="elevated-card p-10 bg-gradient-to-br from-white via-blue-50 to-white border border-gray-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--primary-blue)] to-transparent opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[var(--bright-coral)] to-transparent opacity-10 rounded-tr-full"></div>
              
              <div className="grid grid-cols-2 gap-10 text-center relative z-10">
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">2011</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Established</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-4xl font-bold text-[var(--bright-coral)] mb-2">13+</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-2xl font-bold text-[var(--bright-coral)] mb-2">EPIC</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">Services</div>
                </div>
                <div className="group transform transition-transform duration-300 hover:scale-105">
                  <div className="w-16 h-1 bg-gradient-to-r from-[var(--bright-coral)] to-red-400 mx-auto mb-3 rounded-full"></div>
                  <div className="text-lg font-bold text-[var(--bright-coral)] mb-2">968009</div>
                  <div className="text-gray-600 text-sm font-medium uppercase tracking-wide">RC Number</div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-20 mx-4 mt-16">
            <h3 className="text-2xl font-semibold text-[var(--primary-dark)] mb-12 text-center tracking-tight">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="modern-card p-8 text-center bg-gray-50 border border-gray-200 group">
                <div className="w-16 h-16 bg-[var(--primary-blue)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <Building className="h-8 w-8 text-white group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight">Building Systems</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Electrical infrastructure for commercial and industrial facilities</p>
              </div>
              <div className="modern-card p-8 text-center bg-gray-50 border border-gray-200 group">
                <div className="w-16 h-16 bg-[var(--primary-blue)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <Zap className="h-8 w-8 text-white group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight">Power Generation</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Advanced power generation and distribution networks</p>
              </div>
              <div className="modern-card p-8 text-center bg-gray-50 border border-gray-200 group">
                <div className="w-16 h-16 bg-[var(--primary-blue)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <Factory className="h-8 w-8 text-white group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight">Industrial Plants</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Process automation and control systems</p>
              </div>
              <div className="modern-card p-8 text-center bg-gray-50 border border-gray-200 group">
                <div className="w-16 h-16 bg-[var(--primary-blue)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <MonitorSpeaker className="h-8 w-8 text-white group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-[var(--primary-dark)] mb-3 leading-tight">Marine Systems</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Navigation and communication equipment</p>
              </div>
            </div>
          </div>

          {/* Technical Coverage */}
          <div className="elevated-card p-8 bg-white relative overflow-hidden shadow-xl border border-gray-100">
            {/* Modern background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-[var(--primary-blue)] rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border-2 border-[var(--bright-coral)] rounded-full"></div>
            </div>
            
            {/* Header */}
            <div className="text-center mb-8 relative z-10">
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[var(--primary-blue)] to-transparent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--primary-dark)] tracking-tight mb-2">Technical Coverage Areas</h3>
              <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
                Comprehensive engineering solutions across electrical, electronics, and maritime systems
              </p>
            </div>

            {/* Modern grid layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-6 relative z-10">
              {[
                "Control Panels", "Generators & Pumps", "Turbo Generators", "Medium & Low Voltage Panels",
                "Transformers", "Ship Steering Systems", "Gyrocompass", "Voyage Data Recorder",
                "Radio Survey on Ships & Rigs", "Bridge Equipment Installation", "Navigation Systems", "DC & AC Control Panels"
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-gray-200 hover:border-[var(--primary-blue)] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-[var(--bright-coral)] to-red-500 rounded-full flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300"></div>
                      <span className="text-gray-700 font-medium text-sm leading-tight group-hover:text-[var(--primary-dark)] transition-colors duration-300">{item}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-blue)] to-transparent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enhanced CTA */}
            <div className="relative z-10">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>
              <div className="text-center">
                <Link 
                  href="/products-services" 
                  className="inline-flex items-center space-x-2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span>Explore Our Complete Service Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
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
