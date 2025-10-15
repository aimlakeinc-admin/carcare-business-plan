import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { 
  Car, Menu, X, Target, Shield, Zap, Users, Briefcase, 
  TrendingUp, DollarSign, BarChart3, Calendar, Globe 
} from 'lucide-react';
import { SECTIONS_META, getSectionById } from '../constants/meta';
import CarCareLogo from '../components/CarCareLogo';
import PrintPDFButton from '../components/PrintPDFButton';

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
  const currentSection = getSectionById(currentPath);
  const pageTitle = currentSection ? currentSection.title : 'Business Plan';

  return (
    <div className="min-h-screen bg-gray-100 pt-[10px]">
      <div className="w-full px-4 md:px-6 lg:px-8">
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">North American Market</p>
                <p className="text-2xl font-bold">CAD $511B</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Year 3 Revenue</p>
                <p className="text-2xl font-bold">CAD $6.71M</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Year 5 Revenue</p>
                <p className="text-2xl font-bold">CAD $104.4M</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Target Users over 3 years</p>
                <p className="text-2xl font-bold">60K</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Seed Funding (1 year)</p>
                <p className="text-2xl font-bold">CAD $2.5M</p>
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
              className="flex items-center justify-center w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 mr-2 transition-transform duration-300 rotate-180" /> : <Menu className="w-5 h-5 mr-2 transition-transform duration-300" />}
              {mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:grid grid-cols-6 gap-4" role="tablist">
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
                  className={`p-2 rounded-lg flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 transition-transform duration-200" />
                  <span className="text-xs text-center font-medium mt-1">{section.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            mobileMenuOpen 
              ? 'max-h-[500px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 pt-4 transition-all duration-300 ${
              mobileMenuOpen ? 'animate-slideInFromTop' : ''
            }`} role="tablist">
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
                    className={`p-2 rounded-lg flex flex-col items-center justify-center transition-all duration-200 transform hover:scale-105 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    }`}
                    style={{
                      animationDelay: `${mobileMenuOpen ? SECTIONS_META.indexOf(section) * 50 : 0}ms`
                    }}
                  >
                    <IconComponent className="w-5 h-5 transition-transform duration-200" />
                    <span className="text-xs text-center font-medium mt-1">{section.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div 
            role="tabpanel" 
            id={`tabpanel-${currentPath}`} 
            aria-labelledby={`tab-${currentPath}`}
            className="animate-fadeIn"
            key={currentPath}
          >
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-lg mt-6 p-6 text-center">
          <p className="text-gray-600 text-sm mb-2">
            <strong>CarCare 24×7 Inc.</strong> • 1468 Victoria Park Ave, Toronto, ON M4A 2M2
          </p>
          <p className="text-gray-500 text-xs">
            📞 +1 (437) 973-1676 • 🌐 <a href="https://carcare24x7.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://carcare24x7.com</a>
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Business Formation Plan • Updated October 2025 • Confidential Document
            </p>
          </div>
        </div>
      </div>
      
        {/* PDF Download Button */}
        <PrintPDFButton pageTitle={pageTitle} />
    </div>
  );
};

export default BfpLayout;
