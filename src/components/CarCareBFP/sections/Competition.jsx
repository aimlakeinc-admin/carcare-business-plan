import React from 'react';
import { Shield, TrendingUp, Target, CheckCircle } from 'lucide-react';

const Competition = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Competition Analysis</h2>
        <p className="text-xl text-orange-100">Market Positioning & Competitive Advantages</p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Competitive Analysis</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Competitor</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-800">Weakness</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-800">AutoTrader</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Classifieds / Listing</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">No booking or service tracking</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-green-800">Mr. Lube</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Chain Service</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Limited to own branches</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-purple-800">Canadian Tire Auto</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Retail Service</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">No digital convenience or comparison</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold text-orange-800">Local Garages</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Independent</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Lack digital presence, variable quality</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Target className="w-8 h-8 mr-3" />
          CarCare Advantage
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
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
          </div>
          <div className="space-y-4">
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

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
        <h3 className="font-bold text-yellow-900 mb-3 text-xl">Market Opportunity</h3>
        <p className="text-gray-700 leading-relaxed">
          The Canadian automotive service industry lacks a unified digital platform that provides transparency, convenience, and trust for all stakeholders. CarCare addresses this <strong>$3.5 billion market opportunity</strong> by creating a comprehensive ecosystem that benefits consumers, businesses, and service providers simultaneously, positioning us as the market leader in digital automotive services.
        </p>
      </div>
    </div>
  );
};

export default Competition;
