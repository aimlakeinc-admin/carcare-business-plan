import React from 'react';
import { ChevronRight, CheckCircle, Zap } from 'lucide-react';

const ExecutiveSummary = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Executive Summary</h2>
        <p className="text-xl text-blue-100">AI-Powered Digital Platform Transforming Automotive Services</p>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          As we advance into an increasingly automated society, CarCare 24×7 emerges as a revolutionary startup offering a comprehensive and convenient solution to servicing and repairing automobiles in Canada. Our mobile app provides customers with the ability to order a variety of services anytime and anywhere, including oil changes, tire rotations, brake inspections, and much more. Through advanced technology and expert mechanics, CarCare's services are fast, reliable, and cost-effective.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg shadow">
          <h3 className="font-bold text-green-800 mb-2 text-lg">Market Opportunity</h3>
          <p className="text-3xl font-bold text-green-600 mb-2">$500B+</p>
          <p className="text-sm text-gray-700">Global Auto Service Market</p>
          <p className="text-xs text-gray-600 mt-2">2024 Market Value: $500B. 2033 Forecast: $700B with 4.5% CAGR from 2026-2033</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg shadow">
          <h3 className="font-bold text-blue-800 mb-2 text-lg">Revenue Growth</h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">$7.6M</p>
          <p className="text-sm text-gray-700">By FY 2028 (Year 3)</p>
          <p className="text-xs text-gray-600 mt-2">175% CAGR with 70% net profit margin demonstrating exceptional scalability</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg shadow">
          <h3 className="font-bold text-purple-800 mb-2 text-lg">Network Scale</h3>
          <p className="text-3xl font-bold text-purple-600 mb-2">2,000+</p>
          <p className="text-sm text-gray-700">Active Garages by 2028</p>
          <p className="text-xs text-gray-600 mt-2">From 150 initial partners to nationwide coverage across 5+ provinces</p>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <Zap className="w-8 h-8 text-yellow-500 mr-3" />
          Core Value Proposition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-3">What We Do</h4>
            <p className="text-gray-700 mb-4">
              CarCare 24×7 is a comprehensive digital platform that connects vehicle owners with certified automotive repair and servicing facilities across Canada. We combine AI-driven predictive maintenance, transparent pricing, secure fintech payments, and real-time service tracking.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Why We're Different</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>First integrated fintech wallet for automotive services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>AI-powered predictive maintenance (CareChart)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Complete ecosystem for garages, consumers, and businesses</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">10 Core Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Automate booking of car repair and maintenance',
            'Detailed service information and comparison',
            'Connect customers with reliable mechanics',
            'Track vehicle service history',
            'Provide reminders for upcoming services',
            'Electronic payment processing',
            'Real-time work progress updates',
            'Car care tips and advice',
            'Rewards program for loyalty',
            'AI-driven predictive maintenance'
          ].map((service, idx) => (
            <div key={idx} className="flex items-start bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3">
              <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{service}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Expected Market Demand</h3>
        <p className="text-gray-700 mb-4">
          The demand for the CarCare app is expected to be high due to numerous consumer benefits:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm font-bold">1</div>
            <div>
              <p className="font-semibold text-gray-800">Price Discovery & Comparison</p>
              <p className="text-sm text-gray-600">Consumers can compare prices and services to find the best fit for their needs</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm font-bold">2</div>
            <div>
              <p className="font-semibold text-gray-800">Convenience & Time Savings</p>
              <p className="text-sm text-gray-600">Book appointments and make payments online, saving valuable time and effort</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm font-bold">3</div>
            <div>
              <p className="font-semibold text-gray-800">Industry Knowledge Access</p>
              <p className="text-sm text-gray-600">Up-to-date information on automotive trends, new models, and safety features</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
