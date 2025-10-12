import React from 'react';
import { Zap } from 'lucide-react';

const BusinessProcess = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Business Process</h2>
        <p className="text-xl text-indigo-100">Strategic Operations Framework for Ecosystem Success</p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Process Overview</h3>
        <p className="text-gray-700 leading-relaxed">
          CarCare's business process creates a seamless ecosystem connecting vehicle owners, automotive service facilities, and skilled professionals through a technology-driven platform.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6">
            <h3 className="text-xl font-bold text-blue-900 flex items-center">
              <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold">1</div>
              Platform Development & Infrastructure
            </h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              <strong>Objective:</strong> Establish a robust digital platform where all repair and servicing facilities in Canada can be listed and accessed by consumers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">AI-Based Algorithm</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Intelligent matching by location & vehicle type</li>
                  <li>• Predictive maintenance scheduling</li>
                  <li>• Dynamic pricing recommendations</li>
                  <li>• Real-time availability tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Technology Stack</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Cloud: AWS & Supabase</li>
                  <li>• Payments: Stripe & Interac</li>
                  <li>• AI/ML: Predictive analytics</li>
                  <li>• Mobile: Native iOS & Android</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-green-500 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6">
            <h3 className="text-xl font-bold text-green-900 flex items-center">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold">2</div>
              Facility Recruitment & Onboarding
            </h3>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">3-Phase Onboarding Process</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">1</span>
                  <div>
                    <p className="font-semibold text-gray-800">Registration & Verification (Week 1)</p>
                    <p className="text-sm text-gray-600">License verification, insurance review, mechanic qualification checks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">2</span>
                  <div>
                    <p className="font-semibold text-gray-800">Platform Integration (Week 2)</p>
                    <p className="text-sm text-gray-600">Account setup, service catalog, pricing configuration, payment integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 text-sm">3</span>
                  <div>
                    <p className="font-semibold text-gray-800">Training & Launch (Week 3-4)</p>
                    <p className="text-sm text-gray-600">Platform training, quality standards review, test bookings, official launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-l-4 border-purple-500 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6">
            <h3 className="text-xl font-bold text-purple-900 flex items-center">
              <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold">3</div>
              Consumer Interaction & Engagement
            </h3>
          </div>
          <div className="p-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">4-Step Consumer Journey</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <p className="font-semibold text-purple-900">Discovery</p>
                  <p className="text-xs text-gray-600 mt-1">Browse & compare</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <p className="font-semibold text-purple-900">Booking</p>
                  <p className="text-xs text-gray-600 mt-1">Select & schedule</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <p className="font-semibold text-purple-900">Service</p>
                  <p className="text-xs text-gray-600 mt-1">Real-time updates</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <p className="font-semibold text-purple-900">Payment</p>
                  <p className="text-xs text-gray-600 mt-1">Secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Value Creation Functions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Convenience</p>
            <p className="text-sm">24/7 booking & tracking</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Cost Savings</p>
            <p className="text-sm">Transparent pricing</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Quality</p>
            <p className="text-sm">Certified technicians</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Transparency</p>
            <p className="text-sm">Clear pricing & reviews</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Security</p>
            <p className="text-sm">Encrypted transactions</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Loyalty</p>
            <p className="text-sm">Rewards program</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcess;
