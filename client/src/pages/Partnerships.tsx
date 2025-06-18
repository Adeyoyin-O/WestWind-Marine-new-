export default function Partnerships() {
  return (
    <div className="page-transition bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 border border-teal-200 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 border border-cyan-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-100 rounded-lg rotate-12"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-cyan-100 rounded-full"></div>
        </div>
        
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                             linear-gradient(-45deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-medium mb-8 border border-teal-200 shadow-sm">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
              Strategic Partnership
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              SAL Navigation Ltd
            </h1>
            <p className="text-xl text-slate-600 mb-8">Consilium Navigation Equipment Manufacturers</p>
            
            {/* Decorative divider */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent w-24"></div>
              <div className="w-3 h-3 bg-teal-500 rounded-full mx-4 shadow-sm"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent w-24"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* VDR Overview */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-3xl"></div>
              
              <div className="flex items-start space-x-6 mb-6 relative">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Voyage Data Recorders (VDR)</h2>
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 rounded-lg text-sm font-medium mb-4 border border-teal-100">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                    A proactive incident prevention tool
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    SAL VDR and S-VDR not only fulfill SOLAS requirements, they also meet our customer's high demands on reliability and incident follow-up possibilities, such as outstanding voyage data playback options. We offer a broad range of voyage data-based cloud applications for safety management and proactive incident prevention, as well as remote diagnostics for cost-efficient maintenance and APT.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-full opacity-20"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-slate-900">Discover the value of your voyage data</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Since the VDR records a lot of signals on the vessel, it is a very valuable data central. We provide options for real-time data streaming from the VDR to other systems for smooth integration and value-creating data usage and analysis. Ask us about the possibilities in your particular project!
                </p>
                
                <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-teal-50 p-6 rounded-xl border border-teal-100 shadow-inner">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-teal-800 font-medium text-lg">
                      The SAL VDR playback software is intuitive and requires no configuration by the user.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vessel Segments */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 relative">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Made for vessels in all segments</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Based on experience from thousands of installations throughout the years, our VDRs have been designed to allow for quick and efficient installation. Regardless of the age of the vessels and their equipment, our interface units make it possible to connect and record the necessary signals as well as additional signals if desired on any vessel in any segment that requires a VDR or S-VDR.
                  </p>
                </div>
              </div>
            </div>

            {/* TOTEMPLUS Section */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500"></div>
              
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl mb-4 shadow-sm">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">TOTEMPLUS</h2>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-lg text-base font-medium border border-green-100">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Complies with IMO new requirements
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">General</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The new Totem VDR 2014 fully complies with the new International Maritime Organization (IMO) VDR standard, which comes into effect July 1, 2014, and meets all the new VDR requirements as defined in MSC.333(90) and IEC 61996-1 Ed. 2, including a float-free capsule, 48-hour data storage in both the protective fixed capsule and float-free capsule, separate audio track for outdoor microphones, as well as data recording from the ships ECDIS, both radars, AIS and inclinometer.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">Totem VDR 2014 Advantages</h4>
                  </div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      </div>
                      <span className="text-sm leading-relaxed">Remote Maintenance with Totem Cellular Router (TCR) will minimize onboard visits by technicians and will further reduce maintenance costs.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      </div>
                      <span className="text-sm leading-relaxed">Conning Display on the VDR monitor (making Conning display redundant).</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      </div>
                      <span className="text-sm leading-relaxed">Automatic event log for owner's use (monthly check recommended).</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      </div>
                      <span className="text-sm leading-relaxed">Means of extracting stored data from VDR: USB, DVD and LAN.</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      </div>
                      <span className="text-sm leading-relaxed">VDR 19 monitor for monitoring, replay and diagnosis: the monitor displays status of recorded items at all times; Facilitates easy APT and commissioning.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Features */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-teal-50 to-transparent rounded-tr-3xl"></div>
              
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Totem VDR Technical Features</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">Replay capabilities on the VDR monitor itself.</span>
                </div>
                <div className="flex items-start space-x-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">Replay module for both ship and office.</span>
                </div>
                <div className="flex items-start space-x-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">High Quality Single channel recording of every Microphone and VHF (no mixing of channels). 10 independent channels are available as standard.</span>
                </div>
                <div className="flex items-start space-x-4 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">Built in Siemens S7 PLC makes easy interface to a large number of binary or analog inputs, allowing readout of Non NMEA systems.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}