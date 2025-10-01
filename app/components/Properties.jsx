import Image from 'next/image';

const cities = [
  { name: 'New York', properties: 8, image: '/images/pr1.png' },
  { name: 'San Diego', properties: 0, image: '/images/pr2.png' },
  { name: 'Miami', properties: 2, image: '/images/pr3.png' },
  { name: 'Los Angeles', properties: 1, image: '/images/pr4.png' },
  { name: 'Chicago', properties: 2, image: '/images/pr5.png' },
];

export default function Properties() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">Find Properties in These Cities</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <a
          href="#"
          className="mt-4 lg:mt-0 flex items-center text-black hover:text-blue-500 font-semibold"
        >
          View All Cities
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Cities Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:flex md:overflow-x-auto md:space-x-4 md:pb-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className="flex-shrink-0 w-full sm:w-[48%] lg:w-48 rounded-lg border border-gray-200 p-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-md overflow-hidden relative">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{city.name}</h3>
                <p className="text-xs text-gray-500">{city.properties} Properties</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
