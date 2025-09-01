import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black pop-dots text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-white starburst">
              PopVibe
            </h3>
            <p className="font-body text-gray-300">
              Express your unique style with bold, vibrant fashion that screams YOU!
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-pink-400 hover:bg-pink-400/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400 hover:bg-cyan-400/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-yellow-400 hover:bg-yellow-400/20">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-pink-400 transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-cyan-400">Customer Care</h4>
            <ul className="space-y-2 font-body">
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-pink-400">Stay in the Loop!</h4>
            <p className="font-body text-gray-300 text-sm">
              Get the latest drops, exclusive deals, and pop culture news!
            </p>
            
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
              />
              <Button className="w-full btn-pop-pink">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-gray-400 text-sm">
            © 2024 PopVibe. Made with <Heart className="inline h-4 w-4 text-pink-400" /> for fashion rebels.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;