import React from 'react';
import { Users, DollarSign, Briefcase, Target } from 'lucide-react';

const Resources = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Resources & Requirements</h2>
        <p className="text-xl text-cyan-100">Human Capital, Technology Infrastructure & Financial Resources</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-900">Human Resources</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Core Team (Year 1)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 3 Executive Founders: CEO, COO, CTO</li>
                <li>• 3 Software Developers: Frontend + Backend</li>
                <li>• 1 UI/UX Designer</li>
                <li>• 1 Marketing Specialist - Aimlake Inc. (CAD $70,000/y)</li>
                <li>• 1 Customer Support Representative</li>
                <li>• 1 Operations Coordinator</li>
                <li>• 2–3 On-Field Associates: Garage acquisition & partner management</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Expansion (Year 2-5)</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-green-700 text-xs mb-1">YEAR 2 (12-15 total staff)</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 2 Additional Software Developers (5 total)</li>
                    <li>• 1 Data Scientist</li>
                    <li>• 2 Sales Representatives</li>
                    <li>• 1 Customer Success Manager</li>
                    <li>• 1 Finance Manager</li>
                    <li>• 1 HR Specialist</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-green-700 text-xs mb-1">YEAR 3 (20-25 total staff)</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 3 Additional Developers (8 total)</li>
                    <li>• 1 DevOps Engineer</li>
                    <li>• 2 Data Scientists (3 total)</li>
                    <li>• 2 Additional Sales Reps (4 total)</li>
                    <li>• 1 Marketing Manager</li>
                    <li>• 2 Regional Operations Managers</li>
                    <li>• 1 Legal Counsel</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-green-700 text-xs mb-1">YEAR 4-5 (35-45 total staff)</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 5 Additional Developers (13 total)</li>
                    <li>• 2 AI/ML Engineers</li>
                    <li>• 1 Security Specialist</li>
                    <li>• 3 Regional Sales Managers</li>
                    <li>• 2 Business Development Managers</li>
                    <li>• 1 Chief Marketing Officer</li>
                    <li>• 1 Chief Financial Officer</li>
                    <li>• 5-8 Additional On-Field Associates</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-green-200">
                  <h5 className="font-semibold text-green-800 text-sm mb-2">Total Manpower Summary</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 1:</span> 11-13 staff
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 2:</span> 12-15 staff
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 3:</span> 20-25 staff
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 4-5:</span> 35-45 staff
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Briefcase className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-xl font-bold text-green-900">Technology Infrastructure</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Cloud Infrastructure</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• AWS Cloud Services</li>
                <li>• Supabase Database</li>
                <li>• CDN & Edge Computing</li>
                <li>• Security & Compliance Tools</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Development Tools</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• React Native Mobile Apps</li>
                <li>• Node.js Backend Services</li>
                <li>• AI/ML Analytics Platform</li>
                <li>• Payment Processing (Stripe)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <DollarSign className="w-8 h-8 text-purple-600 mr-3" />
            <h3 className="text-xl font-bold text-purple-900">Financial Resources</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Year 1 Funding (11-13 staff)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Seed Round: $500K</li>
                <li>• Founder Investment: $200K</li>
                <li>• Government Grants: $100K</li>
                <li>• Staffing Costs: ~$400K</li>
                <li>• Total: $800K</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Year 2 Funding (12-15 staff)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Series A: $1.2M</li>
                <li>• Revenue Reinvestment: $300K</li>
                <li>• Staffing Costs: ~$600K</li>
                <li>• Total: $1.5M</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Year 3 Funding (20-25 staff)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Series A Extension: $2M</li>
                <li>• Strategic Partnerships: $500K</li>
                <li>• Revenue Reinvestment: $800K</li>
                <li>• Staffing Costs: ~$1.2M</li>
                <li>• Total: $2.5M</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Year 4-5 Funding (35-45 staff)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Series B: $5M</li>
                <li>• Revenue Reinvestment: $2M</li>
                <li>• Staffing Costs: ~$2.5M</li>
                <li>• Total: $7.5M</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Target className="w-8 h-8 mr-3" />
          Key Resource Requirements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Technology Development</h4>
              <p className="text-sm">Mobile apps, web platform, AI analytics, payment systems</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Marketing & Customer Acquisition</h4>
              <p className="text-sm">Digital marketing, partnerships, referral programs</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Operations & Support</h4>
              <p className="text-sm">Customer service, quality assurance, compliance</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Legal & Regulatory</h4>
              <p className="text-sm">Business licenses, insurance, data protection compliance</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Partnership Development</h4>
              <p className="text-sm">Garage onboarding, payment processing, data licensing</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Infrastructure & Security</h4>
              <p className="text-sm">Cloud hosting, cybersecurity, backup systems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-blue-900 mb-3 text-xl">Resource Allocation Strategy</h3>
        <p className="text-gray-700 leading-relaxed">
          CarCare 24×7 will strategically allocate resources across technology development (40%), marketing and customer acquisition (30%), operations and support (20%), and legal/regulatory compliance (10%). This balanced approach ensures sustainable growth while maintaining high-quality service delivery and regulatory compliance across all markets.
        </p>
      </div>
    </div>
  );
};

export default Resources;
