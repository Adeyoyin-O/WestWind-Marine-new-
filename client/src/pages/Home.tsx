export default function Home() {
  return (
    <div className="page-transition bg-slate-900 min-h-screen text-white">
      {/* Hero Section with Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,300 Q500,100 1000,400" stroke="rgba(20,184,166,0.1)" strokeWidth="2" fill="none" />
            <path d="M0,600 Q500,400 1000,700" stroke="rgba(6,182,212,0.1)" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                Marine Electronics Engineering
              </div>
              
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-white">West Wind</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"> Marine</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Advanced Marine Electronics & Engineering Solutions
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">Marine Certified</span>
                </div>
                <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-medium">Expert Engineering</span>
                </div>
              </div>
            </div>
            
            {/* Right column - Visual element */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Main circle */}
                <div className="absolute inset-0 border-2 border-teal-400/30 rounded-full"></div>
                <div className="absolute inset-8 border border-cyan-400/20 rounded-full"></div>
                <div className="absolute inset-16 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm"></div>
                
                {/* Floating tech elements */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-teal-500/20 border border-teal-400/30 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-10 left-10 w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute top-1/2 left-4 w-8 h-20 bg-gradient-to-b from-teal-400/30 to-cyan-400/30 rounded-full"></div>
                <div className="absolute top-1/3 right-4 w-6 h-16 bg-gradient-to-b from-cyan-400/30 to-teal-400/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Main Content - Diagonal Split Design */}
      <section className="relative bg-white">
        {/* Diagonal separator */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,0 L1000,100 L1000,1000 L0,900 Z" fill="rgb(15,23,42)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Dark section */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    Marine Electronics Excellence
                  </span>
                </h2>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-teal-500/20 border border-teal-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <span className="text-teal-300 font-medium">Precision engineering for marine environments</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  We specialize in advanced marine electronics, navigation systems, and electrical engineering solutions designed to meet the demanding requirements of maritime operations.
                </p>
              </div>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-teal-400 mb-2">15+</div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-sm text-slate-300">Projects Completed</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Light section */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Core Services</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Navigation Systems</h4>
                      <p className="text-slate-600 text-sm">Advanced GPS, radar, and communication equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Power Systems</h4>
                      <p className="text-slate-600 text-sm">Marine electrical distribution and control panels</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Automation</h4>
                      <p className="text-slate-600 text-sm">Integrated control systems and IoT solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - Modern Grid Layout */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-medium mb-6 border border-teal-200">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              Professional Services
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">Marine</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500"> Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive marine electronics services from design to implementation and maintenance
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Navigation Systems */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Navigation & Communication</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  State-of-the-art navigation systems including GPS, AIS, radar installations, and VHF communication equipment designed for optimal maritime safety and efficiency.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">GPS Navigation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Radar Systems</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">VHF Communication</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">AIS Transponders</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Specialties Sidebar */}
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 translate-y-12"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-6">Specializations</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Marine electrical installations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Control panel manufacturing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">System integration services</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Equipment maintenance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Technical consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Capabilities - Modern Card Grid */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-teal-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-cyan-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Engineering Capabilities
              </span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Advanced technical expertise across all aspects of marine electronics and electrical systems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 border border-teal-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">System Design</h4>
                  <p className="text-slate-300 text-sm">Custom electrical and electronics system design tailored to vessel specifications and operational requirements.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Installation & Commissioning</h4>
                  <p className="text-slate-300 text-sm">Professional installation services with comprehensive testing and commissioning of all marine electronic systems.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 border border-teal-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Maintenance & Support</h4>
                  <p className="text-slate-300 text-sm">Ongoing maintenance programs and 24/7 technical support to ensure optimal system performance and reliability.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Upgrade & Modernization</h4>
                  <p className="text-slate-300 text-sm">System upgrades and modernization services to keep marine electronics current with latest technology standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}