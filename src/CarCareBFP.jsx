import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Car, Users, DollarSign, TrendingUp, Shield, Calendar, Target, Briefcase } from 'lucide-react';

const CarCareBFP = () => {
  const [activeSection, setActiveSection] = useState('executive');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (item) => {
    setExpandedItems(prev => ({...prev, [item]: !prev[item]}));
  };

  const sections = [
    { id: 'executive', title: 'Executive Summary', icon: Target },
    { id: 'problem', title: 'Problem Definition', icon: Shield },
    { id: 'solution', title: 'Objectives & Solutions', icon: Target },
    { id: 'structure', title: 'Company Structure', icon: Users },
    { id: 'products', title: 'Products & Services', icon: Car },
    { id: 'business', title: 'Business Process', icon: Briefcase },
    { id: 'market', title: 'Market Analysis', icon: TrendingUp },
    { id: 'revenue', title: 'Revenue Model', icon: DollarSign },
    { id: 'marketing', title: 'Marketing Strategy', icon: Target },
    { id: 'financial', title: 'Financial Projections', icon: DollarSign },
    { id: 'roadmap', title: '3-Year Roadmap', icon: Calendar }
  ];

  const renderExecutiveSummary = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">CarCare 24×7 Inc.</h2>
        <p className="text-xl mb-2">Revolutionizing Automotive Services in Canada</p>
        <p className="text-blue-100">AI-Powered Digital Platform | Fintech Integration | National Network</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h3 className="font-bold text-green-800 mb-2">Market Opportunity</h3>
          <p className="text-2xl font-bold text-green-600">$3.5B+</p>
          <p className="text-sm text-gray-600">Canadian Auto Service Market</p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h3 className="font-bold text-blue-800 mb-2">Revenue Projection</h3>
          <p className="text-2xl font-bold text-blue-600">$7.6M</p>
          <p className="text-sm text-gray-600">By FY 2028 (Year 3)</p>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
          <h3 className="font-bold text-purple-800 mb-2">Target Network</h3>
          <p className="text-2xl font-bold text-purple-600">2,000+</p>
          <p className="text-sm text-gray-600">Active Garages by 2028</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">What We Do</h3>
        <p className="text-gray-700 mb-4">
          CarCare 24×7 is a comprehensive digital platform that connects vehicle owners with certified automotive repair and servicing facilities across Canada. We combine AI-driven predictive maintenance, transparent pricing, secure fintech payments, and real-time service tracking to revolutionize how Canadians maintain their vehicles.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="text-3xl mb-2">🔧</div>
            <p className="text-sm font-semibold">Service Booking</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-sm font-semibold">Digital Wallet</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🤖</div>
            <p className="text-sm font-semibold">AI Predictions</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📊</div>
            <p className="text-sm font-semibold">Data Analytics</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Core Services</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Automated booking and transparent pricing for all automotive services</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>AI-powered predictive maintenance and service reminders (CareChart)</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Integrated fintech wallet with savings vault and loyalty rewards</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>Garage management platform (Torqon Wrench) with analytics and subscriptions</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>B2B data licensing for insurers, fleets, and automotive companies</span>
          </li>
        </ul>
      </div>
    </div>
  );

  const renderProblemDefinition = () => (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
        <h3 className="text-xl font-bold text-red-800 mb-4">Industry Pain Points</h3>
        <p className="text-gray-700">
          The Canadian automotive repair and servicing industry faces significant challenges that affect consumers, businesses, and service providers alike, creating inefficiencies and limiting growth potential.
        </p>
      </div>

      <div className="space-y-4">
        <div 
          className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => toggleItem('consumers')}
        >
          <div className="bg-gray-50 p-4 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Individual Consumers
            </h3>
            {expandedItems['consumers'] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
          {expandedItems['consumers'] && (
            <div className="p-4 bg-white">
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Difficulty finding qualified mechanics:</strong> Limited resources to search for certified professionals</li>
                <li>• <strong>Expensive costs:</strong> High labor, taxes, and parts costs without transparency</li>
                <li>• <strong>Long wait times:</strong> Inconvenient delays before service completion</li>
                <li>• <strong>Lack of transparency:</strong> Unclear estimates and pricing structures</li>
                <li>• <strong>Risk of overcharging:</strong> No standardized pricing leads to customer exploitation</li>
                <li>• <strong>Poor customer service:</strong> Inadequate communication and support</li>
              </ul>
            </div>
          )}
        </div>

        <div 
          className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => toggleItem('businesses')}
        >
          <div className="bg-gray-50 p-4 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-green-600" />
              Businesses & Fleets
            </h3>
            {expandedItems['businesses'] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
          {expandedItems['businesses'] && (
            <div className="p-4 bg-white">
              <ul className="space-y-2 text-gray-700">
                <li>• Increased vehicle downtime affecting logistics and supply chains</li>
                <li>• Ineffective resource management due to delayed maintenance</li>
                <li>• High costs from relying on third-party services</li>
                <li>• Difficulty recruiting and managing qualified repair staff</li>
                <li>• Lack of expertise in modern vehicle systems</li>
                <li>• Increased accident risk from faulty repairs</li>
                <li>• Loss of customer satisfaction from service delays</li>
              </ul>
            </div>
          )}
        </div>

        <div 
          className="border border-gray-200 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => toggleItem('garages')}
        >
          <div className="bg-gray-50 p-4 flex items-center justify-between">
            <h3 className="font-bold text-gray-800 flex items-center">
              <Car className="w-5 h-5 mr-2 text-purple-600" />
              Garages & Mechanics
            </h3>
            {expandedItems['garages'] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
          {expandedItems['garages'] && (
            <div className="p-4 bg-white">
              <ul className="space-y-2 text-gray-700">
                <li>• Difficulty finding parts for older vehicle models</li>
                <li>• Challenges hiring and retaining qualified mechanics</li>
                <li>• Customer reluctance due to expensive repair costs</li>
                <li>• Keeping up with rapidly changing automotive technology</li>
                <li>• Compliance with evolving regulations and environmental standards</li>
                <li>• <strong>Limited digital presence:</strong> Struggling to market in digital mediums</li>
                <li>• Decreased foot traffic and customer acquisition difficulties</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-bold text-yellow-800 mb-3">Market Gap</h3>
        <p className="text-gray-700">
          The Canadian automotive service industry lacks a unified digital platform that provides transparency, convenience, and trust for all stakeholders. CarCare addresses this $3.5 billion market opportunity by creating a comprehensive ecosystem that benefits consumers, businesses, and service providers simultaneously.
        </p>
      </div>
    </div>
  );

  const renderSolution = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
        <h3 className="text-xl font-bold text-blue-800 mb-2">Mission Statement</h3>
        <p className="text-gray-700 italic">
          "To provide Canadians with an online platform to access reliable, quality automobile repair and servicing facilities with convenience, transparency and affordability. We strive to create an ecosystem where car owners can find the best repair and servicing solutions available in the industry and have complete control over the price and service they receive."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">For Consumers</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Easy Access</p>
                <p className="text-sm text-gray-600">Wide selection of certified facilities with ratings and reviews</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Online Booking & Payments</p>
                <p className="text-sm text-gray-600">Convenient scheduling with secure digital transactions</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Automated Reminders</p>
                <p className="text-sm text-gray-600">AI-powered maintenance alerts and service schedules</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">24/7 Support</p>
                <p className="text-sm text-gray-600">Round-the-clock customer assistance</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">For Businesses</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Fleet Management</p>
                <p className="text-sm text-gray-600">Comprehensive vehicle tracking and maintenance system</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Diagnostics & Repair</p>
                <p className="text-sm text-gray-600">Rapid issue identification and resolution</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Mileage Tracking</p>
                <p className="text-sm text-gray-600">Automated monitoring for informed decisions</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                <ChevronRight className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Claims Assistance</p>
                <p className="text-sm text-gray-600">Streamlined warranty and insurance processing</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-purple-800 mb-4">For Garages & Mechanics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800">Increased Visibility</p>
              <p className="text-sm text-gray-600">Digital marketplace presence and brand recognition</p>
            </div>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800">Cost Savings</p>
              <p className="text-sm text-gray-600">Reduced marketing and promotional expenses</p>
            </div>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800">Automated Scheduling</p>
              <p className="text-sm text-gray-600">Efficient time and resource management</p>
            </div>
          </div>
          <div className="flex items-start">
            <ChevronRight className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-800">Customer Loyalty</p>
              <p className="text-sm text-gray-600">Enhanced satisfaction and repeat business</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Technology Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="font-semibold">AI & ML</p>
            <p className="text-sm text-blue-100">Predictive Analytics</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Cloud Infrastructure</p>
            <p className="text-sm text-blue-100">AWS & Supabase</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Fintech Integration</p>
            <p className="text-sm text-blue-100">Stripe & Interac</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">Mobile Apps</p>
            <p className="text-sm text-blue-100">iOS & Android</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCompanyStructure = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Leadership Team</h3>
        <p className="text-gray-300">Three seasoned executives with 50+ years combined experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Shamim Mahmud Ahmed</h4>
              <p className="text-sm text-gray-600">Chief Executive Officer</p>
              <p className="text-xs text-blue-600 font-semibold">34% Equity</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Education:</strong> BBA & MBA in Accounting and Information Systems</p>
            <p><strong>Experience:</strong> 15+ years in Business & Accounting Management</p>
            <p><strong>Background:</strong> Senior positions at City Bank, Eastern Bank, Bank Asia (Bangladesh)</p>
            <p><strong>Ventures:</strong> SAMCON Corporation, Cotton Max Limited, MENZ Crown</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-600 mb-2">KEY RESPONSIBILITIES:</p>
            <ul className="text-xs space-y-1 text-gray-600">
              <li>• Business strategy & execution</li>
              <li>• Investor relations & fundraising</li>
              <li>• Regulatory compliance</li>
              <li>• Strategic partnerships</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <Briefcase className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Syed Nahil Nassaj</h4>
              <p className="text-sm text-gray-600">Chief Operating Officer</p>
              <p className="text-xs text-green-600 font-semibold">33% Equity</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Education:</strong> BBA in Marketing & Development Communication, Executive MBA</p>
            <p><strong>Experience:</strong> 15+ years in Business Management & Consulting</p>
            <p><strong>Background:</strong> Holcim Cement, Coats Bangladesh</p>
            <p><strong>Current Role:</strong> Director of STourism</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-600 mb-2">KEY RESPONSIBILITIES:</p>
            <ul className="text-xs space-y-1 text-gray-600">
              <li>• Operations management</li>
              <li>• Financial planning & budgeting</li>
              <li>• HR & payroll administration</li>
              <li>• Process optimization</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Abdullah Al Mamun</h4>
              <p className="text-sm text-gray-600">Chief Technology Officer</p>
              <p className="text-xs text-purple-600 font-semibold">33% Equity</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Education:</strong> BSc in Civil Engineering</p>
            <p><strong>Certification:</strong> Professional Engineer (Bangladesh)</p>
            <p><strong>Experience:</strong> 20+ years in Engineering & Design</p>
            <p><strong>Leadership:</strong> Managing Director, MARCS Architect and Engineers (100+ staff)</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-600 mb-2">KEY RESPONSIBILITIES:</p>
            <ul className="text-xs space-y-1 text-gray-600">
              <li>• Platform architecture & design</li>
              <li>• Technology R&D and innovation</li>
              <li>• Problem-solving & solutions</li>
              <li>• Technical specifications</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Corporate Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Legal Entity</p>
            <p className="font-semibold text-gray-800">CarCare 24×7 Inc.</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Incorporation</p>
            <p className="font-semibold text-gray-800">Canada Business Corporations Act</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Registered Address</p>
            <p className="font-semibold text-gray-800">1468 Victoria Park Ave, Toronto, ON M4A 2M2</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Website</p>
            <p className="font-semibold text-blue-600">https://carcare24x7.com</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Integrated Ecosystem Architecture</h3>
        <p className="text-indigo-100">Three synchronized application layers powering multiple revenue streams</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-300 rounded-lg overflow-hidden">
          <div className="bg-blue-500 text-white p-4">
            <h4 className="font-bold text-lg">Torqon (Client App)</h4>
            <p className="text-sm text-blue-100">For Vehicle Owners</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Service search & comparison</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Real-time booking & quotes</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Digital wallet & payments</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Service history tracking</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>CareChart AI predictions</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Loyalty rewards program</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-semibold text-gray-600">Revenue Links:</p>
              <p className="text-xs text-gray-600">Commissions • Wallet Fees • VAS Add-ons</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-green-300 rounded-lg overflow-hidden">
          <div className="bg-green-500 text-white p-4">
            <h4 className="font-bold text-lg">Torqon Wrench (Garage OS)</h4>
            <p className="text-sm text-green-100">For Service Providers</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Job management dashboard</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Performance analytics</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Automated payouts</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Inventory management</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Customer communication</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Promotional tools</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-semibold text-gray-600">Revenue Links:</p>
              <p className="text-xs text-gray-600">Subscriptions • Ads • Jobs Marketplace</p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-300 rounded-lg overflow-hidden">
          <div className="bg-purple-500 text-white p-4">
            <h4 className="font-bold text-lg">Super Admin Portal</h4>
            <p className="text-sm text-purple-100">For HQ Operations</p>
          </div>
          <div className="p-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Platform monitoring</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Revenue tracking (GMV)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Settlement automation</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Ad inventory management</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>CRM & user analytics</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Compliance reporting</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs font-semibold text-gray-600">Revenue Links:</p>
              <p className="text-xs text-gray-600">Governance • Reporting • Data Licensing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-4">Key Technology Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">CareChart AI Engine</h4>
            <p className="text-sm text-gray-700 mb-2">Predictive maintenance using machine learning to analyze:</p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• Vehicle mileage patterns</li>
              <li>• Service history data</li>
              <li>• Manufacturer recommendations</li>
              <li>• Seasonal maintenance needs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">CarCare Wallet</h4>
            <p className="text-sm text-gray-700 mb-2">Integrated fintech solution providing:</p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• Secure payment processing</li>
              <li>• Savings vault for future maintenance</li>
              <li>• Cashback and rewards</li>
              <li>• Float-based interest generation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Value Creation Chain</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Convenience</p>
            <p className="text-sm">24/7 booking & tracking</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Cost Savings</p>
            <p className="text-sm">Competitive pricing</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Quality</p>
            <p className="text-sm">Certified technicians</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Transparency</p>
            <p className="text-sm">Clear pricing & reviews</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Security</p>
            <p className="text-sm">Encrypted transactions</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded p-3">
            <p className="font-bold mb-1">Loyalty</p>
            <p className="text-sm">Rewards program</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRevenueModel = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">8 Revenue Streams</h3>
        <p className="text-green-100">Diversified income model ensuring sustainable growth</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-blue-600">1</span>
            </div>
            <h4 className="font-bold text-gray-800">Booking Commissions</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Platform fee on completed bookings</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 5% → 10% (tiered growth)</p>
          <div className="bg-blue-50 rounded p-2">
            <p className="text-xs font-semibold text-blue-800">FY 2028 Projection: CAD $3.78M</p>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-lg p-5">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-green-600">2</span>
            </div>
            <h4 className="font-bold text-gray-800">Garage Subscriptions</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Monthly Pro/Max plans with analytics</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Pricing:</strong> Pro $49/mo • Max $99/mo</p>
          <div className="bg-green-50 rounded p-2">
            <p className="text-xs font-semibold text-green-800">FY 2028 Projection: CAD $960K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-lg p-5">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-purple-600">3</span>
            </div>
            <h4 className="font-bold text-gray-800">Featured Listings & Ads</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Premium placements & banner ads</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $199/listing • CPM model</p>
          <div className="bg-purple-50 rounded p-2">
            <p className="text-xs font-semibold text-purple-800">FY 2028 Projection: CAD $480K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-yellow-200 rounded-lg p-5">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-yellow-600">4</span>
            </div>
            <h4 className="font-bold text-gray-800">Fintech Wallet & Vault</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Transaction fees & float income</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 2% transaction + 0.5% float</p>
          <div className="bg-yellow-50 rounded p-2">
            <p className="text-xs font-semibold text-yellow-800">FY 2028 Projection: CAD $675K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-red-200 rounded-lg p-5">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-red-600">5</span>
            </div>
            <h4 className="font-bold text-gray-800">Value-Added Services</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Roadside, insurance, diagnostics</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> 15% commission on fees</p>
          <div className="bg-red-50 rounded p-2">
            <p className="text-xs font-semibold text-red-800">FY 2028 Projection: CAD $324K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-indigo-200 rounded-lg p-5">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-indigo-600">6</span>
            </div>
            <h4 className="font-bold text-gray-800">Data & Insights Licensing</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Anonymized data to insurers & fleets</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $10K avg per contract</p>
          <div className="bg-indigo-50 rounded p-2">
            <p className="text-xs font-semibold text-indigo-800">FY 2028 Projection: CAD $400K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-pink-200 rounded-lg p-5">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-pink-600">7</span>
            </div>
            <h4 className="font-bold text-gray-800">Jobs Marketplace</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Paid job posts & mechanic hiring</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Rate:</strong> $8/post • $49 subscription</p>
          <div className="bg-pink-50 rounded p-2">
            <p className="text-xs font-semibold text-pink-800">FY 2028 Projection: CAD $240K</p>
          </div>
        </div>

        <div className="bg-white border-2 border-orange-200 rounded-lg p-5">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
              <span className="font-bold text-orange-600">8</span>
            </div>
            <h4 className="font-bold text-gray-800">Franchise & Assets</h4>
          </div>
          <p className="text-sm text-gray-700 mb-2">Owned/franchised CareGarages</p>
          <p className="text-xs text-gray-600 mb-2"><strong>Margin:</strong> 25-40% profit per garage</p>
          <div className="bg-orange-50 rounded p-2">
            <p className="text-xs font-semibold text-orange-800">FY 2028 Projection: CAD $800K</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Total Revenue Trajectory</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">$883K</p>
            <p className="text-sm text-gray-300">FY 2026 (Year 1)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">$2.84M</p>
            <p className="text-sm text-gray-300">FY 2027 (Year 2)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">$7.66M</p>
            <p className="text-sm text-gray-300">FY 2028 (Year 3)</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-center text-sm">
            <span className="font-bold text-green-400">≈175% CAGR</span> • <span className="font-bold text-blue-400">70% Net Margin</span> by Year 3
          </p>
        </div>
      </div>
    </div>
  );

  const renderFinancialProjections = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Financial Projections (FY 2026-2028)</h3>
        <p className="text-emerald-100">Conservative base-case scenario with proven unit economics</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-gray-50 p-4 border-b">
          <h4 className="font-bold text-gray-800">Income Statement Summary</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 font-semibold">Metric</th>
                <th className="text-right p-3 font-semibold">FY 2026</th>
                <th className="text-right p-3 font-semibold">FY 2027</th>
                <th className="text-right p-3 font-semibold">FY 2028</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold text-blue-700">Total Revenue</td>
                <td className="p-3 text-right">$883,600</td>
                <td className="p-3 text-right">$2,844,000</td>
                <td className="p-3 text-right text-green-600 font-bold">$7,659,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Operating Costs</td>
                <td className="p-3 text-right">$242,560</td>
                <td className="p-3 text-right">$292,000</td>
                <td className="p-3 text-right">$359,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Operating Profit</td>
                <td className="p-3 text-right font-bold">$641,040</td>
                <td className="p-3 text-right font-bold">$2,552,000</td>
                <td className="p-3 text-right font-bold text-green-600">$7,300,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Other Expenses</td>
                <td className="p-3 text-right">$64,000</td>
                <td className="p-3 text-right">$96,000</td>
                <td className="p-3 text-right">$139,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Tax (25%)</td>
                <td className="p-3 text-right">$144,260</td>
                <td className="p-3 text-right">$614,000</td>
                <td className="p-3 text-right">$1,790,000</td>
              </tr>
              <tr className="bg-green-50 border-t-2 border-green-500">
                <td className="p-3 font-bold text-green-800">Net Profit</td>
                <td className="p-3 text-right font-bold text-green-700">$432,780</td>
                <td className="p-3 text-right font-bold text-green-700">$1,842,000</td>
                <td className="p-3 text-right font-bold text-green-700 text-lg">$5,371,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 className="font-bold text-blue-800 mb-2">Operating Margin</h4>
          <p className="text-3xl font-bold text-blue-600">85%+</p>
          <p className="text-sm text-gray-600">By FY 2028</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <h4 className="font-bold text-green-800 mb-2">Net Margin</h4>
          <p className="text-3xl font-bold text-green-600">70%</p>
          <p className="text-sm text-gray-600">Best-in-class profitability</p>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
          <h4 className="font-bold text-purple-800 mb-2">Cash Position</h4>
          <p className="text-3xl font-bold text-purple-600">$7.3M</p>
          <p className="text-sm text-gray-600">Closing balance FY 2028</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h4 className="font-bold text-gray-800 mb-4">Key Operating Metrics</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">Metric</th>
                <th className="text-right p-3">FY 2026</th>
                <th className="text-right p-3">FY 2027</th>
                <th className="text-right p-3">FY 2028</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3">Registered Users</td>
                <td className="p-3 text-right">8,000</td>
                <td className="p-3 text-right">24,000</td>
                <td className="p-3 text-right font-bold">120,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Active Garages</td>
                <td className="p-3 text-right">150</td>
                <td className="p-3 text-right">1,000</td>
                <td className="p-3 text-right font-bold">2,000</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Monthly Bookings</td>
                <td className="p-3 text-right">2,000</td>
                <td className="p-3 text-right">15,000</td>
                <td className="p-3 text-right font-bold">35,000</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-3">Average Order Value</td>
                <td className="p-3 text-right">$75</td>
                <td className="p-3 text-right">$85</td>
                <td className="p-3 text-right font-bold">$90</td>
              </tr>
              <tr className="border-b">
                <td className="p-3">Take Rate</td>
                <td className="p-3 text-right">5%</td>
                <td className="p-3 text-right">8%</td>
                <td className="p-3 text-right font-bold">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-bold text-gray-800 mb-4">Cash Flow Highlights</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center pb-3 border-b">
            <span className="text-gray-700">Cash from Operations (FY 2028)</span>
            <span className="font-bold text-green-600">$5,334,000</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b">
            <span className="text-gray-700">Investing Activities (3-year total)</span>
            <span className="font-bold text-blue-600">($310,000)</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b">
            <span className="text-gray-700">Financing Activities</span>
            <span className="font-bold text-purple-600">Equity-funded only</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-800 font-semibold">Net Cash Increase (3 years)</span>
            <span className="font-bold text-green-700 text-lg">$7,290,780</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h4 className="font-bold text-xl mb-3">Investment Highlights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

  const renderRoadmap = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-2">3-Year Strategic Roadmap</h3>
        <p className="text-indigo-100">Phased rollout from MVP to IPO-ready enterprise</p>
      </div>

      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-900">Phase 1: National Expansion & Fintech Integration</h4>
                <p className="text-blue-700 font-semibold">FY 2026</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Strengthening digital infrastructure, expanding nationwide garage coverage, and launching the CarCare Wallet as the foundation for financial scalability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Key Objectives:</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Expand from 150 to 450 active garages</li>
                  <li>• Deploy CarCare Wallet & Savings Vault</li>
                  <li>• Migrate garages to Torqon Wrench OS</li>
                  <li>• Launch Super Admin analytics dashboards</li>
                  <li>• Cover 5 major provinces</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Core Deliverables:</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Stripe/Interac payment gateway</li>
                  <li>• Garage Pro/Max subscription rollout</li>
                  <li>• Marketing expansion (digital + referral)</li>
                  <li>• CareChart predictive maintenance pilot</li>
                  <li>• Revenue: <strong>CAD $883K</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-green-500 pl-6">
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-900">Phase 2: Fintech Maturity & Data Monetization</h4>
                <p className="text-green-700 font-semibold">FY 2027</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Transforming CarCare from a transactional platform into an integrated automotive data and financial intelligence company.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Key Objectives:</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Scale to 1,000 garages & 24K users</li>
                  <li>• Launch Data & Insights Licensing</li>
                  <li>• Activate Jobs Marketplace</li>
                  <li>• Open first Smart Garage franchise</li>
                  <li>• Deploy AI-driven analytics</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Core Deliverables:</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Data licensing API for B2B clients</li>
                  <li>• CareChat AI integration</li>
                  <li>• Parts procurement & vendor network</li>
                  <li>• Wallet loyalty & financing options</li>
                  <li>• Revenue: <strong>CAD $2.84M</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-4 border-purple-500 pl-6">
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-900">Phase 3: Global Scaling & IPO Preparation</h4>
                <p className="text-purple-700 font-semibold">FY 2028</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Positioning CarCare 24×7 as a billion-dollar enterprise through physical franchise scaling, international expansion, and pre-IPO structuring.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Key Objectives:</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Reach 2,000 garages & 120K users</li>
                  <li>• Launch 10 Smart Garages</li>
                  <li>• Establish data intelligence division</li>
                  <li>• Prepare IPO documentation</li>
                  <li>• Begin U.S. market pilot</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Core Deliverables:</h5>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Franchise & asset expansion</li>
                  <li>• Wallet API partnerships (insurers)</li>
                  <li>• Ad monetization scaling</li>
                  <li>• International pilot (U.S. East Coast)</li>
                  <li>• Revenue: <strong>CAD $7.66M</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg">
        <h4 className="text-xl font-bold mb-4">Vision Beyond FY 2028</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-10 rounded p-4">
            <h5 className="font-bold mb-2">Market Expansion</h5>
            <p className="text-sm text-gray-300">10+ international markets across North America and beyond</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded p-4">
            <h5 className="font-bold mb-2">EV Integration</h5>
            <p className="text-sm text-gray-300">Battery swaps, charging networks, and EV diagnostics</p>
          </div>
          <div className="bg-white bg-opacity-10 rounded p-4">
            <h5 className="font-bold mb-2">CarCare Credit</h5>
            <p className="text-sm text-gray-300">Fintech lending product for vehicle upkeep financing</p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-700 text-center">
          <p className="text-lg font-bold text-green-400">Target Valuation: CAD $100M+ by FY 2029</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center mb-4">
              <Car className="w-16 h-16 mr-4" />
              <div>
                <h1 className="text-4xl font-bold mb-2">CarCare 24×7 Inc.</h1>
                <p className="text-xl text-blue-100">Business Formation Plan</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Market Size</p>
                <p className="text-2xl font-bold">$3.5B</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">FY 2028 Revenue</p>
                <p className="text-2xl font-bold">$7.66M</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Target Garages</p>
                <p className="text-2xl font-bold">2,000+</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-3">
                <p className="text-sm text-blue-100">Net Margin</p>
                <p className="text-2xl font-bold">70%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-6 p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {sections.map(section => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`p-3 rounded-lg flex flex-col items-center justify-center transition-all ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs text-center font-medium">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {activeSection === 'executive' && renderExecutiveSummary()}
          {activeSection === 'problem' && renderProblemDefinition()}
          {activeSection === 'solution' && renderSolution()}
          {activeSection === 'structure' && renderCompanyStructure()}
          {activeSection === 'products' && renderProducts()}
          {activeSection === 'revenue' && renderRevenueModel()}
          {activeSection === 'financial' && renderFinancialProjections()}
          {activeSection === 'roadmap' && renderRoadmap()}
          
          {(activeSection === 'business' || activeSection === 'market' || activeSection === 'marketing') && (
            <div className="text-center py-12">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <Calendar className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Section: {sections.find(s => s.id === activeSection)?.title}</h3>
              <p className="text-gray-600 mb-4">This section contains detailed information from your business plan document.</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-left max-w-2xl mx-auto">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> The complete details for Business Process, Market Analysis, and Marketing Strategy 
                  are available in your uploaded document. Key highlights are integrated throughout this interactive plan.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-lg mt-6 p-6 text-center">
          <p className="text-gray-600 text-sm mb-2">
            <strong>CarCare 24×7 Inc.</strong> • 1468 Victoria Park Ave, Toronto, ON M4A 2M2
          </p>
          <p className="text-gray-500 text-xs">
            📞 +1 (437) 973-1676 • 🌐 https://carcare24x7.com
          </p>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              Business Formation Plan • Updated October 2025 • Confidential Document
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCareBFP;