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
              <p className="text-sm text-gray-700 mb-2">Target: 5K users (2026) → 500K users (2027)</p>
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
              <p className="text-sm text-gray-700 mb-2">US $350B North American market, 6% CAGR</p>
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
                <li>• USD $2M funding with clear allocation</li>
                <li>• Break-even by Year 3 with positive EBITDA</li>
                <li>• Revenue: $1.2M → $8.5M → $28.5M</li>
                <li>• Asset-light model with 85%+ margins</li>
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
                <li>• Target: 5K → 50K → 500K users</li>
                <li>• 200 → 1K → 2K garage network</li>
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
                <li>• US $350B North American market</li>
                <li>• 6% CAGR growth to 2032</li>
                <li>• 70% of Canadians need better service</li>
                <li>• 26M+ vehicles in Canada</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h4 className="font-bold mb-2">Operational Excellence</h4>
              <ul className="text-sm space-y-1">
                <li>• 25% of funds for marketing & acquisition</li>
                <li>• 20% for partner network development</li>
                <li>• 10% for staff & infrastructure</li>
                <li>• Continuous process optimization</li>
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
            <p className="text-xs text-gray-600 mb-3">If user targets fall short: 5K → 3K (2026), 50K → 30K (2027)</p>
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
              <li>• <strong>Market Position:</strong> First-mover advantage in $350B North American market</li>
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
    </div>
  );
};

export default RiskAnalysis;
