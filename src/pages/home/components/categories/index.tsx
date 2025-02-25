import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
    display: "swap",
});

const CategoriesComponent = () => {
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
        <div className={`categories-container ${isVisible ? "active-animation" : ""}`} ref={sectionRef}>
            <div className="categories-padre">
                <h1 className={`categories-text-title ${montserrat.className}`} >
                    <span style={{ color: "rgba(246, 61, 61, 1)" }}>Top </span>categories
                </h1>

                <div className="div-padre-categories">
                    <div className="categorie-one-div">
                        <div className="contenedor-categories-padre-one">
                            <Image
                                src="/png/categories/1.png"
                                alt=""
                                className="image-categories"
                                width={194}
                                height={89}
                                priority
                            />
                        </div>
                        <p className="categories-text-descri">Cat Toys</p>
                    </div>

                    <div className="categorie-two-div">
                        <div className="contenedor-categories-padre-two">
                            <Image
                                src="/png/categories/2.png"
                                alt=""
                                className="image-categories-one"
                                width={87}
                                height={118}
                                priority
                            />
                        </div>
                        <p className="categories-text-descri">Cat Food</p>
                    </div>

                    <div className="categorie-three-div">
                        <div className="contenedor-categories-padre-three">
                            <Image
                                src="/png/categories/3.png"
                                alt=""
                                className="image-categories"
                                width={154}
                                height={154}
                                priority
                            />
                        </div>
                        <p className="categories-text-descri">Dog Toys</p>
                    </div>

                    <div className="categorie-four-div">
                        <div className="contenedor-categories-padre-four">
                            <Image
                                src="/png/categories/4.png"
                                alt=""
                                className="image-categories"
                                width={156}
                                height={156}
                                priority
                            />
                        </div>
                        <p className="categories-text-descri">Dog Food</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesComponent;
