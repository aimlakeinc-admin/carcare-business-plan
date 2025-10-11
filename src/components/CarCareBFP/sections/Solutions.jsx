import React from 'react';
import { ChevronRight, CheckCircle, Users, Briefcase, Car } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Objectives & Solutions</h2>
        <p className="text-xl text-green-100">Comprehensive Platform for All Stakeholders</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Mission Statement</h3>
        <p className="text-lg text-gray-700 italic leading-relaxed">
          "To provide Canadians with an online platform to access reliable, quality automobile repair and servicing facilities with convenience, transparency and affordability. We strive to create an ecosystem where car owners can find the best repair and servicing solutions available and have complete control over the price and service they receive."
        </p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Comprehensive Solution</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          CarCare is a comprehensive platform which connects all automobile repair and servicing facilities across Canada, bringing them under a single platform and offering customers an unprecedented level of convenience and transparency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-bold text-blue-900 mb-4 text-lg">Key Solutions Delivered</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">AI-based resource application for technical assistance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">All-inclusive services for any automobile type</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Platform for mechanics to become effective & independent</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Transparent quoted pricing for all services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Smooth user interface for easy service acquisition</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Personalized packages based on AI integration</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Performance-based benefits and rewards</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg">
              <h5 className="font-bold mb-2">For Consumers</h5>
              <p className="text-sm">Easy access, transparent pricing, automated reminders, 24/7 support</p>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg">
              <h5 className="font-bold mb-2">For Businesses</h5>
              <p className="text-sm">Fleet management, diagnostics, mileage tracking, claims assistance</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
              <h5 className="font-bold mb-2">For Garages</h5>
              <p className="text-sm">Increased visibility, cost savings, automated scheduling, loyalty building</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="font-bold text-xl text-gray-800 mb-3">Consumer Benefits</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">24/7 service availability</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Transparent pricing comparison</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Automated service reminders</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Real-time progress tracking</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Briefcase className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="font-bold text-xl text-gray-800 mb-3">Business Benefits</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Fleet maintenance optimization</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Reduced operational downtime</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Cost-effective service solutions</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Comprehensive reporting tools</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <Car className="w-8 h-8 text-purple-600" />
          </div>
          <h4 className="font-bold text-xl text-gray-800 mb-3">Garage Benefits</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Increased customer reach</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Streamlined booking system</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Digital payment processing</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span className="text-sm">Customer relationship management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
