import React from "react";

const businesses = [
  {
    icon: "🏪",
    title: "Local Businesses",
    description:
      "Share opening hours, services, pricing, and common customer questions.",
  },
  {
    icon: "🛒",
    title: "Online Stores",
    description:
      "Provide quick answers about orders, shipping, returns, and products.",
  },
  {
    icon: "💼",
    title: "Agencies & Consultants",
    description:
      "Give clients a single place to find information, processes, and resources.",
  },
  {
    icon: "🛠️",
    title: "Trades & Services",
    description:
      "Reduce repeat enquiries by sharing quotes, availability, and service details.",
  },
  {
    icon: "🎓",
    title: "Educators & Coaches",
    description:
      "Keep students and clients informed with easy-to-access answers and guidance.",
  },
];

export default function BuiltForBusinesses() {
  return (
    <section className="bg-white py-20 overflow-hidden">
        
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="max-w-2xl mx-auto text-gray-600 font-unica">
         Built for every
        </p>

        <h2 className="text-4xl font-heading font-bold mb-4">
          Business that get asked the same thing all day.
        </h2>

        
      </div>

      <div className="relative overflow-hidden mx-auto">
        <div className="flex animate-marquee gap-6 w-max p-6 rounded-2xl">
          {[...businesses, ...businesses].map((business, index) => (
            <div
              key={index}
              className="w-80 flex-shrink-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="text-4xl mb-4">{business.icon}</div>

              <h3 className="text-lg font-semibold mb-2 font-unica">
                {business.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {business.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}