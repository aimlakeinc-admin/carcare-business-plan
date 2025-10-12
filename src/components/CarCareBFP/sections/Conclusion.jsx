import React from 'react';
import { Star, Target, Zap, Globe } from 'lucide-react';

const Conclusion = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-xl text-indigo-100">CarCare 24x7 - The Future of Automotive Care</p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            CarCare 24x7 Inc. is more than just an app — it is the foundation of a new era in automotive care. By uniting artificial intelligence, automation, and financial innovation, CarCare 24x7 is building a smart, data-driven ecosystem that makes vehicle maintenance effortless, transparent, and rewarding for every Canadian driver.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            With a mission to modernize how millions of people interact with garages, mechanics, and repair networks, CarCare 24x7 is setting new standards for trust, reliability, and accessibility in the automotive industry. The company's technology-first approach will empower both customers and service providers through real-time connectivity, predictive insights, and integrated payments that drive lasting efficiency and loyalty.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-8">
            As CarCare 24x7 continues to expand its nationwide footprint, it stands ready to become the definitive platform for intelligent car care — connecting communities, reducing costs, and shaping the future of mobility in Canada and beyond.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">CarCare 24x7</h3>
          <p className="text-2xl font-semibold mb-2">Drive Smart. Maintain Smarter.</p>
          <div className="mt-6 flex justify-center space-x-8">
            <div className="flex items-center">
              <Star className="w-6 h-6 mr-2" />
              <span className="text-sm">Innovation</span>
            </div>
            <div className="flex items-center">
              <Target className="w-6 h-6 mr-2" />
              <span className="text-sm">Precision</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-6 h-6 mr-2" />
              <span className="text-sm">Efficiency</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              <span className="text-sm">Connectivity</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Market Opportunity & Digital Transformation</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">US $350B</p>
            <p className="text-lg text-green-100">North American market (2024)</p>
            <p className="text-sm text-green-200 mt-2">165K+ establishments in US, 15-17K in Canada</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">US $520-550B</p>
            <p className="text-lg text-green-100">Projected by 2032</p>
            <p className="text-sm text-green-200 mt-2">Driven by aging fleets & digital transformation</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">&lt;5%</p>
            <p className="text-lg text-green-100">Online bookings in Canada</p>
            <p className="text-sm text-green-200 mt-2">Massive digital opportunity for CarCare 24x7</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Key Market Drivers: Aging Vehicle Fleets (10.9 years avg in Canada) & Fintech Integration</p>
          <p className="text-sm text-green-100 mt-2">EV maintenance market projected to reach US $20B by 2030</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Strategic Positioning</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-xl mb-4">Market Structure Advantage</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">•</span>
                <span>Targeting 55-60% independent repair shops seeking digital presence</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">•</span>
                <span>Dominant urban clusters: Toronto, Vancouver, Calgary, Montreal, Ottawa</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">•</span>
                <span>CA $26.4B Canadian market with &lt;5% digital penetration</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">•</span>
                <span>EV maintenance market growing to US $20B by 2030</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4">Competitive Differentiation</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">•</span>
                <span>Unified super-app vs. fragmented traditional players</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">•</span>
                <span>CarCare Wallet fintech integration with savings vault</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">•</span>
                <span>CareChart AI predictive maintenance & diagnostics</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-300 mr-2">•</span>
                <span>EV & fleet specialization with 10 diversified revenue streams</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Financial Performance & Market Penetration</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">$12.5M</p>
            <p className="text-lg text-emerald-100">Year 5 Revenue</p>
            <p className="text-sm text-emerald-200 mt-2">$180K → $650K → $2.1M → $5.8M → $12.5M</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">$7.3M</p>
            <p className="text-lg text-emerald-100">Net Profit Year 5</p>
            <p className="text-sm text-emerald-200 mt-2">58% net margin</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">USD $2M</p>
            <p className="text-lg text-emerald-100">Seed Funding</p>
            <p className="text-sm text-emerald-200 mt-2">Required for launch & growth</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">170%</p>
            <p className="text-lg text-emerald-100">ROI by Year 5</p>
            <p className="text-sm text-emerald-200 mt-2">On $2M seed investment</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Break-even achieved by Year 3 with USD $2M seed funding</p>
          <p className="text-sm text-emerald-100 mt-2">10 diversified revenue streams driving 170% ROI by Year 5</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">Technology Innovation & Competitive Edge</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">AI</span>
            </div>
            <h4 className="font-bold text-lg mb-2">CareChart AI Engine</h4>
            <p className="text-sm text-orange-100">Predictive maintenance, mileage patterns, service history analysis, and real-time diagnostics</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">$</span>
            </div>
            <h4 className="font-bold text-lg mb-2">CarCare Wallet</h4>
            <p className="text-sm text-orange-100">Secure payments, savings vault, cashback programs, and float-based interest</p>
          </div>
          <div className="text-center">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">⚡</span>
            </div>
            <h4 className="font-bold text-lg mb-2">EV & Fleet Specialization</h4>
            <p className="text-sm text-orange-100">Battery health monitoring, charging partnerships, and fleet optimization</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">First-mover advantage in Canada with comprehensive technology platform</p>
          <p className="text-sm text-orange-100 mt-2">Unified marketplace serving all vehicle types with 24/7 availability</p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ready to Transform Automotive Care</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Proven Market</h4>
            <p className="text-sm text-gray-700">$350B North American market with strong growth trajectory</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h4 className="font-bold text-green-900 mb-2">Advanced Technology Platform</h4>
            <p className="text-sm text-gray-700">CareChart AI, CarCare Wallet, EV specialization, and unified marketplace</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h4 className="font-bold text-purple-900 mb-2">Strong Financial Performance</h4>
            <p className="text-sm text-gray-700">$12.5M revenue by Year 5, $7.3M net profit, break-even by Year 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
