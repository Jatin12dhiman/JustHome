import React from 'react';

// Define the data structure for the category cards
const categories = [
  { 
    title: "Town House", 
    properties: 2, 
    // SVG for a Town House (simple house icon)
    icon: (
      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-10v10a1 1 0 001 1h3M14 20h-4a1 1 0 01-1-1v-4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1z"/>
      </svg>
    )
  },
  { 
    title: "Modern Villa", 
    properties: 10, 
    // SVG for a Modern Villa (large house with multiple stories/windows)
    icon: (
      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5M7 7h.01M17 7h.01"/>
      </svg>
    )
  },
  { 
    title: "Apartment", 
    properties: 3, 
    // SVG for an Apartment (building icon)
    icon: (
      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 17V7a2 2 0 012-2h12a2 2 0 012 2v10m-2 0v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2m12 0H6m6-6h.01M12 10h.01M12 14h.01M12 18h.01"/>
      </svg>
    )
  },
  { 
    title: "Office", 
    properties: 3, 
    // SVG for an Office (briefcase/work icon)
    icon: (
      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.25V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h7.75M16 3l-4 4m0 0L8 3m4 4v7m1-4h.01M19 16l3 3m0 0l-3 3m3-3h-4"/>
      </svg>
    )
  },
  { 
    title: "Single Family", 
    properties: 5, 
    // SVG for a Single Family Home
    icon: (
      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14h.01M12 14h.01M16 14h.01M21 21v-7a1 1 0 00-1-1h-4a1 1 0 00-1 1v7M5 7l7-7 7 7M5 7v14a1 1 0 001 1h3m5 0h3a1 1 0 001-1V7"/>
      </svg>
    )
  },
];

// Reusable card component for better structure
const CategoryCard = ({ title, properties, icon }) => (
  <div 
    className="flex flex-col items-center justify-center p-6 sm:p-8 
               bg-white rounded-2xl shadow-lg transition-transform 
               duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer
               min-h-[160px] md:min-h-[200px]"
  >
    <div className="mb-4 p-4 bg-gray-100 rounded-full">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-gray-900 mt-2 text-center">
      {title}
    </h3>
    <p className="text-sm text-gray-500 mt-1 text-center">
      {properties} Properties
    </p>
  </div>
);

// Main functional component (App simulates the Next.js page)
const FeaturedCategories = () => {
  return (
    <div className="p-8 md:p-16 min-h-screen bg-[#2A524A] font-sans">
      
      {/* Header and View All Link */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Featured Categories
          </h2>
          <p className="text-gray-300 mt-2 text-sm">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <a 
          href="#" 
          className="text-white text-base font-medium mt-4 md:mt-0 
                     hover:text-amber-300 transition-colors flex items-center"
        >
          View All Categories
          <span className="ml-2">&rarr;</span>
        </a>
      </div>

      {/* Categories Grid */}
      <div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 
                   gap-6 max-w-7xl mx-auto"
      >
        {categories.map((category, index) => (
          <CategoryCard 
            key={index}
            title={category.title}
            properties={category.properties}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
