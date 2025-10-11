import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { 
  Car, Menu, X, Target, Shield, Zap, Users, Briefcase, 
  TrendingUp, DollarSign, BarChart3, Calendar, Globe 
} from 'lucide-react';
import { SECTIONS_META } from '../constants/meta';
import CarCareLogo from '../components/CarCareLogo';

// Icon mapping for lucide-react icons
const iconMap = {
  Target: Target,
  Shield: Shield,
  Zap: Zap,
  Users: Users,
  Car: Car,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  DollarSign: DollarSign,
  BarChart3: BarChart3,
  Calendar: Calendar,
  Globe: Globe
};

const BfpLayout = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const currentPath = location.pathname.split('/').pop() || 'cover';

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center mb-4">
              <CarCareLogo className="w-48 h-24 mr-4" showText={false} layout="horizontal" />
              <div>
                <h1 className="text-4xl font-bold mb-2">CarCare 24×7 Inc.</h1>
                <p className="text-xl text-blue-100">Business Formation Plan</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Market Size</p>
                <p className="text-2xl font-bold">$500B</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">FY 2028 Revenue</p>
                <p className="text-2xl font-bold">$7.66M</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Target Garages</p>
                <p className="text-2xl font-bold">2,000+</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Net Margin</p>
                <p className="text-2xl font-bold">70%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-6 p-4">
          {/* Mobile Menu Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 mr-2" /> : <Menu className="w-5 h-5 mr-2" />}
              {mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:grid grid-cols-6 gap-2" role="tablist">
            {SECTIONS_META.map(section => {
              const IconComponent = iconMap[section.icon] || Target;
              const isActive = currentPath === section.id;
              
              return (
                <Link
                  key={section.id}
                  to={`/bfp/${section.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${section.id}`}
                  id={`tab-${section.id}`}
                  className={`p-3 rounded-lg flex flex-col items-center justify-center transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-xs text-center font-medium mt-1">{section.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-2" role="tablist">
              {SECTIONS_META.map(section => {
                const IconComponent = iconMap[section.icon] || Target;
                const isActive = currentPath === section.id;
                
                return (
                  <Link
                    key={section.id}
                    to={`/bfp/${section.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${section.id}`}
                    id={`tab-${section.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-3 rounded-lg flex flex-col items-center justify-center transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="text-xs text-center font-medium mt-1">{section.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div role="tabpanel" id={`tabpanel-${currentPath}`} aria-labelledby={`tab-${currentPath}`}>
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-lg mt-6 p-6 text-center">
          <p className="text-gray-600 text-sm mb-2">
            <strong>CarCare 24×7 Inc.</strong> • 1468 Victoria Park Ave, Toronto, ON M4A 2M2
          </p>
          <p className="text-gray-500 text-xs">
            📞 +1 (437) 973-1676 • 🌐 https://carcare24x7.com
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Business Formation Plan • Updated October 2025 • Confidential Document
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BfpLayout;
