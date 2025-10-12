import React from 'react';
import { TrendingUp, Car, Zap, CheckCircle } from 'lucide-react';

const MarketAnalysis = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Market Analysis</h2>
        <p className="text-xl text-teal-100">Global Automotive Services - $500B+ Opportunity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-2">TAM</h4>
          <p className="text-4xl font-bold mb-2">$350B</p>
          <p className="text-sm text-blue-100">Total Addressable Market</p>
          <p className="text-xs mt-2">2024 North American automotive services market</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-2">SAM</h4>
          <p className="text-4xl font-bold mb-2">$520B</p>
          <p className="text-sm text-green-100">Serviceable Addressable</p>
          <p className="text-xs mt-2">2032 Forecasted market value with 5.8% CAGR</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-2">SOM</h4>
          <p className="text-4xl font-bold mb-2">$15.2M</p>
          <p className="text-sm text-purple-100">Serviceable Obtainable</p>
          <p className="text-xs mt-2">0.12% penetration by Year 5</p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Target Market Segmentation & Customer Behavior</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
              <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                <Car className="w-5 h-5 text-blue-600 mr-2" />
                Individual Vehicle Owners
              </h4>
              <p className="text-sm text-gray-700 mb-3">Urban and suburban users seeking convenience and reliable service providers</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Demographics:</strong> 25-65 years, $40K+ income</p>
                <p><strong>Behavior:</strong> 78% prefer digital booking, 65% research online first</p>
                <p><strong>Pain Points:</strong> Finding trustworthy mechanics, price transparency</p>
                <p><strong>Market Size:</strong> 180M+ vehicle owners in North America</p>
              </div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5">
              <h4 className="font-bold text-green-900 mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                Fleet & Corporate Clients
              </h4>
              <p className="text-sm text-gray-700 mb-3">Logistics, car rental, and ride-share fleets requiring efficient maintenance management</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Demographics:</strong> Fleet managers, operations directors</p>
                <p><strong>Behavior:</strong> Bulk service needs, cost optimization focus</p>
                <p><strong>Pain Points:</strong> Downtime minimization, predictive maintenance</p>
                <p><strong>Market Size:</strong> 15M+ commercial vehicles in North America</p>
              </div>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5">
              <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                <Zap className="w-5 h-5 text-purple-600 mr-2" />
                Garages & Mechanics
              </h4>
              <p className="text-sm text-gray-700 mb-3">Independent providers seeking digital exposure and customer acquisition</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Demographics:</strong> Independent shop owners, certified mechanics</p>
                <p><strong>Behavior:</strong> Seeking digital tools, customer acquisition</p>
                <p><strong>Pain Points:</strong> Limited marketing reach, inconsistent bookings</p>
                <p><strong>Market Size:</strong> 200K+ independent service providers</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
            <h4 className="font-bold text-gray-800 mb-4">Customer Behavior Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Digital Adoption Patterns:</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 82% of millennials prefer mobile-first booking</li>
                  <li>• 78% research service providers online before booking</li>
                  <li>• 65% read reviews and ratings before decision</li>
                  <li>• 72% expect real-time service updates</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 mb-3">Service Preferences:</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 85% prioritize convenience over lowest price</li>
                  <li>• 78% want transparent pricing upfront</li>
                  <li>• 70% prefer preventive over reactive maintenance</li>
                  <li>• 68% value eco-friendly service options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">North American Market Overview</h3>
        </div>
        <div className="p-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg mb-6">
            <h4 className="font-bold text-xl mb-2">Total North American Service Market</h4>
            <p className="text-4xl font-bold mb-2">US $350B</p>
            <p className="text-sm text-blue-100 mb-4">2024 Combined automotive repair and maintenance market</p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-lg font-semibold mb-2">2032 Forecast</p>
              <p className="text-2xl font-bold">US $520-550B</p>
              <p className="text-sm text-blue-100">at 5.8% CAGR driven by aging fleet and EV adoption</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Country / Region</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">2024 Market Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">CAGR (2024-2032)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Key Drivers & Trends</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-800">United States</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">US $280B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">5.8%</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">290M+ vehicles, aging fleet (12.6 years), EV transition, digital adoption</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-green-800">Canada</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">CA $28B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">5.2%</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">26M vehicles, strong independent network, tech-savvy consumers</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-800">Mexico</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">US $32B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">6.5%</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">50M+ vehicles, growing middle class, mobile-first adoption</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-orange-800">Central America</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">US $5B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">7.2%</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Used vehicle imports, fragmented market, digital transformation</td>
                </tr>
                <tr className="hover:bg-yellow-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-yellow-800">West Indies / Caribbean</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">US $2.5B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">6.8%</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">High import dependency, tourism demand, mobile connectivity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Emerging Market Trends & Technology Drivers</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-xl mb-3 flex items-center">
                <Zap className="w-6 h-6 mr-2" />
                Electric Vehicle Transition
              </h4>
              <ul className="text-sm space-y-2">
                <li>• EV market growing 25% annually</li>
                <li>• New service requirements (battery, charging)</li>
                <li>• Reduced mechanical complexity</li>
                <li>• Digital-first maintenance approach</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-xl mb-3 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Digital Transformation
              </h4>
              <ul className="text-sm space-y-2">
                <li>• 78% of consumers prefer digital booking</li>
                <li>• AI-powered predictive maintenance</li>
                <li>• Real-time service tracking</li>
                <li>• Mobile-first customer experience</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-xl mb-3 flex items-center">
                <Car className="w-6 h-6 mr-2" />
                Fleet Management Evolution
              </h4>
              <ul className="text-sm space-y-2">
                <li>• Ride-share and delivery fleet growth</li>
                <li>• Corporate fleet digitization</li>
                <li>• Predictive maintenance adoption</li>
                <li>• Cost optimization focus</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-xl mb-3 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Consumer Behavior Shift
              </h4>
              <ul className="text-sm space-y-2">
                <li>• Demand for transparency and trust</li>
                <li>• Convenience over cost optimization</li>
                <li>• Sustainability considerations</li>
                <li>• On-demand service expectations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Canadian Market Focus</h3>
        </div>
        <div className="p-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl mb-2">Canadian Vehicle Market</h4>
            <p className="text-4xl font-bold mb-2">26M+</p>
            <p className="text-sm text-blue-100 mb-4">Vehicles registered in Canada as of 2025</p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-lg font-semibold mb-2">Market Opportunity</p>
              <p className="text-2xl font-bold">70%</p>
              <p className="text-sm text-blue-100">of vehicle owners report challenges finding reliable, affordable, and nearby service providers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Competitive Landscape & Market Dynamics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">National Chains</h4>
            <p className="text-sm text-gray-600 mb-2"><strong>Strengths:</strong> Brand recognition, multiple locations, standardized processes</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Weaknesses:</strong> Higher prices, slower service, limited personalization</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Digital Adoption:</strong> Moderate - basic online booking</p>
            <p className="text-sm"><strong>Market Share:</strong> 55%</p>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">Independent Garages</h4>
            <p className="text-sm text-gray-600 mb-2"><strong>Strengths:</strong> Personalized service, competitive pricing, local expertise</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Weaknesses:</strong> Limited digital presence, inconsistent quality, trust issues</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Digital Adoption:</strong> Low - mostly traditional methods</p>
            <p className="text-sm"><strong>Market Share:</strong> 35%</p>
          </div>
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5">
            <h4 className="font-bold text-purple-900 mb-3">Digital Platforms</h4>
            <p className="text-sm text-gray-600 mb-2"><strong>Strengths:</strong> Convenience, transparency, mobile-first approach</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Weaknesses:</strong> Limited market penetration, trust building phase</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Digital Adoption:</strong> High - full digital ecosystem</p>
            <p className="text-sm"><strong>Market Share:</strong> 10% (growing rapidly)</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
          <h4 className="font-bold text-gray-800 mb-4">Market Gap Analysis</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-gray-700 mb-2">Current Pain Points:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 65% of consumers struggle to find trustworthy mechanics</li>
                <li>• 78% want transparent pricing upfront</li>
                <li>• 82% prefer digital booking and tracking</li>
                <li>• 70% report inconsistent service quality</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-700 mb-2">Market Opportunities:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital-first service marketplace</li>
                <li>• AI-powered service matching</li>
                <li>• Transparent pricing and quality ratings</li>
                <li>• Predictive maintenance integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
        <h4 className="font-bold text-xl mb-4">CarCare Advantage</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Unified marketplace</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Transparent pricing</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">24/7 access</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Real-time updates</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Predictive maintenance powered by AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
