"use client";

import GetStartedButton from "./GetStartedButton";
import DeliverabilityChart from "./DeliverabilityChart";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center pt-20" style={{ backgroundColor: '#1c1c1c' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(255, 110, 64, 0.2)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(255, 110, 64, 0.15)' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse delay-2000" style={{ backgroundColor: 'rgba(255, 110, 64, 0.1)' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-6 lg:px-16 py-16 w-full relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <div className="space-y-10 text-left flex flex-col justify-center h-full">
            {/* Badge */}
            <div className="flex justify-start animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/20">
                <span className="rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: '#ff6e40' }}>
                  New
                </span>
                <span className="text-sm font-medium text-white">
                  Email deliverability enhanced
                </span>
              </div>
            </div>

            <h1 className="text-[2rem] md:text-[2.75rem] lg:text-[3rem] xl:text-[4.25rem] font-bold text-white leading-[1.15] tracking-normal animate-fade-in-up">
              Scale Your
              <br />
              Email Deliverability
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed animate-fade-in-up max-w-2xl">
              Transform your email infrastructure with our enterprise-grade inbox management solution.
              Reach more inboxes, boost engagement, and scale your outreach effortlessly.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4 pt-4 animate-fade-in-up">
              <GetStartedButton />
              <button className="rounded-full px-10 py-4 text-lg font-semibold bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:shadow-lg transition-all border border-white/20">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Column - Chart */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <DeliverabilityChart />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
