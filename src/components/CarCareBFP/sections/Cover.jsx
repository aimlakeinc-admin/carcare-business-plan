import React from 'react';
import CarCareLogo from '../components/CarCareLogo';

const Cover = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-purple-700 text-white p-8">
      <div className="text-center max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-8">
            <CarCareLogo className="w-32 h-32" showText={false} />
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4">CarCare 24×7 Inc.</h1>
        <div className="h-1 w-32 bg-white mx-auto mb-6"></div>
        <h2 className="text-3xl mb-8 text-blue-100">Business Formation Plan</h2>
        <p className="text-xl mb-12 text-blue-100">Revolutionizing Automotive Services in Canada</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm text-blue-200 mb-1">Market Size</p>
            <p className="text-2xl font-bold">$500B+</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm text-blue-200 mb-1">Year 3 Revenue</p>
            <p className="text-2xl font-bold">$7.66M</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm text-blue-200 mb-1">Target Network</p>
            <p className="text-2xl font-bold">2,000+</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm text-blue-200 mb-1">Net Margin</p>
            <p className="text-2xl font-bold">70%</p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p>📍 1468 Victoria Park Ave, Toronto, ON M4A 2M2</p>
          <p>📞 +1 (437) 973-1676</p>
          <p>🌐 https://carcare24x7.com</p>
        </div>

        <div className="mt-12">
          <p className="text-xs text-blue-200">Updated October 2025 • Confidential Document</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
