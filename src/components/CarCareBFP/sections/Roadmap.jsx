import React from 'react';

const Roadmap = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">3-Year Strategic Roadmap</h2>
        <p className="text-xl text-indigo-100">Phased Rollout from MVP to IPO-Ready Enterprise</p>
      </div>

      <div className="space-y-8">
        <div className="border-l-4 border-blue-500 pl-6">
          <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-6 text-xl">
                1
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-900">Phase 1: National Expansion & Fintech Integration</h4>
                <p className="text-blue-700 font-semibold text-lg">FY 2026</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Strengthening digital infrastructure, expanding nationwide garage coverage, and launching the CarCare Wallet as the foundation for financial scalability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Key Objectives:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Expand from 150 to 450 active garages</li>
                  <li>• Deploy CarCare Wallet & Savings Vault</li>
                  <li>• Migrate garages to Torqon Wrench OS</li>
                  <li>• Launch Super Admin analytics dashboards</li>
                  <li>• Cover 5 major provinces</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Core Deliverables:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Stripe/Interac payment gateway</li>
                  <li>• Garage Pro/Max subscription rollout</li>
                  <li>• Marketing expansion (digital + referral)</li>
                  <li>• CareChart predictive maintenance pilot</li>
                  <li>• Revenue: <strong>CAD $883K</strong></li>
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
                <h4 className="text-2xl font-bold text-green-900">Phase 2: Fintech Maturity & Data Monetization</h4>
                <p className="text-green-700 font-semibold text-lg">FY 2027</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Transforming CarCare from a transactional platform into an integrated automotive data and financial intelligence company.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Key Objectives:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Scale to 1,000 garages & 24K users</li>
                  <li>• Launch Data & Insights Licensing</li>
                  <li>• Activate Jobs Marketplace</li>
                  <li>• Open first Smart Garage franchise</li>
                  <li>• Deploy AI-driven analytics</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Core Deliverables:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Data licensing API for B2B clients</li>
                  <li>• CareChat AI integration</li>
                  <li>• Parts procurement & vendor network</li>
                  <li>• Wallet loyalty & financing options</li>
                  <li>• Revenue: <strong>CAD $2.84M</strong></li>
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
                <h4 className="text-2xl font-bold text-purple-900">Phase 3: Global Scaling & IPO Preparation</h4>
                <p className="text-purple-700 font-semibold text-lg">FY 2028</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Positioning CarCare 24×7 as a billion-dollar enterprise through physical franchise scaling, international expansion, and pre-IPO structuring.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Key Objectives:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Reach 2,000 garages & 120K users</li>
                  <li>• Launch 10 Smart Garages</li>
                  <li>• Establish data intelligence division</li>
                  <li>• Prepare IPO documentation</li>
                  <li>• Begin U.S. market pilot</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3 text-lg">Core Deliverables:</h5>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• Franchise & asset expansion</li>
                  <li>• Wallet API partnerships (insurers)</li>
                  <li>• Ad monetization scaling</li>
                  <li>• International pilot (U.S. East Coast)</li>
                  <li>• Revenue: <strong>CAD $7.66M</strong></li>
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
