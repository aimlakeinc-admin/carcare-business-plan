import React from 'react';
import { Users, Briefcase, Car, X, Target } from 'lucide-react';

const ProblemDefinition = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Problem Definition</h2>
        <p className="text-xl text-red-100">Addressing Critical Pain Points Across the Industry</p>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-red-800 mb-4">Industry Challenge</h3>
        <p className="text-gray-700 leading-relaxed">
          Acquiring services for automobiles can be challenging. Locating services, understanding problems, and lacking knowledge regarding resources and pricing makes the process difficult, time-consuming, and inefficient for consumers, businesses, and service providers alike.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-blue-500 text-white p-4">
            <div className="flex items-center">
              <Users className="w-8 h-8 mr-3" />
              <h3 className="font-bold text-lg">Individual Consumers</h3>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Difficulty Finding Qualified Mechanics</p>
                  <p className="text-sm text-gray-600">Limited resources to search for certified professionals</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Expensive Costs</p>
                  <p className="text-sm text-gray-600">High labor, taxes, and parts costs without transparency</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Long Wait Times</p>
                  <p className="text-sm text-gray-600">Inconvenient delays before service completion</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Lack of Transparency</p>
                  <p className="text-sm text-gray-600">Unclear estimates and pricing structures</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Risk of Overcharging</p>
                  <p className="text-sm text-gray-600">No standardized pricing leads to exploitation</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Poor Customer Service</p>
                  <p className="text-sm text-gray-600">Inadequate communication and support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-green-500 text-white p-4">
            <div className="flex items-center">
              <Briefcase className="w-8 h-8 mr-3" />
              <h3 className="font-bold text-lg">Businesses & Fleets</h3>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Increased Downtime</p>
                  <p className="text-sm text-gray-600">Delays in logistics and supply chain</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Ineffective Resource Management</p>
                  <p className="text-sm text-gray-600">Lack of timely maintenance</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">High Third-Party Costs</p>
                  <p className="text-sm text-gray-600">Expensive outsourced repairs</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Staffing Challenges</p>
                  <p className="text-sm text-gray-600">Difficulty managing repair staff</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Safety Risks</p>
                  <p className="text-sm text-gray-600">Increased accidents from faulty repairs</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Customer Dissatisfaction</p>
                  <p className="text-sm text-gray-600">Unable to provide timely services</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-purple-500 text-white p-4">
            <div className="flex items-center">
              <Car className="w-8 h-8 mr-3" />
              <h3 className="font-bold text-lg">Garages & Mechanics</h3>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Parts Sourcing Challenges</p>
                  <p className="text-sm text-gray-600">Difficulty finding parts for older models</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Hiring & Retention</p>
                  <p className="text-sm text-gray-600">Challenges finding qualified mechanics</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Customer Reluctance</p>
                  <p className="text-sm text-gray-600">Expensive repairs deter customers</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Technology Gap</p>
                  <p className="text-sm text-gray-600">Keeping up with rapid advancements</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Limited Digital Presence</p>
                  <p className="text-sm text-gray-600">Struggling to market effectively</p>
                </div>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800">Regulatory Compliance</p>
                  <p className="text-sm text-gray-600">Complex environmental standards</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
        <h3 className="font-bold text-yellow-900 mb-3 text-xl flex items-center">
          <Target className="w-6 h-6 mr-2" />
          Market Gap Opportunity
        </h3>
        <p className="text-gray-700 leading-relaxed">
          The Canadian automotive service industry lacks a unified digital platform that provides transparency, convenience, and trust for all stakeholders. CarCare addresses this <strong>$23 billion dollar market opportunity</strong> by creating a comprehensive ecosystem that benefits consumers, businesses, and service providers simultaneously.
        </p>
      </div>
    </div>
  );
};

export default ProblemDefinition;
