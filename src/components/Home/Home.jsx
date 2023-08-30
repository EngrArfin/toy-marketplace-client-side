import { useContext, Link } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Services from "../Services/Services";
import KidToy from "../../assets/KidToy.jpg";
import Home2 from "../../assets/Home2.jpg";
import Title from "../Share/Title/Title";

const Home = () => {
  const year = new Date().getFullYear();
  const user = useContext(AuthContext);
  console.log(user);

  return (
    <div className="pl-2 pr-2">
      <h2> {user && <span>{user.displayName}</span>}</h2>
      <div>
        <div className="hero min-h-screen  bg-sky-200">
          <div className="hero-content text-center">
            <img src={Home2} className="max-w-2xl rounded-lg shadow-2xl" />
            <div className="max-w-md">
              <h1 className="text-5xl font-bold uppercase">Beby Toy</h1>
              <p className="py-6">
                Toy marketing relies on influencers and recommendations from
                other kids. and encourage customers to share their experiences.
              </p>
              <button className="btn btn-outline border-red-500 border-2 border-b-6 mt-4"> {/* btn btn-outline border-0 border-b-4 mt-4 */}
                <a href="/product"></a> Go For Buy
              </button>
            </div>
          </div>
        </div>

        <Services></Services>

        {/* Watch */}
        <Title
        heading="Agency Time Period"
        subHeading="Time"
        ></Title>

        <div className="item-center ml-80">
        <dir className="m-20 col-end-1 item-center">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 49 }}></span>
              </span>
              sec
            </div>
          </div>
        </dir>

        </div>

        {/* Involver For Delevery */}
        <Title
        heading="Contracted Shipping Agency"
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

        <footer className="footer p-10 bg-sky-200 ">
          <div>
            <img src={KidToy} alt="" className="w-10 rounded-full" />
            <h2 className="uppercase text-red-800">Kid Toy.</h2>
            <p>Our service star 2012</p>
            <p>Opening Time:</p>
            <p>Mon-Thurs 10:00 AM - :9:00 Pm</p>
            <p>Fri 09:00 AM - 11:59 AM</p>
          </div>

          <div>
            <span className="footer-title text-blue-800 uppercase">
              Our Service
            </span>
            <a className="link link-hover">Kid Toy Market</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Kit Toy </a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Contract</span>
            <a className="link link-hover">arfin.cse.green.edu.bd@gmail.com</a>
            <a className="link link-hover">Phone: +880 192475639</a>
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com/ArfinSamsel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/@sa10macademyyt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://web.facebook.com/engrarfin/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
        <footer className="footer footer-center p-4  bg-sky-200 text-base-content">
          <div>
            <p>Copyright © {year}- Right by Kid Toy </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Home;
