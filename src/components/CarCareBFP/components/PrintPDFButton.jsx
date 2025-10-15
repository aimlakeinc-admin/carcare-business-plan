import React, { useState } from 'react';
import { Download } from 'lucide-react';

const PrintPDFButton = ({ pageTitle = 'CarCare Business Plan' }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = () => {
    setIsGenerating(true);

    try {
      // Temporarily hide the PDF button to avoid it appearing in the PDF
      const pdfButton = document.querySelector('[title*="Download"]');
      if (pdfButton) {
        pdfButton.style.display = 'none';
      }

      // Apply print styles directly to current window
      const printStyles = `
        <style id="print-styles">
          @media print {
            * {
              -webkit-print-color-adjust: exact !important;
              color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            html, body {
              margin: 0 !important;
              padding: 0 !important;
              background: white !important;
              width: 100% !important;
              height: auto !important;
            }
            
            .min-h-screen {
              min-height: auto !important;
              height: auto !important;
            }
            
            [title*="Download"],
            .print-hide {
              display: none !important;
            }
            
            .lg\\:hidden {
              display: none !important;
            }
            
            .hidden.lg\\:grid {
              display: grid !important;
            }
            
            .lg\\:hidden .grid {
              display: none !important;
            }
            
            .w-full {
              width: 100% !important;
            }
            
            .px-4, .md\\:px-6, .lg\\:px-8 {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
            }
            
            .pt-\\[10px\\] {
              padding-top: 10px !important;
            }
            
            .bg-gradient-to-r,
            .bg-gradient-to-br,
            .bg-gradient-to-bl,
            .bg-gradient-to-tl,
            .bg-gradient-to-tr {
              background: linear-gradient(to right, var(--tw-gradient-stops)) !important;
            }
            
            .from-blue-600 {
              --tw-gradient-from: #2563eb !important;
            }
            
            .to-purple-600 {
              --tw-gradient-to: #9333ea !important;
            }
            
            .from-green-500 {
              --tw-gradient-from: #10b981 !important;
            }
            
            .to-teal-500 {
              --tw-gradient-to: #14b8a6 !important;
            }
            
            .from-orange-500 {
              --tw-gradient-from: #f97316 !important;
            }
            
            .to-red-500 {
              --tw-gradient-to: #ef4444 !important;
            }
            
            .from-emerald-500 {
              --tw-gradient-from: #10b981 !important;
            }
            
            .to-cyan-500 {
              --tw-gradient-to: #06b6d4 !important;
            }
            
            .from-pink-600 {
              --tw-gradient-from: #db2777 !important;
            }
            
            .to-purple-600 {
              --tw-gradient-to: #9333ea !important;
            }
            
            .from-indigo-600 {
              --tw-gradient-from: #4f46e5 !important;
            }
            
            .to-purple-600 {
              --tw-gradient-to: #9333ea !important;
            }
            
            .text-white {
              color: white !important;
            }
            
            .text-blue-100 {
              color: #dbeafe !important;
            }
            
            .text-pink-100 {
              color: #fce7f3 !important;
            }
            
            .text-green-100 {
              color: #dcfce7 !important;
            }
            
            .text-orange-100 {
              color: #fed7aa !important;
            }
            
            .text-indigo-100 {
              color: #e0e7ff !important;
            }
            
            .bg-blue-600 {
              background-color: #2563eb !important;
            }
            
            .bg-green-600 {
              background-color: #10b981 !important;
            }
            
            .bg-purple-600 {
              background-color: #9333ea !important;
            }
            
            .bg-orange-600 {
              background-color: #f97316 !important;
            }
            
            .bg-red-600 {
              background-color: #ef4444 !important;
            }
            
            .bg-indigo-600 {
              background-color: #4f46e5 !important;
            }
            
            .bg-pink-600 {
              background-color: #db2777 !important;
            }
            
            .bg-emerald-600 {
              background-color: #10b981 !important;
            }
            
            .bg-cyan-600 {
              background-color: #06b6d4 !important;
            }
            
            .bg-teal-600 {
              background-color: #0d9488 !important;
            }
            
            .bg-blue-50 {
              background-color: #eff6ff !important;
            }
            
            .bg-green-50 {
              background-color: #f0fdf4 !important;
            }
            
            .bg-purple-50 {
              background-color: #faf5ff !important;
            }
            
            .bg-orange-50 {
              background-color: #fff7ed !important;
            }
            
            .bg-yellow-50 {
              background-color: #fefce8 !important;
            }
            
            .bg-gray-50 {
              background-color: #f9fafb !important;
            }
            
            .text-blue-600 {
              color: #2563eb !important;
            }
            
            .text-green-600 {
              color: #10b981 !important;
            }
            
            .text-purple-600 {
              color: #9333ea !important;
            }
            
            .text-orange-600 {
              color: #f97316 !important;
            }
            
            .text-red-600 {
              color: #ef4444 !important;
            }
            
            .text-yellow-600 {
              color: #eab308 !important;
            }
            
            .text-gray-600 {
              color: #4b5563 !important;
            }
            
            .text-gray-700 {
              color: #374151 !important;
            }
            
            .text-gray-800 {
              color: #1f2937 !important;
            }
            
            .text-gray-900 {
              color: #111827 !important;
            }
            
            .border-gray-200 {
              border-color: #e5e7eb !important;
            }
            
            .border-blue-200 {
              border-color: #bfdbfe !important;
            }
            
            .border-green-200 {
              border-color: #bbf7d0 !important;
            }
            
            .border-blue-500 {
              border-color: #3b82f6 !important;
            }
            
            .border-green-500 {
              border-color: #10b981 !important;
            }
            
            .shadow-lg {
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
            }
            
            .rounded-xl {
              border-radius: 0.75rem !important;
            }
            
            .rounded-lg {
              border-radius: 0.5rem !important;
            }
            
            .p-8 {
              padding: 2rem !important;
            }
            
            .p-6 {
              padding: 1.5rem !important;
            }
            
            .p-4 {
              padding: 1rem !important;
            }
            
            .mb-6 {
              margin-bottom: 1.5rem !important;
            }
            
            .mb-4 {
              margin-bottom: 1rem !important;
            }
            
            .mb-2 {
              margin-bottom: 0.5rem !important;
            }
            
            .mt-6 {
              margin-top: 1.5rem !important;
            }
            
            .mt-4 {
              margin-top: 1rem !important;
            }
            
            .mt-2 {
              margin-top: 0.5rem !important;
            }
            
            .text-4xl {
              font-size: 2.25rem !important;
              line-height: 2.5rem !important;
            }
            
            .text-3xl {
              font-size: 1.875rem !important;
              line-height: 2.25rem !important;
            }
            
            .text-2xl {
              font-size: 1.5rem !important;
              line-height: 2rem !important;
            }
            
            .text-xl {
              font-size: 1.125rem !important;
              line-height: 1.75rem !important;
            }
            
            .text-lg {
              font-size: 1.125rem !important;
              line-height: 1.75rem !important;
            }
            
            .text-sm {
              font-size: 0.875rem !important;
              line-height: 1.25rem !important;
            }
            
            .text-xs {
              font-size: 0.75rem !important;
              line-height: 1rem !important;
            }
            
            .font-bold {
              font-weight: 700 !important;
            }
            
            .font-semibold {
              font-weight: 600 !important;
            }
            
            .font-medium {
              font-weight: 500 !important;
            }
            
            .grid {
              display: grid !important;
            }
            
            .grid-cols-1 {
              grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            }
            
            .grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
            
            .grid-cols-3 {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
            
            .grid-cols-5 {
              grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
            }
            
            .grid-cols-6 {
              grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
            }
            
            .gap-4 {
              gap: 1rem !important;
            }
            
            .gap-6 {
              gap: 1.5rem !important;
            }
            
            .space-y-8 > * + * {
              margin-top: 2rem !important;
            }
            
            .space-y-6 > * + * {
              margin-top: 1.5rem !important;
            }
            
            .space-y-4 > * + * {
              margin-top: 1rem !important;
            }
            
            .space-y-2 > * + * {
              margin-top: 0.5rem !important;
            }
            
            .space-y-1 > * + * {
              margin-top: 0.25rem !important;
            }
            
            .flex {
              display: flex !important;
            }
            
            .items-center {
              align-items: center !important;
            }
            
            .justify-center {
              justify-content: center !important;
            }
            
            .text-center {
              text-align: center !important;
            }
            
            .text-right {
              text-align: right !important;
            }
            
            .w-full {
              width: 100% !important;
            }
            
            .h-auto {
              height: auto !important;
            }
            
            .overflow-hidden {
              overflow: hidden !important;
            }
            
            .overflow-x-auto {
              overflow-x: auto !important;
            }
            
            .border {
              border-width: 1px !important;
            }
            
            .border-2 {
              border-width: 2px !important;
            }
            
            .border-b {
              border-bottom-width: 1px !important;
            }
            
            .border-t {
              border-top-width: 1px !important;
            }
            
            .border-t-2 {
              border-top-width: 2px !important;
            }
            
            .table {
              display: table !important;
            }
            
            .table-auto {
              table-layout: auto !important;
            }
            
            .w-full {
              width: 100% !important;
            }
            
            .text-sm {
              font-size: 0.875rem !important;
              line-height: 1.25rem !important;
            }
            
            .thead {
              display: table-header-group !important;
            }
            
            .tbody {
              display: table-row-group !important;
            }
            
            .tr {
              display: table-row !important;
            }
            
            .th {
              display: table-cell !important;
            }
            
            .td {
              display: table-cell !important;
            }
            
            .p-4 {
              padding: 1rem !important;
            }
            
            .text-left {
              text-align: left !important;
            }
            
            .text-right {
              text-align: right !important;
            }
            
            .font-semibold {
              font-weight: 600 !important;
            }
            
            .font-bold {
              font-weight: 700 !important;
            }
            
            .text-gray-800 {
              color: #1f2937 !important;
            }
            
            .text-gray-700 {
              color: #374151 !important;
            }
            
            .text-gray-600 {
              color: #4b5563 !important;
            }
            
            .text-red-600 {
              color: #dc2626 !important;
            }
            
            .text-green-600 {
              color: #16a34a !important;
            }
            
            .text-green-700 {
              color: #15803d !important;
            }
            
            .text-blue-800 {
              color: #1e40af !important;
            }
            
            .text-blue-900 {
              color: #1e3a8a !important;
            }
            
            .text-green-800 {
              color: #166534 !important;
            }
            
            .text-green-900 {
              color: #14532d !important;
            }
            
            .text-purple-800 {
              color: #6b21a8 !important;
            }
            
            .text-purple-900 {
              color: #581c87 !important;
            }
            
            .bg-blue-100 {
              background-color: #dbeafe !important;
            }
            
            .bg-green-100 {
              background-color: #dcfce7 !important;
            }
            
            .bg-gray-100 {
              background-color: #f3f4f6 !important;
            }
            
            .bg-blue-50 {
              background-color: #eff6ff !important;
            }
            
            .bg-green-50 {
              background-color: #f0fdf4 !important;
            }
            
            .bg-purple-50 {
              background-color: #faf5ff !important;
            }
            
            .bg-orange-50 {
              background-color: #fff7ed !important;
            }
            
            .bg-yellow-50 {
              background-color: #fefce8 !important;
            }
            
            .bg-gray-50 {
              background-color: #f9fafb !important;
            }
            
            .border-b {
              border-bottom-width: 1px !important;
            }
            
            .border-t-2 {
              border-top-width: 2px !important;
            }
            
            .border-green-500 {
              border-color: #10b981 !important;
            }
            
            .border-blue-500 {
              border-color: #3b82f6 !important;
            }
            
            .hidden {
              display: none !important;
            }
            
            .lg\\:hidden {
              display: none !important;
            }
            
            .grid-cols-2.md\\:grid-cols-3 {
              display: none !important;
            }
            
            .hidden.lg\\:grid.grid-cols-6 {
              display: grid !important;
              grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
            }
          }
        </style>
      `;
      
      // Add the print styles to the current document
      document.head.insertAdjacentHTML('beforeend', printStyles);
      
      // Set the page title
      document.title = `${pageTitle} - CarCare 24×7 Inc.`;
      
      // Trigger the print dialog
      setTimeout(() => {
        window.print();
        
        // Clean up after printing
        setTimeout(() => {
          // Restore the PDF button
          if (pdfButton) {
            pdfButton.style.display = '';
          }
          
          // Remove the print styles
          const addedStyles = document.querySelector('#print-styles');
          if (addedStyles) {
            addedStyles.remove();
          }
          
          setIsGenerating(false);
        }, 2000);
      }, 500);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      // Restore the PDF button
      setTimeout(() => {
        const pdfButton = document.querySelector('[title*="Download"]');
        if (pdfButton) {
          pdfButton.style.display = '';
        }
        setIsGenerating(false);
      }, 2000);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className={`
        fixed top-4 right-4 z-50
        bg-blue-600 hover:bg-blue-700
        text-white
        px-3 py-2 sm:px-4 sm:py-2
        rounded-lg
        shadow-lg
        transition-all duration-300
        transform hover:scale-105
        flex items-center gap-2
        text-sm sm:text-base
        font-medium
        ${isGenerating ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl'}
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
      title={`Download ${pageTitle} as PDF`}
      aria-label={`Download ${pageTitle} as PDF`}
    >
      <Download
        className={`w-4 h-4 transition-transform duration-300 ${
          isGenerating ? 'animate-spin' : ''
        }`}
      />
      <span className="hidden sm:inline">
        {isGenerating ? 'Generating...' : 'Download PDF'}
      </span>
      <span className="sm:hidden">
        {isGenerating ? '...' : 'PDF'}
      </span>
    </button>
  );
};

export default PrintPDFButton;