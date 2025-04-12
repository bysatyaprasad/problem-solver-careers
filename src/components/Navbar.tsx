
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase, GraduationCap, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Briefcase className="h-8 w-8 text-brand-purple" />
              <span className="ml-2 text-xl font-bold text-brand-darkBlue">CareerPath</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/careers" 
              className={`nav-link ${isActive('/careers') ? 'active' : ''}`}
            >
              Careers
            </Link>
            <Link 
              to="/resources" 
              className={`nav-link ${isActive('/resources') ? 'active' : ''}`}
            >
              Resources
            </Link>
            <Button 
              variant="ghost" 
              size="icon"
              className="ml-2"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              className="text-gray-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'bg-brand-purple/10 text-brand-purple' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/careers" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/careers') 
                  ? 'bg-brand-purple/10 text-brand-purple' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={closeMenu}
            >
              Careers
            </Link>
            <Link 
              to="/resources" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/resources') 
                  ? 'bg-brand-purple/10 text-brand-purple' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={closeMenu}
            >
              Resources
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
