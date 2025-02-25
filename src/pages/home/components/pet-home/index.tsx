import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const PetComponent = () => {
    const [activeButton, setActiveButton] = useState("one");
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    const handleButtonClick = (button: string) => {
        setActiveButton(button);
    };

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
            className={`container-pet ${isVisible ? "animate" : ""}`}
            ref={sectionRef}
        >
            <div className="container-pet-text">
                <h1 className={`pet-text-title ${roboto.className}`}>
                    Pet food of Supermarket
                </h1>

                <div className="pet-tex-container-sub">
                    <p className="tex-container-sub-descri">
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form,
                    </p>
                    <div className="container-button-pet">
                        <button
                            className={`button-one-pet ${activeButton === "one" ? "active-button" : "inactive-button"
                                }`}
                            onClick={() => handleButtonClick("one")}
                        >
                            Shop Top
                        </button>
                        <button
                            className={`button-two-pet ${activeButton === "two" ? "active-button" : "inactive-button"
                                }`}
                            onClick={() => handleButtonClick("two")}
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <Image
                src="/png/pet/Ellipse-one.svg"
                alt=""
                className="image-pet"
                width={930}
                height={993}
            />
            <Image
                src="/png/pet/Ellipse.svg"
                alt=""
                className="image-pet-two"
                width={768}
                height={791}
            />
            <Image
                src="/png/huellas.png"
                alt=""
                className="image-pet-huellas"
                width={813}
                height={849}
                priority
            />
            <Image
                src="/svg/dog.svg"
                alt=""
                className="image-pet-three"
                width={744}
                height={1261}
            />
            <Image
                src="/svg/cat.svg"
                alt=""
                className="image-pet-four"
                width={718}
                height={552}
            />
        </div>
    );
};

export default PetComponent;
