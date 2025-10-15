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
              <h4 className="font-semibold text-gray-800 mb-3">Torqon Client App - Consumer Interaction & Engagement</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-purple-800 mb-3">App Behaviors & Features</h5>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">1</div>
                      <div>
                        <p className="font-semibold text-gray-800">AI-Powered Service Search & Comparison</p>
                        <p className="text-sm text-gray-600">Upload vehicle damage photos for AI analysis and get intelligent garage recommendations based on issue severity, location, and service capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">2</div>
                      <div>
                        <p className="font-semibold text-gray-800">Real-time Booking & Transparent Quotes</p>
                        <p className="text-sm text-gray-600">Instant booking with live pricing, transparent comparison, and real-time availability</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">3</div>
                      <div>
                        <p className="font-semibold text-gray-800">Digital Wallet & Web3 Payments</p>
                        <p className="text-sm text-gray-600">Secure digital payments with CarCare Wallet integration + Web3 crypto payments (Q2 2026)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">4</div>
                      <div>
                        <p className="font-semibold text-gray-800">Service History Tracking</p>
                        <p className="text-sm text-gray-600">Complete maintenance history and service records</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">5</div>
                      <div>
                        <p className="font-semibold text-gray-800">CareChart AI Predictions</p>
                        <p className="text-sm text-gray-600">AI-powered predictive maintenance recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-bold">6</div>
                      <div>
                        <p className="font-semibold text-gray-800">Loyalty Rewards Program</p>
                        <p className="text-sm text-gray-600">Earn points and rewards for continued engagement</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h5 className="font-semibold text-purple-800 mb-3">Revenue Streams</h5>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <h6 className="font-semibold text-gray-800 mb-2">Revenue Links:</h6>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">Commissions</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">Wallet Fees</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">VAS Add-ons</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                    <h6 className="font-semibold text-gray-800 mb-2">AI-Enhanced User Engagement Flow:</h6>
                    <div className="text-sm text-gray-700 space-y-1">
                      <p>• AI Search → Transparent Compare → Instant Book → Live Track → Secure Pay → AI Review</p>
                      <p>• Real-time pricing and transparent quotes drive user confidence</p>
                      <p>• Machine learning recommendations and predictive analytics encourage long-term retention</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Enhanced User Engagement Flow */}
      <div className="bg-white border-2 border-indigo-200 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Zap className="w-8 h-8 text-indigo-600 mr-3" />
          AI-Powered User Engagement Flow
        </h3>
        
        <div className="space-y-6">
          {/* Search Phase */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</div>
              <h4 className="text-xl font-bold text-blue-900">AI Search & Discovery</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Intelligent Search Features</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Voice Search:</strong> Natural language queries ("I need brake repair near me")</li>
                  <li>• <strong>Image Recognition:</strong> Upload photos for instant damage assessment</li>
                  <li>• <strong>Predictive Search:</strong> AI suggests services based on vehicle history</li>
                  <li>• <strong>Contextual Recommendations:</strong> Location, weather, and seasonal factors</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">AI Search Algorithms</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>NLP Processing:</strong> Understands complex service requests</li>
                  <li>• <strong>Computer Vision:</strong> Analyzes vehicle damage from images</li>
                  <li>• <strong>Machine Learning:</strong> Learns from user behavior patterns</li>
                  <li>• <strong>Real-time Data:</strong> Live availability and pricing updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compare Phase */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</div>
              <h4 className="text-xl font-bold text-green-900">Transparent Comparison Engine</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Transparent Quote Analysis</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Side-by-Side Comparison:</strong> Visual quote breakdowns with all costs</li>
                  <li>• <strong>Price Transparency:</strong> No hidden fees, all costs clearly displayed</li>
                  <li>• <strong>Quality Metrics:</strong> AI-powered facility ratings and reviews</li>
                  <li>• <strong>Real-time Updates:</strong> Live pricing changes and availability</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Smart Quote Recommendations</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Best Value Quotes:</strong> Optimal price-to-quality ratio</li>
                  <li>• <strong>Fastest Service:</strong> Quickest turnaround with transparent timelines</li>
                  <li>• <strong>Premium Options:</strong> Highest-rated facilities with detailed breakdowns</li>
                  <li>• <strong>Budget Solutions:</strong> Most cost-effective transparent pricing</li>
                </ul>
              </div>
            </div>
            
            {/* Quote Comparison Features */}
            <div className="mt-6 bg-white border border-green-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-3">Transparent Quote Comparison Features</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold text-green-800 mb-2">Quote Transparency</h6>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Complete cost breakdown (labor, parts, taxes)</li>
                    <li>• No hidden fees or surprise charges</li>
                    <li>• Price lock-in guarantees</li>
                    <li>• Historical pricing data</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-green-800 mb-2">Comparison Tools</h6>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Multi-quote side-by-side view</li>
                    <li>• Interactive price sliders</li>
                    <li>• Quality vs. cost matrix</li>
                    <li>• Time vs. price optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Book Phase */}
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</div>
              <h4 className="text-xl font-bold text-purple-900">Real-time Booking & Transparent Quotes</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Transparent Quote System</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Live Pricing:</strong> Real-time price updates from all facilities</li>
                  <li>• <strong>Transparent Comparison:</strong> Side-by-side quote breakdowns</li>
                  <li>• <strong>Cost Breakdown:</strong> Detailed labor, parts, and service fees</li>
                  <li>• <strong>Price History:</strong> Historical pricing trends and predictions</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Instant Booking Features</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>One-Click Booking:</strong> Instant confirmation with live availability</li>
                  <li>• <strong>Quote Lock-in:</strong> Secure pricing for 24-48 hours</li>
                  <li>• <strong>Multi-Quote Comparison:</strong> Compare up to 5 quotes simultaneously</li>
                  <li>• <strong>Smart Recommendations:</strong> AI suggests best value options</li>
                </ul>
              </div>
            </div>
            
            {/* Enhanced Quote Comparison Section */}
            <div className="mt-6 bg-white border border-purple-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-3">Transparent Quote Comparison Features</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h6 className="font-semibold text-blue-800 mb-2">Real-time Pricing</h6>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Live price updates</li>
                    <li>• Dynamic availability</li>
                    <li>• Instant quote generation</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h6 className="font-semibold text-green-800 mb-2">Transparent Breakdown</h6>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Labor costs</li>
                    <li>• Parts pricing</li>
                    <li>• Service fees</li>
                    <li>• Tax calculations</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <h6 className="font-semibold text-orange-800 mb-2">Smart Comparison</h6>
                  <ul className="text-xs text-orange-700 space-y-1">
                    <li>• Side-by-side analysis</li>
                    <li>• Quality vs. price metrics</li>
                    <li>• Time vs. cost optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Track Phase */}
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</div>
              <h4 className="text-xl font-bold text-orange-900">AI-Powered Tracking</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Real-time Monitoring</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Progress Updates:</strong> AI-generated status reports</li>
                  <li>• <strong>Time Predictions:</strong> ML-based completion estimates</li>
                  <li>• <strong>Issue Detection:</strong> Early warning for potential delays</li>
                  <li>• <strong>Photo Updates:</strong> Visual progress documentation</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Predictive Analytics</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Completion Forecasting:</strong> AI predicts finish times</li>
                  <li>• <strong>Quality Monitoring:</strong> Tracks service quality metrics</li>
                  <li>• <strong>Cost Tracking:</strong> Real-time budget monitoring</li>
                  <li>• <strong>Next Service Suggestions:</strong> Proactive maintenance recommendations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pay Phase */}
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">5</div>
              <h4 className="text-xl font-bold text-teal-900">Digital Wallet & Web3 Payments</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Traditional Payment Features</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>CarCare Wallet:</strong> Secure digital payment integration</li>
                  <li>• <strong>Fraud Detection:</strong> ML-powered security monitoring</li>
                  <li>• <strong>Payment Optimization:</strong> Suggests best payment methods</li>
                  <li>• <strong>Split Payments:</strong> AI-managed payment distribution</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Web3 & Crypto Integration (Q2 2026)</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Crypto Payments:</strong> Bitcoin, Ethereum, and major cryptocurrencies</li>
                  <li>• <strong>DeFi Integration:</strong> Decentralized finance protocols</li>
                  <li>• <strong>NFT Rewards:</strong> Unique digital collectibles for loyalty</li>
                  <li>• <strong>Smart Contracts:</strong> Automated payment processing</li>
                </ul>
              </div>
            </div>
            
            {/* Web3 Payment Features */}
            <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-3">🚀 Web3 Payment Roadmap (Q2 2026)</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h6 className="font-semibold text-blue-800 mb-2">Crypto Payments</h6>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Bitcoin (BTC)</li>
                    <li>• Ethereum (ETH)</li>
                    <li>• USDC/USDT stablecoins</li>
                    <li>• Multi-chain support</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h6 className="font-semibold text-green-800 mb-2">DeFi Features</h6>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Yield farming rewards</li>
                    <li>• Liquidity staking</li>
                    <li>• Cross-chain swaps</li>
                    <li>• Governance tokens</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h6 className="font-semibold text-purple-800 mb-2">NFT Integration</h6>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Service completion NFTs</li>
                    <li>• Loyalty reward NFTs</li>
                    <li>• Vehicle history NFTs</li>
                    <li>• Exclusive access tokens</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Financial Intelligence */}
            <div className="mt-4 bg-white border border-teal-200 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-3">Financial Intelligence & Web3</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h6 className="font-semibold text-teal-800 mb-2">Traditional Finance</h6>
                  <ul className="text-sm text-teal-700 space-y-1">
                    <li>• Budget management & AI spending recommendations</li>
                    <li>• Loyalty rewards & automatic point calculations</li>
                    <li>• Insurance integration & claims processing</li>
                    <li>• Flexible payment plans & financing options</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold text-indigo-800 mb-2">Web3 Finance (Q2 2026)</h6>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    <li>• Crypto portfolio management</li>
                    <li>• DeFi yield optimization</li>
                    <li>• Cross-chain asset management</li>
                    <li>• Smart contract automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Review Phase */}
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">6</div>
              <h4 className="text-xl font-bold text-pink-900">AI-Enhanced Reviews</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Intelligent Review System</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Sentiment Analysis:</strong> AI analyzes review emotions</li>
                  <li>• <strong>Review Generation:</strong> AI helps users write detailed reviews</li>
                  <li>• <strong>Quality Scoring:</strong> ML-based service quality ratings</li>
                  <li>• <strong>Feedback Categorization:</strong> Automatic review classification</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-3">Continuous Learning</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Pattern Recognition:</strong> Identifies service quality trends</li>
                  <li>• <strong>Recommendation Refinement:</strong> Improves suggestions over time</li>
                  <li>• <strong>Predictive Maintenance:</strong> Suggests future service needs</li>
                  <li>• <strong>Personalization:</strong> Tailors experience to user preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* AI Technology Stack */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4">AI Technology Infrastructure</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Machine Learning</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• TensorFlow & PyTorch</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision APIs</li>
                <li>• Predictive Analytics</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Data Processing</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Real-time Data Streaming</li>
                <li>• Big Data Analytics</li>
                <li>• Cloud Computing (AWS/Azure)</li>
                <li>• Edge Computing</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Integration</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• RESTful APIs</li>
                <li>• Microservices Architecture</li>
                <li>• Real-time Communication</li>
                <li>• Mobile AI SDKs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Web3 & Crypto Technology Stack */}
        <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4">🚀 Web3 & Crypto Technology Stack (Q2 2026)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Blockchain Infrastructure</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Ethereum & Polygon networks</li>
                <li>• Smart contract development</li>
                <li>• Web3 wallet integration</li>
                <li>• Cross-chain protocols</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">DeFi Integration</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Yield farming protocols</li>
                <li>• Liquidity staking pools</li>
                <li>• Automated market makers</li>
                <li>• Governance token systems</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">NFT & Tokenization</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• ERC-721 & ERC-1155 standards</li>
                <li>• Digital collectibles</li>
                <li>• Loyalty token systems</li>
                <li>• Metaverse integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-4">AI-Enhanced Value Creation</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Smart Convenience</p>
            <p className="text-sm">AI-powered 24/7 booking & predictive tracking</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Intelligent Savings</p>
            <p className="text-sm">ML-optimized pricing & cost predictions</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Quality Assurance</p>
            <p className="text-sm">AI-verified technicians & service quality</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">AI Transparency</p>
            <p className="text-sm">Real-time data-driven pricing & sentiment analysis</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Smart Security</p>
            <p className="text-sm">ML-powered fraud detection & encrypted transactions</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4">
            <p className="font-bold mb-1">Predictive Loyalty</p>
            <p className="text-sm">AI-driven rewards & personalized recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcess;
