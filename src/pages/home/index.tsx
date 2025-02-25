"use client";
import "./styles.css";
import "../../app/globals.css";
import { Poppins } from "next/font/google";
import NavbarComponent from "@/src/components/navbar";
import BannerComponent from "@/src/components/banner";
import PetComponent from "./components/pet-home"
import NeedsComponent from "./components/needs";
import CategoriesComponent from "./components/categories";
import VitalComponent from "./components/vital";
import BestComponent from "./components/best";
import TasteComponent from "./components/taste";
import PopularComponent from "./components/popular";
import NewComponent from "./components/new";
import FooterComponent from "@/src/components/footer";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800"],
    display: "swap",
});

const HomePage = () => {
    return (
        <div className={`home-landing-page ${poppins.className}`}>
            <BannerComponent />
            <NavbarComponent />
            <main className="content">
                <PetComponent />
                <NeedsComponent />
                <CategoriesComponent />
                <VitalComponent />
               <BestComponent/> 
               <TasteComponent/>
               <PopularComponent/>
               <NewComponent/>
            </main>
            <FooterComponent/>
        </div>
    );
};

export default HomePage;
