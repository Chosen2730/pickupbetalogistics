export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-primary-800 to-primary-600 text-white"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-primary-200 font-semibold text-sm uppercase tracking-widest mb-2">
          Get Started
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Send a Package?
        </h2>
        <p className="text-primary-100 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          It&apos;s simple — just send us an email with your pickup and delivery
          details and we&apos;ll take it from there. No sign-ups, no apps, no
          hassle.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <p className="text-sm text-primary-200 mb-3">Email us at</p>
          <a
            href="mailto:hello@pickupbetalogistics.com?subject=Pickup Request&body=Hi Pickup Beta,%0D%0A%0D%0AI'd like to request a pickup.%0D%0A%0D%0APickup Address:%0D%0ADelivery Address:%0D%0APackage Description:%0D%0APreferred Pickup Time:%0D%0A%0D%0AThank you!"
            className="text-2xl sm:text-3xl font-bold hover:text-primary-200 transition-colors break-all"
          >
            hello@pickupbetalogistics.com
          </a>
          <p className="text-sm text-primary-200 mt-4">
            Include your pickup address, delivery address, package description,
            and preferred time.
          </p>
        </div>

        <p className="text-primary-200 text-sm">
          Or call us directly at{" "}
          <a
            href="tel:+2341234567890"
            className="font-semibold text-white hover:text-primary-200 transition-colors"
          >
            +234 123 456 7890
          </a>
        </p>
      </div>
    </section>
  );
}
