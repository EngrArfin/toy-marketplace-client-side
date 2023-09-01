import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, rating } = service;

  const { user } = useContext(AuthContext);

  return (
    <div className="card w-96 h-50 bg-sky-500 ml-14 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl p-1 bg-red-100" />
      </figure>
      <div className="card-body ">
        <div>
          <h2 className="card-title">
            <div className="badge text-end p-4 bg-danger-500">
              <span>Price: $ {price}</span>
            </div>
          </h2>
        </div>
        <div>
          <div className="flex flex-col items-end ">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </div>
        </div>
        <h2 className="card-title text-red-700 uppercase ">{title}</h2>

        <div className="card-action mt-5">
          <Link to={`/toy/${_id}`}>
            {user?.email ? (
              <>
                <Link className="badge badge-outline" to="/entry">
                  Product Details
                </Link>
              </>
            ) : (
              <Link className="badge badge-outline" to={"/login"}>
                Product Details
              </Link>
            )}

            <div className="card-actions justify-end">
              <div className="btn btn-outline border-red-500 border-2 border-b-6 mt-4">
                Buy Here
              </div>
            </div>
          </Link>
          {/* LAst */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
