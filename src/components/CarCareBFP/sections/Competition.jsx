import React from 'react';
import { Shield, TrendingUp, Target, CheckCircle } from 'lucide-react';

const Competition = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Competition Analysis</h2>
        <p className="text-xl text-orange-100">Market Positioning & Competitive Advantages</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-900">Direct Competitors</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800">National Service Chains</h4>
              <p className="text-sm text-gray-700 mb-2">Canadian Tire, Jiffy Lube, Midas</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Strengths: Brand recognition, multiple locations</li>
                <li>• Weaknesses: Higher prices, slower service</li>
                <li>• Market Share: 60%+</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">Independent Garages</h4>
              <p className="text-sm text-gray-700 mb-2">Local repair shops, family businesses</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Strengths: Personalized service, competitive pricing</li>
                <li>• Weaknesses: Limited digital presence, trust issues</li>
                <li>• Market Share: ~40%</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-bold text-green-900">Indirect Competitors</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800">Dealerships</h4>
              <p className="text-sm text-gray-700 mb-2">OEM service centers</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Strengths: Manufacturer warranty, specialized tools</li>
                <li>• Weaknesses: Expensive, limited hours</li>
                <li>• Market Share: 15-20%</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800">Mobile Services</h4>
              <p className="text-sm text-gray-700 mb-2">At-home repair services</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Strengths: Convenience, on-site service</li>
                <li>• Weaknesses: Limited scope, weather dependent</li>
                <li>• Market Share: 5-10%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Target className="w-8 h-8 mr-3" />
          CarCare's Competitive Advantages
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Technology leadership with AI & fintech integration</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Network effect from unified platform ecosystem</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Lower operational costs with higher trust factor</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Better convenience than traditional dealerships</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">Transparent pricing and quality guarantees</span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">First-mover advantage in Canadian market</span>
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
