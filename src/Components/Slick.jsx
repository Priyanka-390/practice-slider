import React from "react";
import menimg from "../assets/images/men-img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img2 from "../assets/images/img-2.png";
import img3 from "../assets/images/img-3.png";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div>
      <section className="overflow-hidden">
        <div className="mycontainer">
          <Slider {...settings}>
            {/* <div> */}
            <div className="card-1 ">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src={menimg} alt="men" />
                  <div className="ps-3">
                    <h2 className="vizard">Viezh Robert</h2>
                    <p className="warsa">Warsaw, Poland</p>
                  </div>
                </div>
                <div className="d-flex">
                  <p className="rating">4.5</p>
                  <span className="ps-2">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.189 6.16509L10.2218 5.58853L8.44834 1.99322C8.39991 1.89478 8.32022 1.81509 8.22178 1.76666C7.97491 1.64478 7.67491 1.74634 7.55147 1.99322L5.77803 5.58853L1.81084 6.16509C1.70147 6.18072 1.60147 6.23228 1.52491 6.31041C1.43235 6.40554 1.38134 6.53353 1.3831 6.66625C1.38486 6.79897 1.43924 6.92557 1.53428 7.01822L4.40459 9.81666L3.72647 13.7682C3.71057 13.8601 3.72074 13.9547 3.75583 14.0411C3.79093 14.1276 3.84953 14.2024 3.92501 14.2572C4.00049 14.3121 4.08982 14.3446 4.18288 14.3513C4.27593 14.3579 4.36898 14.3383 4.45147 14.2948L7.99991 12.4292L11.5483 14.2948C11.6452 14.3463 11.7577 14.3635 11.8655 14.3448C12.1374 14.2979 12.3202 14.0401 12.2733 13.7682L11.5952 9.81666L14.4655 7.01822C14.5437 6.94166 14.5952 6.84166 14.6108 6.73228C14.653 6.45884 14.4624 6.20572 14.189 6.16509Z"
                        fill="#FEA250"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="para1 pt-3 max-w-340">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
            {/* </div> */}
            {/* <div> */}
            <div className="card-1 ">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src={img2} alt="men" />
                  <div className="ps-3">
                    <h2 className="vizard">Yessica Christy</h2>
                    <p className="warsa">Shanxi, China</p>
                  </div>
                </div>
                <div className="d-flex">
                  <p className="rating">4.5</p>
                  <span className="ps-2">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.189 6.16509L10.2218 5.58853L8.44834 1.99322C8.39991 1.89478 8.32022 1.81509 8.22178 1.76666C7.97491 1.64478 7.67491 1.74634 7.55147 1.99322L5.77803 5.58853L1.81084 6.16509C1.70147 6.18072 1.60147 6.23228 1.52491 6.31041C1.43235 6.40554 1.38134 6.53353 1.3831 6.66625C1.38486 6.79897 1.43924 6.92557 1.53428 7.01822L4.40459 9.81666L3.72647 13.7682C3.71057 13.8601 3.72074 13.9547 3.75583 14.0411C3.79093 14.1276 3.84953 14.2024 3.92501 14.2572C4.00049 14.3121 4.08982 14.3446 4.18288 14.3513C4.27593 14.3579 4.36898 14.3383 4.45147 14.2948L7.99991 12.4292L11.5483 14.2948C11.6452 14.3463 11.7577 14.3635 11.8655 14.3448C12.1374 14.2979 12.3202 14.0401 12.2733 13.7682L11.5952 9.81666L14.4655 7.01822C14.5437 6.94166 14.5952 6.84166 14.6108 6.73228C14.653 6.45884 14.4624 6.20572 14.189 6.16509Z"
                        fill="#FEA250"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="para1 pt-3 max-w-340 ">
                “I like it because I like to travel far and still can connect
                with high speed.”.
              </p>
            </div>
            {/* </div> */}
            {/* <div> */}
            <div className="card-1 ">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src={img3} alt="men" />
                  <div className="ps-3">
                    <h2 className="vizard">Kim Young Jou</h2>
                    <p className="warsa">Seoul, South Korea</p>
                  </div>
                </div>
                <div className="d-flex">
                  <p className="rating">4.5</p>
                  <span className="ps-2">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.189 6.16509L10.2218 5.58853L8.44834 1.99322C8.39991 1.89478 8.32022 1.81509 8.22178 1.76666C7.97491 1.64478 7.67491 1.74634 7.55147 1.99322L5.77803 5.58853L1.81084 6.16509C1.70147 6.18072 1.60147 6.23228 1.52491 6.31041C1.43235 6.40554 1.38134 6.53353 1.3831 6.66625C1.38486 6.79897 1.43924 6.92557 1.53428 7.01822L4.40459 9.81666L3.72647 13.7682C3.71057 13.8601 3.72074 13.9547 3.75583 14.0411C3.79093 14.1276 3.84953 14.2024 3.92501 14.2572C4.00049 14.3121 4.08982 14.3446 4.18288 14.3513C4.27593 14.3579 4.36898 14.3383 4.45147 14.2948L7.99991 12.4292L11.5483 14.2948C11.6452 14.3463 11.7577 14.3635 11.8655 14.3448C12.1374 14.2979 12.3202 14.0401 12.2733 13.7682L11.5952 9.81666L14.4655 7.01822C14.5437 6.94166 14.5952 6.84166 14.6108 6.73228C14.653 6.45884 14.4624 6.20572 14.189 6.16509Z"
                        fill="#FEA250"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="para1 pt-3 max-w-340">
                “This is very unusual for my business that currently requires a
                virtual private network that has high security.”.
              </p>
            </div>
            {/* </div> */}
            {/* <div> */}
            <div className="card-1 ">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <img src={menimg} alt="men" />
                  <div className="ps-3">
                    <h2 className="vizard">Viezh Robert</h2>
                    <p className="warsa">Warsaw, Poland</p>
                  </div>
                </div>
                <div className="d-flex">
                  <p className="rating">4.5</p>
                  <span className="ps-2">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.189 6.16509L10.2218 5.58853L8.44834 1.99322C8.39991 1.89478 8.32022 1.81509 8.22178 1.76666C7.97491 1.64478 7.67491 1.74634 7.55147 1.99322L5.77803 5.58853L1.81084 6.16509C1.70147 6.18072 1.60147 6.23228 1.52491 6.31041C1.43235 6.40554 1.38134 6.53353 1.3831 6.66625C1.38486 6.79897 1.43924 6.92557 1.53428 7.01822L4.40459 9.81666L3.72647 13.7682C3.71057 13.8601 3.72074 13.9547 3.75583 14.0411C3.79093 14.1276 3.84953 14.2024 3.92501 14.2572C4.00049 14.3121 4.08982 14.3446 4.18288 14.3513C4.27593 14.3579 4.36898 14.3383 4.45147 14.2948L7.99991 12.4292L11.5483 14.2948C11.6452 14.3463 11.7577 14.3635 11.8655 14.3448C12.1374 14.2979 12.3202 14.0401 12.2733 13.7682L11.5952 9.81666L14.4655 7.01822C14.5437 6.94166 14.5952 6.84166 14.6108 6.73228C14.653 6.45884 14.4624 6.20572 14.189 6.16509Z"
                        fill="#FEA250"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="para1 pt-3 max-w-340">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
            {/* </div> */}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Slick;
