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
              <h4 className="font-bold text-xl mb-2">Seed Funding Required (1 year)</h4>
              <p className="text-4xl font-bold mb-2">CAD $2.5M</p>
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

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-bold text-2xl mb-2">📊 Detailed Financial Parameters</h4>
              <p className="text-blue-100">Comprehensive 5-Year Financial Metrics & Projections</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                <tr>
                  <th className="text-left p-4 font-bold text-lg">📈 Financial Metrics</th>
                  <th className="text-center p-4 font-bold">2026</th>
                  <th className="text-center p-4 font-bold">2027</th>
                  <th className="text-center p-4 font-bold">2028</th>
                  <th className="text-center p-4 font-bold">2029</th>
                  <th className="text-center p-4 font-bold">2030</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">💰 Avg. spend/vehicle/year</td>
                  <td className="p-4 text-center">$900</td>
                  <td className="p-4 text-center">$900</td>
                  <td className="p-4 text-center">$900</td>
                  <td className="p-4 text-center font-bold text-green-600">$1,200</td>
                  <td className="p-4 text-center font-bold text-green-600">$1,200</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🛒 Avg. spend/Booking</td>
                  <td className="p-4 text-center">$150</td>
                  <td className="p-4 text-center">$150</td>
                  <td className="p-4 text-center">$150</td>
                  <td className="p-4 text-center font-bold text-green-600">$200</td>
                  <td className="p-4 text-center font-bold text-green-600">$200</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📅 No of Booking/vehicle/year</td>
                  <td className="p-4 text-center">6</td>
                  <td className="p-4 text-center">6</td>
                  <td className="p-4 text-center">6</td>
                  <td className="p-4 text-center">6</td>
                  <td className="p-4 text-center">6</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📊 Commission Rate</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center font-bold text-green-600">7%</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors bg-gradient-to-r from-yellow-50 to-orange-50">
                  <td className="p-4 font-bold text-gray-800">💎 Avg booking commission per booking (CAD)</td>
                  <td className="p-4 text-center font-bold text-blue-600">$7.50</td>
                  <td className="p-4 text-center font-bold text-blue-600">$7.50</td>
                  <td className="p-4 text-center font-bold text-blue-600">$7.50</td>
                  <td className="p-4 text-center font-bold text-green-600">$10.00</td>
                  <td className="p-4 text-center font-bold text-green-600">$14.00</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">👥 Avg bookings per user per year</td>
                  <td className="p-4 text-center">3</td>
                  <td className="p-4 text-center">3</td>
                  <td className="p-4 text-center">3</td>
                  <td className="p-4 text-center font-bold text-green-600">4</td>
                  <td className="p-4 text-center font-bold text-green-600">4</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">💳 Avg annual subscription (CAD) - User</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🏪 Avg monthly subscription (CAD) - Garage</td>
                  <td className="p-4 text-center">$20.00</td>
                  <td className="p-4 text-center">$20.00</td>
                  <td className="p-4 text-center">$20.00</td>
                  <td className="p-4 text-center">$20.00</td>
                  <td className="p-4 text-center">$20.00</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📈 User annual subscription penetration (%)</td>
                  <td className="p-4 text-center">10%</td>
                  <td className="p-4 text-center">10%</td>
                  <td className="p-4 text-center">10%</td>
                  <td className="p-4 text-center">11%</td>
                  <td className="p-4 text-center font-bold text-green-600">15%</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🏢 Garage subscription penetration (%)</td>
                  <td className="p-4 text-center">30%</td>
                  <td className="p-4 text-center font-bold text-green-600">35%</td>
                  <td className="p-4 text-center font-bold text-green-600">35%</td>
                  <td className="p-4 text-center font-bold text-green-600">40%</td>
                  <td className="p-4 text-center font-bold text-green-600">45%</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📢 Ads & listings monthly price (CAD)</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center font-bold text-green-600">$120.00</td>
                  <td className="p-4 text-center font-bold text-green-600">$140.00</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📊 Garage Ads and listing penetration (%)</td>
                  <td className="p-4 text-center">10%</td>
                  <td className="p-4 text-center">10%</td>
                  <td className="p-4 text-center">10%</td>
                  <td className="p-4 text-center font-bold text-green-600">15%</td>
                  <td className="p-4 text-center font-bold text-green-600">20%</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">💼 Jobs marketplace price per job (CAD)</td>
                  <td className="p-4 text-center">$10.00</td>
                  <td className="p-4 text-center">$10.00</td>
                  <td className="p-4 text-center">$10.00</td>
                  <td className="p-4 text-center">$10.00</td>
                  <td className="p-4 text-center">$10.00</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📋 Avg No of Job listing/Garage/Month</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center font-bold text-green-600">2</td>
                  <td className="p-4 text-center font-bold text-green-600">2</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🤖 CareChart AI price (CAD/year)</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                  <td className="p-4 text-center">$99.00</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📈 CareChart AI subscription penetration (%)</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center">5%</td>
                  <td className="p-4 text-center font-bold text-green-600">7%</td>
                  <td className="p-4 text-center font-bold text-green-600">10%</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🏭 Number of Franchise / Assets/Proprietory FastTrack Garage</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center font-bold text-green-600">2</td>
                  <td className="p-4 text-center font-bold text-green-600">5</td>
                  <td className="p-4 text-center font-bold text-green-600">20</td>
                  <td className="p-4 text-center font-bold text-green-600">50</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">💰 Avg, Revenue/Proprietory Garage/Month</td>
                  <td className="p-4 text-center">$20,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$30,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$50,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$60,000</td>
                  <td className="p-4 text-center font-bold text-green-600">$90,000</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">👤 User acquisition cost (UAC, CAD)</td>
                  <td className="p-4 text-center">$38</td>
                  <td className="p-4 text-center">$38</td>
                  <td className="p-4 text-center font-bold text-green-600">$35</td>
                  <td className="p-4 text-center font-bold text-green-600">$35</td>
                  <td className="p-4 text-center font-bold text-green-600">$32</td>
                </tr>
                <tr className="border-b bg-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">🏪 Garage acquisition cost (GAC, CAD)</td>
                  <td className="p-4 text-center">$250</td>
                  <td className="p-4 text-center">$250</td>
                  <td className="p-4 text-center font-bold text-green-600">$230</td>
                  <td className="p-4 text-center font-bold text-green-600">$230</td>
                  <td className="p-4 text-center font-bold text-green-600">$200</td>
                </tr>
                <tr className="border-b hover:bg-blue-50 transition-colors">
                  <td className="p-4 font-semibold text-gray-800">📊 Value added share (GDP %)</td>
                  <td className="p-4 text-center">40%</td>
                  <td className="p-4 text-center">40%</td>
                  <td className="p-4 text-center">40%</td>
                  <td className="p-4 text-center">40%</td>
                  <td className="p-4 text-center">40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Visual Charts Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-t">
          <h5 className="font-bold text-lg text-gray-800 mb-6 text-center">📈 Key Metrics Visualization</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Commission Growth Chart */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
              <h6 className="font-bold text-blue-800 mb-4 text-center">💎 Commission Growth</h6>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">2026-2028</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm font-bold">$7.50</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">2029</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <span className="text-sm font-bold">$10.00</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">2030</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-sm font-bold">$14.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Penetration Chart */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <h6 className="font-bold text-green-800 mb-4 text-center">📈 Subscription Penetration</h6>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">User Penetration</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    <span className="text-sm font-bold">15%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Garage Penetration</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-sm font-bold">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">AI Penetration</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '40%'}}></div>
                    </div>
                    <span className="text-sm font-bold">10%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Proprietary Garages Growth */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
              <h6 className="font-bold text-purple-800 mb-4 text-center">🏭 Proprietary Garages</h6>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">2026</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-purple-300 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="text-sm font-bold">1</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">2028</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '50%'}}></div>
                    </div>
                    <span className="text-sm font-bold">5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">2030</span>
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-sm font-bold">50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gray-50 p-6 border-b">
          <h4 className="font-bold text-gray-800 text-xl">Key Metrics</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="text-left p-4 font-semibold">Metric</th>
                <th className="text-right p-4 font-semibold">2026</th>
                <th className="text-right p-4 font-semibold">2027</th>
                <th className="text-right p-4 font-semibold">2028</th>
                <th className="text-right p-4 font-semibold">2029</th>
                <th className="text-right p-4 font-semibold">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold text-blue-700">Active Users</td>
                <td className="p-4 text-right">10,000</td>
                <td className="p-4 text-right">20,000</td>
                <td className="p-4 text-right">60,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right font-bold text-green-600">500,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-blue-700">Partner Garages</td>
                <td className="p-4 text-right">200</td>
                <td className="p-4 text-right">1,000</td>
                <td className="p-4 text-right">3,000</td>
                <td className="p-4 text-right">8,000</td>
                <td className="p-4 text-right font-bold text-green-600">10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>




      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 rounded-2xl p-8 shadow-xl mb-8">
        <div className="text-center mb-8">
          <h4 className="text-3xl font-bold text-gray-800 mb-2">💰 Toronto Salary Breakdown</h4>
          <p className="text-lg text-gray-600">Annual Staffing Costs & Growth Projection</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Core Team Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h5 className="text-xl font-bold text-gray-800">Core Team (Year 1)</h5>
            </div>
          <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-700">👑 3 Executive Founders</span>
                <span className="font-bold text-blue-600">$200,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-gray-700">💻 3 Software Developers</span>
                <span className="font-bold text-green-600">$195,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-gray-700">🎨 1 UI/UX Designer</span>
                <span className="font-bold text-purple-600">$15,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span className="text-gray-700">📢 1 Marketing Specialist</span>
                <span className="font-bold text-orange-600">$50,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                <span className="text-gray-700">🎧 1 Customer Support</span>
                <span className="font-bold text-pink-600">$36,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                <span className="text-gray-700">⚙️ 1 Operations Coordinator</span>
                <span className="font-bold text-indigo-600">$40,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                <span className="text-gray-700">🚗 3 On-Field Associates</span>
                <span className="font-bold text-teal-600">$102,000</span>
              </div>
              <div className="border-t-2 border-blue-200 pt-4 flex justify-between items-center bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4">
                <span className="text-lg font-bold text-blue-800">Total Year 1</span>
                <span className="text-2xl font-bold text-blue-600">$598,000</span>
              </div>
            </div>
          </div>

          {/* Expansion Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h5 className="text-xl font-bold text-gray-800">Expansion (Year 2-5)</h5>
          </div>
          <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <span className="text-gray-700 font-medium">📈 Year 2 (23 staff)</span>
                <span className="font-bold text-green-600">$1,143,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <span className="text-gray-700 font-medium">📈 Year 3 (37 staff)</span>
                <span className="font-bold text-blue-600">$1,929,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <span className="text-gray-700 font-medium">📈 Year 4 (62 staff)</span>
                <span className="font-bold text-purple-600">$3,369,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                <span className="text-gray-700 font-medium">📈 Year 5 (111 staff)</span>
                <span className="font-bold text-orange-600">$5,540,000</span>
              </div>
              <div className="border-t-2 border-green-200 pt-4 flex justify-between items-center bg-gradient-to-r from-green-100 to-emerald-200 rounded-lg p-4">
                <span className="text-lg font-bold text-green-800">Total 5-Year Growth</span>
                <span className="text-2xl font-bold text-green-600">$12,579,000</span>
              </div>
            </div>
          </div>

          {/* Manpower Summary Section */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h5 className="text-xl font-bold text-gray-800">Total Manpower Summary</h5>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border border-gray-200">
                <span className="text-gray-700 font-medium">📅 Year 1</span>
                <span className="font-bold text-gray-600">13 staff</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <span className="text-gray-700 font-medium">📅 Year 2</span>
                <span className="font-bold text-blue-600">23 staff</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <span className="text-gray-700 font-medium">📅 Year 3</span>
                <span className="font-bold text-green-600">37 staff</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <span className="text-gray-700 font-medium">📅 Year 4</span>
                <span className="font-bold text-purple-600">62 staff</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                <span className="text-gray-700 font-medium">📅 Year 5</span>
                <span className="font-bold text-orange-600">111 staff</span>
              </div>
              <div className="border-t-2 border-purple-200 pt-4 flex justify-between items-center bg-gradient-to-r from-purple-100 to-pink-200 rounded-lg p-4">
                <span className="text-lg font-bold text-purple-800">Total by 2030</span>
                <span className="text-2xl font-bold text-purple-600">111 staff</span>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-blue-800 mb-2 text-lg">Break-Even Year</h4>
          <p className="text-4xl font-bold text-blue-600">Year 2</p>
          <p className="text-sm text-gray-600">Profitable by FY 2027</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-green-800 mb-2 text-lg">Net Margin</h4>
          <p className="text-4xl font-bold text-green-600">24%</p>
          <p className="text-sm text-gray-600">Net margin by Year 5</p>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-purple-800 mb-2 text-lg">Total Funding Needed (1 year)</h4>
          <p className="text-4xl font-bold text-purple-600">CAD $2.5M</p>
          <p className="text-sm text-gray-600">Seed funding to profitability</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg mb-8">
        <h4 className="font-bold text-gray-800 mb-6 text-xl">Funding Timeline & Requirements</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Seed Round (1 year)</h5>
              <p className="text-2xl font-bold text-blue-600">CAD $2.5M</p>
              <p className="text-sm text-gray-600">Covers initial development and team building</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Series A (Year 2)</h5>
              <p className="text-2xl font-bold text-green-600">CAD $0.0M</p>
              <p className="text-sm text-gray-600">Self-funded from Year 2 profitability</p>
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
              <p className="text-2xl font-bold text-orange-600">CAD $2.5M</p>
              <p className="text-sm text-gray-600">Seed funding to Year 2 profitability</p>
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
                <th className="text-right p-4">FY 2029</th>
                <th className="text-right p-4">FY 2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Active Users</td>
                <td className="p-4 text-right">10,000</td>
                <td className="p-4 text-right">20,000</td>
                <td className="p-4 text-right font-bold">60,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right font-bold text-green-600">500,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Partner Garages</td>
                <td className="p-4 text-right">200</td>
                <td className="p-4 text-right">1,000</td>
                <td className="p-4 text-right font-bold">3,000</td>
                <td className="p-4 text-right">8,000</td>
                <td className="p-4 text-right font-bold text-green-600">10,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Avg. spend/vehicle/year</td>
                <td className="p-4 text-right">$900</td>
                <td className="p-4 text-right">$900</td>
                <td className="p-4 text-right">$900</td>
                <td className="p-4 text-right font-bold">$1,200</td>
                <td className="p-4 text-right font-bold">$1,200</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Avg. spend/Booking</td>
                <td className="p-4 text-right">$150</td>
                <td className="p-4 text-right">$150</td>
                <td className="p-4 text-right">$150</td>
                <td className="p-4 text-right">$200</td>
                <td className="p-4 text-right">$200</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Commission Rate</td>
                <td className="p-4 text-right">5%</td>
                <td className="p-4 text-right">5%</td>
                <td className="p-4 text-right">5%</td>
                <td className="p-4 text-right">5%</td>
                <td className="p-4 text-right font-bold">7%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-bold">Avg booking commission per booking (CAD)</td>
                <td className="p-4 text-right font-bold">$7.50</td>
                <td className="p-4 text-right font-bold">$7.50</td>
                <td className="p-4 text-right font-bold">$7.50</td>
                <td className="p-4 text-right font-bold">$10.00</td>
                <td className="p-4 text-right font-bold text-green-600">$14.00</td>
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
            <span className="font-bold text-purple-600">CAD $2.5M Seed + $0.0M Series A</span>
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
            <span className="text-sm">24% net margin by Year 5 with $6.39M profit</span>
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

      {/* P&L Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gray-50 p-6 border-b">
          <h4 className="font-bold text-gray-800 text-xl">Profit & Loss Statement</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="text-left p-4 font-semibold">Financial Metrics</th>
                <th className="text-right p-4 font-semibold">2026</th>
                <th className="text-right p-4 font-semibold">2027</th>
                <th className="text-right p-4 font-semibold">2028</th>
                <th className="text-right p-4 font-semibold">2029</th>
                <th className="text-right p-4 font-semibold">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold text-blue-700">Total Revenue</td>
                <td className="p-4 text-right">675,660</td>
                <td className="p-4 text-right">1,939,800</td>
                <td className="p-4 text-right">6,709,400</td>
                <td className="p-4 text-right">32,280,000</td>
                <td className="p-4 text-right">104,415,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Total OPEX</td>
                <td className="p-4 text-right">1,871,639</td>
                <td className="p-4 text-right">3,893,725</td>
                <td className="p-4 text-right">9,553,470</td>
                <td className="p-4 text-right">29,659,648</td>
                <td className="p-4 text-right">69,701,095</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">EBITDA</td>
                <td className="p-4 text-right text-red-700">(1,195,979)</td>
                <td className="p-4 text-right text-red-700">(1,953,925)</td>
                <td className="p-4 text-right text-red-700">(2,844,070)</td>
                <td className="p-4 text-right text-green-700">2,620,352</td>
                <td className="p-4 text-right text-green-700">34,713,905</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Depreciation & Amortization</td>
                <td className="p-4 text-right">39,550</td>
                <td className="p-4 text-right">97,050</td>
                <td className="p-4 text-right">197,350</td>
                <td className="p-4 text-right">491,600</td>
                <td className="p-4 text-right">1,201,600</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">EBIT</td>
                <td className="p-4 text-right text-red-700">(1,235,529)</td>
                <td className="p-4 text-right text-red-700">(2,050,975)</td>
                <td className="p-4 text-right text-red-700">(3,041,420)</td>
                <td className="p-4 text-right text-green-700">2,128,752</td>
                <td className="p-4 text-right text-green-700">33,512,305</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Interest Expense</td>
                <td className="p-4 text-right">20,000</td>
                <td className="p-4 text-right">20,000</td>
                <td className="p-4 text-right">30,000</td>
                <td className="p-4 text-right">50,000</td>
                <td className="p-4 text-right">80,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">EBT</td>
                <td className="p-4 text-right text-red-700">(1,255,529)</td>
                <td className="p-4 text-right text-red-700">(2,070,975)</td>
                <td className="p-4 text-right text-red-700">(3,071,420)</td>
                <td className="p-4 text-right text-green-700">2,078,752</td>
                <td className="p-4 text-right text-green-700">33,432,305</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Tax (25%)</td>
                <td className="p-4 text-right">-</td>
                <td className="p-4 text-right">-</td>
                <td className="p-4 text-right">-</td>
                <td className="p-4 text-right">519,688</td>
                <td className="p-4 text-right">8,358,076</td>
              </tr>
              <tr className="bg-green-50 border-t-2 border-green-500">
                <td className="p-4 font-bold text-green-800">Net Income</td>
                <td className="p-4 text-right font-bold text-red-700">(1,255,529)</td>
                <td className="p-4 text-right font-bold text-red-700">(2,070,975)</td>
                <td className="p-4 text-right font-bold text-red-700">(3,071,420)</td>
                <td className="p-4 text-right font-bold text-green-700">1,559,064</td>
                <td className="p-4 text-right font-bold text-green-700">25,074,229</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CPEX Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gray-50 p-6 border-b">
          <h4 className="font-bold text-gray-800 text-xl">Capital Expenditures (CPEX)</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-100">
              <tr>
                <th className="text-left p-4 font-semibold">Capital Expenditure Items</th>
                <th className="text-right p-4 font-semibold">2026</th>
                <th className="text-right p-4 font-semibold">2027</th>
                <th className="text-right p-4 font-semibold">2028</th>
                <th className="text-right p-4 font-semibold">2029</th>
                <th className="text-right p-4 font-semibold">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Technology Infrastructure</td>
                <td className="p-4 text-right">150,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right">300,000</td>
                <td className="p-4 text-right">500,000</td>
                <td className="p-4 text-right">600,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Office Equipment & Furniture</td>
                <td className="p-4 text-right">50,000</td>
                <td className="p-4 text-right">75,000</td>
                <td className="p-4 text-right">100,000</td>
                <td className="p-4 text-right">150,000</td>
                <td className="p-4 text-right">200,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Vehicle Fleet (Service Vehicles)</td>
                <td className="p-4 text-right">100,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right">400,000</td>
                <td className="p-4 text-right">800,000</td>
                <td className="p-4 text-right">1,200,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Smart Garage Equipment</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right">500,000</td>
                <td className="p-4 text-right">1,000,000</td>
                <td className="p-4 text-right">2,000,000</td>
                <td className="p-4 text-right">3,000,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Software Development & Licenses</td>
                <td className="p-4 text-right">80,000</td>
                <td className="p-4 text-right">120,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right">300,000</td>
                <td className="p-4 text-right">400,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">AI & Machine Learning Systems</td>
                <td className="p-4 text-right">60,000</td>
                <td className="p-4 text-right">100,000</td>
                <td className="p-4 text-right">150,000</td>
                <td className="p-4 text-right">250,000</td>
                <td className="p-4 text-right">350,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Security & Compliance Systems</td>
                <td className="p-4 text-right">30,000</td>
                <td className="p-4 text-right">50,000</td>
                <td className="p-4 text-right">75,000</td>
                <td className="p-4 text-right">100,000</td>
                <td className="p-4 text-right">150,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Marketing & Branding Assets</td>
                <td className="p-4 text-right">40,000</td>
                <td className="p-4 text-right">60,000</td>
                <td className="p-4 text-right">80,000</td>
                <td className="p-4 text-right">120,000</td>
                <td className="p-4 text-right">180,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Training & Development Equipment</td>
                <td className="p-4 text-right">20,000</td>
                <td className="p-4 text-right">30,000</td>
                <td className="p-4 text-right">40,000</td>
                <td className="p-4 text-right">60,000</td>
                <td className="p-4 text-right">80,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Research & Development</td>
                <td className="p-4 text-right">50,000</td>
                <td className="p-4 text-right">80,000</td>
                <td className="p-4 text-right">120,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right">300,000</td>
              </tr>
              <tr className="bg-blue-50 border-t-2 border-blue-500">
                <td className="p-4 font-bold text-blue-800">Total CPEX</td>
                <td className="p-4 text-right font-bold text-blue-700">780,000</td>
                <td className="p-4 text-right font-bold text-blue-700">1,415,000</td>
                <td className="p-4 text-right font-bold text-blue-700">2,465,000</td>
                <td className="p-4 text-right font-bold text-blue-700">4,480,000</td>
                <td className="p-4 text-right font-bold text-blue-700">6,460,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* OPEX Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gray-50 p-6 border-b">
          <h4 className="font-bold text-gray-800 text-xl">OPEX Heads</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="text-left p-4 font-semibold">OPEX Heads</th>
                <th className="text-right p-4 font-semibold">2026</th>
                <th className="text-right p-4 font-semibold">2027</th>
                <th className="text-right p-4 font-semibold">2028</th>
                <th className="text-right p-4 font-semibold">2029</th>
                <th className="text-right p-4 font-semibold">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Marketing & CAC</td>
                <td className="p-4 text-right">380,000</td>
                <td className="p-4 text-right">760,000</td>
                <td className="p-4 text-right">2,100,000</td>
                <td className="p-4 text-right">7,000,000</td>
                <td className="p-4 text-right">16,000,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Garage and Partners Acquisition Cost</td>
                <td className="p-4 text-right">50,000</td>
                <td className="p-4 text-right">250,000</td>
                <td className="p-4 text-right">690,000</td>
                <td className="p-4 text-right">1,840,000</td>
                <td className="p-4 text-right">2,000,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Salaries & Benefits</td>
                <td className="p-4 text-right">848,000</td>
                <td className="p-4 text-right">1,503,000</td>
                <td className="p-4 text-right">2,829,000</td>
                <td className="p-4 text-right">6,969,000</td>
                <td className="p-4 text-right">14,540,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Cloud and IT infrastructure-recurring</td>
                <td className="p-4 text-right">6,757</td>
                <td className="p-4 text-right">19,398</td>
                <td className="p-4 text-right">67,094</td>
                <td className="p-4 text-right">161,400</td>
                <td className="p-4 text-right">261,038</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Customer Support & Ops</td>
                <td className="p-4 text-right">54,053</td>
                <td className="p-4 text-right">155,184</td>
                <td className="p-4 text-right">268,376</td>
                <td className="p-4 text-right">1,291,200</td>
                <td className="p-4 text-right">1,566,225</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Admin & Office Exp.</td>
                <td className="p-4 text-right">33,783</td>
                <td className="p-4 text-right">96,990</td>
                <td className="p-4 text-right">167,735</td>
                <td className="p-4 text-right">484,200</td>
                <td className="p-4 text-right">1,044,150</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Customer Incentives</td>
                <td className="p-4 text-right">300,000</td>
                <td className="p-4 text-right">600,000</td>
                <td className="p-4 text-right">1,800,000</td>
                <td className="p-4 text-right">6,000,000</td>
                <td className="p-4 text-right">15,000,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Partner Incentives</td>
                <td className="p-4 text-right">35,088</td>
                <td className="p-4 text-right">108,170</td>
                <td className="p-4 text-right">304,983</td>
                <td className="p-4 text-right">609,648</td>
                <td className="p-4 text-right">1,002,155</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Training & Knowledge</td>
                <td className="p-4 text-right">30,000</td>
                <td className="p-4 text-right">50,000</td>
                <td className="p-4 text-right">100,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right">500,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">R & D</td>
                <td className="p-4 text-right">30,000</td>
                <td className="p-4 text-right">50,000</td>
                <td className="p-4 text-right">100,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right">500,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Legal Expenses</td>
                <td className="p-4 text-right">10,000</td>
                <td className="p-4 text-right">20,000</td>
                <td className="p-4 text-right">25,000</td>
                <td className="p-4 text-right">100,000</td>
                <td className="p-4 text-right">200,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Smart Garage Input Costs for Parts & Spares & Supplies</td>
                <td className="p-4 text-right">72,000</td>
                <td className="p-4 text-right">216,000</td>
                <td className="p-4 text-right">900,000</td>
                <td className="p-4 text-right">4,320,000</td>
                <td className="p-4 text-right">16,200,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Other Expenses</td>
                <td className="p-4 text-right">21,959</td>
                <td className="p-4 text-right">64,983</td>
                <td className="p-4 text-right">201,282</td>
                <td className="p-4 text-right">484,200</td>
                <td className="p-4 text-right">887,528</td>
              </tr>
              <tr className="bg-green-50 border-t-2 border-green-500">
                <td className="p-4 font-bold text-green-800">Total OPEX</td>
                <td className="p-4 text-right font-bold text-green-700">1,871,639</td>
                <td className="p-4 text-right font-bold text-green-700">3,893,725</td>
                <td className="p-4 text-right font-bold text-green-700">9,553,470</td>
                <td className="p-4 text-right font-bold text-green-700">29,659,648</td>
                <td className="p-4 text-right font-bold text-green-700">69,701,095</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Cash Flow Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
        <div className="bg-gray-50 p-6 border-b">
          <h4 className="font-bold text-gray-800 text-xl">Cash Flow Statement</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="text-left p-4 font-semibold">Cash Flow Components</th>
                <th className="text-right p-4 font-semibold">2026</th>
                <th className="text-right p-4 font-semibold">2027</th>
                <th className="text-right p-4 font-semibold">2028</th>
                <th className="text-right p-4 font-semibold">2029</th>
                <th className="text-right p-4 font-semibold">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4">Net Income</td>
                <td className="p-4 text-right text-red-700">(1,255,529)</td>
                <td className="p-4 text-right text-red-700">(2,070,975)</td>
                <td className="p-4 text-right text-red-700">(3,071,420)</td>
                <td className="p-4 text-right text-green-700">1,559,064</td>
                <td className="p-4 text-right text-green-700">25,074,229</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">Add: Depreciation</td>
                <td className="p-4 text-right">39,550</td>
                <td className="p-4 text-right">97,050</td>
                <td className="p-4 text-right">197,350</td>
                <td className="p-4 text-right">491,600</td>
                <td className="p-4 text-right">1,201,600</td>
              </tr>
              <tr className="border-b">
                <td className="p-4">Change in Working Capital (est)</td>
                <td className="p-4 text-right">-</td>
                <td className="p-4 text-right">73,082</td>
                <td className="p-4 text-right">230,700</td>
                <td className="p-4 text-right">423,190</td>
                <td className="p-4 text-right">669,590</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4">CAPEX</td>
                <td className="p-4 text-right">791,000</td>
                <td className="p-4 text-right">1,150,000</td>
                <td className="p-4 text-right">2,006,000</td>
                <td className="p-4 text-right">5,885,000</td>
                <td className="p-4 text-right">14,200,000</td>
              </tr>
              <tr className="border-b bg-green-50">
                <td className="p-4 font-semibold text-green-800">Cash Flow from Investments</td>
                <td className="p-4 text-right font-bold text-green-700">2,500,000</td>
                <td className="p-4 text-right font-bold text-green-700">3,000,000</td>
                <td className="p-4 text-right font-bold text-green-700">5,000,000</td>
                <td className="p-4 text-right font-bold text-green-700">5,000,000</td>
                <td className="p-4 text-right font-bold text-green-700">-</td>
              </tr>
              <tr className="border-b bg-green-50">
                <td className="p-4 font-semibold text-green-800">Free Cash Flow</td>
                <td className="p-4 text-right font-bold text-green-700">493,021</td>
                <td className="p-4 text-right font-bold text-red-700">(50,843)</td>
                <td className="p-4 text-right font-bold text-green-700">350,630</td>
                <td className="p-4 text-right font-bold text-green-700">1,588,854</td>
                <td className="p-4 text-right font-bold text-green-700">12,745,419</td>
              </tr>
              <tr className="bg-green-50 border-t-2 border-green-500">
                <td className="p-4 font-bold text-green-800">Year End Cash in Hand</td>
                <td className="p-4 text-right font-bold text-green-700">493,021</td>
                <td className="p-4 text-right font-bold text-green-700">442,177</td>
                <td className="p-4 text-right font-bold text-green-700">792,807</td>
                <td className="p-4 text-right font-bold text-green-700">2,381,661</td>
                <td className="p-4 text-right font-bold text-green-700">15,127,080</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjections;


