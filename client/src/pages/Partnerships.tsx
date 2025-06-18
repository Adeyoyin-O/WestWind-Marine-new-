export default function Partnerships() {
  return (
    <div className="page-transition bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="pt-16 pb-8 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 border border-teal-200 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 border border-cyan-200 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
              Partnership
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              SAL Navigation Ltd
            </h1>
            <p className="text-xl text-slate-600 mb-2">Consilium Navigation Equipment Manufacturers</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* VDR Overview */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-3">Voyage Data Recorders (VDR)</h2>
                  <p className="text-lg text-teal-600 font-medium mb-4">A proactive incident prevention tool</p>
                  <p className="text-gray-700 leading-relaxed">
                    SAL VDR and S-VDR not only fulfill SOLAS requirements, they also meet our customer's high demands on reliability and incident follow-up possibilities, such as outstanding voyage data playback options. We offer a broad range of voyage data-based cloud applications for safety management and proactive incident prevention, as well as remote diagnostics for cost-efficient maintenance and APT.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Discover the value of your voyage data</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Since the VDR records a lot of signals on the vessel, it is a very valuable data central. We provide options for real-time data streaming from the VDR to other systems for smooth integration and value-creating data usage and analysis. Ask us about the possibilities in your particular project!
              </p>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border border-teal-100">
                <p className="text-teal-800 font-medium">
                  The SAL VDR playback software is intuitive and requires no configuration by the user.
                </p>
              </div>
            </div>

            {/* Vessel Segments */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Made for vessels in all segments</h3>
              <p className="text-gray-700 leading-relaxed">
                Based on experience from thousands of installations throughout the years, our VDRs have been designed to allow for quick and efficient installation. Regardless of the age of the vessels and their equipment, our interface units make it possible to connect and record the necessary signals as well as additional signals if desired on any vessel in any segment that requires a VDR or S-VDR.
              </p>
            </div>

            {/* TOTEMPLUS Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">TOTEMPLUS</h2>
                <p className="text-lg text-teal-600 font-medium">Complies with IMO new requirements</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">General</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The new Totem VDR 2014 fully complies with the new International Maritime Organization (IMO) VDR standard, which comes into effect July 1, 2014, and meets all the new VDR requirements as defined in MSC.333(90) and IEC 61996-1 Ed. 2, including a float-free capsule, 48-hour data storage in both the protective fixed capsule and float-free capsule, separate audio track for outdoor microphones, as well as data recording from the ships ECDIS, both radars, AIS and inclinometer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-4">Totem VDR 2014 Advantages</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Remote Maintenance with Totem Cellular Router (TCR) will minimize onboard visits by technicians and will further reduce maintenance costs.
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Conning Display on the VDR monitor (making Conning display redundant).
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Automatic event log for owner's use (monthly check recommended).
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Means of extracting stored data from VDR: USB, DVD and LAN.
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      VDR 19 monitor for monitoring, replay and diagnosis: the monitor displays status of recorded items at all times; Facilitates easy APT and commissioning.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Features */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Totem VDR Technical Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Replay capabilities on the VDR monitor itself.</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Replay module for both ship and office.</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">High Quality Single channel recording of every Microphone and VHF (no mixing of channels). 10 independent channels are available as standard.</span>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">Built in Siemens S7 PLC makes easy interface to a large number of binary or analog inputs, allowing readout of Non NMEA systems.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}