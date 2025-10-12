import React from 'react';
import CarCareLogo from '../components/CarCareLogo';

const Cover = () => {
  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-purple-700 text-white p-8 rounded-lg">
      <div className="text-center max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-8">
            <CarCareLogo className="w-32 h-32" showText={false} />
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4">CarCare 24×7 Inc.</h1>
        <div className="h-1 w-32 bg-white mx-auto mb-6"></div>
        <h2 className="text-3xl mb-8 text-blue-100">Business Formation Plan</h2>
        <p className="text-xl mb-4 text-blue-100">AI-Powered Digital Marketplace Transforming Automotive Services</p>
        <p className="text-lg mb-12 text-blue-200">Unified Platform for 26M+ Canadian Vehicle Owners & 15,000+ Service Facilities</p>
        <p className="text-base mb-8 text-blue-300">Revolutionizing the CAD $475B North American automotive services market with CareChart AI, CarCare Wallet, and comprehensive EV & fleet solutions</p>
        
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            <div className="group bg-gradient-to-br from-white/10 to-cyan-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
              <p className="text-sm text-blue-200 mb-1">North American Market</p>
              <p className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">CAD $475B</p>
              <p className="text-xs text-blue-300">→ CAD $700-750B by 2032</p>
            </div>
            <div className="group bg-gradient-to-br from-white/10 to-green-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
              <p className="text-sm text-blue-200 mb-1">Year 5 Revenue</p>
              <p className="text-2xl font-bold text-green-300 group-hover:text-green-200 transition-colors">CAD $16.2M</p>
              <p className="text-xs text-blue-300">Break-even by Year 3</p>
            </div>
            <div className="group bg-gradient-to-br from-white/10 to-purple-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <p className="text-sm text-blue-200 mb-1">Target Users</p>
              <p className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">500K</p>
              <p className="text-xs text-blue-300">By 2027 nationwide</p>
            </div>
            <div className="group bg-gradient-to-br from-white/10 to-yellow-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20">
              <p className="text-sm text-blue-200 mb-1">Net Profit Year 5</p>
              <p className="text-2xl font-bold text-green-300 group-hover:text-yellow-300 transition-colors">CAD $8.2M</p>
              <p className="text-xs text-blue-300">51% net margin</p>
            </div>
            <div className="group bg-gradient-to-br from-white/10 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
              <p className="text-sm text-blue-200 mb-1">Seed Funding Required</p>
              <p className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">CAD $2.7M</p>
              <p className="text-xs text-blue-300">For launch & bridge to profitability</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-green-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 hover:border-green-400/30 transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-center bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">
              Key Competitive Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center group">
                <span className="text-green-400 mr-3 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="group-hover:text-green-300 transition-colors">Unified marketplace vs. fragmented competitors</span>
              </div>
              <div className="flex items-center group">
                <span className="text-green-400 mr-3 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="group-hover:text-green-300 transition-colors">CareChart AI predictive maintenance</span>
              </div>
              <div className="flex items-center group">
                <span className="text-green-400 mr-3 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="group-hover:text-green-300 transition-colors">CarCare Wallet fintech integration</span>
              </div>
              <div className="flex items-center group">
                <span className="text-green-400 mr-3 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="group-hover:text-green-300 transition-colors">First-mover advantage in Canada</span>
              </div>
              <div className="flex items-center group">
                <span className="text-green-400 mr-3 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="group-hover:text-green-300 transition-colors">EV & fleet specialization</span>
              </div>
              <div className="flex items-center group">
                <span className="text-green-400 mr-3 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="group-hover:text-green-300 transition-colors">8 diversified revenue streams</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 hover:border-purple-400/30 transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 text-center bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Technology Innovation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform border-2 border-blue-400/30">
                  <span className="text-blue-300 font-bold text-lg">AI</span>
                </div>
                <p className="font-semibold group-hover:text-blue-300 transition-colors">CareChart AI Engine</p>
                <p className="text-xs text-blue-300">Predictive maintenance & diagnostics</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform border-2 border-green-400/30">
                  <span className="text-green-300 font-bold text-lg">$</span>
                </div>
                <p className="font-semibold group-hover:text-green-300 transition-colors">CarCare Wallet</p>
                <p className="text-xs text-blue-300">Fintech integration & savings vault</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform border-2 border-purple-400/30">
                  <span className="text-purple-300 font-bold text-lg">⚡</span>
                </div>
                <p className="font-semibold group-hover:text-purple-300 transition-colors">EV Specialization</p>
                <p className="text-xs text-blue-300">Battery health & charging partnerships</p>
              </div>
            </div>
          </div>

        <div className="space-y-2 text-sm">
          <p>📍 1468 Victoria Park Ave, Toronto, ON M4A 2M2</p>
          <p>📞 +1 (437) 973-1676</p>
          <p>🌐 https://carcare24x7.com</p>
        </div>

        <div className="mt-12">
          <p className="text-xs text-blue-200">Updated December 2025 • Confidential Document</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
