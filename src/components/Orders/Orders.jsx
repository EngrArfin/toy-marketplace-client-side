import { Link } from "react-router-dom";
import Footer from "../Share/Footer/Footer";

import photo1 from "../../../public/order/gallary1.jpg";
import photo2 from "../../../public/order/gallary2.jpg";
import photo3 from "../../../public/order/gallary3.jpg";
import photo4 from "../../../public/order/gallary4.jpg";
import photo5 from "../../../public/order/gallary5.jpg";
import photo10 from "../../../public/order/d-4.jpg";

const Orders = () => {
  return (
    <section>
      
      <div>
        {/*  head */}
        <div className="card lg:card-side bg-red-300 shadow-xl">
          <figure>
            <img src={photo1} alt="" className="h-45 w-60" />
          </figure>
          <div className="card-body">
            <h1 className="card-title uppercase">Robot Toy</h1>
            <p>This Product have 20% discount.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                Discount Product
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="ml-20 p-3">
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo2} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Spreed Car</h2>
                <p>This Spreed Car have 20% discount.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo3} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Modern kid bike</h2>
                <p>This Mordan Car have 20% discount.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo4} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">R-15 Byke</h2>
                <p>This Spreed Bayek have 20% discount.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo5} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoping Toly Car</h2>
                <p>This Shoping toly have 20% discount.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo10} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kid Toi</h2>
                <p>This To have 20% discount.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-20 p-3">
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo5} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kid Dol Product</h2>
                <p>Click the button to buy all baby product</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src="/public/img/d-1.jpg" alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Kid Dol Product</h2>
                <p>Click the button to buy all baby product</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo2} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Spreed Car</h2>
                <p>This Spreed Car have 20% discount.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo3} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Modern kid bike</h2>
                <p>This Mordan Car have 20% discount.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
            <div className=" card card-side bg-red-300 shadow-xl  w-50 h-40 m-2 p-1 ">
              <figure>
                <img src={photo4} alt="" className="h-40 w-60" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">R-15 Byke</h2>
                <p>This Spreed Bayek have 20% discount.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
                    Buy here
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Footer */}
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Orders;
