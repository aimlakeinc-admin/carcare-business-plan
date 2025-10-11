import React from 'react';
import { Shield, AlertTriangle, CheckCircle, TrendingDown } from 'lucide-react';

const RiskAnalysis = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Risk Analysis</h2>
        <p className="text-xl text-red-100">Risk Assessment, Mitigation Strategies & Contingency Planning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-xl font-bold text-red-900">High-Risk Factors</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Market Competition</h4>
              <p className="text-sm text-gray-700 mb-2">Large incumbents entering digital space</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> High • <strong>Probability:</strong> Medium</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Regulatory Changes</h4>
              <p className="text-sm text-gray-700 mb-2">New automotive service regulations</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> High • <strong>Probability:</strong> Low</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Technology Disruption</h4>
              <p className="text-sm text-gray-700 mb-2">Rapid technological changes in automotive</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> High • <strong>Probability:</strong> Medium</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <TrendingDown className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-xl font-bold text-yellow-900">Medium-Risk Factors</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Customer Adoption</h4>
              <p className="text-sm text-gray-700 mb-2">Slower than expected user growth</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Medium • <strong>Probability:</strong> Medium</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Garage Partnership</h4>
              <p className="text-sm text-gray-700 mb-2">Difficulty recruiting quality garages</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Medium • <strong>Probability:</strong> Low</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Economic Downturn</h4>
              <p className="text-sm text-gray-700 mb-2">Reduced consumer spending on services</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Medium • <strong>Probability:</strong> Low</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Shield className="w-8 h-8 mr-3" />
          Risk Mitigation Strategies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Competitive Advantage</h4>
              <p className="text-sm">Continuous innovation, first-mover advantage, network effects</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Diversified Revenue</h4>
              <p className="text-sm">8 revenue streams reduce dependency on single source</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Technology Investment</h4>
              <p className="text-sm">Regular R&D, AI/ML capabilities, scalable architecture</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Quality Assurance</h4>
              <p className="text-sm">Rigorous garage vetting, customer feedback systems</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Financial Reserves</h4>
              <p className="text-sm">Strong cash position, diversified funding sources</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Regulatory Compliance</h4>
              <p className="text-sm">Proactive legal review, industry partnerships</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contingency Planning</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">Scenario 1: Slow Growth</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Extend runway with additional funding</li>
              <li>• Focus on high-value markets</li>
              <li>• Reduce marketing spend</li>
              <li>• Optimize operational efficiency</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3">Scenario 2: Increased Competition</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Accelerate product development</li>
              <li>• Strengthen partner relationships</li>
              <li>• Enhance customer experience</li>
              <li>• Consider strategic partnerships</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-3">Scenario 3: Market Disruption</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Pivot to new service models</li>
              <li>• Leverage existing technology assets</li>
              <li>• Explore adjacent markets</li>
              <li>• Consider acquisition opportunities</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 className="font-bold text-green-900 mb-3 text-xl flex items-center">
          <CheckCircle className="w-6 h-6 mr-2" />
          Risk Management Success Factors
        </h3>
        <p className="text-gray-700 leading-relaxed">
          CarCare 24×7 maintains a proactive risk management approach through continuous monitoring, regular scenario planning, and adaptive strategy implementation. Our diversified business model, strong financial position, and focus on customer value creation provide multiple layers of protection against market uncertainties while positioning us for sustainable long-term growth.
        </p>
      </div>
    </div>
  );
};

export default RiskAnalysis;
