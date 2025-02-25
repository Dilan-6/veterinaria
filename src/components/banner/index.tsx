import React from "react";
import "./styles.css";


interface BannerProps {
    backgroundColor?: string;
}

const BannerComponent: React.FC<BannerProps> = ({
    backgroundColor = "rgba(246, 61, 61, 1)",
}) => {


return (
    <nav className="banner" style={{ backgroundColor }}>
        <h1 className="banner-text">Free Shipping USA & Worldwide on All Orders</h1>
    </nav>
);
};

export default BannerComponent;
