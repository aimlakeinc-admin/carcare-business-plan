import React from 'react';
import { Globe, TrendingUp, Users, DollarSign } from 'lucide-react';

const EconomicImpact = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Economic Impact</h2>
        <p className="text-xl text-green-100">Job Creation, GDP Contribution & Industry Transformation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 mr-3" />
            <h4 className="font-bold text-xl">Job Creation</h4>
          </div>
          <p className="text-4xl font-bold mb-2">365+</p>
          <p className="text-sm text-blue-100">Direct Jobs by 2030</p>
          <p className="text-xs mt-2">Software engineers, customer support, operations staff</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <DollarSign className="w-8 h-8 mr-3" />
            <h4 className="font-bold text-xl">GDP Contribution</h4>
          </div>
          <p className="text-4xl font-bold mb-2">$41.8M+</p>
          <p className="text-sm text-green-100">Annual Economic Impact</p>
          <p className="text-xs mt-2">Direct revenue + multiplier effects</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-8 h-8 mr-3" />
            <h4 className="font-bold text-xl">Industry Efficiency</h4>
          </div>
          <p className="text-4xl font-bold mb-2">25%</p>
          <p className="text-sm text-purple-100">Cost Reduction</p>
          <p className="text-xs mt-2">For consumers through transparent pricing</p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Economic Benefits by Stakeholder</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3 text-lg">Consumers</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• $50M+ in annual savings through transparent pricing</li>
              <li>• 30% reduction in service wait times</li>
              <li>• Improved vehicle safety and reliability</li>
              <li>• Access to quality service in underserved areas</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3 text-lg">Garages & Mechanics</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 40% increase in customer reach</li>
              <li>• 20% improvement in operational efficiency</li>
              <li>• Reduced marketing costs by 60%</li>
              <li>• Better cash flow through digital payments</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-3 text-lg">Local Communities</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Support for small business growth</li>
              <li>• Increased tax revenue for municipalities</li>
              <li>• Reduced environmental impact through efficiency</li>
              <li>• Technology skills development</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Long-term Economic Vision</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-3 text-lg">By 2030</h4>
            <ul className="space-y-2 text-sm">
              <li>• 111 direct employees (core team)</li>
              <li>• 150 employees (Fast Track Smart Garages)</li>
              <li>• 261 total employees across Canada</li>
              <li>• $104.4M annual revenue contribution</li>
              <li>• 10,000+ garage partnerships</li>
              <li>• 500,000+ active users</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-lg">Industry Transformation</h4>
            <ul className="space-y-2 text-sm">
              <li>• Digital-first automotive service ecosystem</li>
              <li>• AI-powered predictive maintenance standards</li>
              <li>• Integrated fintech solutions</li>
              <li>• Sustainable service practices</li>
              <li>• 50 Fast Track Smart Garage assets</li>
              <li>• $9M CAD total salary for garage employees</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
        <h3 className="font-bold text-yellow-900 mb-3 text-xl flex items-center">
          <Globe className="w-6 h-6 mr-2" />
          Environmental & Social Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Environmental Benefits</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Reduced vehicle emissions through better maintenance</li>
              <li>• Optimized routing reduces travel time</li>
              <li>• Digital-first approach reduces paper waste</li>
              <li>• Promotion of EV services and infrastructure</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Social Benefits</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Increased accessibility to quality automotive services</li>
              <li>• Support for small business owners and entrepreneurs</li>
              <li>• Job creation in technology and service sectors</li>
              <li>• Improved road safety through better vehicle maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicImpact;
