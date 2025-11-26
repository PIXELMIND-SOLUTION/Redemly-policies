import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Support = () => {
  const supportData = {
    companyName: "Redemly",
    email: "support.redemly@gmail.com",
    mobile: "+91 9666317749",
    logo: "/logo.png",
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-12">
          {/* Header Section */}
          <div className="text-center mb-4">
            <h1 className="display-5 fw-bold text-primary mb-2">
              <i className="bi bi-headset me-3"></i>
              Customer Support
            </h1>
            <p className="lead text-muted">
              We're here to help you 24/7. Get in touch with our support team.
            </p>
          </div>

          <div className="card support-card shadow-lg border-0 rounded-4 overflow-hidden">
            {/* Gradient Header */}
            <div className="support-header bg-gradient-primary py-4 text-white text-center">
              <div className="support-badge mb-3">
                <div className="support-icon-wrapper">
                  <i className="bi bi-chat-heart-fill support-icon"></i>
                </div>
              </div>
              <h3 className="fw-bold mb-2">{supportData.companyName}</h3>
              <p className="mb-0 opacity-75">Support Center</p>
            </div>

            <div className="card-body p-4">
              {/* Contact Methods */}
              <div className="row g-4 mb-4">
                {/* Email Card */}
                <div className="col-md-6">
                  <div className="contact-method-card text-center p-3 rounded-3 h-100">
                    <div className="method-icon email-icon mb-3">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <h6 className="fw-bold mb-2">Email Support</h6>
                    <p className="text-muted small mb-2">We'll respond quickly</p>
                    <a 
                      href={`mailto:${supportData.email}`} 
                      className="btn btn-outline-primary btn-sm rounded-pill"
                    >
                      {supportData.email}
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="col-md-6">
                  <div className="contact-method-card text-center p-3 rounded-3 h-100">
                    <div className="method-icon phone-icon mb-3">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <h6 className="fw-bold mb-2">Call Us</h6>
                    <p className="text-muted small mb-2">24/7 Available</p>
                    <a 
                      href={`tel:${supportData.mobile}`} 
                      className="btn btn-outline-success btn-sm rounded-pill"
                    >
                      {supportData.mobile}
                    </a>
                  </div>
                </div>
              </div>

              {/* Support Features */}
              <div className="support-features mb-4">
                <h6 className="fw-bold text-center mb-3">Why Choose Our Support?</h6>
                <div className="row text-center g-3">
                  <div className="col-4">
                    <div className="feature-item">
                      <i className="bi bi-clock-fill text-warning"></i>
                      <small className="d-block mt-1">24/7 Available</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="feature-item">
                      <i className="bi bi-lightning-fill text-info"></i>
                      <small className="d-block mt-1">Quick Response</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="feature-item">
                      <i className="bi bi-award-fill text-success"></i>
                      <small className="d-block mt-1">Expert Team</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="text-center">
                <div className="alert alert-light border rounded-3 mb-0">
                  <i className="bi bi-info-circle me-2 text-primary"></i>
                  <small className="text-muted">
                    Typically respond within 2 hours during business days
                  </small>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      <style jsx>{`
        .support-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .support-icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }
        
        .support-icon {
          font-size: 2rem;
        }
        
        .contact-method-card {
          border: 1px solid #e9ecef;
          transition: all 0.3s ease;
        }
        
        .contact-method-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .method-icon {
          width: 50px;
          height: 50px;
          margin: 0 auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }
        
        .email-icon {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }
        
        .phone-icon {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          color: white;
        }
        
        .feature-item {
          padding: 8px;
          border-radius: 8px;
          background: #f8f9fa;
        }
        
        .support-card {
          transition: transform 0.3s ease;
        }
        
        .support-card:hover {
          transform: translateY(-2px);
        }
        
        .btn {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Bootstrap Icons */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" 
      />
    </div>
  );
};

export default Support;