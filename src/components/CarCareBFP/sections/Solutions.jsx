import React from 'react';
import { ChevronRight, CheckCircle, Users, Briefcase, Car } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Objectives & Solutions</h2>
        <p className="text-xl text-green-100">Comprehensive Platform for All Stakeholders</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Mission Statement</h3>
        <p className="text-lg text-gray-700 italic leading-relaxed">
          "To revolutionize the automotive services industry by creating the first unified digital marketplace that connects 26+ million Canadian vehicle owners with 15,000+ certified garages. We're transforming the $511 billion North American automotive services market through AI-powered predictive maintenance, transparent pricing, fintech integration, and real-time service tracking - making vehicle maintenance effortless, transparent, and rewarding for all stakeholders."
        </p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Comprehensive Solution</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          CarCare 24×7 Inc. is revolutionizing the automotive services industry by creating the first unified digital marketplace that connects 26+ million Canadian vehicle owners with 15,000+ certified garages across Canada. In a market where less than 5% of bookings are made online, we're building a comprehensive ecosystem that combines AI-powered predictive maintenance, transparent pricing, fintech integration, and real-time service tracking across Toronto, Vancouver, Calgary, Montreal, and Ottawa.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-700">
            <strong>Market Opportunity:</strong> Addressing the $511 billion North American automotive services market with 70% of vehicle owners reporting challenges finding reliable, affordable service providers. Our platform transforms the fragmented automotive service industry into a connected, intelligent ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-bold text-blue-900 mb-4 text-lg">Key Solutions Delivered</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">CareChart AI-powered predictive maintenance & diagnostics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Unified marketplace for all vehicle types (ICE, EV, hybrid)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Torqon Wrench garage management system for service providers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Transparent pricing with real-time quotes & comparison</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">CarCare Wallet fintech integration with savings vault</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">24/7 service availability with automated booking</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Real-time service tracking & progress updates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Performance-based rewards & loyalty programs</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg">
              <h5 className="font-bold mb-2">For Consumers</h5>
              <p className="text-sm">AI-powered maintenance predictions, transparent pricing, 24/7 booking, real-time tracking, CarCare Wallet savings</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg">
              <h5 className="font-bold mb-2">For Fleet & Business</h5>
              <p className="text-sm">Fleet optimization, predictive maintenance, cost reduction, comprehensive reporting, EV support</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
              <h5 className="font-bold mb-2">For Garages</h5>
              <p className="text-sm">Digital marketplace presence, automated payouts, customer management, performance analytics, promotional tools</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="font-bold text-xl text-gray-800 mb-3">Consumer Benefits</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">CareChart AI predictive maintenance</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Transparent pricing with real-time quotes</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">CarCare Wallet with savings vault</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">24/7 booking & real-time tracking</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Loyalty rewards & cashback programs</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-bold text-xl text-gray-800 mb-3">Fleet & Business Benefits</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">AI-powered fleet optimization</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Predictive maintenance scheduling</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">EV & hybrid vehicle support</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Cost reduction & budget control</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Comprehensive analytics & reporting</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Car className="w-8 h-8 text-purple-600" />
          </div>
          <h4 className="font-bold text-xl text-gray-800 mb-3">Garage Benefits</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Digital marketplace presence & visibility</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Torqon Wrench management system</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Automated payouts & payment processing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Performance analytics & insights</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Customer acquisition & retention tools</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Market Opportunity & Competitive Advantage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-bold text-lg mb-3">Market Gap</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>Less than 5% of bookings made online in Canada</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>70% of vehicle owners struggle with service access</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>$511B North American market opportunity</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>10.9 years average vehicle age driving demand</span>
              </li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-bold text-lg mb-3">CarCare Advantage</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>First-mover advantage in Canadian market</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>Unified marketplace vs. fragmented competitors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>AI-powered predictive maintenance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>Fintech integration with repair savings</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Technology Innovation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">CareChart AI Engine</h4>
            <p className="text-sm text-gray-700 mb-2">Predictive maintenance using machine learning to analyze:</p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• Vehicle mileage patterns & service history</li>
              <li>• Manufacturer recommendations & seasonal needs</li>
              <li>• Real-time diagnostics & maintenance alerts</li>
              <li>• Cost optimization & scheduling efficiency</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">CarCare Wallet</h4>
            <p className="text-sm text-gray-700 mb-2">Integrated fintech solution providing:</p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• Secure payment processing & digital transactions</li>
              <li>• Savings vault for future maintenance costs</li>
              <li>• Cashback rewards & loyalty programs</li>
              <li>• Float-based interest generation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
