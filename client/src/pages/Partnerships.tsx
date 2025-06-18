export default function Partnerships() {
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
                Strategic Partnership
              </div>
              
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="text-white">SAL</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"> Navigation</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Consilium Navigation Equipment Manufacturers
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">IMO Compliant</span>
                </div>
                <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-sm font-medium">VDR Technology</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
                    Voyage Data Recorders
                  </span>
                </h2>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-teal-500/20 border border-teal-400/30 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-teal-300 font-medium">Proactive incident prevention tool</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  SAL VDR and S-VDR not only fulfill SOLAS requirements, they also meet our customer's high demands on reliability and incident follow-up possibilities, such as outstanding voyage data playback options.
                </p>
              </div>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-teal-400 mb-2">24/7</div>
                  <div className="text-sm text-slate-300">Remote Monitoring</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">48hrs</div>
                  <div className="text-sm text-slate-300">Data Storage</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Light section */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Key Applications</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Safety Management</h4>
                      <p className="text-slate-600 text-sm">Cloud applications for proactive incident prevention</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Remote Diagnostics</h4>
                      <p className="text-slate-600 text-sm">Cost-efficient maintenance and APT solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Data Integration</h4>
                      <p className="text-slate-600 text-sm">Real-time streaming for value-creating analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TOTEMPLUS Section - Modern Grid Layout */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium mb-6 border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              IMO Compliant Technology
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">TOTEM</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">PLUS</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced VDR 2014 technology meeting all new International Maritime Organization requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* General Features */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">VDR 2014 Compliance</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The new Totem VDR 2014 fully complies with the new International Maritime Organization (IMO) VDR standard, which comes into effect July 1, 2014, and meets all the new VDR requirements as defined in MSC.333(90) and IEC 61996-1 Ed. 2.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Float-free capsule</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">48-hour data storage</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">Separate audio track</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-sm text-slate-700">ECDIS & radar recording</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Advantages Sidebar */}
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 translate-y-12"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-6">Key Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Remote Maintenance with TCR reduces onboard visits</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Conning Display on VDR monitor</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Automatic event log for owners</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Multiple data extraction: USB, DVD, LAN</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">VDR 19 monitor for real-time status</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technical Features - Modern Card Grid */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-teal-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-cyan-400 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Technical Features
              </span>
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Advanced capabilities engineered for modern maritime operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 border border-teal-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Replay Capabilities</h4>
                  <p className="text-slate-300 text-sm">Direct replay functionality on the VDR monitor itself with comprehensive playback options.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Dual Environment</h4>
                  <p className="text-slate-300 text-sm">Replay module designed for both ship and office environments with seamless integration.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-500/20 border border-teal-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Audio Recording</h4>
                  <p className="text-slate-300 text-sm">High quality single channel recording of every microphone and VHF with 10 independent channels.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">System Integration</h4>
                  <p className="text-slate-300 text-sm">Built-in Siemens S7 PLC enables easy interface to binary or analog inputs for Non-NMEA systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}