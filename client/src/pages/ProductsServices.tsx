import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Compass, 
  Ship,
  Activity,
  Shield,
  Anchor,
  Gauge,
  Radar,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from "lucide-react";

export default function ProductsServices() {
  const [, setLocation] = useLocation();
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());

  const handleRequestQuote = () => {
    setLocation("/contact");
  };

  const toggleService = (index: number) => {
    setExpandedServices(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(index)) {
        newExpanded.delete(index);
      } else {
        newExpanded.add(index);
      }
      return newExpanded;
    });
  };

  const services = [
    {
      name: "Gyrocompass",
      description: "Precision navigation instrument providing accurate heading reference independent of magnetic interference, essential for maritime navigation."
    },
    {
      name: "Autopilot",
      description: "Automated steering system that maintains vessel course and heading, reducing crew workload and improving navigation accuracy."
    },
    {
      name: "Satellite and magnetic compasses",
      description: "Advanced compass systems combining satellite technology with traditional magnetic sensing for reliable directional reference."
    },
    {
      name: "Radar",
      description: "Marine radar systems for collision avoidance, navigation, and weather detection with advanced target tracking capabilities."
    },
    {
      name: "Consilium, AMI, Totemplus, Headway",
      description: "Premium marine electronics brands offering voyage data recorders, navigation equipment, and integrated bridge systems."
    },
    {
      name: "EPIRB and SART",
      description: "Emergency Position Indicating Radio Beacon and Search and Rescue Transponder for distress signaling and location identification."
    },
    {
      name: "Ballast Water Management System",
      description: "IMO-compliant systems for treating ballast water to prevent invasive species transfer between marine environments."
    },
    {
      name: "Electric Motors and Pumps",
      description: "Marine-grade electric motors and pumping systems for various shipboard applications including bilge, ballast, and cargo operations."
    },
    {
      name: "Contactors and Circuit Breakers",
      description: "Electrical protection and switching devices designed for marine environments, ensuring safe power distribution and circuit protection."
    },
    {
      name: "Low & Medium Voltage Switchgears / Switch Boards",
      description: "Complete electrical distribution panels and switchgear assemblies for marine power management and control systems."
    },
    {
      name: "GMDSS, VHF, MH/HF, Inmarsat C",
      description: "Global Maritime Distress and Safety System communication equipment including VHF, MF/HF radios, and satellite communication systems."
    },
    {
      name: "Marine Automation and Control",
      description: "Integrated automation systems for engine room monitoring, alarm management, and remote control of shipboard systems."
    },
    {
      name: "Smoke and Gas Detection Systems",
      description: "Advanced fire and gas detection systems with early warning capabilities for enhanced vessel safety and crew protection."
    }
  ];

  const capabilities = [
    {
      title: "System Design & Engineering",
      description: "Custom marine electronics system design tailored to vessel specifications",
      icon: <Compass className="w-12 h-12" />
    },
    {
      title: "Installation & Commissioning",
      description: "Professional installation with comprehensive testing and commissioning",
      icon: <Ship className="w-12 h-12" />
    },
    {
      title: "Maintenance & Support",
      description: "24/7 technical support and preventive maintenance programs",
      icon: <Activity className="w-12 h-12" />
    },
    {
      title: "System Integration",
      description: "Seamless integration of multiple marine electronic systems",
      icon: <Gauge className="w-12 h-12" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-teal-600/20 border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium mb-6">
              <Anchor className="w-4 h-4 mr-2" />
              Marine Electronics Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products & Services
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive marine electronics solutions from navigation systems to automation, designed for reliability in demanding maritime environments
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              West Wind Marine Electronics provides specialized marine equipment and systems
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full flex items-center justify-between text-left py-3 hover:text-teal-600 transition-colors duration-200"
                  >
                    <span className="text-lg font-medium text-slate-900">{service.name}</span>
                    {expandedServices.has(index) ? (
                      <ChevronDown className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedServices.has(index) && (
                    <div className="mt-2 pb-3">
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Capabilities</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Complete engineering and technical services for marine electronics systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-teal-600">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{capability.title}</h3>
                <p className="text-slate-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Excellence</span>
              </h2>
              <p className="text-lg text-slate-600">
                Our solutions meet international maritime standards and regulatory requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Compliance & Standards</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    SOLAS (Safety of Life at Sea) compliant
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    IMO (International Maritime Organization) standards
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    IEC (International Electrotechnical Commission) certified
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                    Type approval certificates
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mr-4">
                    <Radar className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Quality Assurance</h3>
                </div>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Rigorous testing and commissioning
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Performance validation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Documentation and certification
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Ongoing support and maintenance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Marine Electronics?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Contact our expert team for customized solutions tailored to your vessel's specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleRequestQuote}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={() => setLocation("/contact")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}