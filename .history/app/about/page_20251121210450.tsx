"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingLines from "@/components/FloatingLines";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    cards: false,
    stats: false,
    values: false,
    timeline: false,
    cta: false
  });

  const timelineRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "500+", label: "Active Clients" },
    { value: "10M+", label: "Emails Delivered Daily" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Expert Support" }
  ];

  const values = [
    {
      title: "Unlimited Capacity",
      description: "We deliver true unlimited email capacity through 50 Microsoft Partner accounts per domain, each sending 200 emails daily. Our infrastructure is built to scale with your business."
    },
    {
      title: "Transparent Pricing",
      description: "Simple $10-12 per domain pricing. No hidden fees, no setup charges, no surprises. Predictable costs that scale with your business needs."
    },
    {
      title: "Enterprise Grade",
      description: "SPF, DKIM, DMARC configuration with Microsoft Partner infrastructure. Maximum inbox placement and sender reputation protection for all clients."
    },
    {
      title: "Expert Support",
      description: "24/7 dedicated support team ensuring your email infrastructure performs flawlessly. We're here to help you succeed every step of the way."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to democratize enterprise email infrastructure for businesses of all sizes"
    },
    {
      year: "2021",
      title: "Microsoft Partnership",
      description: "Partnered with Microsoft to deliver enterprise-grade solutions with unlimited scalability"
    },
    {
      year: "2022",
      title: "Major Milestone",
      description: "Reached 100+ active clients and 1M daily emails with industry-leading deliverability"
    },
    {
      year: "2023",
      title: "Rapid Growth",
      description: "Expanded to 500+ clients with 10M+ daily email capacity and enhanced features"
    },
    {
      year: "2024",
      title: "Innovation Leader",
      description: "Launched advanced deliverability optimization and became the industry standard"
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute('data-section');
          if (section) {
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    setIsVisible(prev => ({ ...prev, hero: true }));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1c1c1c' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#0a0a0a', minHeight: '600px' }}>
        {/* FloatingLines Background */}
        <div className="absolute inset-0">
          <FloatingLines
            linesGradient={['#ff6e40', '#ff6e40', '#ff6e40']}
            enabledWaves={['middle', '', '']}
            lineCount={[9]}
            lineDistance={[10]}
            bendRadius={9.0}
            bendStrength={-1.5}
            interactive={!true}
            parallax={!true}
          />
        </div>

        {/* Black Transparent Overlay with Blur */}
        <div className="absolute inset-0 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10 flex items-center justify-center" style={{ minHeight: '600px' }}>
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="font-semibold">About Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Delivering Excellence in Email Infrastructure
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
              We're on a mission to help businesses worldwide achieve unlimited email capacity through innovative Microsoft Partner solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision & More Cards */}
      <section className="py-20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }} data-section="cards">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Mission */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with reliable, unlimited email infrastructure that guarantees inbox delivery through Microsoft Partner accounts and transparent pricing.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-3">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed">
                To become the world's most trusted email infrastructure provider, enabling businesses to scale without limits while we handle deliverability.
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-3">Our Commitment</h2>
              <p className="text-gray-400 leading-relaxed">
                Dedicated to providing exceptional service. From setup to optimization, we ensure your email infrastructure performs at its best every day.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-3">Why Choose Us</h2>
              <p className="text-gray-400 leading-relaxed">
                Unlimited capacity with Microsoft Partner infrastructure. 500+ satisfied clients achieving maximum deliverability at transparent prices.
              </p>
            </div>

            {/* Our Approach */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-3">Our Approach</h2>
              <p className="text-gray-400 leading-relaxed">
                Combining cutting-edge Microsoft technology with personalized service. Every solution is tailored with proactive monitoring and expert optimization.
              </p>
            </div>

            {/* Global Reach */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h2 className="text-xl font-bold text-white mb-3">Global Reach</h2>
              <p className="text-gray-400 leading-relaxed">
                Serving clients worldwide with 24/7 support. Our global infrastructure ensures fast, reliable delivery across all regions and time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: '#1c1c1c' }} data-section="stats">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#ff6e40' }}>
                  {stat.value}
                </h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }} data-section="values">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-5 py-2 rounded-full">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span className="font-semibold text-orange-400">Our Values</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our core values guide everything we do and shape how we serve our clients
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{
                  backgroundColor: 'rgba(255, 110, 64, 0.1)',
                  border: '2px solid rgba(255, 110, 64, 0.3)'
                }}>
                  <span className="text-3xl">{index === 0 ? "⚡" : index === 1 ? "💎" : index === 2 ? "🛡️" : "🎯"}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }} data-section="timeline">
        <div className="container mx-auto px-6 lg:px-16 max-w-6xl">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-5 py-2 rounded-full">
              <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span className="font-semibold text-orange-400">Our Journey</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Growing Together Since 2020
            </h2>
          </div>

          <div className="relative" ref={timelineRef}>
            {/* Timeline Line for Mobile */}
            <div className="absolute left-6 top-0 w-0.5 h-full lg:hidden" style={{ backgroundColor: 'rgba(255, 110, 64, 0.2)' }}></div>

            {/* Timeline Line for Desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full hidden lg:block" style={{ backgroundColor: 'rgba(255, 110, 64, 0.2)' }}></div>

            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 lg:gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms`, transition: 'all 0.7s' }}
                >
                  {/* Mobile Timeline Dot */}
                  <div className="lg:hidden flex w-8 h-8 rounded-full flex-shrink-0 items-center justify-center relative z-10 mt-1" style={{ backgroundColor: '#ff6e40' }}>
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>

                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 hover:shadow-2xl transition-all duration-300">
                      <div className="text-2xl font-bold mb-2" style={{ color: '#ff6e40' }}>{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full flex-shrink-0 items-center justify-center relative z-10" style={{ backgroundColor: '#ff6e40' }}>
                    <div className="w-6 h-6 rounded-full bg-white" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#1c1c1c' }} data-section="cta">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className={`relative rounded-3xl py-20 px-8 lg:px-16 overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ background: 'linear-gradient(135deg, #ff6e40 0%, #ff8a65 100%)' }}>
            {/* Decorative Elements */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Scale Your Email Infrastructure?
              </h2>
              <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join 500+ businesses that trust HyperScale Inboxes for unlimited capacity and enterprise-grade deliverability
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-white font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl" style={{ color: '#ff6e40' }}>
                  Get Started Today
                </button>
                <button className="px-10 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white backdrop-blur-sm hover:scale-105">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
