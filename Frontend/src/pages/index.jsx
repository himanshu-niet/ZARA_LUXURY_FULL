import Footer from "../components/Navbar/Footer";
import Header from "../components/Navbar/Header";
import TestimonialIndex from "../components/Testimonials/Index";
import Cta from "../components/Cta";
import Services from "../components/Services";
import BannerIndex from "../components/Banner/Index";
import ProductIndex from "../components/Product/Index";
import CategoryIndex from "../components/Category/Index";




import {productData} from '../../data'

function Index() {
  return (
    <>
      <Header />

      <main>

        <BannerIndex data={productData?.bannerData}/>

        <CategoryIndex data={productData?.categoryData}/>

        <ProductIndex data={productData}/>

        <div className="container">
        <div className="testimonials-box">
         
        <TestimonialIndex />

          <Cta data={productData?.ctaData}/>

          <Services />

        </div>
        </div>

      
      </main>

      <Footer />
    </>
  );
}

export default Index;
