import React from 'react';

const RevenueModel = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">💰 Revenue Model</h2>
            <p className="text-xl text-green-100">Detailed Revenue Streams Based on Financial Parameters</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-full p-3">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-blue-600">1</span>
            </div>
            <h4 className="font-bold text-gray-800">Booking Commissions</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Platform fee on completed bookings</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 5% → 7% (tiered growth)</p>
          <div className="bg-blue-50 rounded p-2">
            <p className="text-xs font-semibold text-blue-800">FY 2030 Projection: $28.0M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-green-600">2</span>
            </div>
            <h4 className="font-bold text-gray-800">User Subscriptions</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Annual premium subscriptions for users</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Pricing:</strong> $99/year • 15% penetration by 2030</p>
          <div className="bg-green-50 rounded p-2">
            <p className="text-xs font-semibold text-green-800">FY 2030 Projection: $7.4M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-purple-600">3</span>
            </div>
            <h4 className="font-bold text-gray-800">Garage Subscriptions</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Monthly subscriptions for garage partners</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Pricing:</strong> $20/month • 45% penetration by 2030</p>
          <div className="bg-purple-50 rounded p-2">
            <p className="text-xs font-semibold text-purple-800">FY 2030 Projection: $1.1M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-yellow-600">4</span>
            </div>
            <h4 className="font-bold text-gray-800">Advertising & Listings</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Premium placements & banner ads for garages</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $99-140/month • 20% penetration by 2030</p>
          <div className="bg-yellow-50 rounded p-2">
            <p className="text-xs font-semibold text-yellow-800">FY 2030 Projection: $3.4M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-red-600">5</span>
            </div>
            <h4 className="font-bold text-gray-800">Jobs Marketplace</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Paid job posts & mechanic hiring platform</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $10/post • 2 listings/garage/month</p>
          <div className="bg-red-50 rounded p-2">
            <p className="text-xs font-semibold text-red-800">FY 2030 Projection: $2.4M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-indigo-600">6</span>
            </div>
            <h4 className="font-bold text-gray-800">CareChart AI Subscriptions</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">AI-powered diagnostics and maintenance predictions</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $99/year • 10% penetration by 2030</p>
          <div className="bg-indigo-50 rounded p-2">
            <p className="text-xs font-semibold text-indigo-800">FY 2030 Projection: $5.0M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-pink-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-pink-600">7</span>
            </div>
            <h4 className="font-bold text-gray-800">Proprietary Garages</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Owned/franchised CareGarages with direct revenue</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Revenue:</strong> $90K/garage/month • 50 garages by 2030</p>
          <div className="bg-pink-50 rounded p-2">
            <p className="text-xs font-semibold text-pink-800">FY 2030 Projection: $54.0M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-orange-600">8</span>
            </div>
            <h4 className="font-bold text-gray-800">Value-Added Services</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Additional services and partnerships</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Includes:</strong> Insurance partnerships, roadside assistance</p>
          <div className="bg-orange-50 rounded p-2">
            <p className="text-xs font-semibold text-orange-800">FY 2030 Projection: $2.7M</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-2xl mb-2">💰 Revenue Breakdown</h4>
              <p className="text-green-100">Detailed Revenue Streams Based on Financial Parameters</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <tr>
                  <th className="text-left p-4 font-bold text-lg">💎 Revenue Streams</th>
                  <th className="text-center p-4 font-bold">2026</th>
                  <th className="text-center p-4 font-bold">2027</th>
                  <th className="text-center p-4 font-bold">2028</th>
                  <th className="text-center p-4 font-bold">2029</th>
                  <th className="text-center p-4 font-bold">2030</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-green-50 transition-colors bg-gradient-to-r from-blue-50 to-cyan-50">
                  <td className="p-4 font-bold text-gray-800">🛒 Booking Commissions</td>
                  <td className="p-4 text-center font-bold text-blue-600">$225,000</td>
                  <td className="p-4 text-center font-bold text-blue-600">$450,000</td>
                  <td className="p-4 text-center font-bold text-blue-600">$1,350,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$8,000,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$28,000,000</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-green-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">👥 User Annual Subscriptions</td>
                  <td className="p-4 text-center">$99,000</td>
                  <td className="p-4 text-center">$198,000</td>
                  <td className="p-4 text-center">$594,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$2,178,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$7,425,000</td>
                </tr>
                <tr className="border-b hover:bg-green-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🏪 Garage Subscriptions</td>
                  <td className="p-4 text-center">$14,400</td>
                  <td className="p-4 text-center">$84,000</td>
                  <td className="p-4 text-center">$252,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$768,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$1,080,000</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-green-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">💳 Wallet & Fintech (lumpsum)</td>
                  <td className="p-4 text-center">$0</td>
                  <td className="p-4 text-center">$150,000</td>
                  <td className="p-4 text-center">$200,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$600,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$900,000</td>
                </tr>
                <tr className="border-b hover:bg-green-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📢 Ads & Featured Listings</td>
                  <td className="p-4 text-center">$23,760</td>
                  <td className="p-4 text-center">$118,800</td>
                  <td className="p-4 text-center">$356,400</td>
                  <td className="p-4 text-center font-bold text-green-600">$1,728,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$3,360,000</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-green-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📊 Data Licensing (lumpsum)</td>
                  <td className="p-4 text-center">$0</td>
                  <td className="p-4 text-center">$0</td>
                  <td className="p-4 text-center">$100,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$300,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$500,000</td>
                </tr>
                <tr className="border-b hover:bg-green-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">💼 Jobs Marketplace</td>
                  <td className="p-4 text-center">$24,000</td>
                  <td className="p-4 text-center">$120,000</td>
                  <td className="p-4 text-center">$360,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$1,920,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$2,400,000</td>
                </tr>
                <tr className="border-b hover:bg-green-50 transition-colors bg-gradient-to-r from-purple-50 to-pink-50">
                  <td className="p-4 font-bold text-gray-800">🏭 Franchise / Assets / Fast Track Smart Garage</td>
                  <td className="p-4 text-center font-bold text-purple-600">$240,000</td>
                  <td className="p-4 text-center font-bold text-purple-600">$720,000</td>
                  <td className="p-4 text-center font-bold text-purple-600">$3,000,000</td>
                  <td className="p-4 text-center font-bold text-purple-600">$14,400,000</td>
                  <td className="p-4 text-center font-bold text-purple-600">$54,000,000</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-green-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🤖 CareChart AI Premium</td>
                  <td className="p-4 text-center">$49,500</td>
                  <td className="p-4 text-center">$99,000</td>
                  <td className="p-4 text-center">$297,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$1,386,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$4,950,000</td>
                </tr>
                <tr className="border-b hover:bg-green-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🚗 EV & Fleet Services (lumpsum)</td>
                  <td className="p-4 text-center">$0</td>
                  <td className="p-4 text-center">$0</td>
                  <td className="p-4 text-center">$200,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$1,000,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$1,800,000</td>
                </tr>
                <tr className="border-b bg-gradient-to-r from-green-100 to-emerald-100">
                  <td className="p-4 font-bold text-green-800 text-lg">💰 TOTAL REVENUE</td>
                  <td className="p-4 text-center font-bold text-green-700 text-lg">$675,660</td>
                  <td className="p-4 text-center font-bold text-green-700 text-lg">$1,939,800</td>
                  <td className="p-4 text-center font-bold text-green-700 text-lg">$6,709,400</td>
                  <td className="p-4 text-center font-bold text-green-700 text-lg">$32,280,000</td>
                  <td className="p-4 text-center font-bold text-green-700 text-lg">$104,415,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Revenue Stream Visualization */}
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-green-50 p-6 rounded-xl">
            <h5 className="font-bold text-lg text-gray-800 mb-6 text-center">📊 Revenue Stream Distribution (2030)</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Commission Revenue */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
                <h6 className="font-bold text-blue-800 mb-4 text-center">🛒 Commission Revenue</h6>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">$7.0M</div>
                  <div className="text-sm text-gray-600">9.6% of Total</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '9.6%'}}></div>
          </div>
        </div>

              {/* User Subscriptions */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
                <h6 className="font-bold text-green-800 mb-4 text-center">👥 User Subscriptions</h6>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">$7.4M</div>
                  <div className="text-sm text-gray-600">10.2% of Total</div>
            </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{width: '10.2%'}}></div>
          </div>
        </div>

              {/* Proprietary Garages */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
                <h6 className="font-bold text-purple-800 mb-4 text-center">🏭 Proprietary Garages</h6>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-purple-600">$54.0M</div>
                  <div className="text-sm text-gray-600">74.0% of Total</div>
            </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{width: '74%'}}></div>
          </div>
        </div>

              {/* Other Revenue Streams */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200">
                <h6 className="font-bold text-orange-800 mb-4 text-center">📢 Other Revenue</h6>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-orange-600">$4.6M</div>
                  <div className="text-sm text-gray-600">6.2% of Total</div>
            </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{width: '6.2%'}}></div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Revenue Growth Trajectory</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">$675K</p>
            <p className="text-sm text-indigo-200">FY 2026 (Year 1)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">$1.9M</p>
            <p className="text-sm text-indigo-200">FY 2027 (Year 2)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">$6.71M</p>
            <p className="text-sm text-indigo-200">FY 2028 (Year 3)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">$32.3M</p>
            <p className="text-sm text-indigo-200">FY 2029 (Year 4)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">$104.4M</p>
            <p className="text-sm text-indigo-200">FY 2030 (Year 5)</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-indigo-400">
          <p className="text-center text-lg">
            <span className="font-bold text-green-400">≈156% CAGR</span> • <span className="font-bold text-blue-400">Break-even by Year 2</span> • <span className="font-bold text-purple-400">24% Net Margin</span> by Year 5
          </p>
          <p className="text-center text-sm text-indigo-200 mt-2">
            <span className="font-bold text-orange-400">CAD $2.5M Seed Funding</span> • <span className="font-bold text-yellow-400">1,856% ROI</span> by Year 5
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
        <h4 className="font-bold text-gray-800 mb-6 text-xl">Revenue Stream Analysis</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h5 className="font-bold text-blue-800 mb-3">Primary Revenue Drivers</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Franchise/Assets (51.7%)</strong> - Direct ownership model</li>
              <li>• <strong>Booking Commissions (26.8%)</strong> - Transaction-based</li>
              <li>• <strong>User Subscriptions (7.1%)</strong> - Recurring revenue</li>
              <li>• <strong>CareChart AI (4.8%)</strong> - AI-powered services</li>
              <li>• <strong>Other Services (9.6%)</strong> - Diversified streams</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h5 className="font-bold text-green-800 mb-3">Growth Characteristics</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Exponential Growth</strong> - 156% CAGR over 5 years</li>
              <li>• <strong>Scalable Model</strong> - Digital-first approach</li>
              <li>• <strong>Recurring Revenue</strong> - 85% subscription-based</li>
              <li>• <strong>Market Expansion</strong> - North American scale</li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueModel;
