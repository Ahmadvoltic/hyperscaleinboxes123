"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: "Welcome to HyperScale (\"we,\" \"our,\" or \"us\"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our email infrastructure services and website."
    },
    {
      id: "information-collection",
      title: "Information We Collect",
      subsections: [
        {
          subtitle: "Personal Information",
          content: "We may collect personal information that you provide directly to us, including:",
          list: [
            "Name and contact information (email address, phone number)",
            "Company name and business information",
            "Billing and payment information",
            "Account credentials and login information",
            "Domain names and DNS configuration details"
          ]
        },
        {
          subtitle: "Usage Information",
          content: "We automatically collect certain information about your use of our services:",
          list: [
            "Email sending volume and patterns",
            "IP addresses and device information",
            "Browser type and operating system",
            "Service usage statistics and performance metrics",
            "Log files and technical data"
          ]
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      content: "We use the collected information for the following purposes:",
      list: [
        "Providing and maintaining our email infrastructure services",
        "Processing payments and managing your account",
        "Setting up and configuring Microsoft Partner accounts",
        "Monitoring service performance and deliverability",
        "Communicating with you about service updates and support",
        "Improving our services and developing new features",
        "Detecting and preventing fraud or abuse",
        "Complying with legal obligations and enforcing our terms"
      ]
    },
    {
      id: "information-sharing",
      title: "Sharing Your Information",
      content: "We do not sell your personal information. We may share your information in the following circumstances:",
      subsections: [
        {
          subtitle: "Service Providers",
          content: "We work with Microsoft and other third-party service providers to deliver our services. These providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information."
        },
        {
          subtitle: "Legal Requirements",
          content: "We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety."
        },
        {
          subtitle: "Business Transfers",
          content: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your information, including:",
      list: [
        "Encryption of data in transit and at rest",
        "Secure Microsoft Partner infrastructure",
        "Regular security audits and monitoring",
        "Access controls and authentication measures",
        "Compliance with SPF, DKIM, and DMARC standards"
      ],
      footer: "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: "We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. When your account is closed, we will delete or anonymize your information within a reasonable timeframe, unless retention is required by law."
    },
    {
      id: "your-rights",
      title: "Your Rights",
      content: "Depending on your location, you may have the following rights:",
      list: [
        "Access and receive a copy of your personal information",
        "Request correction of inaccurate information",
        "Request deletion of your information",
        "Object to or restrict certain processing activities",
        "Data portability",
        "Withdraw consent where processing is based on consent"
      ],
      footer: "To exercise these rights, please contact us using the information provided below."
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      content: "We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website."
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      content: "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it."
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the \"Last updated\" date. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy."
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
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">
              Your privacy is important to us. Learn how we protect your data
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
                      Contact Us
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
                    <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
                          <a href="mailto:privacy@hyperscale.com" className="text-white hover:text-orange-400 transition-colors">
                            privacy@hyperscale.com
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
                      By using our services, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.
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
