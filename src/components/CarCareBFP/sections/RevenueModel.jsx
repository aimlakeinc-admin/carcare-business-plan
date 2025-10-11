import React from 'react';

const RevenueModel = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Revenue Model</h2>
        <p className="text-xl text-green-100">8 Revenue Streams - Diversified Income Model Ensuring Sustainable Growth</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-blue-600">1</span>
            </div>
            <h4 className="font-bold text-gray-800">Booking Commissions</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Platform fee on completed bookings</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 5% → 10% (tiered growth)</p>
          <div className="bg-blue-50 rounded p-2">
            <p className="text-xs font-semibold text-blue-800">FY 2028 Projection: CAD $3.78M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-green-600">2</span>
            </div>
            <h4 className="font-bold text-gray-800">Garage Subscriptions</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Monthly Pro/Max plans with analytics</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Pricing:</strong> Pro $49/mo • Max $99/mo</p>
          <div className="bg-green-50 rounded p-2">
            <p className="text-xs font-semibold text-green-800">FY 2028 Projection: CAD $960K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-purple-600">3</span>
            </div>
            <h4 className="font-bold text-gray-800">Featured Listings & Ads</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Premium placements & banner ads</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $199/listing • CPM model</p>
          <div className="bg-purple-50 rounded p-2">
            <p className="text-xs font-semibold text-purple-800">FY 2028 Projection: CAD $480K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-yellow-600">4</span>
            </div>
            <h4 className="font-bold text-gray-800">Fintech Wallet & Vault</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Transaction fees & float income</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 2% transaction + 0.5% float</p>
          <div className="bg-yellow-50 rounded p-2">
            <p className="text-xs font-semibold text-yellow-800">FY 2028 Projection: CAD $675K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-red-600">5</span>
            </div>
            <h4 className="font-bold text-gray-800">Value-Added Services</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Roadside, insurance, diagnostics</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 15% commission on fees</p>
          <div className="bg-red-50 rounded p-2">
            <p className="text-xs font-semibold text-red-800">FY 2028 Projection: CAD $324K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-indigo-600">6</span>
            </div>
            <h4 className="font-bold text-gray-800">Data & Insights Licensing</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Anonymized data to insurers & fleets</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $10K avg per contract</p>
          <div className="bg-indigo-50 rounded p-2">
            <p className="text-xs font-semibold text-indigo-800">FY 2028 Projection: CAD $400K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-pink-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-pink-600">7</span>
            </div>
            <h4 className="font-bold text-gray-800">Jobs Marketplace</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Paid job posts & mechanic hiring</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $8/post • $49 subscription</p>
          <div className="bg-pink-50 rounded p-2">
            <p className="text-xs font-semibold text-pink-800">FY 2028 Projection: CAD $240K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-orange-600">8</span>
            </div>
            <h4 className="font-bold text-gray-800">Franchise & Assets</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Owned/franchised CareGarages</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Margin:</strong> 25-40% profit per garage</p>
          <div className="bg-orange-50 rounded p-2">
            <p className="text-xs font-semibold text-orange-800">FY 2028 Projection: CAD $800K</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Total Revenue Trajectory</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold">$883K</p>
            <p className="text-lg text-gray-300">FY 2026 (Year 1)</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">$2.84M</p>
            <p className="text-lg text-gray-300">FY 2027 (Year 2)</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-400">$7.66M</p>
            <p className="text-lg text-gray-300">FY 2028 (Year 3)</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-center text-lg">
            <span className="font-bold text-green-400">≈175% CAGR</span> • <span className="font-bold text-blue-400">70% Net Margin</span> by Year 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueModel;
