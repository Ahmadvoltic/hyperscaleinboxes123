"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [loading, setLoading] = useState(true);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    if (sessionId) {
      // Optionally fetch order details from your API
      // For now, we'll just show a success message
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)" }}>
        <Navigation />
        <div className="container mx-auto px-6 lg:px-20 py-32 max-w-4xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="text-gray-300 mt-4">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)" }}>
      <Navigation />
      
      <div className="container mx-auto px-6 lg:px-20 py-32 max-w-4xl">
        <div className="text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Thank you for your order. We've received your payment and will process your order shortly.
          </p>

          {sessionId && (
            <div className="mb-8 p-6 rounded-xl border" style={{ 
              background: 'rgba(255, 255, 255, 0.05)', 
              borderColor: 'rgba(255, 255, 255, 0.1)' 
            }}>
              <p className="text-sm text-gray-400 mb-2">Order ID</p>
              <p className="text-white font-mono text-sm">{sessionId}</p>
            </div>
          )}

          <div className="mb-8 p-6 rounded-xl border" style={{ 
            background: 'rgba(255, 110, 64, 0.1)', 
            borderColor: 'rgba(255, 110, 64, 0.3)' 
          }}>
            <h2 className="text-lg font-semibold text-white mb-4">What's Next?</h2>
            <ul className="text-left text-gray-300 space-y-2 max-w-md mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">✓</span>
                <span>You'll receive a confirmation email shortly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">✓</span>
                <span>Our team will review your order details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">✓</span>
                <span>We'll contact you within 24 hours to set up your accounts</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              style={{
                background: 'linear-gradient(to right, #fb923c 0%, #f97316 50%, #ea580c 100%)',
                color: '#fff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 110, 64, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

