import React from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../divider";
import Link from "next/link";
const FooterComponent: React.FC = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container-total-footer">
                    <div className="container-footer-one">
                        <div className="footer-image">
                            <Image
                                src="/png/icon1.png"
                                alt=""
                                width={157}
                                height={80}
                            />
                        </div>

                        <div className="footer-corporate">
                            <h1 className="title-footer-corporate">Corporate</h1>
                            <p className="descrip-footer">Careers</p>
                            <p className="descrip-footer">About Us</p>
                            <p className="descrip-footer">Contact Us</p>
                            <p className="descrip-footer">FAQs</p>
                            <p className="descrip-footer">Vendors</p>
                        </div>

                        <div className="footer-information">
                            <h1 className="title-footer-corporate">Information</h1>
                            <p className="descrip-footer">Online Store</p>
                            <p className="descrip-footer">Privacy Policy</p>
                            <p className="descrip-footer">Refund Policy</p>
                            <p className="descrip-footer">Shipping</p>
                            <p className="descrip-footer">Policy</p>
                        </div>

                        <div className="footer-services">
                            < h1 className="title-footer-corporate">Services</h1>
                            <Link href="" className="descrip-footer-link">Grooming</Link>
                            <Link href="" className="descrip-footer-link">Positive Dog Training</Link>
                            <Link href="" className="descrip-footer-link">Veterinary Services</Link>
                        </div>

                        <div className="footer-new">
                            <h1 className="title-footer-corporate">Newsletter</h1>
                            <p className="descrip-footer-one">
                                Be the first to know about our new collection launches,
                                special offers & other updates.
                            </p>
                            <div className="footer-email-container">
                                <div className="input-container-footer">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="imput-footer-email"
                                    />
                                    <button >
                                        <Image
                                            src="/png/email.svg"
                                            alt=""
                                            width={50}
                                            height={32}
                                        />
                                    </button>
                                </div>
                                <DividerComponent
                                    height="2px"
                                />
                                <div className="footer-redes-sociales">
                                    <Image
                                        src="/png/facebook.svg"
                                        alt=""
                                        width={26}
                                        height={26}
                                    />
                                    <Image
                                        src="/png/ig.svg"
                                        alt=""
                                        width={26}
                                        height={26}
                                    />
                                    <Image
                                        src="/png/pinterest.svg"
                                        alt=""
                                        width={26}
                                        height={26}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-footer-two">
                    <Image
                                        src="/png/pages/page.png"
                                        alt=""
                                        width={467}
                                        height={53}
                                    />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
