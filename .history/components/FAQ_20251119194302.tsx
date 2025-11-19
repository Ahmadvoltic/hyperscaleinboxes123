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
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6 shadow-lg border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-sm font-medium text-white">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            <span className="font-normal" style={{ color: '#e8e8e8' }}>Frequently Asked</span>{' '}
            <span className="font-bold" style={{ color: '#ff6e40' }}>Questions</span>
          </h2>
          <p className="text-lg" style={{ color: '#b0b0b0' }}>
            Everything you need to know about HyperScale
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-xl rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: openIndex === index ? 'rgba(255, 110, 64, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                borderColor: openIndex === index ? '#ff6e40' : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
              >
                <span className="font-semibold text-white pr-8 text-sm md:text-base">
                  {faq.question}
                </span>
                <svg
                  className="w-6 h-6 flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: openIndex === index ? '#ff6e40' : '#fff',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px'
                }}
              >
                <div className="px-6 pb-5 text-sm md:text-base leading-relaxed" style={{ color: '#b0b0b0' }}>
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
