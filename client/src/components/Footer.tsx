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
                <h3 className="text-lg font-bold">West Wind Marine Electronics Ltd</h3>
              </div>
            </div>
            
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p className="font-bold text-white mb-1">Office Address</p>
                <p className="leading-relaxed">Plot 8, The Providence Street</p>
                <p>Lekki Phase 1, Lagos</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Phone</p>
                <p>Tel: +234 703 250 9442</p>
                <p>Mobile: +234 806 465 1345</p>
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
              <li><Link href="/products-services#service-0" className="hover:text-[#B7410E] transition-colors">Pumps and Motors</Link></li>
              <li><Link href="/products-services#service-1" className="hover:text-[#B7410E] transition-colors">Electrical and Lighting Fittings</Link></li>
              <li><Link href="/products-services#service-2" className="hover:text-[#B7410E] transition-colors">Circuit Breakers</Link></li>
              <li><Link href="/products-services#service-3" className="hover:text-[#B7410E] transition-colors">Transformers</Link></li>
              <li><Link href="/products-services#service-4" className="hover:text-[#B7410E] transition-colors">Medium and Low Voltage Panels</Link></li>
              <li><Link href="/products-services#service-5" className="hover:text-[#B7410E] transition-colors">DC Panels, Battery Chargers and Batteries</Link></li>
              <li><Link href="/products-services#service-6" className="hover:text-[#B7410E] transition-colors">Starters (DOL, Star-Delta, Auto Transformer)</Link></li>
              <li><Link href="/products-services#service-7" className="hover:text-[#B7410E] transition-colors">Variable Frequency Drives (VFD)</Link></li>
              <li><Link href="/products-services#service-8" className="hover:text-[#B7410E] transition-colors">Control Consoles</Link></li>
              <li><Link href="/products-services#service-9" className="hover:text-[#B7410E] transition-colors">Electric Installations</Link></li>
              <li><Link href="/products-services#service-10" className="hover:text-[#B7410E] transition-colors">Rewinding of Motors and Generator Spare Parts</Link></li>
              <li><Link href="/products-services#service-11" className="hover:text-[#B7410E] transition-colors">Inverters and UPS Systems</Link></li>
              <li><Link href="/products-services#service-12" className="hover:text-[#B7410E] transition-colors">Motor Control Centers (MCC)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-[#B7410E] transition-colors font-medium">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-[#B7410E] transition-colors font-medium">About Us</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-[#B7410E] transition-colors font-medium">Products & Services</Link></li>
              <li><Link href="/partnerships" className="text-gray-300 hover:text-[#B7410E] transition-colors font-medium">Partnerships</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-[#B7410E] transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 West Wind Marine Electronics Ltd. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#B7410E] transition-all duration-300 transform hover:scale-110">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#B7410E] transition-all duration-300 transform hover:scale-110">
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
