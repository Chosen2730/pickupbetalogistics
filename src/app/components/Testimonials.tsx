const testimonials = [
  {
    name: "Amina Johnson",
    role: "Small Business Owner",
    quote:
      "Pickup Beta has been a game-changer for my online store. They pick up my orders every morning and my customers get their packages the same day. Couldn't ask for more!",
  },
  {
    name: "David Okafor",
    role: "Freelance Designer",
    quote:
      "I needed to send fragile artwork across town and was nervous about damage. The team handled everything with so much care. Package arrived in perfect condition.",
  },
  {
    name: "Sarah Mitchell",
    role: "Office Manager",
    quote:
      "We use Pickup Beta for all our office document deliveries. They're always on time, professional, and their rates are very fair. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div>
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
