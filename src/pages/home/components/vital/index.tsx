import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const VitalComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

   
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        const currentSectionRef = sectionRef.current;
        if (currentSectionRef) observer.observe(currentSectionRef);

        return () => {
            if (currentSectionRef) observer.unobserve(currentSectionRef);
        };
    }, []);

    return (
        <div className={`container-vital ${isVisible ? "fade-in" : ""}`} ref={sectionRef}>
            <div className="container-vital-padre">
                <div className="vital-container-one">
                    <div className="vital-one">
                        <Image
                            src="/png/vital/one.png"
                            alt=""
                            className=""
                            width={50}
                            height={51}
                        />
                        <div className="container-text-small">
                            <p className={`text-title-small ${roboto.className}`}>petco</p>
                            <h1 className="text-descrip-small">Vital Care</h1>
                        </div>
                    </div>
                    <div className="vital-two">
                        <p className="descri-vital">
                            Save big annually with our veterinarian recommended wellness plan.
                        </p>
                        <div className="vital-container-button">
                            <button type="button" className="vital-button">Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className="container-image-vital">
                    <Image
                        src="/png/vital/two.png"
                        alt=""
                        className="clickable-image"
                        width={606}
                        height={413}
                    />
                </div>
            </div>
        </div>
    );
};

export default VitalComponent;
