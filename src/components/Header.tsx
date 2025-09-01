import { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white comic-border border-b-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-heading font-bold text-2xl text-black starburst">
              PopVibe
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Shop</a>
            <a href="#" className="nav-link">Collections</a>
            <a href="#" className="nav-link">About</a>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="speech-bubble p-2 hover:bg-cyan-100 transition-colors"
            >
              <Search className="h-5 w-5 text-black hover:text-cyan-500 transition-colors" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:animate-jump"
            >
              <ShoppingCart className="h-6 w-6 text-black hover:text-pink-400 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                3
              </span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white comic-border mt-2 p-4 animate-bounce-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Shop</a>
              <a href="#" className="nav-link">Collections</a>
              <a href="#" className="nav-link">About</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;