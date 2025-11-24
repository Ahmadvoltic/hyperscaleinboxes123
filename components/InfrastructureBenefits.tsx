"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import GlassCard from './GlassCard';

const InfrastructureBenefits = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Subtle floating animation
        const animation = gsap.to(card, {
          y: index % 2 === 0 ? -25 : 25,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2
        });

        // Pause animation on hover, resume when hover ends
        const handleMouseEnter = () => animation.pause();
        const handleMouseLeave = () => animation.play();

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
  }, []);
  const timeline = [
    {
      number: "01",
      title: "Deliverability",
      subtitle: "99%+ Inbox Placement",
      description: "Quality infrastructure ensures your emails reach the inbox, not spam. Premium IP pools and domain reputation management maximize deliverability rates",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
      ),
      accentColor: "#8470ff"
    },
    {
      number: "02",
      title: "Scalability",
      subtitle: "Grow Without Limits",
      description: "Send millions of emails daily without worrying about infrastructure constraints. Enterprise-grade systems that scale with your business",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      accentColor: "#8470ff"
    },
    {
      number: "03",
      title: "Reliability",
      subtitle: "Always-On Performance",
      description: "24/7 monitoring and redundant systems ensure your campaigns never fail. Real-time alerts and automatic failover keep you running",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      accentColor: "#8470ff"
    },
    {
      number: "04",
      title: "Security",
      subtitle: "Enterprise-Grade Protection",
      description: "Advanced security measures protect your data and sender reputation. Encrypted connections, secure authentication, and compliance with industry standards",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      accentColor: "#8470ff"
    },
    {
      number: "05",
      title: "Analytics",
      subtitle: "Deep Performance Insights",
      description: "Real-time analytics and detailed reporting help you optimize campaigns. Track deliverability, engagement metrics, and identify areas for improvement",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      accentColor: "#8470ff"
    },
    {
      number: "06",
      title: "Support",
      subtitle: "Expert Help When You Need It",
      description: "Dedicated support team available 24/7 to help with technical issues, optimization, and best practices. Never face deliverability challenges alone",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      accentColor: "#8470ff"
    }
  ];

  return (
    <section className="py-28 relative" style={{ background: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)" }}>
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 via-orange-500/10 to-transparent border border-orange-500/30 backdrop-blur-md rounded-full px-6 py-3 inline-flex items-center gap-3 mb-8 shadow-lg shadow-orange-500/10">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></span>
            <span className="text-sm font-semibold text-orange-400 tracking-wide">Infrastructure Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight">
            <span className="font-normal text-white">Why</span>{' '}
            <span className="font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Quality Email Infrastructure</span>{' '}
            <span className="font-normal text-white">Matters</span>
          </h2>
        </div>

        {/* MUI Timeline */}
        <Timeline position="alternate-reverse">
          {timeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: '#ff6e40',
                    width: { xs: 16, sm: 20 },
                    height: { xs: 16, sm: 20 },
                    border: '3px solid #1c1c1c',
                    boxShadow: '0 0 0 2px #ff6e40'
                  }}
                />
                {index < timeline.length - 1 && (
                  <TimelineConnector
                    sx={{
                      bgcolor: '#ff6e40',
                      width: 3
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: 3, px: 2 }}>
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="max-w-md cursor-pointer"
                  style={{ minHeight: '200px' }}
                >
                  <GlassCard
                    heading={item.subtitle}
                    className="shadow-[0_12px_40px_0_rgba(0,0,0,0.5)]"
                  >
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-left">
                      {item.description}
                    </p>
                  </GlassCard>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default InfrastructureBenefits;
