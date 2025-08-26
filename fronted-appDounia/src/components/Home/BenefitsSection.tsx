// src/components/Home/BenefitsSection.tsx
import React from "react";

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container-lg">
        <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
          
          <div className="col">
            <div className="card mb-3 border border-dark-subtle p-3">
              <div className="text-dark mb-3">
                <svg width="32" height="32"><use xlinkHref="#package"></use></svg>
              </div>
              <div className="card-body p-0">
                <h5>Free Delivery from Our Villages</h5>
                <p className="card-text">Get your natural products delivered straight from Al Hoceima villages.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3 border border-dark-subtle p-3">
              <div className="text-dark mb-3">
                <svg width="32" height="32"><use xlinkHref="#secure"></use></svg>
              </div>
              <div className="card-body p-0">
                <h5>100% Secure Payment</h5>
                <p className="card-text">Shop safely with secure and easy online payment.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3 border border-dark-subtle p-3">
              <div className="text-dark mb-3">
                <svg width="32" height="32"><use xlinkHref="#quality"></use></svg>
              </div>
              <div className="card-body p-0">
                <h5>Quality Guarantee</h5>
                <p className="card-text">Authentic, 100% natural products sourced from local farmers.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3 border border-dark-subtle p-3">
              <div className="text-dark mb-3">
                <svg width="32" height="32"><use xlinkHref="#savings"></use></svg>
              </div>
              <div className="card-body p-0">
                <h5>Best Prices Guaranteed</h5>
                <p className="card-text">Enjoy top quality honey, nuts, and more at fair prices.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3 border border-dark-subtle p-3">
              <div className="text-dark mb-3">
                <svg width="32" height="32"><use xlinkHref="#offers"></use></svg>
              </div>
              <div className="card-body p-0">
                <h5>Daily Specials</h5>
                <p className="card-text">Check out new offers on seasonal products every day.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
