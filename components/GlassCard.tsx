"use client";

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  isVisible?: boolean;
  delay?: number;
  heading?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  isVisible = true,
  delay = 0,
  heading,
  hoverEffect = true,
}) => {
  return (
    <div
      className={`relative backdrop-blur-xl rounded-3xl p-8 lg:p-10 border transition-all duration-700 group overflow-hidden h-full flex flex-col shadow-2xl ${
        hoverEffect ? "hover:border-orange-500/40 hover:shadow-orange-500/10 hover:-translate-y-2" : ""
      } ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20"
      } ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 100%)',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Hover glow effect */}
      {hoverEffect && (
        <>
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-700 blur-3xl"
            style={{ background: "radial-gradient(circle, #ff6e40 0%, transparent 70%)" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
        </>
      )}

      {/* Optional heading */}
      {heading && (
        <h3 className="text-lg sm:text-xl font-bold mb-4 relative z-10 text-left">
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{heading}</span>
        </h3>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
