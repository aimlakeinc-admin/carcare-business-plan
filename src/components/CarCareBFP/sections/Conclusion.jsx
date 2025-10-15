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
            <p className="text-4xl font-bold mb-2">CA $511B</p>
            <p className="text-lg text-green-100">North American market (2025)</p>
            <p className="text-sm text-green-200 mt-2">165K+ establishments in US, 15-17K in Canada</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">CAD $646.7B</p>
            <p className="text-lg text-green-100">2030 Forecast</p>
            <p className="text-sm text-green-200 mt-2">at 6.1% CAGR driven by aging fleet and EV adoption</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">&lt;5%</p>
            <p className="text-lg text-green-100">Online bookings in Canada</p>
            <p className="text-sm text-green-200 mt-2">Massive digital opportunity for CarCare 24x7</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold">Key Market Drivers: Aging Vehicle Fleets (10.9 years avg in Canada) & Fintech Integration</p>
          <p className="text-sm text-green-100 mt-2">EV maintenance market projected to reach CA $20B by 2030</p>
        </div>
      </div>


      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-center">💰 Financial Milestones</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">$675,660</div>
            <div className="text-sm text-gray-600">Year 1 Revenue</div>
          </div>
          <div className="text-center bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">$1,939,800</div>
            <div className="text-sm text-gray-600">Year 2 Revenue</div>
          </div>
          <div className="text-center bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">$6,709,400</div>
            <div className="text-sm text-gray-600">Year 3 Revenue</div>
          </div>
          <div className="text-center bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">$32,280,000</div>
            <div className="text-sm text-gray-600">Year 4 Revenue</div>
          </div>
          <div className="text-center bg-yellow-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">$104,415,000</div>
            <div className="text-sm text-gray-600">Year 5 Revenue</div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
          <h3 className="text-2xl font-bold">Implied Enterprise Value</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="text-left p-4 font-semibold">Financial Metrics</th>
                <th className="text-right p-4 font-semibold">2026</th>
                <th className="text-right p-4 font-semibold">2027</th>
                <th className="text-right p-4 font-semibold">2028</th>
                <th className="text-right p-4 font-semibold">2029</th>
                <th className="text-right p-4 font-semibold">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">Revenue</td>
                <td className="p-4 text-right">675,660</td>
                <td className="p-4 text-right">1,939,800</td>
                <td className="p-4 text-right">6,709,400</td>
                <td className="p-4 text-right">32,280,000</td>
                <td className="p-4 text-right">104,415,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-gray-800">EBITDA</td>
                <td className="p-4 text-right text-red-600">(1,195,979)</td>
                <td className="p-4 text-right text-red-600">(1,953,925)</td>
                <td className="p-4 text-right text-red-600">(2,844,070)</td>
                <td className="p-4 text-right text-green-600">2,620,352</td>
                <td className="p-4 text-right text-green-600">34,713,905</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">Selected Multiple (x)</td>
                <td className="p-4 text-right">4</td>
                <td className="p-4 text-right">5</td>
                <td className="p-4 text-right">6</td>
                <td className="p-4 text-right">6</td>
                <td className="p-4 text-right">6</td>
              </tr>
              <tr className="bg-green-50 border-t-2 border-green-500">
                <td className="p-4 font-bold text-green-800">Implied Enterprise Value</td>
                <td className="p-4 text-right">-</td>
                <td className="p-4 text-right">-</td>
                <td className="p-4 text-right">-</td>
                <td className="p-4 text-right font-bold text-green-700">15,722,112</td>
                <td className="p-4 text-right font-bold text-green-700">208,283,430</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <h3 className="text-2xl font-bold">Financial Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-left p-4 font-semibold">Metric</th>
                <th className="text-right p-4 font-semibold">2026</th>
                <th className="text-right p-4 font-semibold">2027</th>
                <th className="text-right p-4 font-semibold">2028</th>
                <th className="text-right p-4 font-semibold">2029</th>
                <th className="text-right p-4 font-semibold">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">Total Revenue</td>
                <td className="p-4 text-right">675,660</td>
                <td className="p-4 text-right">1,939,800</td>
                <td className="p-4 text-right">6,709,400</td>
                <td className="p-4 text-right">32,280,000</td>
                <td className="p-4 text-right">104,415,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-gray-800">Total OPEX</td>
                <td className="p-4 text-right">1,871,639</td>
                <td className="p-4 text-right">3,893,725</td>
                <td className="p-4 text-right">9,553,470</td>
                <td className="p-4 text-right">29,659,648</td>
                <td className="p-4 text-right">69,701,095</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">EBITDA</td>
                <td className="p-4 text-right text-red-600">(1,195,979)</td>
                <td className="p-4 text-right text-red-600">(1,953,925)</td>
                <td className="p-4 text-right text-red-600">(2,844,070)</td>
                <td className="p-4 text-right text-green-600">2,620,352</td>
                <td className="p-4 text-right text-green-600">34,713,905</td>
              </tr>
              <tr className="bg-blue-50 border-t-2 border-blue-500">
                <td className="p-4 font-bold text-blue-800">Net Income</td>
                <td className="p-4 text-right text-red-600">(1,255,529)</td>
                <td className="p-4 text-right text-red-600">(2,070,975)</td>
                <td className="p-4 text-right text-red-600">(3,071,420)</td>
                <td className="p-4 text-right text-green-600">(1,559,064)</td>
                <td className="p-4 text-right text-green-600">(25,074,229)</td>
              </tr>
            </tbody>
          </table>
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
            <p className="text-sm text-gray-700">$511B North American market with strong growth trajectory</p>
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
            <p className="text-sm text-gray-700">$104.4M revenue by Year 5, $25.1M net profit, break-even by Year 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
