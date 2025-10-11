// Section metadata for CarCare BFP
export const SECTIONS_META = [
  { id: 'cover', title: 'Cover', icon: 'Target' },
  { id: 'executive', title: 'Executive Summary', icon: 'Target' },
  { id: 'problem', title: 'Problem Definition', icon: 'Shield' },
  { id: 'solution', title: 'Solutions', icon: 'Zap' },
  { id: 'structure', title: 'Company Structure', icon: 'Users' },
  { id: 'products', title: 'Products & Services', icon: 'Car' },
  { id: 'business', title: 'Business Process', icon: 'Briefcase' },
  { id: 'market', title: 'Market Analysis', icon: 'TrendingUp' },
  { id: 'competition', title: 'Competition', icon: 'Shield' },
  { id: 'revenue', title: 'Revenue Model', icon: 'DollarSign' },
  { id: 'marketing', title: 'Marketing Strategy', icon: 'Target' },
  { id: 'resources', title: 'Resources', icon: 'Users' },
  { id: 'financial', title: 'Financial Projections', icon: 'BarChart3' },
  { id: 'roadmap', title: '3-Year Roadmap', icon: 'Calendar' },
  { id: 'impact', title: 'Economic Impact', icon: 'Globe' },
  { id: 'risks', title: 'Risk Analysis', icon: 'Shield' }
];

// Helper function to get section by id
export const getSectionById = (id) => {
  return SECTIONS_META.find(section => section.id === id);
};

// Helper function to get all section ids
export const getSectionIds = () => {
  return SECTIONS_META.map(section => section.id);
};
