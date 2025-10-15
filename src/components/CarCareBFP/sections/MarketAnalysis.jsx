import React from 'react';
import { TrendingUp, Car, Zap, CheckCircle } from 'lucide-react';

const MarketAnalysis = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Market Analysis</h2>
        <p className="text-xl text-teal-100">Global Automotive Services - CAD $511B Opportunity</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-2">TAM</h4>
          <p className="text-4xl font-bold mb-2">$511B</p>
          <p className="text-sm text-blue-100">Total Addressable Market</p>
          <p className="text-xs mt-2">Total North American Automotive Aftermarket (2024) - CAD</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-2">SAM</h4>
          <p className="text-4xl font-bold mb-2">$270B</p>
          <p className="text-sm text-green-100">Serviceable Addressable</p>
          <p className="text-xs mt-2">North American Automotive Repair & Maintenance Services (2030) - CAD</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-2">SOM</h4>
          <p className="text-4xl font-bold mb-2">$1.35B - $2.7B</p>
          <p className="text-sm text-purple-100">Serviceable Obtainable</p>
          <p className="text-xs mt-2">0.5% - 1.0% market penetration by Year 5 (2030) - CAD</p>
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

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Market Analysis</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-green-100">
                <tr>
                  <th className="text-left p-4 font-semibold">Market Analysis</th>
                  <th className="text-right p-4 font-semibold">2026</th>
                  <th className="text-right p-4 font-semibold">2027</th>
                  <th className="text-right p-4 font-semibold">2028</th>
                  <th className="text-right p-4 font-semibold">2029</th>
                  <th className="text-right p-4 font-semibold">2030</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">No of Vehicle - Canada (Million)</td>
                  <td className="p-4 text-right">26</td>
                  <td className="p-4 text-right">27</td>
                  <td className="p-4 text-right">29</td>
                  <td className="p-4 text-right">30</td>
                  <td className="p-4 text-right font-bold">32</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">No of Vehicle - USA (Million)</td>
                  <td className="p-4 text-right">290</td>
                  <td className="p-4 text-right">307</td>
                  <td className="p-4 text-right">326</td>
                  <td className="p-4 text-right">345</td>
                  <td className="p-4 text-right font-bold">366</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Avg. spend/vehicle/year - CA</td>
                  <td className="p-4 text-right">$900</td>
                  <td className="p-4 text-right">$900</td>
                  <td className="p-4 text-right">$900</td>
                  <td className="p-4 text-right font-bold">$1,000</td>
                  <td className="p-4 text-right font-bold">$1,000</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">Avg. spend/vehicle/year - USA</td>
                  <td className="p-4 text-right">$1,680</td>
                  <td className="p-4 text-right">$1,680</td>
                  <td className="p-4 text-right">$1,680</td>
                  <td className="p-4 text-right">$1,680</td>
                  <td className="p-4 text-right">$1,680</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Market Size - CA (Billion)</td>
                  <td className="p-4 text-right">$23.40</td>
                  <td className="p-4 text-right">$24.57</td>
                  <td className="p-4 text-right">$25.80</td>
                  <td className="p-4 text-right font-bold">$30.10</td>
                  <td className="p-4 text-right font-bold">$31.60</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4">Market Size - USA (Billion)</td>
                  <td className="p-4 text-right">$487.20</td>
                  <td className="p-4 text-right">$516.43</td>
                  <td className="p-4 text-right">$547.42</td>
                  <td className="p-4 text-right">$580.26</td>
                  <td className="p-4 text-right font-bold">$615.08</td>
                </tr>
                <tr className="border-b bg-green-100">
                  <td className="p-4 font-bold text-green-800">Total Market (CA + USA)</td>
                  <td className="p-4 text-right font-bold text-green-700">$510.60</td>
                  <td className="p-4 text-right font-bold text-green-700">$541.00</td>
                  <td className="p-4 text-right font-bold text-green-700">$573.22</td>
                  <td className="p-4 text-right font-bold text-green-700">$610.36</td>
                  <td className="p-4 text-right font-bold text-green-700">$646.68</td>
                </tr>
                <tr className="border-b bg-blue-100">
                  <td className="p-4 font-bold text-blue-800">TAM - Total Addressable Market</td>
                  <td className="p-4 text-right font-bold text-blue-700">$535.00</td>
                  <td className="p-4 text-right font-bold text-blue-700">$535.00</td>
                  <td className="p-4 text-right font-bold text-blue-700">$535.00</td>
                  <td className="p-4 text-right font-bold text-blue-700">$535.00</td>
                  <td className="p-4 text-right font-bold text-blue-700">$535.00</td>
                </tr>
                <tr className="border-b bg-purple-100">
                  <td className="p-4 font-bold text-purple-800">SAM - Serviceable Addressable Market</td>
                  <td className="p-4 text-right font-bold text-purple-700">$183.40</td>
                  <td className="p-4 text-right font-bold text-purple-700">$202.00</td>
                  <td className="p-4 text-right font-bold text-purple-700">$222.50</td>
                  <td className="p-4 text-right font-bold text-purple-700">$245.20</td>
                  <td className="p-4 text-right font-bold text-purple-700">$270.00</td>
                </tr>
                <tr className="border-b bg-orange-100">
                  <td className="p-4 font-bold text-orange-800">SOM - Serviceable Obtainable Market</td>
                  <td className="p-4 text-right font-bold text-orange-700">$0.66</td>
                  <td className="p-4 text-right font-bold text-orange-700">$1.70</td>
                  <td className="p-4 text-right font-bold text-orange-700">$5.94</td>
                  <td className="p-4 text-right font-bold text-orange-700">$23.77</td>
                  <td className="p-4 text-right font-bold text-orange-700">$1,350 - $2,700</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-4 text-xs text-gray-600">Billion CAD</td>
                  <td className="p-4 text-right text-xs text-gray-600">Billion CAD</td>
                  <td className="p-4 text-right text-xs text-gray-600">Billion CAD</td>
                  <td className="p-4 text-right text-xs text-gray-600">Billion CAD</td>
                  <td className="p-4 text-right text-xs text-gray-600">Billion CAD</td>
                  <td className="p-4 text-right text-xs text-gray-600">Billion CAD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6">
          <h3 className="text-2xl font-bold">Revenue Breakdown & Market Penetration</h3>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h4 className="font-bold text-lg text-gray-800 mb-4">FY 2030 Revenue Projections (Total: $88M - $34M Platform + $54M Direct Service)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <h5 className="font-bold text-blue-800 mb-2">Platform Revenue Streams</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Booking Commissions: $10M</li>
                  <li>• User Subscriptions: $8M</li>
                  <li>• Garage Subscriptions: $5M</li>
                  <li>• Advertising & Listings: $4M</li>
                  <li>• Jobs Marketplace: $3M</li>
                  <li>• CareChart AI: $2M</li>
                  <li>• Value-Added Services: $2M</li>
                </ul>
                <div className="mt-2 font-bold text-blue-600">Subtotal: $34M</div>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                <h5 className="font-bold text-purple-800 mb-2">Direct Service Revenue</h5>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Proprietary Garages Revenue: $50M/year</li>
                  <li>• (50+ garages × $1M revenue per year each)</li>
                  <li>• Garage Value: $15.6M per garage</li>
                </ul>
                <div className="mt-2 font-bold text-purple-600">Subtotal: $54M</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6">
            <h5 className="font-bold text-orange-800 mb-4 text-lg">Market Penetration Analysis</h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">0.5% - 1.0%</div>
                <div className="text-sm text-gray-600">Market Penetration</div>
                <div className="text-xs text-gray-500 mt-1">of $270B SAM by 2030</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">$88M</div>
                <div className="text-sm text-gray-600">Target Revenue</div>
                <div className="text-xs text-gray-500 mt-1">5th Year (2030)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500K Users</div>
                <div className="text-sm text-gray-600">User Base</div>
                <div className="text-xs text-gray-500 mt-1">50+ Owned Garages</div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Justification:</strong> Platform revenue: $34M from commissions, subscriptions, and services. Direct service revenue: 50+ owned garages × $1M revenue per year each = $50M. 
                Garage value: $15.6M per garage. Total: $88M ($34M platform + $54M direct service) representing 0.03% of the $270B market.
              </p>
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
            <p className="text-4xl font-bold mb-2">CAD $511B</p>
            <p className="text-sm text-blue-100 mb-4">2026 Combined automotive repair and maintenance market</p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-lg font-semibold mb-2">2030 Forecast</p>
              <p className="text-2xl font-bold">CAD $646.7B</p>
              <p className="text-sm text-blue-100">at 6.1% CAGR driven by aging fleet and EV adoption</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Country / Region</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">2026 Market Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">2030 Market Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">CAGR (2026-2030)</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Key Drivers & Trends</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-800">United States</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">CAD $487.2B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">CAD $615.1B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">6.0%</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">366M+ vehicles by 2030, aging fleet (12.6 years), EV transition, digital adoption</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-green-800">Canada</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">CAD $23.4B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">CAD $31.6B</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">7.8%</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">32M vehicles by 2030, strong independent network, tech-savvy consumers</td>
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
            <p className="text-4xl font-bold mb-2">32M+</p>
            <p className="text-sm text-blue-100 mb-4">Vehicles projected in Canada by 2030</p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-lg font-semibold mb-2">Market Opportunity</p>
              <p className="text-2xl font-bold">CAD $31.6B</p>
              <p className="text-sm text-blue-100">Canadian automotive services market by 2030</p>
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

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Implementation Phases</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-green-100">
                <tr>
                  <th className="text-left p-4 font-semibold">Implementation Phases</th>
                  <th className="text-right p-4 font-semibold">Year</th>
                  <th className="text-right p-4 font-semibold">MARKET (SOM)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold text-blue-700">Phase 1: MVP Launch</td>
                  <td className="p-4 text-right font-bold">2026</td>
                  <td className="p-4 text-right">Toronto & GTA</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold text-green-700">Phase 2: ONTARIO Expansion</td>
                  <td className="p-4 text-right font-bold">2027</td>
                  <td className="p-4 text-right">Ontario major cities</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold text-purple-700">Phase 3: Nationwide Rollout</td>
                  <td className="p-4 text-right font-bold">2028</td>
                  <td className="p-4 text-right">Complete Nationwide coverage</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="p-4 font-semibold text-orange-700">Phase 4: Scale up to US Market</td>
                  <td className="p-4 text-right font-bold">2029</td>
                  <td className="p-4 text-right">US Market Scale up</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-semibold text-red-700">Phase 5: Scale up to North American Market</td>
                  <td className="p-4 text-right font-bold">2030</td>
                  <td className="p-4 text-right">North American Market Scale up</td>
                </tr>
              </tbody>
            </table>
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
