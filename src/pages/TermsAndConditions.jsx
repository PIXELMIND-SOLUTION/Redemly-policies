import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-11 col-12">
          {/* Header */}
          <div className="text-center mb-5">
            <h1
              className="display-4 fw-bold text-primary mb-3"
              style={{
                background: "linear-gradient(135deg, #ff6a00, #ff2d55)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Terms and Conditions
            </h1>
            <p className="text-muted">Effective Date: 05/11/2025</p>
            <div
              className="divider mx-auto bg-gradient-primary"
              style={{ width: "80px", height: "4px", borderRadius: "2px" }}
            ></div>
          </div>

          {/* Content */}
          <div className="terms-content">
            {/* 1. Introduction */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">1</span> Introduction
                </h4>
                <p>
                  Welcome to <strong>Redemly</strong> — a fun and interactive
                  discount and rewards application. By registering or using our
                  app, you agree to follow these Terms and Conditions that govern
                  your use of Redemly’s services.
                </p>
              </div>
            </div>

            {/* 2. Registration Details */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">2</span> Registration Details
                </h4>
                <p>
                  When creating an account on Redemly, users are required to
                  provide accurate information including their{" "}
                  <strong>
                    Full Name, Email Address, Phone Number, City, Zipcode, and
                    Date of Birth
                  </strong>
                  . These details help us personalize offers, manage user
                  accounts, and connect users with nearby vendors.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your
                  account credentials and for all activities under your account.
                </p>
              </div>
            </div>

            {/* 3. App Features & Rewards */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">3</span> App Features & Rewards
                </h4>
                <ul className="list-styled">
                  <li>
                    Spin the wheel to earn Redemly coins, vendor coupons, or
                    exciting prizes.
                  </li>
                  <li>
                    Participate in quizzes to earn extra points, explore fun facts, and read quick
                    news slides.
                  </li>
                  <li>
                    Redeem collected coins or coupons at partner stores as per
                    their terms and validity.
                  </li>
                  <li>
                    Coins, points, and rewards hold no monetary value and cannot
                    be exchanged for real cash.
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Vendor & Offers */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">4</span> Vendors & Offers
                </h4>
                <p>
                  Vendors displayed within the Redemly app are independent
                  business partners. Redemly only provides a digital platform to
                  promote their coupons and discounts. We are not responsible for
                  product quality, pricing, or vendor-related disputes.
                </p>
                <p>
                  All coupons and deals are subject to the respective vendor’s
                  terms, conditions, and expiration policies.
                </p>
              </div>
            </div>

            {/* 5. User Conduct */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">5</span> User Conduct
                </h4>
                <ul className="list-styled">
                  <li>
                    Users must use the app for lawful and intended purposes only.
                  </li>
                  <li>
                    Fake profiles, duplicate accounts, or fraudulent actions
                    (e.g., manipulating spins or coupon redemptions) are strictly
                    prohibited.
                  </li>
                  <li>
                    Redemly reserves the right to suspend or terminate accounts
                    engaging in misuse or abuse.
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Points & Coin Usage */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">6</span> Points & Coin Usage
                </h4>
                <ul className="list-styled">
                  <li>
                    Earned points or coins can be redeemed only within the app as
                    specified.
                  </li>
                  <li>
                    Coins and coupons can only be transferred on APP.
                  </li>
                  <li>
                    Redemly reserves the right to modify reward rules or expiry
                    dates at any time.
                  </li>
                </ul>
              </div>
            </div>

            {/* 7. Account Suspension or Termination */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">7</span> Account Suspension or Termination
                </h4>
                <p>
                  We may suspend, limit, or terminate any user account found to
                  be in violation of these Terms, engaged in fraudulent activity,
                  or causing harm to the Redemly community.
                </p>
              </div>
            </div>

            {/* 8. Disclaimer of Liability */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">8</span> Disclaimer of Liability
                </h4>
                <p>
                  Redemly provides offers and entertainment “as is.” We make no
                  guarantees regarding continuous availability, accuracy of
                  content, or reliability of third-party vendor offers. Users are
                  encouraged to review vendor details before redemption.
                </p>
              </div>
            </div>

            {/* 9. Policy Updates */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">9</span> Updates to Terms
                </h4>
                <p>
                  Redemly reserves the right to modify or update these Terms and
                  Conditions at any time. Updated versions will include a revised
                  effective date. Continued app usage indicates acceptance of the
                  updated terms.
                </p>
              </div>
            </div>

            {/* 10. Contact Us */}
            <div className="terms-card card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4>
                  <span className="number-badge me-3">10</span> Contact Us
                </h4>
                <p>
                  For any questions, feedback, or support related to these Terms
                  and Conditions, please contact us:
                </p>
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
          color: white;
          border-radius: 50%;
          font-weight: bold;
        }
        .terms-card {
          border-left: 4px solid #ff6a00;
          transition: 0.3s ease;
        }
        .terms-card:hover {
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
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.2rem;
          }
        }
        @media (max-width: 576px) {
          .display-4 {
            font-size: 1.8rem;
          }
          .card-body {
            padding: 1.25rem !important;
          }
          .number-badge {
            width: 28px;
            height: 28px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditions;
