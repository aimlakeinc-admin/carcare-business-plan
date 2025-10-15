import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductsAndServices = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Products & Services</h2>
        <p className="text-xl text-indigo-100">Integrated Ecosystem Architecture - Three synchronized application layers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-300 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-blue-500 text-white p-4">
            <h4 className="font-bold text-lg">Torqon (Client App)</h4>
            <p className="text-sm text-blue-100">For Vehicle Owners</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Service search & comparison</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Real-time booking & quotes</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Digital wallet & payments</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Service history tracking</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>CareChart AI predictions</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Loyalty rewards program</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-semibold text-gray-600">Revenue Links:</p>
              <p className="text-xs text-gray-600">Commissions • Wallet Fees • VAS Add-ons</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-green-300 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-green-500 text-white p-4">
            <h4 className="font-bold text-lg">Torqon Wrench (Garage OS)</h4>
            <p className="text-sm text-green-100">For Service Providers</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Job management dashboard</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Performance analytics</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Automated payouts</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Inventory management</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Customer communication</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Promotional tools</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-semibold text-gray-600">Revenue Links:</p>
              <p className="text-xs text-gray-600">Subscriptions • Ads • Jobs Marketplace</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-300 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-purple-500 text-white p-4">
            <h4 className="font-bold text-lg">Super Admin Portal</h4>
            <p className="text-sm text-purple-100">For HQ Operations</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Platform monitoring</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Revenue tracking (GMV)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Settlement automation</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Ad inventory management</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>CRM & user analytics</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Compliance reporting</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-semibold text-gray-600">Revenue Links:</p>
              <p className="text-xs text-gray-600">Governance • Reporting • Data Licensing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Key Technology Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">CareChart AI Engine</h4>
            <p className="text-sm text-gray-700 mb-2">Predictive maintenance using machine learning to analyze:</p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• Vehicle mileage patterns</li>
              <li>• Service history data</li>
              <li>• Manufacturer recommendations</li>
              <li>• Seasonal maintenance needs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">CarCare Wallet</h4>
            <p className="text-sm text-gray-700 mb-2">Integrated fintech solution providing:</p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• Secure payment processing</li>
              <li>• Savings vault for future maintenance</li>
              <li>• Cashback and rewards</li>
              <li>• Float-based interest generation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-3">Value Creation Chain</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Convenience</p>
            <p className="text-sm">24/7 booking & tracking</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Cost Savings</p>
            <p className="text-sm">Competitive pricing</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Quality</p>
            <p className="text-sm">Certified technicians</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Transparency</p>
            <p className="text-sm">Real-time AI data-driven clear pricing & reviews</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Security</p>
            <p className="text-sm">Encrypted transactions</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Loyalty</p>
            <p className="text-sm">Rewards program</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
