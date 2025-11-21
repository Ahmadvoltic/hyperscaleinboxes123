"use client";

import { useEffect, useState } from "react";

const DeliverabilityChart = () => {
  const [animated, setAnimated] = useState(false);
  const [lineOffset, setLineOffset] = useState(1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
      setLineOffset(0);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Generate last 6 months dynamically
  const getLastSixMonths = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentDate = new Date();
    const result = [];

    for (let i = 5; i >= 0; i--) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      result.push(months[date.getMonth()]);
    }

    return result;
  };

  const lastSixMonths = getLastSixMonths();

  const data = [
    { month: lastSixMonths[0], value: 30, label: "30%" },
    { month: lastSixMonths[1], value: 45, label: "45%" },
    { month: lastSixMonths[2], value: 60, label: "60%" },
    { month: lastSixMonths[3], value: 72, label: "72%" },
    { month: lastSixMonths[4], value: 82, label: "82%" },
    { month: lastSixMonths[5], value: 90, label: "90%" },
  ];

  // Calculate smooth SVG path using bezier curves
  const getLinePath = () => {
    const width = 280;
    const height = 200;
    const pointsX = data.map((_, i) => (i * width) / (data.length - 1));
    const pointsY = data.map((d) => height - (d.value / 100) * height);

    let path = `M ${pointsX[0]} ${pointsY[0]}`;

    for (let i = 0; i < pointsX.length - 1; i++) {
      const xMid = (pointsX[i] + pointsX[i + 1]) / 2;
      const yMid = (pointsY[i] + pointsY[i + 1]) / 2;
      const cpX1 = (xMid + pointsX[i]) / 2;
      const cpX2 = (xMid + pointsX[i + 1]) / 2;

      path += ` Q ${pointsX[i]} ${pointsY[i]}, ${xMid} ${yMid}`;
      path += ` Q ${pointsX[i + 1]} ${pointsY[i + 1]}, ${pointsX[i + 1]} ${pointsY[i + 1]}`;
    }

    return path;
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Card Container */}
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h3 className="text-white text-3xl font-bold mb-2">Email Deliverability</h3>
            <p className="text-orange-400 text-base font-semibold">After using HyperScale mailboxes</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white">90%</div>
            <div className="flex items-center gap-1 text-green-400 text-base font-bold mt-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>+60%</span>
            </div>
          </div>
        </div>

        {/* Line Chart Only */}
        <div className="relative h-64 px-4">
          {/* Y-axis grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between py-4">
            {[100, 75, 50, 25, 0].map((val) => (
              <div key={val} className="flex items-center gap-2">
                <span className="text-white text-xs w-8">{val}%</span>
                <div className="flex-1 h-px bg-white/5"></div>
              </div>
            ))}
          </div>

          {/* SVG Line Graph */}
          <svg
            className="absolute inset-0 w-full h-full z-10 pointer-events-none pl-12"
            viewBox="0 0 280 220"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 110, 64, 0.2)" />
                <stop offset="100%" stopColor="rgba(255, 110, 64, 0)" />
              </linearGradient>
            </defs>

            {/* Area under line */}
            <path
              d={`${getLinePath()} L 280 220 L 0 220 Z`}
              fill="url(#areaGradient)"
              style={{
                strokeDasharray: '1000',
                strokeDashoffset: lineOffset,
                transition: 'stroke-dashoffset 3.5s ease-out',
              }}
            />

            {/* Line with glow */}
            <>
              {/* Glow effect */}
              <path
                d={getLinePath()}
                stroke="#ff6e40"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.2"
                style={{
                  filter: 'blur(8px)',
                  strokeDasharray: '1000',
                  strokeDashoffset: lineOffset,
                  transition: 'stroke-dashoffset 3.5s ease-out',
                }}
              />
              {/* Main line */}
              <path
                d={getLinePath()}
                stroke="#ff6e40"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: '1000',
                  strokeDashoffset: lineOffset,
                  transition: 'stroke-dashoffset 3.5s ease-out',
                }}
              />
            </>

            {/* Data points */}
            {data.map((item, index) => {
              const x = (index * 280) / (data.length - 1);
              const y = 220 - (item.value / 100) * 200;
              return animated && (
                <g key={item.month}>
                  {/* Glow circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="rgba(255, 110, 64, 0.3)"
                    className="transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 100 + 500}ms`,
                      opacity: animated ? 1 : 0
                    }}
                  />
                  {/* Main point */}
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#ff6e40"
                    className="transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 100 + 500}ms`,
                      opacity: animated ? 1 : 0
                    }}
                  />
                  {/* White center */}
                  <circle
                    cx={x}
                    cy={y}
                    r="2"
                    fill="white"
                    className="transition-all duration-500"
                    style={{
                      transitionDelay: `${index * 100 + 500}ms`,
                      opacity: animated ? 1 : 0
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-12 right-0 flex justify-between">
            {data.map((item) => (
              <span key={item.month} className="text-white text-xs font-medium">
                {item.month}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
          <div>
            <div className="text-gray-400 text-xs mb-1">Delivered</div>
            <div className="text-white text-lg font-bold">10M+</div>
          </div>
          <div>
            <div className="text-gray-400 text-xs mb-1">Success Rate</div>
            <div className="text-white text-lg font-bold">90%</div>
          </div>
          <div>
            <div className="text-gray-400 text-xs mb-1">Avg. Time</div>
            <div className="text-white text-lg font-bold">2.3s</div>
          </div>
        </div>

        {/* Data Info */}
        <div className="mt-6 pt-4 border-t border-white/5">
          <p className="text-gray-400 text-xs text-center">
            Last 6 months data • Updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverabilityChart;
