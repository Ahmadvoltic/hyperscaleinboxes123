"use client";

interface GetStartedButtonProps {
  className?: string;
  size?: "default" | "small";
}

const GetStartedButton = ({ className = "", size = "default" }: GetStartedButtonProps) => {
  const sizeClasses = size === "small"
    ? "pl-5 pr-4 py-2 text-base gap-2"
    : "pl-7 pr-6 py-3 text-xl gap-3";

  const circleSize = size === "small" ? "w-7 h-7" : "w-10 h-10";
  const iconSize = size === "small" ? "w-3.5 h-3.5" : "w-5 h-5";

  return (
    <button
      className={`rounded-full font-semibold text-white hover:shadow-2xl transition-all flex items-center group ${sizeClasses} ${className}`}
      style={{ backgroundColor: '#ff6e40' }}
    >
      Get Started
      <div className={`${circleSize} rounded-full bg-white flex items-center justify-center`}>
        <svg className={`${iconSize} transition-transform duration-300 rotate-[-45deg] group-hover:rotate-0 text-black`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default GetStartedButton;
