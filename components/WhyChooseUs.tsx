"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 relative" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10" style={{ backgroundColor: 'rgba(255, 110, 64, 0.1)' }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ff6e40' }}></span>
            <span className="text-sm font-semibold" style={{ color: '#ff6e40' }}>Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            <span className="font-normal text-gray-300">Unbeatable</span>{' '}
            <span className="font-bold text-white">Value & Performance</span>
          </h2>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-fr">

          {/* Large Card - Pricing Highlight */}
          <div
            className="lg:col-span-2 lg:row-span-2 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 110, 64, 0.1)',
              borderColor: 'rgba(255, 110, 64, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(255, 110, 64, 0.15)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: '#ff6e40' }} />

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h3>

              <div className="space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl lg:text-6xl font-bold text-white">$10</span>
                  <div>
                    <p className="text-lg text-gray-300 font-semibold">per domain</p>
                    <p className="text-sm text-gray-400">without domain registration</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-3 pt-4 border-t border-white/10">
                  <span className="text-4xl lg:text-5xl font-bold text-white">$12</span>
                  <div>
                    <p className="text-lg text-gray-300 font-semibold">per domain</p>
                    <p className="text-sm text-gray-400">with domain included</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Minimum order</p>
                  <p className="text-2xl font-bold text-white">10 domains</p>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Card - Azure Partnership */}
          <div
            className="lg:col-span-2 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl" style={{ backgroundColor: '#ff6e40' }} />

            <div className="relative z-10">
              <div className="mb-4">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                Microsoft Azure Partnered
              </h3>
              <p className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: '#ff6e40' }}>50</p>
              <p className="text-base text-gray-300">
                Premium Azure accounts per domain
              </p>
            </div>
          </div>

          {/* Small Card - Sending Capacity */}
          <div
            className="backdrop-blur-xl rounded-2xl p-6 border relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl" style={{ backgroundColor: '#ff6e40' }} />

            <div className="relative z-10">
              <div className="mb-3">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#ff6e40' }}>200</p>
              <p className="text-sm lg:text-base text-gray-300">
                Emails per account daily
              </p>
            </div>
          </div>

          {/* Small Card - Instant Setup */}
          <div
            className="backdrop-blur-xl rounded-2xl p-6 border relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl" style={{ backgroundColor: '#ff6e40' }} />

            <div className="relative z-10">
              <div className="mb-3">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base lg:text-lg font-bold text-white mb-2">
                Instant Setup
              </h3>
              <p className="text-sm text-gray-400">
                Get started in minutes, not days
              </p>
            </div>
          </div>

          {/* Medium Card - Support */}
          <div
            className="lg:col-span-2 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl" style={{ backgroundColor: '#ff6e40' }} />

            <div className="relative z-10">
              <div className="mb-4">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                24/7 Dedicated Support
              </h3>
              <p className="text-base text-gray-300">
                Expert help whenever you need it. Never face deliverability challenges alone with our round-the-clock support team.
              </p>
            </div>
          </div>

          {/* Small Card - Analytics */}
          <div
            className="backdrop-blur-xl rounded-2xl p-6 border relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl" style={{ backgroundColor: '#ff6e40' }} />

            <div className="relative z-10">
              <div className="mb-3">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-base lg:text-lg font-bold text-white mb-2">
                Real-Time Analytics
              </h3>
              <p className="text-sm text-gray-400">
                Track every metric that matters
              </p>
            </div>
          </div>

          {/* Small Card - Premium IPs */}
          <div
            className="backdrop-blur-xl rounded-2xl p-6 border relative overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl" style={{ backgroundColor: '#ff6e40' }} />

            <div className="relative z-10">
              <div className="mb-3">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-base lg:text-lg font-bold text-white mb-2">
                Premium IP Pools
              </h3>
              <p className="text-sm text-gray-400">
                Highest reputation IPs only
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
