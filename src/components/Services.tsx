'use client';

import { IconSend, IconBrain, IconBulb } from '@tabler/icons-react';

const Services = () => {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Future Concept */}
          <div className="p-8 bg-black border border-gray-800 hover:border-teal-400 transition-colors">
            <IconSend className="text-teal-400 w-12 h-12 mb-4" />
            <h3 className="text-white text-xl font-bold mb-4">Future Concept.</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus.
            </p>
          </div>

          {/* The Big Ideas */}
          <div className="p-8 bg-black border border-gray-800 hover:border-teal-400 transition-colors">
            <IconBrain className="text-teal-400 w-12 h-12 mb-4" />
            <h3 className="text-white text-xl font-bold mb-4">The Big Ideas.</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus.
            </p>
          </div>

          {/* Creative Solutions */}
          <div className="p-8 bg-black border border-gray-800 hover:border-teal-400 transition-colors">
            <IconBulb className="text-teal-400 w-12 h-12 mb-4" />
            <h3 className="text-white text-xl font-bold mb-4">Creative Solutions.</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              elit tellus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
