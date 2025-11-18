"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  const stats = [
    { value: "500+", label: "Active Clients" },
    { value: "10M+", label: "Emails Delivered" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1c1c1c' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Building the Future of </span>
              <span style={{ color: '#ff6e40' }}>Email Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We empower businesses with unlimited email capacity through Microsoft Partner infrastructure, transparent pricing, and enterprise-grade deliverability.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl lg:text-6xl font-bold mb-2" style={{ color: '#ff6e40' }}>
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To democratize email infrastructure by providing unlimited capacity at transparent prices. We believe every business deserves access to enterprise-grade email infrastructure with Microsoft Partner accounts, regardless of size.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                To become the world's most trusted email infrastructure provider. We're building a future where email deliverability is never a bottleneck, and scaling is as simple as adding a domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 backdrop-blur-xl border-y" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderColor: 'rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span style={{ color: '#ff6e40' }}>HyperScale</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Everything you need for unlimited email infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{
                backgroundColor: 'rgba(255, 110, 64, 0.1)',
                border: '2px solid rgba(255, 110, 64, 0.2)'
              }}>
                <svg className="w-8 h-8" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Unlimited Capacity</h3>
              <p className="text-gray-400 leading-relaxed">
                50 Microsoft Partner accounts per domain with 200 emails per account. True unlimited daily capacity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{
                backgroundColor: 'rgba(255, 110, 64, 0.1)',
                border: '2px solid rgba(255, 110, 64, 0.2)'
              }}>
                <svg className="w-8 h-8" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparent Pricing</h3>
              <p className="text-gray-400 leading-relaxed">
                Just $10-12 per domain. No hidden fees, no setup charges, no surprises. Simple and honest.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{
                backgroundColor: 'rgba(255, 110, 64, 0.1)',
                border: '2px solid rgba(255, 110, 64, 0.2)'
              }}>
                <svg className="w-8 h-8" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Support</h3>
              <p className="text-gray-400 leading-relaxed">
                24/7 dedicated support with SPF/DKIM/DMARC configuration and deliverability optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
