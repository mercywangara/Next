'use client'
import TopBanner from "./shared-components/header";
import Navigation from "./shared-components/navigation";
import Offers from "./homepage/components/Offers";
import FlashSales from "./homepage/components/FlashSales";
import Category from "./homepage/components/Category";
import BestSellers from "./homepage/components/BestSellers";
import OtherProducts from "./homepage/components/OtherProducts";
import NewArrivals from "./homepage/components/NewArrivals";
import Services from "./homepage/components/Services";
import Footer from "./shared-components/footer";


export default function Home() {
  return (
    <div>
      <FlashSales />
      <Category />
      <BestSellers />
      <OtherProducts />
      <NewArrivals />
      <Services />
      <Footer />
    </div>
  );
}
