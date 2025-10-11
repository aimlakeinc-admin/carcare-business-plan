import React from 'react';
import { ChevronRight } from 'lucide-react';

const FinancialProjections = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Financial Projections</h2>
        <p className="text-xl text-emerald-100">FY 2026-2028 - Conservative Base-Case Scenario with Proven Unit Economics</p>
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
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold text-blue-700">Total Revenue</td>
                <td className="p-4 text-right">$883,600</td>
                <td className="p-4 text-right">$2,844,000</td>
                <td className="p-4 text-right text-green-600 font-bold">$7,659,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Operating Costs</td>
                <td className="p-4 text-right">$242,560</td>
                <td className="p-4 text-right">$292,000</td>
                <td className="p-4 text-right">$359,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Operating Profit</td>
                <td className="p-4 text-right font-bold">$641,040</td>
                <td className="p-4 text-right font-bold">$2,552,000</td>
                <td className="p-4 text-right font-bold text-green-600">$7,300,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Other Expenses</td>
                <td className="p-4 text-right">$64,000</td>
                <td className="p-4 text-right">$96,000</td>
                <td className="p-4 text-right">$139,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Tax (25%)</td>
                <td className="p-4 text-right">$144,260</td>
                <td className="p-4 text-right">$614,000</td>
                <td className="p-4 text-right">$1,790,000</td>
              </tr>
              <tr className="bg-green-50 border-t-2 border-green-500">
                <td className="p-4 font-bold text-green-800">Net Profit</td>
                <td className="p-4 text-right font-bold text-green-700">$432,780</td>
                <td className="p-4 text-right font-bold text-green-700">$1,842,000</td>
                <td className="p-4 text-right font-bold text-green-700 text-lg">$5,371,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-blue-800 mb-2 text-lg">Operating Margin</h4>
          <p className="text-4xl font-bold text-blue-600">85%+</p>
          <p className="text-sm text-gray-600">By FY 2028</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-green-800 mb-2 text-lg">Net Margin</h4>
          <p className="text-4xl font-bold text-green-600">70%</p>
          <p className="text-sm text-gray-600">Best-in-class profitability</p>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-purple-800 mb-2 text-lg">Cash Position</h4>
          <p className="text-4xl font-bold text-purple-600">$7.3M</p>
          <p className="text-sm text-gray-600">Closing balance FY 2028</p>
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
            <span className="text-gray-700">Cash from Operations (FY 2028)</span>
            <span className="font-bold text-green-600 text-lg">$5,334,000</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Investing Activities (3-year total)</span>
            <span className="font-bold text-blue-600">($310,000)</span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b">
            <span className="text-gray-700">Financing Activities</span>
            <span className="font-bold text-purple-600">Equity-funded only</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="text-gray-800 font-semibold text-lg">Net Cash Increase (3 years)</span>
            <span className="font-bold text-green-700 text-xl">$7,290,780</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl shadow-lg">
        <h4 className="font-bold text-xl mb-6">Investment Highlights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Zero debt exposure with full equity financing</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Positive cash flow from Year 1</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">Asset-light model with 85%+ operating leverage</span>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">8 diversified revenue streams reduce risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjections;
