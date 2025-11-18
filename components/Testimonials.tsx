"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, GrowthTech",
      company: "GrowthTech Solutions",
      avatar: "SJ",
      content: "HyperScale transformed our email infrastructure. We went from 245 emails per domain to unlimited capacity. The ROI was immediate and our deliverability has never been better.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      company: "ScaleUp Inc",
      avatar: "MC",
      content: "The Microsoft Partner infrastructure makes all the difference. Our emails actually land in inboxes now. Setup was seamless and support has been outstanding.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Sales",
      company: "Outreach Pro",
      avatar: "ER",
      content: "We tested 4 different providers before choosing HyperScale. The unlimited daily capacity and 200 emails per account gave us the volume we needed to scale our outreach.",
      rating: 5
    },
    {
      name: "David Kumar",
      role: "Founder",
      company: "LeadGen Masters",
      avatar: "DK",
      content: "Best investment we've made in our sales infrastructure. The automation is top-notch and we're sending 10x more emails than before without any deliverability issues.",
      rating: 5
    },
    {
      name: "Jessica Williams",
      role: "VP of Marketing",
      company: "CloudScale",
      avatar: "JW",
      content: "Switched from our previous provider and immediately saw better inbox rates. The premium support team helped us migrate smoothly. Couldn't be happier with HyperScale.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Growth Lead",
      company: "StartupBoost",
      avatar: "AT",
      content: "The pricing is unbeatable. $10 per domain with 50 Microsoft Partner accounts? We're scaling faster than ever and our cost per lead has dropped significantly.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const cards = carousel.children;
    const cardWidth = 480; // Card width + gap
    const totalWidth = cardWidth * testimonials.length;

    // Duplicate testimonials for seamless loop
    const clonedCards = Array.from(cards).map(card => card.cloneNode(true));
    clonedCards.forEach(clone => carousel.appendChild(clone));

    // Infinite scroll animation
    gsap.to(carousel, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });

    // Pause on hover
    carousel.addEventListener("mouseenter", () => {
      gsap.globalTimeline.pause();
    });

    carousel.addEventListener("mouseleave", () => {
      gsap.globalTimeline.resume();
    });

    return () => {
      gsap.killTweensOf(carousel);
    };
  }, []);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#1c1c1c' }}>
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 inline-flex items-center gap-2 mb-6 shadow-lg border border-white/20">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-sm font-medium text-white">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            <span className="font-normal" style={{ color: '#e8e8e8' }}>Trusted by</span>{' '}
            <span className="font-bold" style={{ color: '#ff6e40' }}>Industry Leaders</span>
          </h2>
          <p className="text-lg" style={{ color: '#b0b0b0' }}>
            See what our customers have to say about their experience
          </p>
        </div>
      </div>

      {/* Carousel - Full Width */}
      <div className="relative w-full">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to right, #1c1c1c 0%, transparent 100%)'
          }}></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{
            background: 'linear-gradient(to left, #1c1c1c 0%, transparent 100%)'
          }}></div>

          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div ref={carouselRef} className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[450px] backdrop-blur-xl rounded-2xl p-8 border transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        style={{ color: '#ff6e40' }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                      style={{ backgroundColor: '#ff6e40' }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs" style={{ color: '#b0b0b0' }}>
                        {testimonial.role}
                      </div>
                      <div className="text-xs" style={{ color: '#ff6e40' }}>
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
