"use client";

import React from "react";

const ComparisonSection = () => {
  const features = [
    {
      name: "Price per Domain",
      hyperscale: "$10",
      inboxing: "$40",
      hypertide: "$50",
      scaledmail: "Custom"
    },
    {
      name: "Accounts per Domain",
      hyperscale: "50",
      inboxing: "49",
      hypertide: "50",
      scaledmail: "49"
    },
    {
      name: "Emails per Day",
      hyperscale: "200/account",
      inboxing: "2-5/account",
      hypertide: "2/account",
      scaledmail: "15/account"
    },
    {
      name: "Total Daily Capacity",
      hyperscale: "Unlimited",
      inboxing: "245/domain",
      hypertide: "100/domain",
      scaledmail: "735/domain"
    },
    {
      name: "Setup Time",
      hyperscale: "10-12 hours",
      inboxing: "1-2 hours",
      hypertide: "4-6 hours",
      scaledmail: "4 days"
    },
    {
      name: "Setup Fees",
      hyperscale: "Free",
      inboxing: "Free",
      hypertide: true,
      scaledmail: false
    },
    {
      name: "Automation",
      hyperscale: "Partial",
      inboxing: "Fully Automated",
      hypertide: "Fully Automated",
      scaledmail: "Partial"
    },
    {
      name: "Infrastructure",
      hyperscale: "Microsoft Partner",
      inboxing: "Enterprise-Grade",
      hypertide: "Azure Servers",
      scaledmail: "Isolated Tenants"
    },
    {
      name: "Support",
      hyperscale: "Premium",
      inboxing: "24/7 Chat",
      hypertide: "Email Only",
      scaledmail: "White-Glove"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1c1c1c' }}>
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
            <div className="overflow-hidden rounded-3xl border backdrop-blur-xl shadow-2xl hover:bg-white/10 transition-all duration-300" style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }}>
              <table className="min-w-full">
                <thead>
                  <tr style={{
                    backgroundColor: '#2a2a2e',
                    borderBottom: '3px solid #ff6e40',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}>
                    <th className="px-4 lg:px-6 py-8 text-left text-sm lg:text-base font-bold sticky left-0" style={{
                      backgroundColor: '#2a2a2e',
                      color: '#ffffff',
                      borderBottom: '3px solid #ff6e40',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      <span className="tracking-wide">Feature</span>
                    </th>
                    <th className="px-4 lg:px-6 py-8 text-center text-sm lg:text-base font-bold relative min-w-[160px]" style={{
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      <div className="relative z-10">
                        <div className="font-extrabold text-lg" style={{ color: '#ffffff' }}>HyperScale</div>
                      </div>
                    </th>
                    <th className="px-4 lg:px-6 py-8 text-center text-sm lg:text-base font-bold min-w-[120px]" style={{
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      <span className="tracking-wide">Inboxing</span>
                    </th>
                    <th className="px-4 lg:px-6 py-8 text-center text-sm lg:text-base font-bold min-w-[120px]" style={{
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      <span className="tracking-wide">Hypertide</span>
                    </th>
                    <th className="px-4 lg:px-6 py-8 text-center text-sm lg:text-base font-bold min-w-[120px]" style={{
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      <span className="tracking-wide">ScaledMail</span>
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
                        className="border-t transition-all duration-300 hover:bg-white/5 group"
                        style={{
                          backgroundColor: 'transparent',
                          borderColor: 'rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        <td className="px-4 lg:px-6 py-5 text-xs lg:text-sm font-semibold sticky left-0 transition-colors duration-300" style={{
                          backgroundColor: 'transparent',
                          color: '#e8e8e8'
                        }}>
                          <span className="tracking-wide">{feature.name}</span>
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center relative">
                          {typeof feature.hyperscale === 'boolean' ? (
                            feature.hyperscale ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full relative z-10 shadow-md transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(128, 128, 128, 0.2)',
                                border: '2px solid rgba(128, 128, 128, 0.4)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                              textShadow: '0 0 30px rgba(255, 110, 64, 0.3)'
                            }}>
                              {feature.hyperscale}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-semibold relative z-10 inline-block" style={{
                              color: '#ff6e40'
                            }}>
                              {feature.hyperscale}
                            </span>
                          )}
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center">
                          {typeof feature.inboxing === 'boolean' ? (
                            feature.inboxing ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(128, 128, 128, 0.2)',
                                border: '2px solid rgba(128, 128, 128, 0.4)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            <span className="text-base lg:text-lg font-bold" style={{ color: '#ffffff' }}>
                              {feature.inboxing}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-medium tracking-wide" style={{ color: '#ffffff' }}>{feature.inboxing}</span>
                          )}
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center">
                          {typeof feature.hypertide === 'boolean' ? (
                            feature.hypertide ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(128, 128, 128, 0.2)',
                                border: '2px solid rgba(128, 128, 128, 0.4)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            <span className="text-base lg:text-lg font-bold" style={{ color: '#ffffff' }}>
                              {feature.hypertide}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-medium tracking-wide" style={{ color: '#ffffff' }}>{feature.hypertide}</span>
                          )}
                        </td>
                        <td className="px-4 lg:px-6 py-5 text-center">
                          {typeof feature.scaledmail === 'boolean' ? (
                            feature.scaledmail ? (
                              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full shadow-sm transition-transform duration-300 group-hover:scale-110" style={{
                                backgroundColor: 'rgba(128, 128, 128, 0.2)',
                                border: '2px solid rgba(128, 128, 128, 0.4)'
                              }}>
                                <svg className="w-5 h-5" style={{ color: '#9ca3af' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            <span className="text-base lg:text-lg font-bold" style={{ color: '#ffffff' }}>
                              {feature.scaledmail}
                            </span>
                          ) : (
                            <span className="text-xs lg:text-sm font-medium tracking-wide" style={{ color: '#ffffff' }}>{feature.scaledmail}</span>
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
      </div>
    </section>
  );
};

export default ComparisonSection;
