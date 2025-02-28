import { FaFacebookF, FaInstagram, FaPinterest, FaYoutube, FaPhone, FaEnvelope, FaStore, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#7a6a5e] text-white py-10 px-6 md:px-16 h-90">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Support Section */}
        <div>
          <h3 className="font-semibold mb-3">SUPPORT</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Returns + Refunds</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Track Order</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Easy Returns</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold mb-3">GET IN TOUCH</h3>
          <p className="flex items-center gap-2 text-sm"><FaPhone /> Mr. Niloy +919811536888</p>
          <p className="flex items-center gap-2 text-sm"><FaPhone /> Mr. Arvind +919811338191</p>
          <p className="flex items-center gap-2 text-sm"><FaEnvelope /> info@thedecorkart.com</p>
          <p className="flex items-center gap-2 text-sm"><FaStore /> Our Stores</p>
          <p className="flex items-center gap-2 text-sm"><FaGlobe /> India</p>
          <p className="mt-2 text-sm">For unresolved issues only: <strong>+919811331181 (Mr. Anand)</strong></p>
        </div>

        {/* Social & App Links */}
        <div>
          <h3 className="font-semibold mb-3">FOLLOW US</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaPinterest /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
          </div>

          <h3 className="font-semibold mt-5">EXPERIENCE THE SynVilla</h3>
          <div className="flex gap-3 mt-3">
            {/* <img src="/appstore.png" alt="App Store" className="w-24" />
            <img src="/playstore.png" alt="Google Play" className="w-24" /> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-500 pt-6 text-center">
        
        <p className="text-sm">Shivalik Meta Plast Industries © 2025</p>
      
      </div>
    </footer>
  );
}
