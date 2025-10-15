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
                <li>• 1 Flutter Developer (Mobile App Development)</li>
                <li>• 1 Backend Developer (API & Database)</li>
                <li>• 1 Backend + DevOps Engineer (Infrastructure & Deployment)</li>
                <li>• 1 UI/UX Designer</li>
                <li>• 1 Marketing Specialist - Aimlake Inc.</li>
                <li>• 1 Customer Support Representative</li>
                <li>• 1 Operations Coordinator</li>
                <li>• 3 On-Field Associates: Garage acquisition & partner management</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Expansion (Year 2-5)</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-green-700 text-sm mb-2">YEAR 2 (23 total staff)</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CEO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CTO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">COO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Software Developers:</span> 5
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">UI/UX Designer:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Customer Support:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Operations Coordinator:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">System Administrator:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Field Associates:</span> 5
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Sales Reps:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Data Scientist:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Marketing Manager:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Regional Ops Manager:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Legal Counsel:</span> 1
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-green-700 text-sm mb-2">YEAR 3 (37 total staff)</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CEO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CTO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">COO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">DevOps Engineer:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Software Developers:</span> 8
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">UI/UX Designer:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Customer Support:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Operations Coordinators:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">System Administrator:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Field Associates:</span> 7
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Sales Reps:</span> 4
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Data Scientists:</span> 3
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Marketing Managers:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Regional Ops Managers:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Legal Counsel:</span> 1
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-green-700 text-sm mb-2">YEAR 4 (62 total staff)</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CEO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CTO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">COO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CMO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CFO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">DevOps Engineer:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Software Developers:</span> 11
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">UI/UX Designer:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">AI/ML Engineers:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Security Specialist:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Customer Support:</span> 3
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Operations Coordinators:</span> 3
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">System Administrators:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Field Associates:</span> 10
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Regional Sales Managers:</span> 3
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Sales Reps:</span> 6
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Data Scientists:</span> 5
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Marketing Managers:</span> 3
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Regional Ops Managers:</span> 3
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Business Dev Managers:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Legal Counsel:</span> 1
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-green-700 text-sm mb-2">YEAR 5 (111 total staff)</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CEO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CTO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">COO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CMO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">CFO:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">DevOps Engineer:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Software Developers:</span> 12
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">UI/UX Designer:</span> 1
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">AI/ML Engineers:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Security Specialists:</span> 2
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Customer Support:</span> 5
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Operations Coordinators:</span> 5
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">System Administrators:</span> 3
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Field Associates:</span> 20
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Regional Sales Managers:</span> 6
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Sales Reps:</span> 20
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Data Scientists:</span> 6
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Marketing Managers:</span> 9
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Regional Ops Managers:</span> 6
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Business Dev Managers:</span> 6
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Legal Counsel:</span> 2
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-green-200">
                  <h5 className="font-semibold text-green-800 text-sm mb-2">Total Manpower Summary</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 1:</span> 13 staff
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 2:</span> 23 staff
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 3:</span> 37 staff
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 4:</span> 62 staff
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 5:</span> 111 staff
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-orange-800 mb-2">Franchisee Assets/Fast Track Smart Garages</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-orange-700 text-sm mb-2">Asset Growth Projection (2026-2030)</h5>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 1 (2026):</span> 1 asset (3 employees)
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 2 (2027):</span> 2 assets (6 employees)
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 3 (2028):</span> 5 assets (15 employees)
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 4 (2029):</span> 20 assets (60 employees)
                    </div>
                    <div className="bg-white p-2 rounded border">
                      <span className="font-semibold text-gray-600">Year 5 (2030):</span> 50 assets (150 employees)
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-orange-200">
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="bg-white p-3 rounded border text-center">
                      <span className="font-semibold text-orange-800 text-sm">Total Assets by 2030</span>
                      <p className="text-2xl font-bold text-orange-600">50</p>
                    </div>
                    <div className="bg-white p-3 rounded border text-center">
                      <span className="font-semibold text-orange-800 text-sm">Total Employees by 2030</span>
                      <p className="text-2xl font-bold text-orange-600">150</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">
                    Fast Track Smart Garages represent owned/franchised locations with integrated technology, 
                    AI diagnostics, and premium service capabilities. Each asset operates as an independent 
                    revenue-generating unit within the CarCare ecosystem.
                  </p>
                  <div className="mt-4 pt-3 border-t border-orange-200">
                    <div className="bg-white p-3 rounded border text-center">
                      <span className="font-semibold text-orange-800 text-sm">Total Salary for 150 Employees</span>
                      <p className="text-2xl font-bold text-orange-600">$9,000,000 CAD</p>
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
            <h3 className="text-xl font-bold text-green-900">Complete Technology Stack</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">🧱 Mobile App (Frontend)</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Framework:</strong> Flutter (Dart)</p>
                <p><strong>Benefits:</strong> Single codebase for Android & iOS, native-like performance, beautiful modern UI</p>
                <p><strong>Use Case:</strong> Fast, responsive experience for car owners, garages & mechanics</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">⚙️ Backend Development</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Technology:</strong> Node.js (JavaScript)</p>
                <p><strong>Benefits:</strong> Fast, scalable runtime, non-blocking I/O for real-time processing</p>
                <p><strong>Use Case:</strong> APIs, authentication, notifications, and payment logic</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">🗄️ Database Layer</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Database:</strong> MongoDB with Mongoose ORM</p>
                <p><strong>Benefits:</strong> Flexible NoSQL schema, built-in GeoSpatial queries, AI-compatible</p>
                <p><strong>Use Case:</strong> Users, bookings, garages, and service records</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">🔄 Queue & Caching Systems</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Technologies:</strong> Kafka & Redis</p>
                <p><strong>Benefits:</strong> In-memory caching, message queuing for background jobs</p>
                <p><strong>Use Case:</strong> Lightning-fast data retrieval and real-time performance</p>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">🧭 Web Dashboards</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Technology:</strong> React.js</p>
                <p><strong>Benefits:</strong> Fast, dynamic UI, component-based architecture</p>
                <p><strong>Use Case:</strong> Admin Panel & Garage Panel management</p>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">☁️ DevOps & Infrastructure</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Hosting:</strong> AWS EC2</p>
                <p><strong>Storage:</strong> AWS S3</p>
                <p><strong>Benefits:</strong> Scalable cloud infrastructure, secure storage, auto-scaling</p>
                <p><strong>Use Case:</strong> Stable, high-performing cloud backbone</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">🧰 Development Tools & Integrations</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Version Control:</strong> Git & GitHub</p>
                <p><strong>API Testing:</strong> Postman</p>
                <p><strong>Notifications:</strong> Firebase / OneSignal</p>
                <p><strong>Payments:</strong> Stripe</p>
                <p><strong>Monitoring:</strong> Datadog</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-2 border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">🤖 AI & Machine Learning APIs</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>OpenAI Vision API:</strong> Image analysis for car damage assessment</p>
                <p><strong>OpenAI GPT API:</strong> AI-powered carChat and customer support</p>
                <p><strong>Use Cases:</strong> Smart diagnostics, predictive maintenance, intelligent recommendations</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">🗺️ Location & Mapping APIs</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Google Maps API:</strong> Navigation, geolocation, and route optimization</p>
                <p><strong>Google Places API:</strong> Nearby garage discovery and business information</p>
                <p><strong>Use Cases:</strong> Real-time tracking, "find nearest garage" feature, delivery routes</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">📱 Communication & Notification APIs</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Twilio API:</strong> SMS notifications and phone verification</p>
                <p><strong>Firebase Cloud Messaging:</strong> Push notifications for mobile apps</p>
                <p><strong>Email APIs:</strong> SendGrid / Mailgun for transactional emails</p>
                <p><strong>Use Cases:</strong> Booking confirmations, service updates, emergency alerts</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-2 border-yellow-200">
              <h4 className="font-semibold text-yellow-900 mb-2">💳 Payment & Financial APIs</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Stripe API:</strong> Global payment processing and subscription management</p>
                <p><strong>PayPal API:</strong> Alternative payment method for international users</p>
                <p><strong>Use Cases:</strong> Secure transactions, automated billing, refund processing</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg border-2 border-teal-200">
              <h4 className="font-semibold text-teal-900 mb-2">🔐 Security & Authentication APIs</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Auth0 / Firebase Auth:</strong> User authentication and authorization</p>
                <p><strong>JWT Tokens:</strong> Secure API access and session management</p>
                <p><strong>OAuth 2.0:</strong> Social login integration (Google, Facebook)</p>
                <p><strong>Use Cases:</strong> Secure user accounts, role-based access, social authentication</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border-2 border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-2">📊 Analytics & Monitoring APIs</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Google Analytics API:</strong> User behavior tracking and insights</p>
                <p><strong>Mixpanel API:</strong> Event tracking and user journey analysis</p>
                <p><strong>New Relic API:</strong> Application performance monitoring</p>
                <p><strong>Use Cases:</strong> Business intelligence, performance optimization, user experience insights</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">🛠️ Version 1.0 (MVP) Includes</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• User authentication</p>
                <p>• AI-based carChat</p>
                <p>• Garage discovery & booking</p>
                <p>• Real-time service tracking</p>
                <p>• Garage management dashboard</p>
                <p>• Android & iOS App Store launch</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-2 border-green-200">
              <h4 className="font-semibold text-green-900 mb-2">🌟 Vision Statement</h4>
              <p className="text-sm text-gray-700 italic">
                "Building a futuristic, AI-driven, and scalable automotive service ecosystem that connects users, garages, and technology — redefining car care for the modern world."
              </p>
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
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold text-yellow-700 text-sm mb-2">Technical Team Structure</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 1 Flutter Developer (Mobile App Development)</li>
                    <li>• 1 Backend Developer (API & Database)</li>
                    <li>• 1 Backend + DevOps Engineer (Infrastructure & Deployment)</li>
                    <li>• 1 UI/UX Designer (One-time project completion)</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border">
                  <h5 className="font-semibold text-gray-800 text-sm mb-1">Funding Sources</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Seed Round Investment</li>
                    <li>• Founder Investment</li>
                    <li>• Government Grants</li>
                    <li>• Staffing & Operations Costs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Year 2 Funding (12-15 staff)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Series A Investment</li>
                <li>• Revenue Reinvestment</li>
                <li>• Staffing & Operations Costs</li>
                <li>• Market Expansion</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Year 3 Funding (20-25 staff)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Series A Extension</li>
                <li>• Strategic Partnerships</li>
                <li>• Revenue Reinvestment</li>
                <li>• Staffing & Operations Costs</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Year 4-5 Funding (35-45 staff)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Series B Investment</li>
                <li>• Revenue Reinvestment</li>
                <li>• Staffing & Operations Costs</li>
                <li>• National Expansion</li>
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
