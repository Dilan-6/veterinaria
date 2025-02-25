import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const TasteComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Intersection Observer para detectar visibilidad del componente
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null, // viewport
                threshold: 0.5, // 50% visible para activar animación
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
            className={`taste ${isVisible ? "fade-in" : "fade-out"}`} 
            ref={sectionRef}
        >
            <div className="taste-imagen-container">
                <Image
                    src="/png/taste/cat.png"
                    alt=""
                    className="image-taste"
                    width={819}
                    height={583}
                />
                <Image
                    src="/png/taste/one.svg"
                    alt=""
                    className="image-taste-one"
                    width={1600}
                    height={559}
                />
                <Image
                    src="/png/taste/two.svg"
                    alt=""
                    className="image-taste-two"
                    width={621}
                    height={103}
                />
            </div>
            <div className="taste-tex-container">
                <div className="container-text-small-taste">
                    <Image
                        src="/png/taste/icon.png"
                        alt=""
                        width={53}
                        height={53}
                    />
                    <div className={`small-taste ${roboto.className}`}>
                        <p className={`text-title-small-taste ${roboto.className}`}>Taste</p>
                        <h1 className="text-descrip-small-taste">Guarantee</h1>
                    </div>
                </div>
                <p className="pet-text">Taste it, love it or we’ll replace it… Guaranteed!</p>
                <p className="pet-subtitle">
                    At Petio, we believe your dog and cat will love their food so much
                    that if they don’t … we’ll help you find a replacement. That’s our taste
                    guarantee.
                </p>
                <div className="container-taste-butoon">
                    <button className="taste-button"> Find More</button>
                </div>
            </div>
        </div>
    );
};

export default TasteComponent;
