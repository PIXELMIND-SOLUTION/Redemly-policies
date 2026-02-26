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
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
            <p className="text-muted small">
              Operator: Redemly, part of Pixelmindsolutions Pvt Ltd ("Redemly", "we", "us", "our")
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
              Redemly operates a platform that helps users discover local businesses, access
              promotional offers (such as coupons or discounts), and earn in-app rewards. This
              Privacy Policy explains how we collect, use, share, and protect personal information
              when you use our mobile app, website, and related services (collectively, the
              "Services").
            </p>
            <p className="text-muted small">
              This Privacy Policy applies only to consumer users of Redemly. It does not apply to
              job applicants or to merchant data governed by separate agreements.
            </p>
          </div>

          {/* Content */}
          <div className="privacy-content">

            {/* 1. Notice at Collection */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">1</span> Notice at Collection
                </h4>
                <p>We collect personal information to:</p>
                <ul className="list-styled">
                  <li>Operate and improve the Services</li>
                  <li>Enable coupon redemption and rewards</li>
                  <li>Prevent fraud and abuse</li>
                  <li>Communicate with users</li>
                  <li>Market Redemly (where permitted)</li>
                </ul>
                <p className="mt-3">
                  You may have rights regarding your data depending on where you live. See Section 8
                  (Your Privacy Rights).
                </p>
              </div>
            </div>

            {/* 2. Categories of Personal Information */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">2</span> Categories of Personal Information We Collect
                </h4>
                <p>The information we collect depends on how you use Redemly. Categories may include:</p>

                <h6 className="fw-semibold mt-3">A. Identifiers &amp; Contact Information</h6>
                <ul className="list-styled">
                  <li>Name, username</li>
                  <li>Email address, phone number</li>
                  <li>IP address</li>
                  <li>Device identifiers (device ID, advertising ID)</li>
                  <li>Account IDs</li>
                </ul>

                <h6 className="fw-semibold mt-3">B. Demographic Information</h6>
                <ul className="list-styled">
                  <li>Age or age range</li>
                  <li>General location (city/state/zipcode)</li>
                  <li>Language preferences</li>
                </ul>

                <h6 className="fw-semibold mt-3">C. Account &amp; Usage Information</h6>
                <ul className="list-styled">
                  <li>App interactions (pages viewed, buttons tapped, features used)</li>
                  <li>Coupon views and redemptions</li>
                  <li>Rewards earned and used</li>
                  <li>Referral activity</li>
                  <li>Reviews, ratings, and feedback you submit</li>
                </ul>

                <h6 className="fw-semibold mt-3">D. Location Information</h6>
                <ul className="list-styled">
                  <li>Approximate location derived from IP</li>
                  <li>Precise location only if you explicitly allow it, used to show nearby offers or verify redemptions</li>
                </ul>

                <h6 className="fw-semibold mt-3">E. Commercial Information</h6>
                <ul className="list-styled">
                  <li>Offer redemption history</li>
                  <li>Participation in promotions or events</li>
                </ul>

                <h6 className="fw-semibold mt-3">F. Communications</h6>
                <ul className="list-styled">
                  <li>Messages sent to customer support</li>
                  <li>Survey responses or feedback</li>
                </ul>

                <h6 className="fw-semibold mt-3">G. Inferences</h6>
                <ul className="list-styled">
                  <li>Preferences or interests inferred from app usage (e.g., cuisine types, nearby offers)</li>
                </ul>

                <h6 className="fw-semibold mt-3">H. Sensitive Personal Information (Limited)</h6>
                <ul className="list-styled">
                  <li>Account login credentials</li>
                </ul>
                <p className="mt-3 text-muted small">
                  We do not intentionally collect government IDs, biometric data, or precise financial data.
                </p>
              </div>
            </div>

            {/* 3. How We Use Personal Information */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">3</span> How We Use Personal Information &amp; Legal Bases
                </h4>

                <h6 className="fw-semibold mt-3">A. Business &amp; Operational Purposes</h6>
                <ul className="list-styled">
                  <li>Create and manage accounts</li>
                  <li>Enable coupon redemption and rewards</li>
                  <li>Verify eligibility and prevent fraud or abuse</li>
                  <li>Provide customer support</li>
                  <li>Improve app functionality and user experience</li>
                  <li>Maintain platform security</li>
                </ul>
                <p className="text-muted small">Legal bases: Contract performance, legitimate interests, legal obligations</p>

                <h6 className="fw-semibold mt-3">B. Communications</h6>
                <ul className="list-styled">
                  <li>Service-related messages (e.g., redemption confirmations, policy updates)</li>
                  <li>Responding to inquiries and support requests</li>
                </ul>
                <p className="text-muted small">Legal bases: Contract performance, legitimate interests</p>

                <h6 className="fw-semibold mt-3">C. Marketing &amp; Promotions (Where Permitted)</h6>
                <ul className="list-styled">
                  <li>Sending promotional notifications or emails</li>
                  <li>Showing relevant offers and in-app recommendations</li>
                  <li>Measuring campaign effectiveness</li>
                </ul>
                <p className="text-muted small">Legal bases: Consent (where required), legitimate interests</p>
                <p>You can opt out of marketing communications at any time.</p>
              </div>
            </div>

            {/* 4. Sources of Information */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">4</span> Sources of Information
                </h4>
                <p>We collect information:</p>
                <ul className="list-styled">
                  <li>Directly from you (account creation, reviews, support requests)</li>
                  <li>Automatically (app usage, device data, cookies/SDKs)</li>
                  <li>From third parties, such as analytics providers, advertising partners, referral or attribution partners, and merchants (limited to redemption verification)</li>
                </ul>
              </div>
            </div>

            {/* 5. When We Share Information */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">5</span> When We Share Information
                </h4>
                <p>We may share personal information with:</p>

                <h6 className="fw-semibold mt-3">A. Service Providers</h6>
                <p>Vendors who help us operate Redemly (hosting, analytics, customer support, fraud prevention).</p>

                <h6 className="fw-semibold mt-3">B. Advertising &amp; Analytics Partners</h6>
                <p>For measuring performance and showing relevant ads, where permitted by law.</p>
                <p>We do <strong>not</strong> knowingly sell or share personal data of users under 16.</p>

                <h6 className="fw-semibold mt-3">C. Merchants (Limited)</h6>
                <p>Only what is reasonably necessary to:</p>
                <ul className="list-styled">
                  <li>Verify a coupon redemption</li>
                  <li>Investigate disputes or fraud</li>
                  <li>Provide feedback on the coupon used</li>
                </ul>

                <h6 className="fw-semibold mt-3">D. Legal &amp; Safety Reasons</h6>
                <p>When required by law, subpoena, or to protect users, Redemly, or the public.</p>

                <h6 className="fw-semibold mt-3">E. Business Transfers</h6>
                <p>In connection with a merger, acquisition, or sale of assets.</p>
              </div>
            </div>

            {/* 6. Public Content */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">6</span> Public Content
                </h4>
                <p>
                  If you post reviews, ratings, comments, or other content visible to others, that
                  information may be seen, collected, and used by other users. There is no
                  expectation of privacy for public content. Do not include sensitive personal
                  information in public posts.
                </p>
                <p>You are responsible for what you share publicly.</p>
              </div>
            </div>

            {/* 7. Cookies, SDKs & Tracking Technologies */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">7</span> Cookies, SDKs &amp; Tracking Technologies
                </h4>
                <p>Redemly and partners may use cookies, mobile SDKs, and analytics and attribution tools. These help us understand usage, improve performance, and deliver relevant content.</p>
                <p>You can manage preferences via device settings or in-app controls where available.</p>
              </div>
            </div>

            {/* 8. Your Privacy Rights */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">8</span> Your Privacy Rights
                </h4>
                <p>
                  Depending on your location (e.g., California, EU/EEA, UK), you may have the right to:
                </p>
                <ul className="list-styled">
                  <li>Access your personal information</li>
                  <li>Request deletion</li>
                  <li>Request correction</li>
                  <li>Opt out of targeted advertising or data sharing</li>
                  <li>Limit use of sensitive personal information</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
                <div className="mt-3 p-3 bg-light rounded">
                  <p className="mb-0">
                    To exercise your rights, email us at:{" "}
                    <a
                      href="mailto:privacy@Redemly.com"
                      className="fw-semibold text-decoration-none"
                      style={{ color: "#ff6a00" }}
                    >
                      privacy@Redemly.com
                    </a>
                  </p>
                  <p className="mb-0 mt-2 text-muted small">
                    We may need to verify your identity before fulfilling requests. You will not be discriminated against for exercising your rights.
                  </p>
                </div>
              </div>
            </div>

            {/* 9. Managing Your Account & Communications */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">9</span> Managing Your Account &amp; Communications
                </h4>
                <p>You can:</p>
                <ul className="list-styled">
                  <li>Update account information in the app</li>
                  <li>Adjust notification preferences</li>
                  <li>Unsubscribe from marketing emails</li>
                  <li>Request account deletion</li>
                </ul>
                <p>Some data may be retained as required by law or for fraud prevention.</p>
              </div>
            </div>

            {/* 10. Data Retention */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">10</span> Data Retention
                </h4>
                <p>We retain personal information only as long as necessary to:</p>
                <ul className="list-styled">
                  <li>Provide the Services</li>
                  <li>Meet legal and regulatory obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce agreements</li>
                </ul>
                <p>Retention periods vary by data type and purpose.</p>
              </div>
            </div>

            {/* 11. Children's Privacy */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">11</span> Children's Privacy
                </h4>
                <p>
                  Redemly is not intended for children under 13. We do not knowingly collect
                  personal information from children under 13. If we learn that such data was
                  collected, we will delete it promptly. Parents may contact us to request deletion.
                </p>
              </div>
            </div>

            {/* 12. In-App Chat, Images & User Interaction */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">12</span> In-App Chat, Images &amp; User Interaction
                </h4>

                <h6 className="fw-semibold mt-3">12.1 Chat Nature</h6>
                <ul className="list-styled">
                  <li>Chat messages, images, coins, and coupons are user-generated</li>
                  <li>Not monitored in real time</li>
                  <li>Redemly does not guarantee safety, legality, or appropriateness</li>
                </ul>

                <h6 className="fw-semibold mt-3">12.2 Prohibited Sharing</h6>
                <p>Users must NOT share: real names, phone numbers, addresses, social handles, financial info, passwords, or verification codes.</p>

                <h6 className="fw-semibold mt-3">12.3 Child Safety</h6>
                <p>
                  Zero tolerance for grooming, exploitation, or sexual content involving minors.
                  Immediate suspension and reporting to authorities where required.
                </p>

                <h6 className="fw-semibold mt-3">12.4 Reporting &amp; Enforcement</h6>
                <p>Users may block/report others. Redemly may remove content, suspend accounts, and notify law enforcement.</p>
              </div>
            </div>

            {/* 13. Data Security */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">13</span> Data Security
                </h4>
                <p>
                  We use reasonable administrative, technical, and organizational safeguards to
                  protect personal information. No system is 100% secure, and we cannot guarantee
                  absolute security.
                </p>
              </div>
            </div>

            {/* 14. International Transfers */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">14</span> International Transfers
                </h4>
                <p>
                  Your information may be processed or stored in the United States or other
                  countries. Where required, we apply appropriate safeguards to protect
                  cross-border data transfers.
                </p>
              </div>
            </div>

            {/* 15. Third-Party Links & Services */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">15</span> Third-Party Links &amp; Services
                </h4>
                <p>
                  Redemly may link to third-party websites or services. We are not responsible for
                  their privacy practices. Please review their policies separately.
                </p>
              </div>
            </div>

            {/* 16. Changes to This Privacy Policy */}
            <div className="policy-card card border-0 shadow-sm mb-4">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">16</span> Changes to This Privacy Policy
                </h4>
                <p>
                  We may update this Privacy Policy from time to time. If changes are material, we
                  will provide notice in the app or by email. Continued use of the Services means
                  you accept the updated policy.
                </p>
              </div>
            </div>

            {/* 17. Contact Us */}
            <div className="policy-card card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="mb-3 d-flex align-items-center">
                  <span className="number-badge me-3">17</span> Contact Us
                </h4>
                <ul className="list-styled">
                  <li>📧 Privacy Inquiries: <a href="mailto:privacy@Redemly.com" style={{ color: "#ff6a00" }}>privacy@Redemly.com</a></li>
                  <li>📧 Support: <a href="mailto:support@Redemly.com" style={{ color: "#ff6a00" }}>support@Redemly.com</a></li>
                  <li>📮 Mailing Address: Redemly, Inc., Plot No 63, Sri Residency, 1st Floor 101, KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500085</li>
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
          flex-shrink: 0;
        }
        .policy-card {
          border-left: 4px solid #ff6a00;
          transition: 0.3s ease;
        }
        .policy-card:hover {
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
      `}</style>
    </div>
  );
};

export default PrivacyAndPolicy;