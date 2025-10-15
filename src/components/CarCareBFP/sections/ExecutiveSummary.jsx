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
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          CarCare 24×7 Inc. is revolutionizing the automotive services industry by creating the first unified digital marketplace that connects vehicle owners with certified garages across Canada. In a market where less than 5% of bookings are made online, we're building a comprehensive ecosystem that combines AI-powered predictive maintenance, transparent pricing, fintech integration, and real-time service tracking.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          With a mission to modernize how millions of people interact with garages and mechanics, CarCare 24×7 addresses the CAD $475 billion North American automotive services market through a technology-first approach that empowers both customers and service providers. Our platform transforms the fragmented automotive service industry into a connected, intelligent ecosystem that makes vehicle maintenance effortless, transparent, and rewarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-lg shadow">
          <h3 className="font-bold text-green-800 mb-2 text-lg">Market Opportunity</h3>
          <p className="text-3xl font-bold text-green-600 mb-2">CAD $511B</p>
          <p className="text-sm text-gray-700">North American Market</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg shadow">
          <h3 className="font-bold text-blue-800 mb-2 text-lg">Revenue Growth</h3>
          <p className="text-3xl font-bold text-blue-600 mb-2">CAD $6.71M</p>
          <p className="text-sm text-gray-700">By Year 3 (2028)</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500 p-6 rounded-lg shadow">
          <h3 className="font-bold text-purple-800 mb-2 text-lg">User Growth</h3>
          <p className="text-3xl font-bold text-purple-600 mb-2">60K</p>
          <p className="text-sm text-gray-700">Users by Year 3 (2028)</p>
          <p className="text-xs text-gray-600 mt-2">5K → 20K → 60K across 3-phase rollout</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500 p-6 rounded-lg shadow">
          <h3 className="font-bold text-orange-800 mb-2 text-lg">Seed Funding (1 year)</h3>
          <p className="text-3xl font-bold text-orange-600 mb-2">CAD $2.5M</p>
          <p className="text-sm text-gray-700">Required for Launch</p>
          <p className="text-xs text-gray-600 mt-2">40% tech, 35% staff, 15% marketing, 7% operations, 3% legal</p>
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
              CarCare 24×7 creates a unified digital marketplace connecting 26+ million Canadian vehicle owners with 15,000+ service facilities. We address the 70% of vehicle owners who struggle to find reliable, affordable service providers by offering AI-powered predictive maintenance, transparent pricing, fintech integration, and real-time service tracking across Toronto, Vancouver, Calgary, Montreal, and Ottawa.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-3">Why We're Different</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Unified marketplace vs. fragmented competitors (AutoTrader, Mr. Lube, Canadian Tire)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>AI-powered predictive maintenance with 24/7 access</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Fintech integration with repair savings wallets & transparent pricing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>First-mover advantage in Canadian market with &lt;5% digital penetration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Strategic Rollout Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-bold text-lg mb-3">Phase 1: MVP Launch (2026)</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>Toronto & GTA market entry</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>10,000 users, 200 garages</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>CAD $675K revenue target</span>
              </li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-bold text-lg mb-3">Phase 2: Ontario Expansion (2027)</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>Major cities across Ontario</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>20,000 users, fintech integration</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>CAD $1.94M revenue target</span>
              </li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-bold text-lg mb-3">Phase 3: Nationwide (2028)</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>Complete nationwide coverage</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>60,000 users, EV & fleet modules</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>CAD $6.71M revenue target</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Market Validation & Competitive Advantage</h3>
        <p className="text-gray-700 mb-4">
          CarCare 24×7 addresses critical market gaps with strong competitive positioning:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm font-bold">1</div>
            <div>
              <p className="font-semibold text-gray-800">Massive Digital Opportunity</p>
              <p className="text-sm text-gray-600">Less than 5% of bookings made online in Canada vs. 70% of vehicle owners needing better service options</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm font-bold">2</div>
            <div>
              <p className="font-semibold text-gray-800">Aging Fleet Demand</p>
              <p className="text-sm text-gray-600">10.9 years average vehicle age in Canada driving increased maintenance needs and service demand</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm font-bold">3</div>
            <div>
              <p className="font-semibold text-gray-800">EV Market Growth</p>
              <p className="text-sm text-gray-600">EV maintenance market projected to reach US $20B by 2030, creating specialized service opportunities</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 text-sm font-bold">4</div>
            <div>
              <p className="font-semibold text-gray-800">Fintech Integration</p>
              <p className="text-sm text-gray-600">Repair savings wallets and payment innovation addressing US $15B+ auto-fintech market opportunity</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
