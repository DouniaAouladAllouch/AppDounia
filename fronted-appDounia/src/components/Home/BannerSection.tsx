import React from "react";
import bannerImage from "../../images/banner-1.jpg"; 

const BannerSection: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bannerImage})`,

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6 pt-5 mt-5">
            <h2 className="display-1 ls-1">
              <span className="fw-bold text-primary">Discover</span> the Natural Treasures{" "}
              <span className="fw-bold">of Al Hoceima</span>
            </h2>
            <p className="fs-4">100% Natural Products, Straight from Our Villages to Your Table.</p>
            <div className="d-flex gap-3">
              <a
                href="#"
                className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
              >
                What are you waiting for? 
              </a>
              <a
                href="#"
                className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3"
              >
                Start shopping for your health!
              </a>
            </div>

            
          </div>
        </div>

        {/* Cards */}
        
      </div>
    </section>
  );
};

export default BannerSection;
