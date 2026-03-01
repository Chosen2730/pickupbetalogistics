const reasons = [
  {
    stat: "500+",
    label: "Deliveries Completed",
  },
  {
    stat: "98%",
    label: "On-Time Delivery Rate",
  },
  {
    stat: "200+",
    label: "Happy Customers",
  },
  {
    stat: "24/7",
    label: "Customer Support",
  },
];

const features = [
  {
    title: "Reliable & Punctual",
    description:
      "We respect your time. Our riders are trained to pick up and deliver on schedule, every single time.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Competitive rates with no hidden charges. You know exactly what you're paying before we pick up.",
  },
  {
    title: "Real-Time Updates",
    description:
      "Stay informed at every stage. We keep you updated from pickup to delivery via email or phone.",
  },
  {
    title: "Secure Handling",
    description:
      "Your packages are handled with care. We treat every item as if it were our own.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Why Pickup Beta
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Customers Trust Us
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {reasons.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-4xl font-extrabold text-primary-600">
                {item.stat}
              </p>
              <p className="text-sm text-gray-500 mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
