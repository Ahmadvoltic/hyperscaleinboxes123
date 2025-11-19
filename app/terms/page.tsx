"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: "By accessing or using HyperScale's email infrastructure services (\"Services\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, you may not use our Services. These Terms constitute a legally binding agreement between you and HyperScale."
    },
    {
      id: "services",
      title: "Description of Services",
      content: "HyperScale provides email infrastructure services including:",
      list: [
        "Microsoft Partner account provisioning (50 accounts per domain)",
        "Email sending capacity (200 emails per day per account)",
        "Domain configuration and DNS setup",
        "SPF, DKIM, and DMARC configuration",
        "Infrastructure monitoring and support",
        "Optional domain registration services"
      ]
    },
    {
      id: "account",
      title: "Account Registration and Security",
      subsections: [
        {
          subtitle: "Account Information",
          content: "You must provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
        },
        {
          subtitle: "Account Security",
          content: "You must immediately notify us of any unauthorized use of your account or any other security breach. We are not liable for any loss or damage arising from your failure to maintain account security."
        },
        {
          subtitle: "Eligibility",
          content: "You must be at least 18 years old and have the legal capacity to enter into this agreement. By using our Services, you represent and warrant that you meet these requirements."
        }
      ]
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use Policy",
      content: "You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree NOT to:",
      list: [
        "Send spam, unsolicited emails, or bulk emails to recipients who have not opted in",
        "Engage in phishing, fraud, or any deceptive practices",
        "Distribute malware, viruses, or harmful code",
        "Violate any applicable laws, regulations, or third-party rights",
        "Harass, threaten, or harm others",
        "Impersonate any person or entity",
        "Interfere with or disrupt our Services or servers",
        "Use our Services to send illegal content or material",
        "Exceed the allocated sending limits without prior authorization",
        "Share or resell your account access to third parties"
      ]
    },
    {
      id: "payment",
      title: "Pricing and Payment",
      subsections: [
        {
          subtitle: "Pricing Plans",
          content: "Our current pricing is $10 per domain for BYOD (Bring Your Own Domain) and $22 per domain for Full Package (including domain registration). Prices are subject to change with 30 days' notice."
        },
        {
          subtitle: "Payment Terms",
          content: "Payment is required in advance for all services. You authorize us to charge your designated payment method for all fees. All fees are non-refundable unless otherwise stated."
        },
        {
          subtitle: "Failed Payments",
          content: "If payment fails, we may suspend or terminate your access to the Services. You remain responsible for all outstanding fees."
        }
      ]
    },
    {
      id: "service-level",
      title: "Service Level and Limitations",
      subsections: [
        {
          subtitle: "Service Availability",
          content: "While we strive to provide reliable service, we do not guarantee uninterrupted or error-free access to our Services. Scheduled maintenance will be communicated in advance when possible."
        },
        {
          subtitle: "Setup Time",
          content: "Typical setup time is 10-12 hours. This timeline is an estimate and may vary based on domain configuration and technical requirements."
        },
        {
          subtitle: "Sending Limits",
          content: "Standard accounts include 50 Microsoft Partner accounts per domain with 200 emails per day per account. Exceeding these limits may result in temporary restrictions or additional charges."
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      subsections: [
        {
          subtitle: "Our Content",
          content: "All content, features, and functionality of our Services are owned by HyperScale and are protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "Your Content",
          content: "You retain all rights to the content you send through our Services. By using our Services, you grant us a limited license to process and transmit your content solely to provide the Services."
        }
      ]
    },
    {
      id: "termination",
      title: "Termination",
      subsections: [
        {
          subtitle: "Termination by You",
          content: "You may cancel your account at any time through your account settings or by contacting support. Cancellation is effective at the end of your current billing period."
        },
        {
          subtitle: "Termination by Us",
          content: "We reserve the right to suspend or terminate your account immediately if you violate these Terms, engage in fraudulent activity, or for any other reason at our discretion."
        },
        {
          subtitle: "Effect of Termination",
          content: "Upon termination, your right to use the Services will immediately cease. We may delete your data in accordance with our data retention policy. You remain responsible for all fees incurred prior to termination."
        }
      ]
    },
    {
      id: "liability",
      title: "Disclaimers and Limitations of Liability",
      subsections: [
        {
          subtitle: "Disclaimers",
          content: "OUR SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE SPECIFIC DELIVERABILITY RATES OR INBOX PLACEMENT."
        },
        {
          subtitle: "Limitation of Liability",
          content: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, HYPERSCALE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES."
        },
        {
          subtitle: "Maximum Liability",
          content: "Our total liability for any claims arising out of or relating to these Terms or the Services shall not exceed the amount you paid to us in the 12 months preceding the claim."
        }
      ]
    },
    {
      id: "indemnification",
      title: "Indemnification",
      content: "You agree to indemnify and hold harmless HyperScale, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of the Services or violation of these Terms."
    },
    {
      id: "governing-law",
      title: "Governing Law and Disputes",
      subsections: [
        {
          subtitle: "Governing Law",
          content: "These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions."
        },
        {
          subtitle: "Dispute Resolution",
          content: "Any disputes arising out of or relating to these Terms or the Services shall be resolved through binding arbitration, except where prohibited by law."
        }
      ]
    },
    {
      id: "modifications",
      title: "Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Services. Your continued use of the Services after changes are posted constitutes acceptance of the modified Terms."
    },
    {
      id: "general",
      title: "General Provisions",
      subsections: [
        {
          subtitle: "Entire Agreement",
          content: "These Terms, together with our Privacy Policy, constitute the entire agreement between you and HyperScale regarding the Services."
        },
        {
          subtitle: "Severability",
          content: "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect."
        },
        {
          subtitle: "Waiver",
          content: "Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision."
        },
        {
          subtitle: "Assignment",
          content: "You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1c1c1c' }}>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden backdrop-blur-xl border-b" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/20 backdrop-blur-xl rounded-full px-5 py-2 inline-flex items-center gap-2 mb-6 shadow-lg border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="text-base font-semibold text-white">Legal</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#ff6e40' }}>
              Terms of Service
            </h1>
            <p className="text-lg text-white/90">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-white/70 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8">

            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="backdrop-blur-xl rounded-2xl p-6 border" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderColor: 'rgba(255, 255, 255, 0.1)'
                }}>
                  <h3 className="text-lg font-bold text-white mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-gray-400 hover:text-white transition-all duration-200 py-1.5 hover:translate-x-1"
                      >
                        <span className="font-semibold mr-2" style={{ color: '#ff6e40' }}>{index + 1}.</span>
                        {section.title}
                      </a>
                    ))}
                    <a
                      href="#contact"
                      className="block text-sm text-gray-400 hover:text-white transition-all duration-200 py-1.5 hover:translate-x-1"
                    >
                      <span className="font-semibold mr-2" style={{ color: '#ff6e40' }}>{sections.length + 1}.</span>
                      Contact Information
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-6">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="backdrop-blur-xl rounded-2xl p-6 lg:p-8 border scroll-mt-24"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{
                      backgroundColor: 'rgba(255, 110, 64, 0.1)',
                      border: '2px solid rgba(255, 110, 64, 0.3)'
                    }}>
                      <span className="text-lg font-bold" style={{ color: '#ff6e40' }}>{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-3">{section.title}</h2>

                      {section.subsections ? (
                        <div className="space-y-4">
                          {section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex}>
                              <h3 className="text-lg font-semibold text-white mb-2">{subsection.subtitle}</h3>
                              <p className="text-gray-300 leading-relaxed mb-2">{subsection.content}</p>
                              {'list' in subsection && subsection.list ? (
                                <ul className="space-y-2 mt-3">
                                  {subsection.list.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3">
                                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#ff6e40' }} />
                                      <span className="text-gray-300 leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <>
                          <p className="text-gray-300 leading-relaxed mb-3">{section.content}</p>
                          {section.list && (
                            <ul className="space-y-2 mt-3">
                              {section.list.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#ff6e40' }} />
                                  <span className="text-gray-300 leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {section.footer && (
                            <p className="text-gray-300 leading-relaxed mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
                              {section.footer}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Contact Section */}
              <div
                id="contact"
                className="backdrop-blur-xl rounded-2xl p-6 lg:p-8 border scroll-mt-24"
                style={{
                  backgroundColor: 'rgba(255, 110, 64, 0.05)',
                  borderColor: 'rgba(255, 110, 64, 0.2)'
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{
                    backgroundColor: 'rgba(255, 110, 64, 0.1)',
                    border: '2px solid rgba(255, 110, 64, 0.3)'
                  }}>
                    <span className="text-lg font-bold" style={{ color: '#ff6e40' }}>{sections.length + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-3">Contact Information</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="backdrop-blur-xl rounded-xl p-6 border" style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255, 255, 255, 0.1)'
                    }}>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold mb-1" style={{ color: '#ff6e40' }}>Company</p>
                          <p className="text-white font-medium">HyperScale</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-1" style={{ color: '#ff6e40' }}>Email</p>
                          <a href="mailto:legal@hyperscale.com" className="text-white hover:text-orange-400 transition-colors">
                            legal@hyperscale.com
                          </a>
                        </div>
                        <div>
                          <p className="text-sm font-semibold mb-1" style={{ color: '#ff6e40' }}>Support</p>
                          <a href="mailto:support@hyperscale.com" className="text-white hover:text-orange-400 transition-colors">
                            support@hyperscale.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed mt-6 text-sm italic">
                      By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
