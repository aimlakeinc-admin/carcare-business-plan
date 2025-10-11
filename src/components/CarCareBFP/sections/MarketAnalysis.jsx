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
          <p className="text-4xl font-bold mb-2">$500B</p>
          <p className="text-sm text-blue-100">Total Addressable Market</p>
          <p className="text-xs mt-2">2024 Global automotive services market value</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-2">SAM</h4>
          <p className="text-4xl font-bold mb-2">$700B</p>
          <p className="text-sm text-green-100">Serviceable Addressable</p>
          <p className="text-xs mt-2">2033 Forecasted market value with 4.5% CAGR</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <h4 className="font-bold text-xl mb-2">SOM</h4>
          <p className="text-4xl font-bold mb-2">$7.66M</p>
          <p className="text-sm text-purple-100">Serviceable Obtainable</p>
          <p className="text-xs mt-2">0.059% penetration by Year 3</p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Market Trends & Opportunities</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                Technology Disruption
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Digital transformation of booking systems</li>
                <li>• Demand for transparent pricing</li>
                <li>• Mobile-first expectations</li>
                <li>• AI-powered diagnostics</li>
                <li>• IoT vehicle monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <Car className="w-5 h-5 text-green-500 mr-2" />
                EV Revolution
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Rapid EV adoption across Canada</li>
                <li>• New service requirements</li>
                <li>• Reduced traditional maintenance</li>
                <li>• Specialized EV centers</li>
                <li>• Smart grid integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Competitive Landscape</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">National Chains</h4>
            <p className="text-sm text-gray-600 mb-2"><strong>Strengths:</strong> Brand recognition, multiple locations</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Weaknesses:</strong> Higher prices, slower service</p>
            <p className="text-sm"><strong>Market Share:</strong> 60%+</p>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">Independent Garages</h4>
            <p className="text-sm text-gray-600 mb-2"><strong>Strengths:</strong> Personalized service, competitive pricing</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Weaknesses:</strong> Limited digital presence, trust issues</p>
            <p className="text-sm"><strong>Market Share:</strong> ~40%</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
        <h4 className="font-bold text-xl mb-4">CarCare's Competitive Advantages</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Technology leadership with AI & fintech</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Network effect from unified platform</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Lower costs, higher trust</span>
          </div>
          <div className="flex items-start">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Better convenience than dealerships</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
