import React from 'react';
import { Users, Briefcase, Target } from 'lucide-react';

const CompanyStructure = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-4">Company Structure</h2>
        <p className="text-xl text-gray-300">Three seasoned executives with 50+ years combined experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-lg">
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
            <p><strong>Ventures:</strong> SAMCON Corporation, Cotton Max Limited, Menz Crown </p>
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

        <div className="bg-white border-2 border-green-200 rounded-lg p-6 shadow-lg">
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

        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow-lg">
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

      <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
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
};

export default CompanyStructure;
