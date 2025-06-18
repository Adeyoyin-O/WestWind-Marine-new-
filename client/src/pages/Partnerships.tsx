export default function Partnerships() {
  return (
    <div className="page-transition bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-12 pb-8 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-6 right-8 w-24 h-24 border border-teal-200 rounded-full"></div>
          <div className="absolute bottom-6 left-8 w-16 h-16 border border-cyan-200 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm font-medium mb-4 border border-teal-200">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2"></span>
              Strategic Partnership
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              SAL Navigation Ltd
            </h1>
            <p className="text-lg text-slate-600 mb-4">Consilium Navigation Equipment Manufacturers</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(20, 184, 166, 0.4) 1px, transparent 0),
                             radial-gradient(circle at 60px 60px, rgba(6, 182, 212, 0.3) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Left side decorative elements */}
        <div className="absolute left-4 top-20 hidden lg:block z-10">
          <div className="space-y-8">
            <div className="w-1 h-16 bg-gradient-to-b from-teal-200 to-cyan-200 rounded-full opacity-40"></div>
            <div className="w-8 h-8 border-2 border-orange-200 rounded-full opacity-30"></div>
            <div className="w-1 h-24 bg-gradient-to-b from-cyan-200 to-teal-200 rounded-full opacity-40"></div>
            <div className="w-6 h-6 bg-orange-100 rounded-lg rotate-45 opacity-50"></div>
            <div className="w-1 h-20 bg-gradient-to-b from-teal-200 to-cyan-200 rounded-full opacity-40"></div>
            <div className="w-4 h-4 border border-orange-200 rounded-full opacity-35"></div>
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-200 to-teal-200 rounded-full opacity-40"></div>
          </div>
        </div>
        
        {/* Right side decorative elements */}
        <div className="absolute right-4 top-32 hidden lg:block z-10">
          <div className="space-y-6">
            <div className="w-10 h-10 border border-orange-200 rounded-full opacity-25"></div>
            <div className="w-1 h-20 bg-gradient-to-b from-cyan-200 to-teal-200 rounded-full opacity-40"></div>
            <div className="w-5 h-5 bg-orange-100 rounded-full opacity-60"></div>
            <div className="w-1 h-16 bg-gradient-to-b from-teal-200 to-cyan-200 rounded-full opacity-40"></div>
            <div className="w-7 h-7 border border-orange-200 rounded-lg rotate-12 opacity-30"></div>
            <div className="w-1 h-12 bg-gradient-to-b from-cyan-200 to-teal-200 rounded-full opacity-40"></div>
            <div className="w-3 h-3 bg-orange-100 rounded-full opacity-45"></div>
            <div className="w-1 h-8 bg-gradient-to-b from-teal-200 to-cyan-200 rounded-full opacity-40"></div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute left-1/4 top-10 w-6 h-6 border border-orange-100 rounded-lg rotate-45 opacity-20 hidden xl:block"></div>
        <div className="absolute right-1/4 top-24 w-4 h-4 bg-orange-100 rounded-full opacity-25 hidden xl:block"></div>
        <div className="absolute left-1/3 bottom-20 w-8 h-8 border border-orange-100 rounded-full opacity-15 hidden xl:block"></div>
        <div className="absolute right-1/3 bottom-32 w-5 h-5 bg-orange-100 rounded-lg rotate-12 opacity-20 hidden xl:block"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto">
            
            {/* VDR Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6 relative">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Voyage Data Recorders (VDR)</h2>
                  <div className="inline-flex items-center px-3 py-1 bg-orange-50 text-orange-700 rounded-md text-sm font-medium mb-3 border border-orange-100">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                    A proactive incident prevention tool
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    SAL VDR and S-VDR not only fulfill SOLAS requirements, they also meet our customer's high demands on reliability and incident follow-up possibilities, such as outstanding voyage data playback options. We offer a broad range of voyage data-based cloud applications for safety management and proactive incident prevention, as well as remote diagnostics for cost-efficient maintenance and APT.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition & Vessel Segments - Combined */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Discover the value of your voyage data</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Since the VDR records a lot of signals on the vessel, it is a very valuable data central. We provide options for real-time data streaming from the VDR to other systems for smooth integration and value-creating data usage and analysis.
                </p>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                  <p className="text-orange-800 font-medium text-sm">
                    The SAL VDR playback software is intuitive and requires no configuration by the user.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Made for vessels in all segments</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Based on experience from thousands of installations throughout the years, our VDRs have been designed to allow for quick and efficient installation. Regardless of the age of the vessels and their equipment, our interface units make it possible to connect and record the necessary signals as well as additional signals if desired on any vessel in any segment that requires a VDR or S-VDR.
                </p>
              </div>
            </div>



            {/* TOTEMPLUS Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">TOTEMPLUS</h2>
                <div className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-md text-sm font-medium border border-green-100">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Complies with IMO new requirements
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">General</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    The new Totem VDR 2014 fully complies with the new International Maritime Organization (IMO) VDR standard, which comes into effect July 1, 2014, and meets all the new VDR requirements as defined in MSC.333(90) and IEC 61996-1 Ed. 2, including a float-free capsule, 48-hour data storage in both the protective fixed capsule and float-free capsule, separate audio track for outdoor microphones, as well as data recording from the ships ECDIS, both radars, AIS and inclinometer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Totem VDR 2014 Advantages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">Remote Maintenance with Totem Cellular Router (TCR) will minimize onboard visits by technicians and will further reduce maintenance costs.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">Conning Display on the VDR monitor (making Conning display redundant).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">Automatic event log for owner's use (monthly check recommended).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">Means of extracting stored data from VDR: USB, DVD and LAN.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span className="text-sm">VDR 19 monitor for monitoring, replay and diagnosis: the monitor displays status of recorded items at all times; Facilitates easy APT and commissioning.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Features */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Totem VDR Technical Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">Replay capabilities on the VDR monitor itself.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">Replay module for both ship and office.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">High Quality Single channel recording of every Microphone and VHF (no mixing of channels). 10 independent channels are available as standard.</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">Built in Siemens S7 PLC makes easy interface to a large number of binary or analog inputs, allowing readout of Non NMEA systems.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}