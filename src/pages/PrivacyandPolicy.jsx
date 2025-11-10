import React from "react";

const PrivacyAndPolicy = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          {/* Header */}
          <div className="text-center mb-5">
            <h1
              className="display-4 fw-bold mb-3"
              style={{
                background: "linear-gradient(135deg, #ff6a00, #ff2d55)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Privacy Policy
            </h1>

            <p className="text-muted">Effective Date: 05/11/2025</p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          {/* Content */}
          <div className="privacy-content">
            {/* 1. Introduction */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span> Introduction
                </h4>
                <p>
                  Welcome to <strong>Redemly</strong> (“we”, “our”, “us”). Redemly is a reward-based
                  discount platform that allows users to spin wheels to earn coins, redeem coupons,
                  view nearby vendor offers, attempt quizzes, and explore fun facts and news.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, and protect your personal data
                  when you use the <strong>Redemly App</strong>.
                </p>
              </div>
            </div>

            {/* 2. Information We Collect */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span> Information We Collect
                </h4>

                <h6 className="fw-semibold mt-3">a. Registration Information</h6>
                <ul className="list-styled">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Date of Birth (for age verification and personalized offers)</li>
                  <li>City and Zip Code</li>
                </ul>

                <h6 className="fw-semibold mt-3">b. App Activity Data</h6>
                <ul className="list-styled">
                  <li>Spin wheel results, quiz attempts, and earned coins</li>
                  <li>Coupons viewed, saved, or redeemed from vendors</li>
                  <li>Interactions with news and fun fact sliders</li>
                </ul>

                <h6 className="fw-semibold mt-3">c. Device and Location Data</h6>
                <ul className="list-styled">
                  <li>Device model, OS version, app usage analytics</li>
                  <li>Approximate location for nearby vendor recommendations</li>
                </ul>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span> How We Use Your Information
                </h4>
                <ul className="list-styled">
                  <li>To verify your identity and eligibility (e.g., age 18+)</li>
                  <li>To deliver personalized coupons and local offers</li>
                  <li>To manage your spins, rewards, and quiz points</li>
                  <li>To improve app features and user experience</li>
                  <li>To send notifications about updates and promotions</li>
                </ul>
              </div>
            </div>

            {/* 4. Information Sharing */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span> Information Sharing
                </h4>
                <p>We share data only with trusted entities:</p>
                <ul className="list-styled">
                  <li>Verified vendors for coupon redemption</li>
                  <li>Analytics tools for performance tracking</li>
                  <li>Payment partners for secure transactions (if applicable)</li>
                </ul>
                <p className="mt-3">
                  We <strong>never sell</strong> user data to third parties.
                </p>
              </div>
            </div>

            {/* 5. Data Security */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span> Data Security
                </h4>
                <p>
                  We implement robust security measures to protect your information from unauthorized
                  access or misuse, including:
                </p>
                <ul className="list-styled">
                  {/* <li>Secure HTTPS encryption</li> */}
                  <li>Data encryption and secure cloud storage</li>
                  <li>Regular audits and security testing</li>
                </ul>
              </div>
            </div>

            {/* 6. Your Rights */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span> Your Rights
                </h4>
                <ul className="list-styled">
                  <li>Access and update your personal data</li>
                  <li>You can delete your account any time</li>
                  {/* <li>Opt out of promotional notifications</li> */}
                </ul>
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0">
                    For Enquiries, contact us at:{" "}
                    <a
                      href="mailto:shivak1811@gmail.com?subject=Account%20Deletion%20Request"
                      className="fw-semibold text-decoration-none"
                    >
                      shivak1811@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Updates */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span> Updates to Policy
                </h4>
                <p>
                  Redemly may update this policy periodically. Continued use of the app after
                  updates implies acceptance of the revised policy.
                </p>
              </div>
            </div>

            {/* 8. Contact */}
            <div className="policy-card card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span> Contact Us
                </h4>
                <ul className="list-styled">
                  <li>📧 Email: shivak1811@gmail.com</li>
                  <li>📞 Phone: +91-9666317749</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .number-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #ff6a00, #ff2d55);
          color: #fff;
          border-radius: 50%;
          font-weight: bold;
        }
        .policy-card {
          border-left: 4px solid #ff6a00;
          transition: 0.3s ease;
        }
        .policy-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.1);
        }
        .list-styled {
          list-style: none;
          padding-left: 0;
        }
        .list-styled li {
          padding-left: 1.3rem;
          position: relative;
        }
        .list-styled li::before {
          content: "•";
          position: absolute;
          left: 0.5rem;
          color: #ff6a00;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default PrivacyAndPolicy;
