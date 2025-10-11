import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import BfpLayout from '../components/CarCareBFP/layout/BfpLayout';

// Lazy load all page components for code splitting
const CoverPage = lazy(() => import('../components/CarCareBFP/pages/cover'));
const ExecutivePage = lazy(() => import('../components/CarCareBFP/pages/executive'));
const ProblemPage = lazy(() => import('../components/CarCareBFP/pages/problem'));
const SolutionPage = lazy(() => import('../components/CarCareBFP/pages/solution'));
const StructurePage = lazy(() => import('../components/CarCareBFP/pages/structure'));
const ProductsPage = lazy(() => import('../components/CarCareBFP/pages/products'));
const BusinessPage = lazy(() => import('../components/CarCareBFP/pages/business'));
const MarketPage = lazy(() => import('../components/CarCareBFP/pages/market'));
const CompetitionPage = lazy(() => import('../components/CarCareBFP/pages/competition'));
const RevenuePage = lazy(() => import('../components/CarCareBFP/pages/revenue'));
const MarketingPage = lazy(() => import('../components/CarCareBFP/pages/marketing'));
const ResourcesPage = lazy(() => import('../components/CarCareBFP/pages/resources'));
const FinancialPage = lazy(() => import('../components/CarCareBFP/pages/financial'));
const RoadmapPage = lazy(() => import('../components/CarCareBFP/pages/roadmap'));
const ImpactPage = lazy(() => import('../components/CarCareBFP/pages/impact'));
const RisksPage = lazy(() => import('../components/CarCareBFP/pages/risks'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Wrapper component for lazy-loaded pages
const LazyPageWrapper = ({ Component }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

// Error boundary component
const ErrorPage = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
      <div className="text-red-500 text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or there was an error loading it.
      </p>
      <a 
        href="/bfp" 
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go to Business Plan
      </a>
    </div>
  </div>
);

export const bfpRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/bfp" replace />
  },
  {
    path: '/bfp',
    element: <BfpLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LazyPageWrapper Component={CoverPage} />
      },
      {
        path: 'cover',
        element: <LazyPageWrapper Component={CoverPage} />
      },
      {
        path: 'executive',
        element: <LazyPageWrapper Component={ExecutivePage} />
      },
      {
        path: 'problem',
        element: <LazyPageWrapper Component={ProblemPage} />
      },
      {
        path: 'solution',
        element: <LazyPageWrapper Component={SolutionPage} />
      },
      {
        path: 'structure',
        element: <LazyPageWrapper Component={StructurePage} />
      },
      {
        path: 'products',
        element: <LazyPageWrapper Component={ProductsPage} />
      },
      {
        path: 'business',
        element: <LazyPageWrapper Component={BusinessPage} />
      },
      {
        path: 'market',
        element: <LazyPageWrapper Component={MarketPage} />
      },
      {
        path: 'competition',
        element: <LazyPageWrapper Component={CompetitionPage} />
      },
      {
        path: 'revenue',
        element: <LazyPageWrapper Component={RevenuePage} />
      },
      {
        path: 'marketing',
        element: <LazyPageWrapper Component={MarketingPage} />
      },
      {
        path: 'resources',
        element: <LazyPageWrapper Component={ResourcesPage} />
      },
      {
        path: 'financial',
        element: <LazyPageWrapper Component={FinancialPage} />
      },
      {
        path: 'roadmap',
        element: <LazyPageWrapper Component={RoadmapPage} />
      },
      {
        path: 'impact',
        element: <LazyPageWrapper Component={ImpactPage} />
      },
      {
        path: 'risks',
        element: <LazyPageWrapper Component={RisksPage} />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/bfp" replace />
  }
]);
