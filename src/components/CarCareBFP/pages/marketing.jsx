import React from 'react';
import { Calendar, Target, Users, DollarSign } from 'lucide-react';

const MarketingPage = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Marketing Strategy</h2>
        <p className="text-xl text-pink-100">Digital-First Customer Acquisition & Brand Building</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-900">Customer Acquisition</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Digital Marketing</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Google Ads & SEO optimization</li>
                <li>• Social media campaigns (Facebook, Instagram)</li>
                <li>• Content marketing & automotive blogs</li>
                <li>• Influencer partnerships</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Referral Programs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Customer referral bonuses</li>
                <li>• Garage partnership incentives</li>
                <li>• Corporate fleet programs</li>
                <li>• Insurance company partnerships</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-bold text-green-900">Brand Building</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Community Engagement</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Automotive events & trade shows</li>
                <li>• Educational workshops</li>
                <li>• Local business partnerships</li>
                <li>• Customer success stories</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">PR & Media</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Industry press releases</li>
                <li>• Thought leadership articles</li>
                <li>• Podcast appearances</li>
                <li>• Award submissions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Marketing Budget Allocation</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-bold mb-2">Digital Marketing</h4>
            <p className="text-2xl font-bold">40%</p>
            <p className="text-sm">$2.5M over 3 years</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-bold mb-2">Partnerships</h4>
            <p className="text-2xl font-bold">25%</p>
            <p className="text-sm">$1.6M over 3 years</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-bold mb-2">Events & PR</h4>
            <p className="text-2xl font-bold">20%</p>
            <p className="text-sm">$1.2M over 3 years</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <h4 className="font-bold mb-2">Referral Programs</h4>
            <p className="text-2xl font-bold">15%</p>
            <p className="text-sm">$900K over 3 years</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
        <h3 className="font-bold text-yellow-900 mb-3 text-xl">Marketing Success Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Customer Acquisition</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• CAC: &lt;$50 per customer</li>
              <li>• LTV:CAC ratio &gt; 5:1</li>
              <li>• Monthly active users growth</li>
              <li>• Customer retention rate &gt; 80%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Brand Awareness</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Brand recognition surveys</li>
              <li>• Social media engagement rates</li>
              <li>• Website traffic & conversions</li>
              <li>• Search ranking improvements</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Partnership Growth</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Garage onboarding rate</li>
              <li>• Partner satisfaction scores</li>
              <li>• Revenue per partnership</li>
              <li>• Partnership retention rate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
