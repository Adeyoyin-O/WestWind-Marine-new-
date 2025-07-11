import { Link } from "wouter";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import footerLogo from "@assets/3-removebg-preview_1749920563703.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-dark)] text-white py-12 diagonal-pattern">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={footerLogo} 
                  alt="West Wind Marine Electronics Ltd Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">West Wind Marine Electronics</h3>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-bold text-white mb-1">Office Addresses</p>
                <div className="mb-3">
                  <p className="leading-relaxed">Plot 8, The Providence Street</p>
                  <p>Lekki Phase 1, Lagos 
                  Nigeria</p>
                </div>
                <div>
                  <p className="leading-relaxed">Cité Keur Gorgui,</p>
                  <p>Immeuble UNIPAX</p>
                  <p>BP: 25 916 Dakar</p>
                  <p>Senegal</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Phone</p>
                <p>Tel: 08060417377</p>
                <p>Mobile: +234 8060417377, +2347032509442</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Email</p>
                <p>admin@westwindmarineelectronics.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/products-services#gyrocompass" className="hover:text-teal-400 transition-colors">Gyrocompass</a></li>
              <li><a href="/products-services#autopilot" className="hover:text-teal-400 transition-colors">Autopilot</a></li>
              <li><a href="/products-services#satellite-magnetic-compasses" className="hover:text-teal-400 transition-colors">Satellite and magnetic compasses</a></li>
              <li><a href="/products-services#radar" className="hover:text-teal-400 transition-colors">Radar</a></li>
              <li><a href="/products-services#consilium-ami-totemplus-headway" className="hover:text-teal-400 transition-colors">Consilium, AMI, Totemplus, Headway</a></li>
              <li><a href="/products-services#epirb-sart" className="hover:text-teal-400 transition-colors">EPIRB and SART</a></li>
              <li><a href="/products-services#ballast-water-management" className="hover:text-teal-400 transition-colors">Ballast Water Management System</a></li>
              <li><a href="/products-services#electric-motors-pumps" className="hover:text-teal-400 transition-colors">Electric Motors and Pumps</a></li>
              <li><a href="/products-services#contactors-circuit-breakers" className="hover:text-teal-400 transition-colors">Contactors and Circuit Breakers</a></li>
              <li><a href="/products-services#switchgears-switchboards" className="hover:text-teal-400 transition-colors">Low & Medium Voltage Switchgears / Switch Boards</a></li>
              <li><a href="/products-services#gmdss-communication" className="hover:text-teal-400 transition-colors">GMDSS, VHF, MH/HF, Inmarsat C</a></li>
              <li><a href="/products-services#marine-automation-control" className="hover:text-teal-400 transition-colors">Marine Automation and Control</a></li>
              <li><a href="/products-services#smoke-gas-detection" className="hover:text-teal-400 transition-colors">Smoke and Gas Detection Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">About Us</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">Products & Services</Link></li>
              <li><Link href="/partnerships" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">Partnerships</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 West Wind Marine Electronics Ltd. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/2348060417377" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
