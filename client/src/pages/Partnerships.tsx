export default function Partnerships() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Strategic Partnerships
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted Technology Partners
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              West Wind Marine Electronics collaborates with industry-leading technology partners to deliver comprehensive marine electronics solutions
            </p>
          </div>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-teal-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">SAL NAVIGATION LTD</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Consilium Navigation Equipment Manufacturers specializing in advanced Voyage Data Recorders (VDR) and maritime safety systems.
              </p>
              <div className="flex items-center text-teal-600 font-medium">
                <span>Voyage Data Recording Technology</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">TOTEMPLUS</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Advanced VDR 2014 technology provider complying with new International Maritime Organization (IMO) standards and requirements.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <span>IMO Compliant VDR Systems</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Headway Technology Co. LTD</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                A leading provider of marine intelligent systems, Headway specializes in solutions like ballast water management systems (BWMS), voyage data recorders (VDR), and marine communication and navigation technologies—supporting safe, sustainable, and compliant marine operations.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Marine Intelligent Systems</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">AMI Marine</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                AMI Marine is known for advanced maritime electronics, including high-performance Voyage Data Recorders (VDR), Electronic Chart Display and Information Systems (ECDIS), and bridge navigation systems—enhancing vessel safety, compliance, and operational efficiency.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>Advanced Maritime Electronics</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAL NAVIGATION LTD Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-teal-50 text-teal-700 rounded-full text-sm font-medium mb-4 border border-teal-200">
                <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
                SAL NAVIGATION LTD
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Consilium Navigation Equipment
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Advanced Voyage Data Recorders (VDR) technology for proactive incident prevention and maritime safety compliance
              </p>
            </div>

            {/* Main VDR Content */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Voyage Data Recorders (VDR)</h3>
                      <div className="bg-teal-600 text-white px-4 py-2 rounded-lg inline-block text-sm font-medium mb-4">
                        Proactive Incident Prevention Tool
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        SAL VDR and S-VDR not only fulfill SOLAS requirements, they also meet our customer's high demands on reliability and incident follow-up possibilities, such as outstanding voyage data playback options. We offer a broad range of voyage data-based cloud applications for safety management and proactive incident prevention, as well as remote diagnostics for cost-efficient maintenance and APT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                    <div className="text-sm text-slate-600">Remote Monitoring</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">SOLAS</div>
                    <div className="text-sm text-slate-600">Compliant Systems</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Discover Voyage Data Value</h4>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Since the VDR records a lot of signals on the vessel, it is a very valuable data central. We provide options for real-time data streaming from the VDR to other systems for smooth integration and value-creating data usage and analysis.
                </p>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <p className="text-teal-800 font-medium text-sm">
                    The SAL VDR playback software is intuitive and requires no configuration by the user.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Universal Vessel Compatibility</h4>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Based on experience from thousands of installations throughout the years, our VDRs have been designed to allow for quick and efficient installation. Regardless of the age of the vessels and their equipment, our interface units make it possible to connect and record the necessary signals as well as additional signals if desired on any vessel in any segment that requires a VDR or S-VDR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOTEMPLUS Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4 border border-green-200">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                TOTEMPLUS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Advanced VDR 2014 Technology
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Fully compliant with new International Maritime Organization (IMO) VDR standards, effective July 1, 2014
              </p>
            </div>

            {/* Main TOTEMPLUS Content */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">IMO Compliance Overview</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The new Totem VDR 2014 fully complies with the new International Maritime Organization (IMO) VDR standard, which comes into effect July 1, 2014, and meets all the new VDR requirements as defined in MSC.333(90) and IEC 61996-1 Ed. 2.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-slate-700 text-sm">Float-free capsule technology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-slate-700 text-sm">48-hour data storage capability</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-slate-700 text-sm">Separate audio track for outdoor microphones</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-slate-700 text-sm">ECDIS, radar, AIS and inclinometer recording</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Totem VDR 2014 Advantages</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Remote Maintenance with Totem Cellular Router (TCR) will minimize onboard visits by technicians and will further reduce maintenance costs.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Conning Display on the VDR monitor (making Conning display redundant).
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Automatic event log for owner's use (monthly check recommended).
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm leading-relaxed">
                      Means of extracting stored data from VDR: USB, DVD and LAN.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-sm leading-relaxed">
                      VDR 19 monitor for monitoring, replay and diagnosis: the monitor displays status of recorded items at all times; Facilitates easy APT and commissioning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Technical Features</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Replay Capabilities</h4>
                      <p className="text-slate-600 text-sm">Replay capabilities on the VDR monitor itself with comprehensive playback options for both ship and office environments.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Audio Recording</h4>
                      <p className="text-slate-600 text-sm">High Quality Single channel recording of every Microphone and VHF (no mixing of channels). 10 independent channels are available as standard.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">System Integration</h4>
                      <p className="text-slate-600 text-sm">Built in Siemens S7 PLC makes easy interface to a large number of binary or analog inputs, allowing readout of Non NMEA systems.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Dual Environment Support</h4>
                      <p className="text-slate-600 text-sm">Replay module designed for both ship and office environments with seamless integration and user-friendly interface.</p>
                    </div>
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