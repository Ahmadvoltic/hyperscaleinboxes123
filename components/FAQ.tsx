"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes HyperScale different from other email infrastructure providers?",
      answer: "HyperScale offers unlimited daily capacity with 50 Microsoft Partner accounts per domain, sending 200 emails per account. Unlike competitors who limit you to 2-5 emails per account, we provide true scale at an unbeatable price point of just $10-12 per domain."
    },
    {
      question: "How long does setup take?",
      answer: "Setup typically takes 10-12 hours. While this is longer than some competitors, we ensure proper configuration, DNS setup, Microsoft Partner account provisioning, and compliance checks to guarantee optimal deliverability from day one."
    },
    {
      question: "Do you offer API access?",
      answer: "Currently, API access is not available. We focus on providing the most reliable and scalable email infrastructure with hands-on support to ensure your campaigns succeed."
    },
    {
      question: "What's included in the pricing?",
      answer: "Our pricing includes 50 Microsoft Partner accounts per domain, 200 emails per day per account (unlimited total capacity), 100% automated setup, SPF/DKIM/Strict DMARC configuration, premium 1-on-1 support, and no setup fees. The Full Package ($22/domain) also includes domain registration."
    },
    {
      question: "Can I use my own domain?",
      answer: "Yes! Our BYOD (Bring Your Own Domain) plan lets you use your existing domains for just $10 per domain. Simply update your nameservers and we'll handle the rest of the setup automatically."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide premium 1-on-1 support to all customers. Our team is available to help with setup, troubleshooting, deliverability optimization, and any questions you have about scaling your email infrastructure."
    },
    {
      question: "How does the Microsoft Partner infrastructure benefit me?",
      answer: "Microsoft Partner accounts provide enterprise-grade infrastructure with superior deliverability rates, better IP reputation, and more reliable inbox placement compared to standard email providers. This translates to higher open rates and better campaign performance."
    },
    {
      question: "Is there a minimum commitment or contract?",
      answer: "No long-term contracts required. You can scale up or down based on your needs. We believe in earning your business every month through exceptional service and results."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #141414 0%, #0a0a0a 100%)" }}>
      <div className="container mx-auto px-6 lg:px-20 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent border border-orange-500/30 backdrop-blur-md rounded-full px-6 py-3 inline-flex items-center gap-3 mb-8 shadow-lg shadow-orange-500/10">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></span>
            <span className="text-sm font-semibold text-orange-400 tracking-wide">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight">
            <span className="font-normal text-white">Frequently Asked</span>{' '}
            <span className="font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Everything you need to know about HyperScale
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-xl rounded-3xl border overflow-hidden transition-all duration-700 group hover:shadow-xl"
              style={{
                background: openIndex === index
                  ? 'linear-gradient(135deg, rgba(255, 110, 64, 0.12) 0%, rgba(255, 110, 64, 0.04) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                borderColor: openIndex === index ? 'rgba(255, 110, 64, 0.4)' : 'rgba(255, 255, 255, 0.08)',
                boxShadow: openIndex === index ? '0 8px 32px rgba(255, 110, 64, 0.15)' : '0 4px 16px rgba(0, 0, 0, 0.3)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left transition-all duration-500"
              >
                <span className="font-bold text-white pr-8 text-base md:text-lg tracking-tight">
                  {faq.question}
                </span>
                <svg
                  className="w-7 h-7 flex-shrink-0 transition-all duration-500"
                  style={{
                    color: openIndex === index ? '#ff6e40' : '#fff',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px'
                }}
              >
                <div className="px-8 pb-6 text-base md:text-lg leading-relaxed text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
