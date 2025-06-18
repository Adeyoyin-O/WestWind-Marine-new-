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
      title: "System Design",
      description: "Custom marine electronics design tailored to vessel specifications and operational requirements",
      icon: <Compass className="w-12 h-12" />
    },
    {
      title: "Installation Services",
      description: "Professional installation with testing and commissioning of marine electronic systems",
      icon: <Ship className="w-12 h-12" />
    },
    {
      title: "Technical Support",
      description: "24/7 support services and preventive maintenance programs for optimal system performance",
      icon: <Activity className="w-12 h-12" />
    },
    {
      title: "System Integration",
      description: "Seamless integration of multiple marine electronic systems for enhanced operational efficiency",
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
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              West Wind Marine Electronics provides specialized marine equipment and systems
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              {services.slice(0, -1).map((service, index) => (
                <div key={index} className="border-b border-gray-200 pb-2">
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full flex items-center justify-between text-left py-2 hover:text-teal-600 transition-colors duration-200"
                  >
                    <span className="text-lg font-medium text-slate-900">{service.name}</span>
                    {expandedServices.has(index) ? (
                      <ChevronDown className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedServices.has(index) && (
                    <div className="mt-1 pb-2">
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Last service centered */}
            <div className="flex justify-center mt-2">
              <div className="w-full max-w-md border-b border-gray-200 pb-2">
                <button
                  onClick={() => toggleService(services.length - 1)}
                  className="w-full flex items-center justify-between text-left py-2 hover:text-teal-600 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-slate-900">{services[services.length - 1].name}</span>
                  {expandedServices.has(services.length - 1) ? (
                    <ChevronDown className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedServices.has(services.length - 1) && (
                  <div className="mt-1 pb-2">
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {services[services.length - 1].description}
                    </p>
                  </div>
                )}
              </div>
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



      {/* Call to Action */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/50 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-100/50 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Ready to Upgrade Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                    Marine Electronics?
                  </span>
                </h2>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Contact our expert team for customized solutions tailored to your vessel's specific requirements. We provide comprehensive consultation and professional installation services.
                </p>
                
                <div className="flex justify-center">
                  <Button 
                    onClick={handleRequestQuote}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}