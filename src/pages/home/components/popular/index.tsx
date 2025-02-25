import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const PopularComponent = () => {
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
                threshold: 0.3, 
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

    return (
        <div className="popular" ref={sectionRef}>
            <div className="popular-container">
                <h1 className={`title-popular ${roboto.className}`}>
                    <span style={{ color: "rgba(246, 61, 61, 1)" }}>Popular </span>
                    Brands
                </h1>
                <div className="popular-cards">
                    <div className={`popular-cards-one ${isVisible ? "slide-up" : ""}`}>
                        <Image
                            src="/png/popular/one.png"
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className={`popular-cards-two ${isVisible ? "slide-up" : ""}`}>
                        <Image
                            src="/png/popular/two.png"
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className={`popular-cards-three ${isVisible ? "slide-up" : ""}`}>
                        <Image
                            src="/png/popular/three.png"
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                    <div className={`popular-cards-four ${isVisible ? "slide-up" : ""}`}>
                        <Image
                            src="/png/popular/four.png"
                            alt=""
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularComponent;
