import React from 'react';

const Roadmap = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">5-Year Strategic Roadmap</h2>
        <p className="text-xl text-indigo-100">Based on Financial Projections & Market Analysis</p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <h3 className="text-2xl font-bold">5-Year Strategic Roadmap</h3>
          <p className="text-indigo-100">Based on Financial Projections & Market Analysis</p>
        </div>
        <div className="p-6">
          <div className="space-y-8">
            
            {/* Year 1 - 2026 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-blue-800">Year 1 (2026) - MVP Launch</h4>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">Foundation</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-blue-700 mb-3">🎯 Key Targets</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 10,000 active users</li>
                    <li>• 200 partner garages</li>
                    <li>• 2 proprietary garages</li>
                    <li>• $675,660 revenue</li>
                    <li>• Break-even: Q4 2026</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-blue-700 mb-3">🚀 Key Initiatives</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Launch MVP platform in Toronto</li>
                    <li>• Establish core team (15-20 people)</li>
                    <li>• Build garage partner network</li>
                    <li>• Develop CareChart AI v1.0</li>
                    <li>• Secure $2.7M seed funding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Year 2 - 2027 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-green-800">Year 2 (2027) - Ontario Expansion</h4>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">Growth</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-green-700 mb-3">🎯 Key Targets</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 50,000 active users</li>
                    <li>• 500 partner garages</li>
                    <li>• 5 proprietary garages</li>
                    <li>• $1,939,800 revenue</li>
                    <li>• First profitable year</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-green-700 mb-3">🚀 Key Initiatives</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Expand across Ontario</li>
                    <li>• Launch subscription services</li>
                    <li>• Introduce jobs marketplace</li>
                    <li>• Scale to 30-person team</li>
                    <li>• Series A preparation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Year 3 - 2028 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-purple-800">Year 3 (2028) - Nationwide Rollout</h4>
                <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">Scale</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-purple-700 mb-3">🎯 Key Targets</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 150,000 active users</li>
                    <li>• 1,200 partner garages</li>
                    <li>• 15 proprietary garages</li>
                    <li>• $6,709,400 revenue</li>
                    <li>• National presence</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-purple-700 mb-3">🚀 Key Initiatives</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Expand to all major Canadian cities</li>
                    <li>• Launch advanced AI features</li>
                    <li>• Introduce EV-specific services</li>
                    <li>• Scale to 50-person team</li>
                    <li>• Prepare US market entry</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Year 4 - 2029 */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-orange-800">Year 4 (2029) - US Market Entry</h4>
                <div className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">Expansion</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-orange-700 mb-3">🎯 Key Targets</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 300,000 active users</li>
                    <li>• 2,500 partner garages</li>
                    <li>• 30 proprietary garages</li>
                    <li>• $32,280,000 revenue</li>
                    <li>• US market presence</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-orange-700 mb-3">🚀 Key Initiatives</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Launch in major US cities</li>
                    <li>• Establish US operations</li>
                    <li>• Scale proprietary garage network</li>
                    <li>• Introduce fleet services</li>
                    <li>• Scale to 80-person team</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Year 5 - 2030 */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-2xl font-bold text-yellow-800">Year 5 (2030) - Market Leadership</h4>
                <div className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold">Dominance</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-yellow-700 mb-3">🎯 Key Targets</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 500,000 active users</li>
                    <li>• 10,000+ partner garages</li>
                    <li>• 50+ proprietary garages</li>
                    <li>• $104,415,000 revenue</li>
                    <li>• Market leadership position</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-yellow-700 mb-3">🚀 Key Initiatives</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Full North American coverage</li>
                    <li>• Advanced AI & automation</li>
                    <li>• Fleet & enterprise solutions</li>
                    <li>• IPO preparation</li>
                    <li>• Scale to 120+ person team</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Financial Milestones */}
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-300 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">💰 Financial Milestones</h4>
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

            {/* Market Penetration Timeline */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-indigo-800 mb-4">📊 Market Penetration Timeline</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">0.5% - 1.0%</div>
                  <div className="text-sm text-gray-600">Market Penetration by 2030</div>
                  <div className="text-xs text-gray-500 mt-1">of $270B SAM</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">$1.35B - $2.7B</div>
                  <div className="text-sm text-gray-600">SOM by 2030</div>
                  <div className="text-xs text-gray-500 mt-1">Serviceable Obtainable Market</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">156% CAGR</div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                  <div className="text-xs text-gray-500 mt-1">5-year compound growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;