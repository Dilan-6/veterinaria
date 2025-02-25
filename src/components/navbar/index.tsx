import React from "react";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

interface NavbarProps {
    backgroundColor?: string;
}
export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
    display: "swap",
});

const NavbarComponent: React.FC<NavbarProps> = ({
    backgroundColor = "#FFFF",
}) => {


    return (
        <nav className="navbar" style={{ backgroundColor }}>
            <div className="contenedor-navbar">
                <div className="contenedor-nav-one">
                    <Image
                        src="svg/icon-one.svg"
                        alt=""
                        className="image-cont"
                        width={19}
                        height={19}
                    />
                </div>
                <div className={`contenedor-nav-two ${montserrat.className}`}>
                    <Link className="link" href="">Home</Link>
                    <Link className="link" href="">Shop</Link>
                    <Link className="link" href="">Collections</Link>
                    <Image
                        src="svg/icon-two.svg"
                        alt=""
                        width={157}
                        height={80}
                    />
                    <Link className="link" href="">Services</Link>
                    <Link className="link" href="">About US</Link>
                    <Link className="link" href="">Contact Us</Link>
                </div>
                <div className="contenedor-nav-three">
                    <Image
                        src="svg/shopping-cart.svg"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src="svg/icon-person.svg"
                        alt=""
                        width={21}
                        height={21}
                    />

                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
