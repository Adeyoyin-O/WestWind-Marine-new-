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
            <h4 className="text-lg font-bold mb-6 text-white">Marine Electronics</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/products-services#service-0" className="hover:text-cyan-400 transition-colors">Marine Navigation Systems</Link></li>
              <li><Link href="/products-services#service-1" className="hover:text-cyan-400 transition-colors">Communication Equipment</Link></li>
              <li><Link href="/products-services#service-2" className="hover:text-cyan-400 transition-colors">Sonar & Fish Finders</Link></li>
              <li><Link href="/products-services#service-3" className="hover:text-cyan-400 transition-colors">Autopilot Systems</Link></li>
              <li><Link href="/products-services#service-4" className="hover:text-cyan-400 transition-colors">Marine Electrical Panels</Link></li>
              <li><Link href="/products-services#service-5" className="hover:text-cyan-400 transition-colors">Power Management Systems</Link></li>
              <li><Link href="/products-services#service-6" className="hover:text-cyan-400 transition-colors">Marine Lighting Systems</Link></li>
              <li><Link href="/products-services#service-7" className="hover:text-cyan-400 transition-colors">Engine Monitoring Systems</Link></li>
              <li><Link href="/products-services#service-8" className="hover:text-cyan-400 transition-colors">Gyrocompass & Heading Systems</Link></li>
              <li><Link href="/products-services#service-9" className="hover:text-cyan-400 transition-colors">Marine Instrumentation</Link></li>
              <li><Link href="/products-services#service-10" className="hover:text-cyan-400 transition-colors">Satellite TV & Entertainment</Link></li>
              <li><Link href="/products-services#service-11" className="hover:text-cyan-400 transition-colors">Emergency & Safety Systems</Link></li>
              <li><Link href="/products-services#service-12" className="hover:text-cyan-400 transition-colors">Vessel Tracking & Fleet Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">About Us</Link></li>
              <li><Link href="/products-services" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Products & Services</Link></li>
              <li><Link href="/partnerships" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Partnerships</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 West Wind Marine Electronics Ltd. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
              <FaWhatsapp className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
