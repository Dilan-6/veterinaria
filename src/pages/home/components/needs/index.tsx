import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const NeedsComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, 
        threshold: 0.5, 
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      className={`contenedor-needs ${isVisible ? "active-animation" : ""}`}
      ref={sectionRef}
    >
      <div className="contenedor-needs-padre">
        <Image
          src="/png/dog.png"
          alt=""
          className="image-needs-dog"
          width={127}
          height={127}
          priority
        />
        <div className="needs-padre-container">
          <h1 className={`need-text-title ${roboto.className}`}>
            <span style={{ color: "rgba(246, 61, 61, 1)" }}>
              What your pet needs,{" "}
            </span>
            when they need it.
          </h1>
          <div className="container-two-need">
            <div className="need-cont-one">
              <div className="container-image-one-need">
                <Image
                  src="/svg/need/suport.svg"
                  alt=""
                  className="image-need-one"
                  width={65}
                  height={65}
                  priority
                />
              </div>
              <h1 className="one-text-need-container">24/7 Support</h1>
              <p className="one-descrip-need-container">
                Shop online to get orders over $35 shipped fast and free.
              </p>
            </div>
            <div className="need-cont-two">
              <div className="container-image-two-need">
                <Image
                  src="/svg/need/truck.svg"
                  alt=""
                  className="image-need-two"
                  width={67}
                  height={65}
                  priority
                />
              </div>
              <h1 className="one-text-need-container">
                Free Same-Day Delivery
              </h1>
              <p className="one-descrip-need-container">
                Order by 2pm local time to get free delivery on orders $35+
                today.
              </p>
            </div>
            <div className="need-cont-three">
              <div className="container-image-three-need">
                <Image
                  src="/svg/need/shield.svg"
                  alt=""
                  className="image-need-three"
                  width={65}
                  height={65}
                  priority
                />
              </div>
              <h1 className="one-text-need-container">Security payment</h1>
              <p className="one-descrip-need-container">
                35% off your first order plus 5% off all future orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedsComponent;
