"use client";

import React from "react";

const ClientShowcase = () => {
  const logos = [
    {
      name: "Instantly",
      logoSrc: "/instantly-logo.svg",
      height: "h-12 md:h-14",
    },
    {
      name: "Smartlead.ai",
      logoSrc: "/smartlead-logo.svg",
      height: "h-12 md:h-14",
    },
    {
      name: "MAILREACH",
      logoSrc: "/mailreach-logo.svg",
      height: "h-8 md:h-10",
    },
    {
      name: "lemlist",
      iconSrc: "/lemlist-icon.svg",
    },
  ];

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5; // Speed of animation
      if (position <= -50) {
        position = 0; // Reset when halfway through (since we duplicate)
      }
      container.style.transform = `translateX(${position}%)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: '#1c1c1c' }}>
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Leading Platforms
          </h2>
          <p className="text-gray-400 text-lg">
            Join thousands of businesses scaling their email outreach
          </p>
        </div>

        <div className="w-full max-w-screen-xl mx-auto overflow-hidden relative">
          {/* Left fade overlay */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #1c1c1c, transparent)' }}
          />
          {/* Right fade overlay */}
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #1c1c1c, transparent)' }}
          />

          <div ref={containerRef} className="flex will-change-transform">
            {/* Render logos twice for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="min-w-[33%] md:min-w-[25%] flex items-center justify-center px-6 md:px-8 py-4">
                {logo.logoSrc ? (
                  <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      src={logo.logoSrc}
                      alt={logo.name}
                      className={`${logo.height || 'h-8'} w-auto object-contain filter brightness-0 invert`}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      src={logo.iconSrc}
                      alt={`${logo.name} icon`}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0 filter brightness-0 invert"
                    />
                    <span className="text-xl md:text-2xl font-bold text-white">
                      {logo.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
