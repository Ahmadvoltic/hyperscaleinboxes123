"use client";

import React from "react";

const ComparisonSection = () => {
  const features = [
    {
      name: "Price per Domain",
      hyperscale: "$10-12",
      inboxing: "$25+",
      hypertide: "$30+",
      scaledmail: "$35+",
      superwave: "$40+"
    },
    {
      name: "Accounts per Domain",
      hyperscale: "50",
      inboxing: "10",
      hypertide: "5",
      scaledmail: "10",
      superwave: "8"
    },
    {
      name: "Emails per Day",
      hyperscale: "200/account",
      inboxing: "2-5/account",
      hypertide: "50/account",
      scaledmail: "100/account",
      superwave: "75/account"
    },
    {
      name: "Total Daily Capacity",
      hyperscale: "10,000/domain",
      inboxing: "245/domain",
      hypertide: "~250/domain",
      scaledmail: "~1,000/domain",
      superwave: "~600/domain"
    },
    {
      name: "Setup Time",
      hyperscale: "1-2 hours",
      inboxing: "2-3 days",
      hypertide: "3-5 days",
      scaledmail: "1-2 days",
      superwave: "2-4 days"
    },
    {
      name: "Automation",
      hyperscale: "100% Auto",
      inboxing: "Partial",
      hypertide: "Manual",
      scaledmail: "Partial",
      superwave: "Manual"
    },
    {
      name: "Infrastructure",
      hyperscale: "Azure Premium",
      inboxing: "Standard",
      hypertide: "Standard",
      scaledmail: "Standard",
      superwave: "Standard"
    },
    {
      name: "Support",
      hyperscale: "Premium 1-on-1",
      inboxing: "Email Only",
      hypertide: "Email Only",
      scaledmail: "Chat",
      superwave: "Email Only"
    },
    {
      name: "API Access",
      hyperscale: true,
      inboxing: false,
      hypertide: false,
      scaledmail: true,
      superwave: false
    },
    {
      name: "Domain Swapping",
      hyperscale: true,
      inboxing: false,
      hypertide: false,
      scaledmail: false,
      superwave: false
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#121212' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(255, 110, 64, 0.08)' }}></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(255, 110, 64, 0.06)' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6 shadow-lg border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-sm font-medium text-white">Comparison</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            <span className="font-normal" style={{ color: '#e8e8e8' }}>See How We</span>{' '}
            <span className="font-bold" style={{ color: '#ff6e40' }}>Stack Up</span>
          </h2>
          <p className="text-lg" style={{ color: '#b0b0b0' }}>
            Compare our features and pricing with leading competitors
          </p>
        </div>

        {/* Comparison Table - Mobile Optimized */}
        <div className="overflow-x-auto -mx-6 lg:mx-0">
          <div className="inline-block min-w-full px-6 lg:px-0 align-middle">
            <div className="overflow-hidden rounded-3xl border-2 backdrop-blur-xl shadow-2xl" style={{
              borderColor: 'rgba(255, 255, 255, 0.12)',
              backgroundColor: 'rgba(0, 0, 0, 0.4)'
            }}>
              <table className="min-w-full">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, rgba(30, 30, 35, 0.95) 0%, rgba(25, 25, 30, 0.98) 100%)' }}>
                    <th className="px-4 lg:px-6 py-6 text-left text-xs lg:text-sm font-bold sticky left-0" style={{
                      background: 'linear-gradient(135deg, rgba(40, 30, 50, 0.95) 0%, rgba(35, 25, 45, 0.98) 100%)',
                      color: '#e8e8e8'
                    }}>
                      <span className="tracking-wide">Feature</span>
                    </th>
                    <th className="px-4 lg:px-6 py-6 text-center text-xs lg:text-sm font-bold relative min-w-[160px]" style={{ color: '#e8e8e8' }}>
                      {/* Best Value Badge */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                        <span
                          className="text-[9px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
                          style={{
                            background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
                            color: '#1a1a1a'
                          }}
                        >
                          ⭐ BEST VALUE
                        </span>
                      </div>

                      {/* Column highlight background */}
                      <div
                        className="absolute inset-0 border-x-2"
                        style={{
                          background: 'linear-gradient(180deg, rgba(255, 110, 64, 0.15) 0%, rgba(255, 110, 64, 0.08) 100%)',
                          borderColor: 'rgba(255, 110, 64, 0.3)'
                        }}
                      />

                      <div className="relative z-10">
                        <div className="mb-2 font-extrabold text-base" style={{ color: '#ff6e40' }}>HyperScale</div>
                        <span
                          className="text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg"
                          style={{ backgroundColor: '#ff6e40', color: '#fff' }}
                        >
                          YOU
                        </span>
                      </div>
                    </th>
                    <th className="px-4 lg:px-6 py-6 text-center text-xs lg:text-sm font-semibold min-w-[120px]" style={{ color: '#a0a0a0' }}>
                      <span className="tracking-wide">Inboxing</span>
                    </th>
                    <th className="px-4 lg:px-6 py-6 text-center text-xs lg:text-sm font-semibold min-w-[120px]" style={{ color: '#a0a0a0' }}>
                      <span className="tracking-wide">Hypertide</span>
                    </th>
                    <th className="px-4 lg:px-6 py-6 text-center text-xs lg:text-sm font-semibold min-w-[120px]" style={{ color: '#a0a0a0' }}>
                      <span className="tracking-wide">ScaledMail</span>
                    </th>
                    <th className="px-4 lg:px-6 py-6 text-center text-xs lg:text-sm font-semibold min-w-[120px]" style={{ color: '#a0a0a0' }}>
                      <span className="tracking-wide">Superwave</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => {
                    // Special handling for "Total Daily Capacity" row
                    const isCapacityRow = feature.name === "Total Daily Capacity";

                    return (
                      <tr
                        key={index}
                        className="border-t transition-all duration-300 hover:bg-white/8 group"
                        style={{
                          backgroundColor: index % 2 === 0 ? 'rgba(18, 18, 22, 0.6)' : 'rgba(22, 22, 26, 0.8)',
                          borderColor: 'rgba(255, 255, 255, 0.06)'
                        }}
                      >
                        <td className="px-4 lg:px-6 py-5 text-xs lg:text-sm font-semibold sticky left-0 transition-colors duration-300" style={{
                          backgroundColor: index % 2 === 0 ? 'rgba(18, 18, 22, 0.6)' : 'rgba(22, 22, 26, 0.8)',
                          color: '#e8e8e8'
                        }}>
                          <span className="tracking-wide">{feature.name}</span>
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center relative">
                          {/* HyperScale column border highlight */}
                          <div
                            className="absolute inset-0 border-x-2 transition-opacity duration-300 group-hover:opacity-100"
                            style={{
                              backgroundColor: 'rgba(255, 110, 64, 0.05)',
                              opacity: 0.7,
                              borderColor: 'rgba(255, 110, 64, 0.15)'
                            }}
                          />
                          {typeof feature.hyperscale === 'boolean' ? (
                            feature.hyperscale ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full relative z-10 shadow-md transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                                border: '2px solid rgba(34, 197, 94, 0.4)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#22c55e' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full relative z-10 shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(127, 127, 127, 0.1)',
                                border: '2px solid rgba(127, 127, 127, 0.2)'
                              }}>
                                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                            )
                          ) : isCapacityRow ? (
                            <span className="text-xl lg:text-2xl font-extrabold relative z-10 inline-block" style={{
                              color: '#ff6e40',
                              textShadow: '0 0 20px rgba(255, 110, 64, 0.5)'
                            }}>
                              {feature.hyperscale}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-bold relative z-10 inline-block px-4 py-2 rounded-lg shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg" style={{
                              color: '#ff6e40',
                              backgroundColor: 'rgba(255, 110, 64, 0.15)',
                              border: '1.5px solid rgba(255, 110, 64, 0.3)'
                            }}>
                              {feature.hyperscale}
                            </span>
                          )}
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center">
                          {typeof feature.inboxing === 'boolean' ? (
                            feature.inboxing ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                                border: '2px solid rgba(34, 197, 94, 0.3)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#22c55e' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(100, 100, 100, 0.1)',
                                border: '2px solid rgba(100, 100, 100, 0.2)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#808080' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                            )
                          ) : isCapacityRow ? (
                            <span className="text-base lg:text-lg font-bold" style={{ color: '#b0b0b0' }}>
                              {feature.inboxing}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-medium tracking-wide" style={{ color: '#c0c0c0' }}>{feature.inboxing}</span>
                          )}
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center">
                          {typeof feature.hypertide === 'boolean' ? (
                            feature.hypertide ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                                border: '2px solid rgba(34, 197, 94, 0.3)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#22c55e' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(100, 100, 100, 0.1)',
                                border: '2px solid rgba(100, 100, 100, 0.2)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#808080' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                            )
                          ) : isCapacityRow ? (
                            <span className="text-base lg:text-lg font-bold" style={{ color: '#b0b0b0' }}>
                              {feature.hypertide}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-medium tracking-wide" style={{ color: '#c0c0c0' }}>{feature.hypertide}</span>
                          )}
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center">
                          {typeof feature.scaledmail === 'boolean' ? (
                            feature.scaledmail ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                                border: '2px solid rgba(34, 197, 94, 0.3)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#22c55e' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(100, 100, 100, 0.1)',
                                border: '2px solid rgba(100, 100, 100, 0.2)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#808080' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                            )
                          ) : isCapacityRow ? (
                            <span className="text-base lg:text-lg font-bold" style={{ color: '#b0b0b0' }}>
                              {feature.scaledmail}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-medium tracking-wide" style={{ color: '#c0c0c0' }}>{feature.scaledmail}</span>
                          )}
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center">
                          {typeof feature.superwave === 'boolean' ? (
                            feature.superwave ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                                border: '2px solid rgba(34, 197, 94, 0.3)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#22c55e' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(100, 100, 100, 0.1)',
                                border: '2px solid rgba(100, 100, 100, 0.2)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#808080' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </div>
                            )
                          ) : isCapacityRow ? (
                            <span className="text-base lg:text-lg font-bold" style={{ color: '#b0b0b0' }}>
                              {feature.superwave}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-medium tracking-wide" style={{ color: '#c0c0c0' }}>{feature.superwave}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-xl rounded-3xl p-10 max-w-2xl mx-auto border relative overflow-hidden" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderColor: 'rgba(255, 255, 255, 0.12)'
          }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              background: 'radial-gradient(circle at center, rgba(255, 110, 64, 0.15) 0%, transparent 70%)'
            }}></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#e8e8e8' }}>
                Ready to <span style={{ color: '#ff6e40' }}>10x</span> Your Email Delivery?
              </h3>
              <p className="mb-8 text-lg" style={{ color: '#b0b0b0' }}>
                Join hundreds of businesses scaling their outreach with premium infrastructure
              </p>
              <button
                className="px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                style={{
                  backgroundColor: '#ff6e40',
                  color: '#fff'
                }}
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
