import React from 'react';
import { Shield, AlertTriangle, CheckCircle, TrendingDown } from 'lucide-react';

const RiskAnalysis = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Risk Analysis</h2>
        <p className="text-xl text-red-100">Risk Assessment, Mitigation Strategies & Contingency Planning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-xl font-bold text-red-900">High-Risk Factors</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Market Competition</h4>
              <p className="text-sm text-gray-700 mb-2">AutoTrader, Mr. Lube, Canadian Tire Auto expanding digital presence</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> High • <strong>Probability:</strong> High</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Funding & Cash Flow</h4>
              <p className="text-sm text-gray-700 mb-2">USD $2M funding requirement, break-even by Year 3</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> High • <strong>Probability:</strong> Medium</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Technology & AI Integration</h4>
              <p className="text-sm text-gray-700 mb-2">40% of funds allocated to tech development, AI complexity</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> High • <strong>Probability:</strong> Medium</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Regulatory Compliance</h4>
              <p className="text-sm text-gray-700 mb-2">Fintech integration, automotive service regulations</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> High • <strong>Probability:</strong> Low</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <TrendingDown className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-xl font-bold text-yellow-900">Medium-Risk Factors</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Customer Adoption</h4>
              <p className="text-sm text-gray-700 mb-2">Target: 10K users (2026) → 60K users (2028)</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Medium • <strong>Probability:</strong> Medium</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Garage Network Growth</h4>
              <p className="text-sm text-gray-700 mb-2">Target: 200 garages (2026) → nationwide coverage</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Medium • <strong>Probability:</strong> Low</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Regional Expansion</h4>
              <p className="text-sm text-gray-700 mb-2">Toronto → Ontario → Nationwide rollout complexity</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Medium • <strong>Probability:</strong> Medium</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">EV & Fleet Modules</h4>
              <p className="text-sm text-gray-700 mb-2">Specialized service requirements, market readiness</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Medium • <strong>Probability:</strong> Low</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-xl font-bold text-blue-900">Low-Risk Factors</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Market Size</h4>
              <p className="text-sm text-gray-700 mb-2">US $511B North American market, 6% CAGR</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Low • <strong>Probability:</strong> Low</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Economic Downturn</h4>
              <p className="text-sm text-gray-700 mb-2">Essential automotive services, 70% market opportunity</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Low • <strong>Probability:</strong> Low</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Technology Infrastructure</h4>
              <p className="text-sm text-gray-700 mb-2">Proven cloud technologies, scalable architecture</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Low • <strong>Probability:</strong> Low</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Team & Execution</h4>
              <p className="text-sm text-gray-700 mb-2">Experienced leadership, clear roadmap</p>
              <p className="text-xs text-gray-600"><strong>Impact:</strong> Low • <strong>Probability:</strong> Low</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6 flex items-center">
          <Shield className="w-8 h-8 mr-3" />
          Risk Mitigation Strategies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Competitive Advantage</h4>
              <ul className="text-sm space-y-1">
                <li>• Unified marketplace vs. fragmented competitors</li>
                <li>• AI-powered predictive maintenance</li>
                <li>• 24/7 access & real-time updates</li>
                <li>• First-mover advantage in Canada</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Financial Management</h4>
              <ul className="text-sm space-y-1">
                <li>• CAD $2.5M seed funding (Year 1)</li>
                <li>• Break-even by Year 4 (2029) with positive EBITDA</li>
                <li>• Revenue: $675K → $1.9M → $6.7M → $32.3M → $104.4M</li>
                <li>• Additional funding rounds: $3M (2027), $5M (2028-2029)</li>
                <li>• Free Cash Flow positive by Year 3 (2028)</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Technology & AI</h4>
              <ul className="text-sm space-y-1">
                <li>• 40% of funds allocated to tech development</li>
                <li>• Fintech integration for payments</li>
                <li>• Scalable cloud architecture</li>
                <li>• Continuous R&D investment</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Market Strategy</h4>
              <ul className="text-sm space-y-1">
                <li>• Phased rollout: Toronto → Ontario → Nationwide</li>
                <li>• User Target: 10K → 20K → 60K → 200K → 500K users</li>
                <li>• Garage Target: 200 → 1K → 3K → 8K → 10K garage network</li>
                <li>• EV & fleet modules for expansion</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Quality Assurance</h4>
              <ul className="text-sm space-y-1">
                <li>• Rigorous garage vetting process</li>
                <li>• Customer feedback & rating systems</li>
                <li>• Transparent pricing guarantees</li>
                <li>• Service quality monitoring</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Regulatory Compliance</h4>
              <ul className="text-sm space-y-1">
                <li>• 5% of funds for legal & compliance</li>
                <li>• Proactive regulatory monitoring</li>
                <li>• Industry partnership development</li>
                <li>• Fintech licensing compliance</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Market Opportunity</h4>
              <ul className="text-sm space-y-1">
                <li>• CAD $511B North American market</li>
                <li>• 6.1% CAGR growth to 2030 ($646.7B)</li>
                <li>• 0.02% market penetration by 2030</li>
                <li>• 10,000+ partner garages by Year 5</li>
                <li>• 500,000+ active users by 2030</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Operational Excellence</h4>
              <ul className="text-sm space-y-1">
                <li>• 40% of funds for technology development</li>
                <li>• 35% for staffing & operations (13-111 employees)</li>
                <li>• 15% for marketing & customer acquisition</li>
                <li>• 7% for operations & infrastructure</li>
                <li>• 3% for legal & compliance</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Strategic Partnerships</h4>
              <ul className="text-sm space-y-1">
                <li>• Insurance company integrations</li>
                <li>• Fleet management partnerships</li>
                <li>• EV manufacturer collaborations</li>
                <li>• Technology vendor alliances</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contingency Planning</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-3">Scenario 1: Slower User Growth</h4>
            <p className="text-xs text-gray-600 mb-3">If user targets fall short: 10K → 6K (2026), 20K → 12K (2027)</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Extend Toronto/GTA focus before Ontario expansion</li>
              <li>• Increase marketing spend from 25% to 35% of funds</li>
              <li>• Implement referral programs & loyalty incentives</li>
              <li>• Focus on high-value fleet & corporate clients</li>
              <li>• Delay nationwide rollout to 2028</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h4 className="font-bold text-green-900 mb-3">Scenario 2: Increased Competition</h4>
            <p className="text-xs text-gray-600 mb-3">If AutoTrader, Mr. Lube, or Canadian Tire launch competing platforms</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Accelerate AI & fintech feature development</li>
              <li>• Strengthen exclusive garage partnerships</li>
              <li>• Enhance predictive maintenance capabilities</li>
              <li>• Implement aggressive pricing strategies</li>
              <li>• Consider strategic partnerships or acquisitions</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-3">Scenario 3: Technology/Regulatory Issues</h4>
            <p className="text-xs text-gray-600 mb-3">If AI integration or fintech compliance faces challenges</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Pivot to simpler booking & payment model</li>
              <li>• Focus on core marketplace functionality</li>
              <li>• Partner with established fintech providers</li>
              <li>• Delay advanced AI features to Phase 2</li>
              <li>• Leverage existing technology partnerships</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <h4 className="font-bold text-orange-900 mb-3">Scenario 4: Funding Shortfall</h4>
              <p className="text-xs text-gray-600 mb-3">If USD $2M funding is not fully secured</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Reduce technology development from 40% to 30%</li>
                <li>• Focus on MVP features only</li>
                <li>• Seek bridge funding or convertible notes</li>
                <li>• Delay EV & fleet modules to later phases</li>
                <li>• Implement lean startup methodology</li>
              </ul>
            </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h4 className="font-bold text-red-900 mb-3">Scenario 5: Economic Downturn</h4>
            <p className="text-xs text-gray-600 mb-3">If economic conditions reduce consumer spending</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Emphasize cost-saving benefits to customers</li>
              <li>• Focus on essential maintenance services</li>
              <li>• Implement flexible payment options</li>
              <li>• Target budget-conscious market segments</li>
              <li>• Leverage 70% market opportunity for better service</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <h3 className="font-bold text-green-900 mb-3 text-xl flex items-center">
          <CheckCircle className="w-6 h-6 mr-2" />
          Risk Management Success Factors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-800 mb-3">Strategic Advantages</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Market Position:</strong> First-mover advantage in $511B North American market</li>
              <li>• <strong>Technology Edge:</strong> AI-powered predictive maintenance & unified marketplace</li>
              <li>• <strong>Financial Model:</strong> Asset-light with 85%+ margins, break-even by Year 3</li>
              <li>• <strong>Scalable Growth:</strong> Phased rollout from Toronto to nationwide coverage</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-800 mb-3">Risk Mitigation Framework</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Diversified Funding:</strong> USD $2M with clear allocation across 5 categories</li>
              <li>• <strong>Competitive Moat:</strong> 5 key advantages vs. fragmented competitors</li>
              <li>• <strong>Operational Flexibility:</strong> 5 contingency scenarios with specific responses</li>
              <li>• <strong>Market Resilience:</strong> Essential services with 70% unmet demand</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-green-300">
          <p className="text-gray-700 leading-relaxed text-sm">
            CarCare 24×7 maintains a proactive risk management approach through continuous monitoring, regular scenario planning, and adaptive strategy implementation. Our diversified business model, strong financial position, and focus on customer value creation provide multiple layers of protection against market uncertainties while positioning us for sustainable long-term growth in the rapidly expanding North American automotive services market.
          </p>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
        <h3 className="font-bold text-purple-900 mb-4 text-xl flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          Cash Flow & Liquidity Analysis (2026-2030)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-purple-100">
              <tr>
                <th className="text-left p-3 font-semibold text-purple-800">Cash Flow Metrics</th>
                <th className="text-right p-3 font-semibold text-purple-800">2026</th>
                <th className="text-right p-3 font-semibold text-purple-800">2027</th>
                <th className="text-right p-3 font-semibold text-purple-800">2028</th>
                <th className="text-right p-3 font-semibold text-purple-800">2029</th>
                <th className="text-right p-3 font-semibold text-purple-800">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold text-gray-800">Net Income</td>
                <td className="p-3 text-right text-red-600">(1,255,529)</td>
                <td className="p-3 text-right text-red-600">(2,070,975)</td>
                <td className="p-3 text-right text-red-600">(3,071,420)</td>
                <td className="p-3 text-right text-green-600">1,559,064</td>
                <td className="p-3 text-right text-green-600">25,074,229</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3 font-semibold text-gray-800">Add: Depreciation</td>
                <td className="p-3 text-right">39,550</td>
                <td className="p-3 text-right">97,050</td>
                <td className="p-3 text-right">197,350</td>
                <td className="p-3 text-right">491,600</td>
                <td className="p-3 text-right">1,201,600</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold text-gray-800">Change in Working Capital (est)</td>
                <td className="p-3 text-right">-</td>
                <td className="p-3 text-right">73,082</td>
                <td className="p-3 text-right">230,700</td>
                <td className="p-3 text-right">423,190</td>
                <td className="p-3 text-right">669,590</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3 font-semibold text-gray-800">CAPEX</td>
                <td className="p-3 text-right">791,000</td>
                <td className="p-3 text-right">1,150,000</td>
                <td className="p-3 text-right">2,006,000</td>
                <td className="p-3 text-right">5,885,000</td>
                <td className="p-3 text-right">14,200,000</td>
              </tr>
              <tr className="border-b bg-green-50">
                <td className="p-3 font-semibold text-green-800">Cash Flow from Investments</td>
                <td className="p-3 text-right font-bold text-green-700">2,500,000</td>
                <td className="p-3 text-right font-bold text-green-700">3,000,000</td>
                <td className="p-3 text-right font-bold text-green-700">5,000,000</td>
                <td className="p-3 text-right font-bold text-green-700">5,000,000</td>
                <td className="p-3 text-right">-</td>
              </tr>
              <tr className="border-b bg-green-50">
                <td className="p-3 font-semibold text-green-800">Free Cash Flow</td>
                <td className="p-3 text-right font-bold text-green-700">493,021</td>
                <td className="p-3 text-right font-bold text-red-700">(50,843)</td>
                <td className="p-3 text-right font-bold text-green-700">350,630</td>
                <td className="p-3 text-right font-bold text-green-700">1,588,854</td>
                <td className="p-3 text-right font-bold text-green-700">12,745,419</td>
              </tr>
              <tr className="bg-gradient-to-r from-purple-100 to-blue-100 border-t-2 border-purple-500">
                <td className="p-3 font-bold text-purple-800">Year End Cash in Hand</td>
                <td className="p-3 text-right font-bold text-purple-700">493,021</td>
                <td className="p-3 text-right font-bold text-purple-700">442,177</td>
                <td className="p-3 text-right font-bold text-purple-700">792,807</td>
                <td className="p-3 text-right font-bold text-purple-700">2,381,661</td>
                <td className="p-3 text-right font-bold text-purple-700">15,127,080</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">✅ Liquidity Strengths</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Strong Investment Support:</strong> $20.5M total funding over 4 years</li>
              <li>• <strong>Growing Cash Reserves:</strong> 30x increase from $493K to $15.1M by 2030</li>
              <li>• <strong>Recovery by Year 3:</strong> Positive Free Cash Flow from 2028 onwards</li>
              <li>• <strong>Self-Funding:</strong> No external funding needed by Year 5</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-3">⚠️ Cash Flow Risks</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Loss Years:</strong> Negative Net Income for first 3 years (2026-2028)</li>
              <li>• <strong>High CAPEX:</strong> $24M total capital expenditure over 5 years</li>
              <li>• <strong>Cash Burn:</strong> Negative Free Cash Flow in Year 2 (2027)</li>
              <li>• <strong>Investment Dependency:</strong> Critical need for external funding in early years</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
          <h3 className="font-bold text-white text-2xl flex items-center">
            <span className="mr-3">📊</span>
            Key Performance Indicators (KPIs)
          </h3>
          <p className="text-purple-100 mt-2">5-Year Business Performance Metrics</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-semibold">KPI Metrics</th>
                <th className="text-right p-4 font-semibold">2026</th>
                <th className="text-right p-4 font-semibold">2027</th>
                <th className="text-right p-4 font-semibold">2028</th>
                <th className="text-right p-4 font-semibold">2029</th>
                <th className="text-right p-4 font-semibold">2030</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-blue-50">
                <td className="p-4 font-semibold text-blue-800">Active Users</td>
                <td className="p-4 text-right">10,000</td>
                <td className="p-4 text-right">20,000</td>
                <td className="p-4 text-right">60,000</td>
                <td className="p-4 text-right">200,000</td>
                <td className="p-4 text-right font-bold text-green-600">500,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">Partner Garages</td>
                <td className="p-4 text-right">200</td>
                <td className="p-4 text-right">1,000</td>
                <td className="p-4 text-right">5,000</td>
                <td className="p-4 text-right">8,000</td>
                <td className="p-4 text-right font-bold text-green-600">10,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-gray-800">Total Revenue (CAD)</td>
                <td className="p-4 text-right">$675,660</td>
                <td className="p-4 text-right">$2,039,800</td>
                <td className="p-4 text-right">$7,455,000</td>
                <td className="p-4 text-right">$32,480,000</td>
                <td className="p-4 text-right font-bold text-green-600">$104,715,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">Total OPEX (CAD)</td>
                <td className="p-4 text-right">$1,685,548</td>
                <td className="p-4 text-right">$3,511,203</td>
                <td className="p-4 text-right">$9,067,785</td>
                <td className="p-4 text-right">$22,595,506</td>
                <td className="p-4 text-right">$46,468,755</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-gray-800">EBITDA (CAD)</td>
                <td className="p-4 text-right font-bold text-red-600">($1,009,888)</td>
                <td className="p-4 text-right font-bold text-red-600">($1,471,403)</td>
                <td className="p-4 text-right font-bold text-red-600">($1,612,785)</td>
                <td className="p-4 text-right font-bold text-green-600">$9,884,494</td>
                <td className="p-4 text-right font-bold text-green-600">$58,246,245</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">EBITDA Margin (%)</td>
                <td className="p-4 text-right font-bold text-red-600">-149%</td>
                <td className="p-4 text-right font-bold text-red-600">-72%</td>
                <td className="p-4 text-right font-bold text-red-600">-22%</td>
                <td className="p-4 text-right font-bold text-green-600">30%</td>
                <td className="p-4 text-right font-bold text-green-600">56%</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-gray-800">Net Income (CAD)</td>
                <td className="p-4 text-right font-bold text-red-600">($1,069,438)</td>
                <td className="p-4 text-right font-bold text-red-600">($1,588,453)</td>
                <td className="p-4 text-right font-bold text-red-600">($1,840,135)</td>
                <td className="p-4 text-right font-bold text-green-600">$7,007,171</td>
                <td className="p-4 text-right font-bold text-green-600">$42,723,484</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">LTV (3yr)</td>
                <td className="p-4 text-right">$203</td>
                <td className="p-4 text-right">$306</td>
                <td className="p-4 text-right">$373</td>
                <td className="p-4 text-right">$487</td>
                <td className="p-4 text-right font-bold text-green-600">$628</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-gray-800">UAC (CAD)</td>
                <td className="p-4 text-right">$38</td>
                <td className="p-4 text-right">$38</td>
                <td className="p-4 text-right">$35</td>
                <td className="p-4 text-right">$35</td>
                <td className="p-4 text-right">$32</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold text-gray-800">LTV:UAC</td>
                <td className="p-4 text-right">5</td>
                <td className="p-4 text-right">8</td>
                <td className="p-4 text-right">11</td>
                <td className="p-4 text-right">14</td>
                <td className="p-4 text-right font-bold text-green-600">20</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold text-gray-800">GAC (CAD)</td>
                <td className="p-4 text-right">$250</td>
                <td className="p-4 text-right">$250</td>
                <td className="p-4 text-right">$230</td>
                <td className="p-4 text-right">$230</td>
                <td className="p-4 text-right">$200</td>
              </tr>
              <tr className="bg-gradient-to-r from-green-50 to-blue-50 border-t-2 border-green-500">
                <td className="p-4 font-bold text-green-800">Users per Garage</td>
                <td className="p-4 text-right">50</td>
                <td className="p-4 text-right">20</td>
                <td className="p-4 text-right">12</td>
                <td className="p-4 text-right">25</td>
                <td className="p-4 text-right font-bold text-green-600">50</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50">
          <h5 className="font-bold text-gray-800 mb-3">📈 Key Performance Insights</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h6 className="font-semibold text-green-800 mb-2">✅ Growth Metrics</h6>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>User Growth:</strong> 6x increase from 10K to 60K users</li>
                <li>• <strong>Network Expansion:</strong> 50x garage growth from 200 to 10K</li>
                <li>• <strong>Revenue Scaling:</strong> 155x revenue growth over 5 years</li>
                <li>• <strong>Unit Economics:</strong> LTV:UAC ratio improves from 5:1 to 20:1</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold text-orange-800 mb-2">⚠️ Risk Factors</h6>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Loss Period:</strong> 3 years of negative EBITDA and Net Income</li>
                <li>• <strong>Margin Recovery:</strong> EBITDA margin improves from -149% to 56%</li>
                <li>• <strong>Acquisition Costs:</strong> UAC and GAC remain relatively stable</li>
                <li>• <strong>Network Density:</strong> Users per garage varies significantly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;
