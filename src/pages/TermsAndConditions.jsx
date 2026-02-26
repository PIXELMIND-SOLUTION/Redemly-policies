import React from "react";

const TermsAndConditions = () => {
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
              Terms of Service
            </h1>
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
            <p className="text-muted small">
              Operator: Redemly is a product of Pixelmindsolutions Pvt Ltd ("Redemly", "we", "us", "our")
            </p>
            <div
              className="divider mx-auto"
              style={{
                width: "80px",
                height: "4px",
                borderRadius: "2px",
                background: "linear-gradient(135deg, #ff6a00, #ff2d55)",
              }}
            ></div>
            <p className="mt-4 text-muted">
              These Terms of Service ("Terms") govern your access to and use of the Redemly mobile
              app, website, and related services (collectively, the "Services"). By using the
              Services, you agree to these Terms.
            </p>
            <p className="text-muted small fw-semibold">
              If you do not agree, do not use the Services.
            </p>
          </div>

          {/* Content */}
          <div className="terms-content">

            {/* 1. What Redemly Is */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span> What Redemly Is (Facilitation Platform)
                </h4>
                <p>
                  Redemly is a facilitation and discovery platform that helps users find
                  participating businesses and access promotions (including coupons/discounts) and
                  earn in-app rewards (such as coins/points). Redemly does not provide the goods or
                  services offered by merchants and is not responsible for the quality, safety,
                  pricing, preparation, service, or conduct of any merchant.
                </p>
              </div>
            </div>

            {/* 2. Eligibility and Age */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span> Eligibility and Age
                </h4>
                <p>
                  You must be at least <strong>13 years old</strong> to use Redemly. If you are
                  under the age of majority in your state/country, a parent/guardian must review
                  and accept these Terms and supervise your use.
                </p>
              </div>
            </div>

            {/* 3. Accounts and Security */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span> Accounts and Security
                </h4>
                <p>You may need an account to use parts of the Services. You agree to:</p>
                <ul className="list-styled">
                  <li>Provide accurate information and keep it updated.</li>
                  <li>Keep your login credentials secure.</li>
                  <li>Notify us promptly of unauthorized access.</li>
                </ul>
                <p className="mt-3">
                  We may suspend or terminate accounts for violations of these Terms or suspected
                  fraud/abuse.
                </p>
              </div>
            </div>

            {/* 4. Rewards, Coins, Points */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span> Rewards, Coins, Points, and In-App Benefits (No Cash Value)
                </h4>
                <p>Redemly may offer coins/points or other in-app benefits ("Rewards"):</p>
                <ul className="list-styled">
                  <li>Rewards are promotional, non-transferable, and have no cash value.</li>
                  <li>
                    Rewards cannot be redeemed for cash, resold, or exchanged outside the Services
                    unless we explicitly allow it in writing.
                  </li>
                  <li>
                    We may adjust Reward rules, earning rates, eligibility, expirations, and
                    availability at any time, including to prevent abuse or correct errors.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. In-App Activities & Accuracy Disclaimers */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span> In-App Activities &amp; Accuracy Disclaimers
                </h4>

                <h6 className="fw-semibold mt-3">5.1 Buzz Boards (News)</h6>
                <ul className="list-styled">
                  <li>News may be sourced from third parties, APIs, or automated systems.</li>
                  <li>We do not verify, endorse, or guarantee accuracy.</li>
                  <li>Content may be outdated, incomplete, or incorrect.</li>
                  <li>Not professional, financial, legal, or medical advice.</li>
                </ul>

                <h6 className="fw-semibold mt-3">5.2 Quizzes</h6>
                <ul className="list-styled">
                  <li>Provided for entertainment and engagement.</li>
                  <li>No guarantee of correctness.</li>
                  <li>Incorrect answers do not imply platform error.</li>
                </ul>

                <h6 className="fw-semibold mt-3">5.3 Facts</h6>
                <ul className="list-styled">
                  <li>Informational or trivia-based.</li>
                  <li>May be simplified or summarized.</li>
                  <li>No warranty of factual accuracy.</li>
                </ul>

                <h6 className="fw-semibold mt-3">5.4 Steps / Step Count</h6>
                <ul className="list-styled">
                  <li>Based on device sensors or third-party integrations.</li>
                  <li>May be inaccurate or incomplete.</li>
                  <li>Affected by permissions, OS limits, hardware issues.</li>
                  <li>Not a medical or fitness service.</li>
                </ul>
              </div>
            </div>

            {/* 6. Coupons/Offers and Redemption Rules */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span> Coupons/Offers and Redemption Rules
                </h4>
                <p>
                  Participating merchants may publish discounts, offers, or coupons ("Offers").
                  Offer terms (discount amount, eligible items, time limits, exclusions) are set by
                  the merchant or Redemly and shown in the app.
                </p>
                <ul className="list-styled">
                  <li>
                    <strong>Time-limited redemption:</strong> If an Offer requires you to tap
                    "Redeem Now," the Offer may become valid only for a short window (e.g., 20
                    minutes) and may require being at the merchant location.
                  </li>
                  <li>
                    <strong>One-time use:</strong> Offers may be limited to one use per
                    user/device/coupon/account and may require verification.
                  </li>
                  <li>
                    <strong>Exclusions:</strong> Taxes, tips, alcohol, delivery fees, service
                    charges, and third-party platform charges may be excluded unless stated
                    otherwise.
                  </li>
                  <li>
                    <strong>Merchant discretion for verification:</strong> Merchants may verify
                    eligibility (e.g., checking the redemption screen, code, timestamp, or order
                    receipt).
                  </li>
                </ul>
                <p className="mt-3">
                  <strong>Merchant not honoring an Offer:</strong> If a merchant refuses an Offer,
                  Redemly may, at its discretion, provide an alternate Offer or equivalent Rewards
                  only if the refusal is reasonably verified. Redemly may also take enforcement
                  action with the merchant.
                </p>
              </div>
            </div>

            {/* 7. Payments and Fees */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span> Payments and Fees
                </h4>
                <ul className="list-styled">
                  <li>
                    Users may pay for certain features (if offered). All purchases are final except
                    as required by law or stated in an applicable refund policy.
                  </li>
                  <li>
                    Merchants may be charged fees (e.g., per redemption). Merchant billing terms
                    are governed by a separate merchant agreement, if applicable.
                  </li>
                </ul>
              </div>
            </div>

            {/* 8. User Content */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span> User Content (Reviews, Photos, Feedback)
                </h4>
                <p>
                  If you submit content (reviews, ratings, feedback, comments, images, suggestions)
                  ("User Content"):
                </p>
                <ul className="list-styled">
                  <li>
                    You represent you have the right to post it and it is accurate to the best of
                    your knowledge.
                  </li>
                  <li>
                    You grant Redemly a worldwide, royalty-free, non-exclusive license to use,
                    display, reproduce, modify, and distribute it in connection with operating and
                    marketing the Services.
                  </li>
                  <li>We may remove content that violates these Terms or our policies.</li>
                </ul>
              </div>
            </div>

            {/* 9. Prohibited Conduct */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">9</span> Prohibited Conduct (Acceptable Use)
                </h4>
                <p>You agree not to:</p>
                <ul className="list-styled">
                  <li>
                    Commit fraud (fake accounts, fake reviews, manipulated check-ins, fabricated
                    receipts, repeated false complaints).
                  </li>
                  <li>
                    Abuse Offers (screenshotting or sharing redemption screens/codes, reselling
                    Offers, repeated rapid redeems, collusion with staff).
                  </li>
                  <li>Harass, discriminate against, threaten, or exploit others.</li>
                  <li>Post illegal, hateful, sexually explicit, or violent content.</li>
                  <li>
                    Interfere with the Services (scraping, reverse engineering, bots, automation
                    that simulates user actions, bypassing security, exploiting bugs).
                  </li>
                  <li>
                    Use Redemly to train or feed data into automated systems in a way that violates
                    law or our technical controls.
                  </li>
                </ul>
                <p className="mt-3">
                  We may suspend/terminate accounts and reverse Rewards/benefits obtained through
                  prohibited conduct.
                </p>
              </div>
            </div>

            {/* 10. Merchant Conduct */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">10</span> Merchant Conduct and Non-Discrimination
                </h4>
                <p>
                  We expect participating merchants to treat Redemly users fairly and honor valid
                  Offers consistent with published terms. Merchants must not discriminate based on
                  protected characteristics under applicable law.
                </p>
                <p>
                  Redemly may investigate complaints and take action (including warning, suspension,
                  removal of Offers, or termination of merchant participation), but Redemly does not
                  guarantee merchant performance.
                </p>
              </div>
            </div>

            {/* 11. Service Availability */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">11</span> Service Availability, Changes, and Discontinuation
                </h4>
                <p>
                  We may add, modify, or discontinue any part of the Services, Offers, or Rewards
                  at any time. We do not guarantee uninterrupted access. Features may vary by
                  region/device.
                </p>
              </div>
            </div>

            {/* 12. Third-Party Services */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">12</span> Third-Party Services
                </h4>
                <p>
                  The Services may link to or integrate with third parties (maps, payment
                  providers, social logins). Third-party terms apply to those services. Redemly is
                  not responsible for third-party services.
                </p>
              </div>
            </div>

            {/* 13. Intellectual Property */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">13</span> Intellectual Property
                </h4>
                <p>
                  Redemly and its licensors own the Services and all related IP (software, design,
                  branding, trademarks). You receive a limited, personal, non-transferable license
                  to use the Services as intended. You may not copy, modify, distribute, sell, or
                  reverse engineer the Services except where permitted by law.
                </p>
              </div>
            </div>

            {/* 14. DMCA / Copyright Complaints */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">14</span> DMCA / Copyright Complaints
                </h4>
                <p>
                  If you believe content on Redemly infringes your copyright, send a notice to{" "}
                  <a
                    href="mailto:copyright@Redemly.com"
                    className="fw-semibold text-decoration-none"
                    style={{ color: "#ff6a00" }}
                  >
                    copyright@Redemly.com
                  </a>{" "}
                  with: your contact info, description of the work, location in the app/site, a
                  good-faith statement, and your signature. We may remove content and notify the
                  posting user.
                </p>
              </div>
            </div>

            {/* 15. Disclaimers */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">15</span> Disclaimers
                </h4>
                <p>To the maximum extent allowed by law:</p>
                <ul className="list-styled">
                  <li>The Services are provided "as is" and "as available."</li>
                  <li>
                    Redemly does not warrant that Offers will be available, accurate, or honored,
                    or that the Services will be error-free or uninterrupted.
                  </li>
                  <li>
                    Merchants are solely responsible for their products/services, pricing,
                    fulfillment, and customer service.
                  </li>
                </ul>
              </div>
            </div>

            {/* 16. Limitation of Liability */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">16</span> Limitation of Liability
                </h4>
                <p>
                  To the maximum extent allowed by law, Redemly will not be liable for indirect,
                  incidental, special, consequential, exemplary, or punitive damages, or loss of
                  profits/data/goodwill.
                </p>
                <p>
                  Redemly's total liability for any claim relating to the Services will not exceed
                  the greater of $100 or the amount you paid to Redemly in the prior 12 months (if
                  any), unless law requires otherwise.
                </p>
              </div>
            </div>

            {/* 17. Indemnity */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">17</span> Indemnity
                </h4>
                <p>
                  You agree to defend and indemnify Redemly from claims arising out of your use of
                  the Services, your User Content, or your violation of these Terms.
                </p>
              </div>
            </div>

            {/* 18. Termination */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">18</span> Termination
                </h4>
                <p>
                  You may stop using Redemly at any time. We may suspend or terminate access if
                  you violate these Terms, engage in abuse/fraud, or if required by law. Upon
                  termination, any licenses granted to you end, and Rewards/Offers may be
                  forfeited.
                </p>
              </div>
            </div>

            {/* 19. Governing Law */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">19</span> Governing Law and Disputes
                </h4>
                <p>
                  These Terms are governed by the laws of the State of Texas, excluding
                  conflict-of-law rules. Courts located in Texas have exclusive jurisdiction.
                </p>
              </div>
            </div>

            {/* 20. Changes to Terms */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">20</span> Changes to These Terms
                </h4>
                <p>
                  We may update these Terms. Continued use after the effective date means you
                  accept the updated Terms. If changes are material, we will provide reasonable
                  notice in-app or by email.
                </p>
              </div>
            </div>

            {/* 21. Contact */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">21</span> Contact
                </h4>
                <ul className="list-styled">
                  <li>
                    📧 Support:{" "}
                    <a href="mailto:support@Redemly.com" style={{ color: "#ff6a00" }}>
                      support@Redemly.com
                    </a>
                  </li>
                  <li>
                    📧 Legal:{" "}
                    <a href="mailto:legal@Redemly.com" style={{ color: "#ff6a00" }}>
                      legal@Redemly.com
                    </a>
                  </li>
                  <li>📮 Address: Plot No 63, Sri Residency, 1st Floor 101, KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500085</li>
                </ul>
              </div>
            </div>

            {/* Program Policies Header */}
            <div className="text-center my-5">
              <h2
                className="fw-bold"
                style={{
                  background: "linear-gradient(135deg, #ff6a00, #ff2d55)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Redemly Program Policies
              </h2>
              <div
                className="divider mx-auto mt-3"
                style={{
                  width: "60px",
                  height: "3px",
                  borderRadius: "2px",
                  background: "linear-gradient(135deg, #ff6a00, #ff2d55)",
                }}
              ></div>
            </div>

            {/* A. Rewards & Coupon Policy */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="letter-badge me-3">A</span> Rewards &amp; Coupon Policy
                </h4>
                <ul className="list-styled">
                  <li>
                    <strong>Earning:</strong> Rewards may be earned through activities (e.g.,
                    quizzes, reviews, referrals, steps) as specified in-app.
                  </li>
                  <li>
                    <strong>Limits:</strong> We may impose daily/weekly caps, device/account
                    limits, and anti-fraud checks.
                  </li>
                  <li>
                    <strong>Expiration:</strong> Rewards and Offers may expire; expiration rules
                    will be shown in-app when possible.
                  </li>
                  <li>
                    <strong>No transfer/resale:</strong> No selling, gifting, trading, or
                    transferring Rewards/Offers unless explicitly allowed.
                  </li>
                  <li>
                    <strong>Verification requirement:</strong> If a merchant dispute occurs, you
                    may be asked to provide details (timestamp, receipt, screenshots, location
                    verification).
                  </li>
                  <li>
                    <strong>Remedies for non-acceptance:</strong> Alternate Offer or equivalent
                    Rewards may be issued only if reasonably verified.
                  </li>
                </ul>
              </div>
            </div>

            {/* B. Review & Content Policy */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="letter-badge me-3">B</span> Review &amp; Content Policy
                </h4>
                <ul className="list-styled">
                  <li>
                    No fake reviews, incentives without disclosure, harassment, hate, illegal
                    content, private info, or doxxing.
                  </li>
                  <li>We may remove content and restrict accounts.</li>
                </ul>
              </div>
            </div>

            {/* C. Anti-Fraud & Abuse Policy */}
            <div className="terms-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="letter-badge me-3">C</span> Anti-Fraud &amp; Abuse Policy
                </h4>
                <ul className="list-styled">
                  <li>
                    <strong>Examples:</strong> multiple accounts, emulator use, scripted
                    automation, location spoofing, coupon sharing, repeated suspicious redemptions,
                    or collusion.
                  </li>
                  <li>
                    <strong>Consequences:</strong> reversal of Rewards, blocking redemptions,
                    suspension/termination.
                  </li>
                </ul>
              </div>
            </div>

            {/* D. Merchant Policy */}
            <div className="terms-card card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="letter-badge me-3">D</span> Merchant Policy (Public Summary)
                </h4>
                <ul className="list-styled">
                  <li>Must honor valid Offers per published terms.</li>
                  <li>Must not discriminate.</li>
                  <li>Must handle customer service for their goods/services.</li>
                  <li>Redemly may remove merchants/offers for repeated issues or misconduct.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .number-badge,
        .letter-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #ff6a00, #ff2d55);
          color: white;
          border-radius: 50%;
          font-weight: bold;
          flex-shrink: 0;
        }
        .terms-card {
          border-left: 4px solid #ff6a00;
          transition: 0.3s ease;
        }
        .terms-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.1) !important;
        }
        .list-styled {
          list-style: none;
          padding-left: 0;
        }
        .list-styled li {
          padding-left: 1.3rem;
          position: relative;
          margin-bottom: 0.3rem;
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
          .number-badge,
          .letter-badge {
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