import { useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Compass, 
  Radio, 
  Zap, 
  Ship,
  Cpu,
  Activity,
  Settings,
  Shield,
  Anchor,
  Gauge,
  Radar,
  Navigation,
  ArrowRight
} from "lucide-react";

export default function ProductsServices() {
  const [, setLocation] = useLocation();

  const handleRequestQuote = () => {
    setLocation("/contact");
  };

  const services = [
    {
      category: "Navigation Systems",
      icon: <Navigation className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        "Gyrocompass",
        "Autopilot", 
        "Satellite and magnetic compasses",
        "Radar"
      ]
    },
    {
      category: "Safety & Emergency",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      services: [
        "EPIRB and SART",
        "Smoke and Gas Detection Systems"
      ]
    },
    {
      category: "Communication Systems",
      icon: <Radio className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        "GMDSS, VHF, MH/HF, Inmarsat C"
      ]
    },
    {
      category: "Power & Electrical",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500",
      services: [
        "Electric Motors and Pumps",
        "Contactors and Circuit Breakers",
        "Low & Medium Voltage Switchgears / Switch Boards"
      ]
    },
    {
      category: "Automation & Control",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      services: [
        "Marine Automation and Control",
        "Ballast Water Management System"
      ]
    },
    {
      category: "Specialized Equipment",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      services: [
        "Consilium, AMI, Totemplus, Headway"
      ]
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-medium mb-8">
              <Anchor className="w-4 h-4 mr-2" />
              Marine Electronics Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Comprehensive marine electronics solutions from navigation systems to automation, designed for reliability in demanding maritime environments
            </p>
            <Button 
              onClick={handleRequestQuote}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Request Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Services</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              West Wind Marine Electronics provides specialized marine equipment and systems across multiple categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-700 leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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