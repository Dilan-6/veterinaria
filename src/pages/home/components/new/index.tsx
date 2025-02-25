import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import Image from "next/image";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

const NewComponent = () => {
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
            className={`new ${isVisible ? "fade-in" : "fade-out"}`} 
            ref={sectionRef}
        >
            <Image
                src="/svg/new/one.svg"
                alt=""
                className="new-svg"
                width={851}
                height={113}
                priority
            />
            <Image
                src="/svg/new/two.svg"
                alt=""
                className="new-svg-two"
                width={373}
                height={182}
                priority
            />
            <Image
                src="/svg/new/image1.png"
                alt=""
                className="new-image-1"
                width={608}
                height={465}
                priority
            />
            <Image
                src="/svg/new/Vector1.svg"
                alt=""
                className="new-image-vector-two"
                width={335}
                height={164}
                priority
            />
            <Image
                src="/svg/new/Vector1.svg"
                alt=""
                className="new-image-vector-two-1"
                width={345}
                height={174}
                priority
            />
            <Image
                src="/svg/new/Vector1.svg"
                alt=""
                className="new-image-vector-two-2"
                width={355}
                height={184}
                priority
            />
            <Image
                src="/svg/new/Vector1.svg"
                alt=""
                className="new-image-vector-two-3"
                width={365}
                height={194}
                priority
            />
            <Image
                src="/svg/new/Vector1.svg"
                alt=""
                className="new-image-vector-two-4"
                width={375}
                height={204}
                priority
            />
            <Image
                src="/svg/new/Vector5.svg"
                alt=""
                className="new-image-vector"
                width={107}
                height={349}
                priority
            />
            <Image
                src="/svg/new/Vector5.svg"
                alt=""
                className="new-image-vector-1"
                width={107}
                height={349}
                priority
            />
            <Image
                src="/svg/new/Vector5.svg"
                alt=""
                className="new-image-vector-2"
                width={107}
                height={349}
                priority
            />
            <Image
                src="/svg/new/Vector5.svg"
                alt=""
                className="new-image-vector-3"
                width={107}
                height={349}
                priority
            />
            <div className="container-new">
                <div className="new-div-tittle">
                    <h1 className="new-tittle">
                        New <span style={{ color: "rgba(246, 61, 61, 1)" }}> Puppy </span> Or Kitten
                    </h1>
                    <p className="new-descrip">
                        Discover Everything You Need To Make Them Feel At Home
                    </p>
                </div>
                <div className="container-new-button">
                    <button className="new-button">Shop kitchen</button>
                </div>
            </div>
            <Image
                src="/svg/new/image2.png"
                alt=""
                className="new-image-2"
                width={417}
                height={444}
                priority
            />
            <Image
                src="/svg/new/Vector3.svg"
                alt=""
                className="new-image-three-vector"
                width={219}
                height={255}
                priority
            />
            <Image
                src="/svg/new/Vector3.svg"
                alt=""
                className="new-image-three-vector-two"
                width={199}
                height={235}
                priority
            />
            <Image
                src="/svg/new/Vector3.svg"
                alt=""
                className="new-image-three-vector-three"
                width={179}
                height={215}
                priority
            />
            <Image
                src="/svg/new/Vector4.svg"
                alt=""
                className="new-image-three-4-one"
                width={379}
                height={221}
                priority
            />
            <Image
                src="/svg/new/Vector4.svg"
                alt=""
                className="new-image-three-4-one-1"
                width={405}
                height={237}
                priority
            />
            <Image
                src="/svg/new/Vector4.svg"
                alt=""
                className="new-image-three-4-one-2"
                width={431}
                height={252}
                priority
            />
            <Image
                src="/svg/new/Vector4.svg"
                alt=""
                className="new-image-three-4-one-3"
                width={458}
                height={267}
                priority
            />
            <Image
                src="/svg/new/Vector4.svg"
                alt=""
                className="new-image-three-4-one-4"
                width={484}
                height={283}
                priority
            />
        </div>
    );
};

export default NewComponent;
