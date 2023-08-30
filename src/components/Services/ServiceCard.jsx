import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, rating } = service;
  return (
    <div className="card w-96 bg-base-100 ml-14 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl p-1 bg-red-100" />
      </figure>
      <div className="card-body ">
        <div>
          <h2 className="card-title">
            <div className="badge text-end badge-primary">
              <span>$ {price}</span>
            </div>
          </h2>
        </div>
        <div>
          <div className="flex flex-col items-end ">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </div>
        </div>
        <h2 className="card-title text-sky-400 uppercase ">{title}</h2>
        <p className="text-xl ">Price: ${price}</p>
        <div className="card-action">
          <Link to={`/toy/${_id}`}>
            <button className="badge badge-outline">Product Details </button>
            <div className="card-actions justify-end">
              <div className="btn btn-outline border-red-500 border-2 border-b-6 mt-4">
                Buy Here
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
