import React from 'react';
import { ChevronRight } from 'lucide-react';

const FinancialProjections = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Financial Plan</h2>
        <p className="text-xl text-emerald-100">FY 2026-2030 - Toronto-Based Operations with Realistic Market Costs</p>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6">
          <h3 className="text-2xl font-bold">Seed Funding Requirements</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-xl mb-2">Seed Funding Required</h4>
              <p className="text-4xl font-bold mb-2">CAD $2.7M</p>
              <p className="text-sm text-blue-100">Seed round for MVP development, Toronto team building & market entry</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Use of Funds</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Technology development & AI integration</span>
                  <span className="font-bold text-blue-600">40%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">Staff salaries & benefits (Toronto rates)</span>
                  <span className="font-bold text-green-600">35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">Marketing & customer acquisition</span>
                  <span className="font-bold text-purple-600">15%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">Office space & operations (Toronto)</span>
                  <span className="font-bold text-orange-600">7%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Legal, licensing, compliance</span>
                  <span className="font-bold text-gray-600">3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gray-50 p-6 border-b">
          <h4 className="font-bold text-gray-800 text-xl">Income Statement Summary</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold">Metric</th>
                <th className="text-right p-4 font-semibold">FY 2026</th>
                <th className="text-right p-4 font-semibold">FY 2027</th>
                <th className="text-right p-4 font-semibold">FY 2028</th>
                <th className="text-right p-4 font-semibold">FY 2029</th>
                <th className="text-right p-4 font-semibold">FY 2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold text-blue-700">Total Revenue</td>
                <td className="p-4 text-right">CAD $405,000</td>
                <td className="p-4 text-right">CAD $1,620,000</td>
                <td className="p-4 text-right text-green-600 font-bold">CAD $3,780,000</td>
                <td className="p-4 text-right">CAD $7,425,000</td>
                <td className="p-4 text-right text-green-600 font-bold">CAD $16,200,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Staff Salaries (Toronto)</td>
                <td className="p-4 text-right">CAD $595,000</td>
                <td className="p-4 text-right">CAD $795,000</td>
                <td className="p-4 text-right">CAD $1,495,000</td>
                <td className="p-4 text-right">CAD $2,995,000</td>
                <td className="p-4 text-right">CAD $2,995,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Office & Operations</td>
                <td className="p-4 text-right">CAD $70,000</td>
                <td className="p-4 text-right">CAD $80,000</td>
                <td className="p-4 text-right">CAD $120,000</td>
                <td className="p-4 text-right">CAD $190,000</td>
                <td className="p-4 text-right">CAD $190,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Technology & Infrastructure</td>
                <td className="p-4 text-right">CAD $150,000</td>
                <td className="p-4 text-right">CAD $200,000</td>
                <td className="p-4 text-right">CAD $300,000</td>
                <td className="p-4 text-right">CAD $500,000</td>
                <td className="p-4 text-right">CAD $600,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Marketing & Sales</td>
                <td className="p-4 text-right">CAD $100,000</td>
                <td className="p-4 text-right">CAD $200,000</td>
                <td className="p-4 text-right">CAD $400,000</td>
                <td className="p-4 text-right">CAD $800,000</td>
                <td className="p-4 text-right">CAD $1,000,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Total Operating Costs</td>
                <td className="p-4 text-right font-bold">CAD $915,000</td>
                <td className="p-4 text-right font-bold">CAD $1,275,000</td>
                <td className="p-4 text-right font-bold">CAD $2,315,000</td>
                <td className="p-4 text-right font-bold">CAD $4,485,000</td>
                <td className="p-4 text-right font-bold">CAD $4,785,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Operating Profit (Loss)</td>
                <td className="p-4 text-right font-bold text-red-700">CAD -$510,000</td>
                <td className="p-4 text-right font-bold text-red-700">CAD $345,000</td>
                <td className="p-4 text-right font-bold text-green-600">CAD $1,465,000</td>
                <td className="p-4 text-right font-bold text-green-600">CAD $2,940,000</td>
                <td className="p-4 text-right font-bold text-green-600">CAD $11,415,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Other Expenses</td>
                <td className="p-4 text-right">CAD $50,000</td>
                <td className="p-4 text-right">CAD $100,000</td>
                <td className="p-4 text-right">CAD $150,000</td>
                <td className="p-4 text-right">CAD $200,000</td>
                <td className="p-4 text-right">CAD $300,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Tax (26.5% - Ontario)</td>
                <td className="p-4 text-right">CAD $0</td>
                <td className="p-4 text-right">CAD $0</td>
                <td className="p-4 text-right">CAD $0</td>
                <td className="p-4 text-right">CAD $0</td>
                <td className="p-4 text-right">CAD $2,950,000</td>
              </tr>
              <tr className="bg-green-50 border-t-2 border-green-500">
                <td className="p-4 font-bold text-green-800">Net Profit (Loss)</td>
                <td className="p-4 text-right font-bold text-red-700">CAD -$560,000</td>
                <td className="p-4 text-right font-bold text-red-700">CAD $245,000</td>
                <td className="p-4 text-right font-bold text-green-700 text-lg">CAD $1,315,000</td>
                <td className="p-4 text-right font-bold text-green-700 text-lg">CAD $2,740,000</td>
                <td className="p-4 text-right font-bold text-green-700 text-lg">CAD $8,165,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mb-8">
        <h4 className="font-bold text-gray-800 mb-6 text-xl">Toronto Salary Breakdown (Annual)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="font-semibold text-gray-700 mb-3">Year 1 Team (11-13 staff)</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>3 Executive Founders (CEO, COO, CTO)</span>
                <span className="font-semibold">$150,000</span>
              </div>
              <div className="flex justify-between">
                <span>3 Software Developers</span>
                <span className="font-semibold">$120,000</span>
              </div>
              <div className="flex justify-between">
                <span>1 UI/UX Designer</span>
                <span className="font-semibold">$20,000</span>
              </div>
              <div className="flex justify-between">
                <span>1 Marketing Specialist - Aimlake Inc.</span>
                <span className="font-semibold">$70,000</span>
              </div>
              <div className="flex justify-between">
                <span>1 Customer Support Rep</span>
                <span className="font-semibold">$50,000</span>
              </div>
              <div className="flex justify-between">
                <span>1 Operations Coordinator</span>
                <span className="font-semibold">$65,000</span>
              </div>
              <div className="flex justify-between">
                <span>2-3 On-Field Associates</span>
                <span className="font-semibold">$120,000</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total Year 1 Salaries</span>
                <span>$595,000</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-gray-700 mb-3">Year 5 Team (35-45 staff)</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>13 Software Developers</span>
                <span className="font-semibold">$1,170,000</span>
              </div>
              <div className="flex justify-between">
                <span>2 AI/ML Engineers</span>
                <span className="font-semibold">$200,000</span>
              </div>
              <div className="flex justify-between">
                <span>3 Regional Sales Managers</span>
                <span className="font-semibold">$300,000</span>
              </div>
              <div className="flex justify-between">
                <span>2 Business Development</span>
                <span className="font-semibold">$200,000</span>
              </div>
              <div className="flex justify-between">
                <span>1 CMO + 1 CFO</span>
                <span className="font-semibold">$200,000</span>
              </div>
              <div className="flex justify-between">
                <span>8-10 On-Field Associates</span>
                <span className="font-semibold">$500,000</span>
              </div>
              <div className="flex justify-between">
                <span>Support & Admin Staff</span>
                <span className="font-semibold">$830,000</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold">
                <span>Total Year 5 Salaries</span>
                <span>$2,975,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-blue-800 mb-2 text-lg">Break-Even Year</h4>
          <p className="text-4xl font-bold text-blue-600">Year 3</p>
          <p className="text-sm text-gray-600">Profitable by FY 2028</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-green-800 mb-2 text-lg">Net Margin</h4>
          <p className="text-4xl font-bold text-green-600">53%</p>
          <p className="text-sm text-gray-600">Net margin by Year 5</p>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-purple-800 mb-2 text-lg">Total Funding Needed</h4>
          <p className="text-4xl font-bold text-purple-600">CAD $3.8M</p>
          <p className="text-sm text-gray-600">Bridge to profitability</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mb-8">
        <h4 className="font-bold text-gray-800 mb-6 text-xl">Funding Timeline & Requirements</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Seed Round (Year 1)</h5>
              <p className="text-2xl font-bold text-blue-600">CAD $2.7M</p>
              <p className="text-sm text-gray-600">Covers initial development and team building</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Series A (Year 2)</h5>
              <p className="text-2xl font-bold text-green-600">CAD $1.1M</p>
              <p className="text-sm text-gray-600">Bridge to profitability</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-2">Series B (Year 4-5)</h5>
              <p className="text-2xl font-bold text-purple-600">CAD $0.0M</p>
              <p className="text-sm text-gray-600">Self-funded growth</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold text-orange-800 mb-2">Total Funding</h5>
              <p className="text-2xl font-bold text-orange-600">CAD $3.8M</p>
              <p className="text-sm text-gray-600">Bridge to Year 3 profitability</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
        <h4 className="font-bold text-gray-800 mb-6 text-xl">Key Operating Metrics</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Metric</th>
                <th className="text-right p-4">FY 2026</th>
                <th className="text-right p-4">FY 2027</th>
                <th className="text-right p-4">FY 2028</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Registered Users</td>
                <td className="p-4 text-right">8,000</td>
                <td className="p-4 text-right">24,000</td>
                <td className="p-4 text-right font-bold">120,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Active Garages</td>
                <td className="p-4 text-right">150</td>
                <td className="p-4 text-right">1,000</td>
                <td className="p-4 text-right font-bold">2,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Monthly Bookings</td>
                <td className="p-4 text-right">2,000</td>
                <td className="p-4 text-right">15,000</td>
                <td className="p-4 text-right font-bold">35,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Average Order Value</td>
                <td className="p-4 text-right">$75</td>
                <td className="p-4 text-right">$85</td>
                <td className="p-4 text-right font-bold">$90</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Take Rate</td>
                <td className="p-4 text-right">5%</td>
                <td className="p-4 text-right">8%</td>
                <td className="p-4 text-right font-bold">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
        <h4 className="font-bold text-gray-800 mb-6 text-xl">Cash Flow Highlights</h4>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Cash from Operations (FY 2030)</span>
            <span className="font-bold text-green-600 text-lg">$6,385,000</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Cumulative Losses (Years 1-2)</span>
            <span className="font-bold text-red-600">($800,000)</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Financing Activities</span>
            <span className="font-bold text-purple-600">CAD $2.7M Seed + $1.1M Series A</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-gray-800 font-semibold text-lg">Net Cash Position (Year 5)</span>
            <span className="font-bold text-green-700 text-xl">$7,385,000</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl shadow-lg">
        <h4 className="font-bold text-xl mb-6">Break-Even Analysis</h4>
        <div className="text-center">
          <p className="text-3xl font-bold mb-2">Year 3</p>
          <p className="text-lg text-green-100 mb-4">Break-even with $355K net profit</p>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 inline-block">
            <p className="text-sm text-green-100">Accelerated path to profitability with optimized operations</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h4 className="font-bold text-xl mb-6">Investment Highlights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Lean startup model with optimized $575K Year 1 salaries</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">53% net margin by Year 5 with $6.39M profit</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Minimal funding requirement: CAD $3.8M total to profitability</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Strong cash position: $7.4M by Year 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjections;
