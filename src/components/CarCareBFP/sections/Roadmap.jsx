import React from 'react';

const Roadmap = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">3-Year Strategic Roadmap</h2>
        <p className="text-xl text-indigo-100">Phased Rollout from MVP to IPO-Ready Enterprise</p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Three-Year Rollout Plan</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Phase</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Period</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Focus</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Key Milestones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-800">Phase 1</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">2026</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">MVP Launch - Toronto & GTA</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">5,000 users, 200 garages on-boarded</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-green-800">Phase 2</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">2027</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Expansion to major cities in Ontario</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">50,000 users, fin-tech integration</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-800">Phase 3</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">2028</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Nationwide rollout</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">500,000 users, EV and fleet modules</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-6 text-xl">
                1
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-900">Phase 1: MVP Launch - Toronto & GTA</h4>
                <p className="text-blue-700 font-semibold text-lg">2026</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Launching the minimum viable product in the Greater Toronto Area, establishing core platform functionality and building initial user base.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Key Objectives:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Launch MVP platform in Toronto & GTA</li>
                  <li>• On-board 200 garages</li>
                  <li>• Acquire 5,000 active users</li>
                  <li>• Establish core booking system</li>
                  <li>• Build initial service provider network</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Core Deliverables:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Mobile app launch (iOS & Android)</li>
                  <li>• Basic booking and payment system</li>
                  <li>• Garage onboarding process</li>
                  <li>• Customer support infrastructure</li>
                  <li>• Revenue: <strong>CAD $300K</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <div className="bg-green-50 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-6 text-xl">
                2
              </div>
              <div>
                <h4 className="text-2xl font-bold text-green-900">Phase 2: Ontario Expansion & Fintech Integration</h4>
                <p className="text-green-700 font-semibold text-lg">2027</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Expanding to major cities across Ontario while integrating financial technology features to enhance user experience and platform value.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Key Objectives:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Expand to major Ontario cities</li>
                  <li>• Scale to 50,000 users</li>
                  <li>• Integrate fintech capabilities</li>
                  <li>• Enhance platform features</li>
                  <li>• Build strategic partnerships</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Core Deliverables:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Multi-city service coverage</li>
                  <li>• Digital wallet integration</li>
                  <li>• Advanced booking features</li>
                  <li>• Loyalty program launch</li>
                  <li>• Revenue: <strong>CAD $1.2M</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-6">
          <div className="bg-purple-50 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-6 text-xl">
                3
              </div>
              <div>
                <h4 className="text-2xl font-bold text-purple-900">Phase 3: Nationwide Rollout & Advanced Modules</h4>
                <p className="text-purple-700 font-semibold text-lg">2028</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Completing nationwide expansion across Canada while launching specialized EV and fleet management modules to capture additional market segments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Key Objectives:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Complete nationwide coverage</li>
                  <li>• Scale to 500,000 users</li>
                  <li>• Launch EV service modules</li>
                  <li>• Deploy fleet management tools</li>
                  <li>• Achieve market leadership</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Core Deliverables:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• National service network</li>
                  <li>• EV charging & maintenance</li>
                  <li>• Fleet management platform</li>
                  <li>• AI-powered recommendations</li>
                  <li>• Revenue: <strong>$28.5M</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg">
        <h4 className="text-2xl font-bold mb-6">Vision Beyond FY 2028</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h5 className="font-bold mb-3 text-lg">Market Expansion</h5>
            <p className="text-sm text-gray-300">10+ international markets across North America and beyond</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h5 className="font-bold mb-3 text-lg">EV Integration</h5>
            <p className="text-sm text-gray-300">Battery swaps, charging networks, and EV diagnostics</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h5 className="font-bold mb-3 text-lg">CarCare Credit</h5>
            <p className="text-sm text-gray-300">Fintech lending product for vehicle upkeep financing</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-xl font-bold text-green-400">Target Valuation: CAD $100M+ by FY 2029</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
