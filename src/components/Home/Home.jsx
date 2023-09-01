import { useContext, Link } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Services from "../Services/Services";
//import KidToy from "../../assets/KidToy.jpg";
import Home2 from "../../assets/Home2.jpg";
import Title from "../Share/Title/Title";
import Footer from "../Share/Footer/Footer";
import ProductGallery from "../Share/ProductGallery/ProductGallery";
import Partner from "../Share/Partner/Partner";
//import Product from "../Product/Product";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);

  return (
    <div className="pl-2 pr-2">
      <h2> {user && <span>{user.displayName}</span>}</h2>
      <div>
        <div className="hero min-h-screen  bg-sky-500">
          <div className="hero-content text-center">
            <img src={Home2} className="max-w-2xl rounded-lg shadow-2xl" />
            <div className="max-w-md">
              <h1 className="text-5xl font-bold uppercase">Beby Toy</h1>
              <p className="py-6">
                Toy marketing relies on influencers and recommendations from
                other kids. and encourage customers to share their experiences.
              </p>
              <button  className="btn btn-outline border-red-500 border-2 border-b-6 mt-4"> 
                <a to="/entry">Go For Buy</a> 
              </button>
            </div>
          </div>
        </div>
        <ProductGallery></ProductGallery>
        <Services></Services>

        {/* Watch */}
        <Partner></Partner>
        {/* <Product></Product> */}


        {/* Involver For Delevery */}
        <Title
        heading="Contracted Delivery Agency"
        subHeading="Happy shipping"
        ></Title>

        <div>
          <div className="flex m-5 p-4">
            <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
              <figure>
                <img src="/public/daraz.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title uppercase">Darazz</h2>
                <p className="uppercase">They are involve with us to delivery our product </p>
                <div className="card-actions justify-end">
                  <a href="https://www.daraz.com.bd/" className="btn btn-outline border-red-600 text-white border-2 border-b-6 mt-4">Contract</a>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
              <figure>
                <img src="/public/c-1.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Delivery Service</h2>
                <p className="uppercase">They are involve with us to delivery our product </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline border-red-600 text-white border-2 border-b-6 mt-4">Contract</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
              <figure>
                <img src="/public/c-2.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title uppercase">Delivery</h2>
                <p className="uppercase">They are involve with us to delivery our product </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline border-red-600 text-white border-2 border-b-6 mt-4">Contract</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full m-4">
              <figure>
                <img src="/public/c-3.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title uppercase">First shipping</h2>
                <p>They are involve with us to delivery our product </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline border-red-600 text-white border-2 border-b-6 mt-4">Contract</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Here */}

        <Footer></Footer>
      </div>
    </div>
  );
};
export default Home;
