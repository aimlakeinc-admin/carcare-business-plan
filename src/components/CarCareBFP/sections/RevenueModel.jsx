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
            <p className="text-xs font-semibold text-blue-800">FY 2030 Projection: $6.5M</p>
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
            <p className="text-xs font-semibold text-green-800">FY 2030 Projection: $1.0M</p>
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
            <p className="text-xs font-semibold text-purple-800">FY 2030 Projection: $500K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-yellow-600">4</span>
            </div>
            <h4 className="font-bold text-gray-800">Fintech Wallet & Vault</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">CarCare Wallet: transaction fees, savings vault, float income</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 2% transaction + 0.5% float + vault fees</p>
          <div className="bg-yellow-50 rounded p-2">
            <p className="text-xs font-semibold text-yellow-800">FY 2030 Projection: $750K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-lg">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-red-600">5</span>
            </div>
            <h4 className="font-bold text-gray-800">Value-Added Services</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">CareChart AI diagnostics, roadside assistance, insurance partnerships</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 15% commission + AI premium fees</p>
          <div className="bg-red-50 rounded p-2">
            <p className="text-xs font-semibold text-red-800">FY 2030 Projection: $625K</p>
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
            <p className="text-xs font-semibold text-indigo-800">FY 2030 Projection: $375K</p>
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
            <p className="text-xs font-semibold text-pink-800">FY 2030 Projection: $250K</p>
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
            <p className="text-xs font-semibold text-orange-800">FY 2030 Projection: $875K</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Emerging Revenue Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-bold text-lg mb-3">CareChart AI Premium Services</h4>
            <ul className="space-y-2 text-sm">
              <li>• Predictive maintenance subscriptions ($9.99/month)</li>
              <li>• Advanced diagnostics & health reports ($29.99/report)</li>
              <li>• Fleet optimization for businesses ($199/month)</li>
              <li>• EV-specific maintenance predictions ($14.99/month)</li>
            </ul>
            <div className="mt-3 pt-3 border-t border-white border-opacity-20">
              <p className="text-xs font-semibold">Projected FY 2028: $2.0M+</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-bold text-lg mb-3">EV & Fleet Specialization</h4>
            <ul className="space-y-2 text-sm">
              <li>• EV charging station partnerships (5% commission)</li>
              <li>• Fleet management software licensing ($50/vehicle/month)</li>
              <li>• EV battery health monitoring ($19.99/month)</li>
              <li>• Corporate fleet optimization contracts ($10K+ annually)</li>
            </ul>
            <div className="mt-3 pt-3 border-t border-white border-opacity-20">
              <p className="text-xs font-semibold">Projected FY 2028: $1.5M+</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Total Revenue Trajectory</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">$180K</p>
            <p className="text-sm text-gray-300">FY 2026 (Year 1)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">$650K</p>
            <p className="text-sm text-gray-300">FY 2027 (Year 2)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">$850K</p>
            <p className="text-sm text-gray-300">FY 2028 (Year 3)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">$3.2M</p>
            <p className="text-sm text-gray-300">FY 2029 (Year 4)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">$8.5M</p>
            <p className="text-sm text-gray-300">FY 2030 (Year 5)</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-center text-lg">
            <span className="font-bold text-green-400">≈87% CAGR</span> • <span className="font-bold text-blue-400">Break-even by Year 4</span> • <span className="font-bold text-purple-400">64% Net Margin</span> by Year 5
          </p>
          <p className="text-center text-sm text-gray-400 mt-2">
            <span className="font-bold text-orange-400">USD $2M Seed Funding</span> • <span className="font-bold text-yellow-400">170% ROI</span> by Year 5
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
        <h4 className="font-bold text-gray-800 mb-6 text-xl">FY 2030 (Year 5) Revenue Breakdown</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold">Revenue Stream</th>
                <th className="text-right p-4 font-semibold">Amount</th>
                <th className="text-right p-4 font-semibold">% of Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold text-blue-700">Booking Commissions</td>
                <td className="p-4 text-right">$4,420,000</td>
                <td className="p-4 text-right">52.0%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-green-700">Garage Subscriptions</td>
                <td className="p-4 text-right">$680,000</td>
                <td className="p-4 text-right">8.0%</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-yellow-700">CarCare Wallet & Fintech</td>
                <td className="p-4 text-right">$510,000</td>
                <td className="p-4 text-right">6.0%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-orange-700">Franchise & Assets</td>
                <td className="p-4 text-right">$595,000</td>
                <td className="p-4 text-right">7.0%</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-purple-700">Featured Listings & Ads</td>
                <td className="p-4 text-right">$340,000</td>
                <td className="p-4 text-right">4.0%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-indigo-700">Data & Insights Licensing</td>
                <td className="p-4 text-right">$255,000</td>
                <td className="p-4 text-right">3.0%</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-red-700">Value-Added Services</td>
                <td className="p-4 text-right">$425,000</td>
                <td className="p-4 text-right">5.0%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-pink-700">Jobs Marketplace</td>
                <td className="p-4 text-right">$170,000</td>
                <td className="p-4 text-right">2.0%</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-indigo-700">CareChart AI Premium</td>
                <td className="p-4 text-right">$595,000</td>
                <td className="p-4 text-right">7.0%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-teal-700">EV & Fleet Specialization</td>
                <td className="p-4 text-right">$510,000</td>
                <td className="p-4 text-right">6.0%</td>
              </tr>
              <tr className="bg-green-50 border-t-2 border-green-500">
                <td className="p-4 font-bold text-green-800">Total Revenue</td>
                <td className="p-4 text-right font-bold text-green-700 text-lg">$8,500,000</td>
                <td className="p-4 text-right font-bold text-green-700">100.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Conservative revenue projections based on 120K users by 2028, 2,000+ active garages, and 35,000+ monthly bookings. 
            The $8.5M target represents only 0.03% of the $26-30B Canadian automotive services market, demonstrating significant growth potential. 
            AI and EV revenue streams are now standalone categories reflecting their substantial market opportunity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueModel;
