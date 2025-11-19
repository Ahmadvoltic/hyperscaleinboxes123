"use client";

import React from "react";
import GetStartedButton from "./GetStartedButton";

const PricingSection = () => {
  const features = [
    "100% Automated Setup",
    "24 Hour Turnaround",
    "SPF / DKIM / Strict DMARC",
    "Premium 1-on-1 Support",
    "Full API Access",
    "Multi-Name Input or CSV Upload",
    "Tenant-Safe Architecture",
    "49 Inboxes Per Domain",
    "250 Outbound Emails/Day/Domain",
    "Full Deletion & Domain Swapping"
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1c1c1c' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(255, 110, 64, 0.2)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(255, 110, 64, 0.15)' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse delay-2000" style={{ backgroundColor: 'rgba(255, 110, 64, 0.1)' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6 shadow-lg border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-sm font-medium text-white">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            <span className="font-normal text-white">Simple,</span>{' '}
            <span className="font-bold" style={{ color: '#ff6e40' }}>Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-400">
            No hidden fees. No surprises. Just straightforward pricing that scales with your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* BYOD Card */}
          <div
            className="rounded-2xl p-10 border relative overflow-hidden group transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="relative z-10">
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">
                Bring Your Own Domain
              </h3>
              <p className="text-gray-400 mb-8">
                Use your existing domain
              </p>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-white">$10</span>
                  <span className="text-xl text-gray-400">/domain</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">50 Microsoft Partner accounts per domain</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">200 emails per day per account</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">100% Automated Setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">24 Hour Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">SPF / DKIM / Strict DMARC</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm">Premium 1-on-1 Support</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className="w-full rounded-xl py-3.5 font-semibold transition-all duration-300 border"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)'
                }}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Full Package Card - Featured */}
          <div
            className="rounded-2xl p-10 border-2 relative overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 110, 64, 0.05)',
              borderColor: '#ff6e40',
            }}
          >
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: '#ff6e40' }}
              >
                POPULAR
              </span>
            </div>

            <div className="relative z-10">
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2">
                Full Package
              </h3>
              <p className="text-gray-300 mb-8">
                Domain registration included
              </p>

              {/* Price */}
              <div className="mb-8 pb-8 border-b" style={{ borderColor: 'rgba(255, 110, 64, 0.2)' }}>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-white">$12</span>
                  <span className="text-xl text-gray-300">/domain</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200 text-sm">50 Microsoft Partner accounts per domain</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200 text-sm">200 emails per day per account</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200 text-sm">100% Automated Setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200 text-sm">24 Hour Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200 text-sm">SPF / DKIM / Strict DMARC</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#ff6e40' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-200 text-sm">Premium 1-on-1 Support</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className="w-full rounded-xl py-3.5 font-semibold transition-all duration-300"
                style={{
                  backgroundColor: '#ff6e40',
                  color: '#fff'
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
