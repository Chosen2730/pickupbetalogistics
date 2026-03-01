export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 text-white overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-primary-300/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-32">
        <p className="text-primary-200 text-sm font-semibold uppercase tracking-widest mb-4">
          Fast &bull; Reliable &bull; Affordable
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          We Pick Up &amp; Deliver <br className="hidden sm:block" />
          Your Packages
        </h1>
        <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto mb-10">
          Need to send a package across town or across the country? Pickup Beta
          Logistics takes the stress out of deliveries. Just tell us where and
          when — we handle the rest.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@pickupbetalogistics.com?subject=Pickup Request"
            className="px-8 py-4 bg-white text-primary-700 font-bold rounded-full hover:bg-primary-50 transition-colors text-base"
          >
            Request a Pickup
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
