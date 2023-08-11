import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img , price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title ">{title}</h2>
        <p className="text-xl text-orange-500">Price: ${price}</p>
        <div className="card-action">
          <Link to={`/toy/${_id}`}>
            <button className="badge badge-outline">Product Details </button>
            <div className="card-actions justify-end">
                  <div className="btn btn-danger">Buy Here</div>
            </div>
          </Link>
        </div>
      </div>
    </div>




  );
};

export default ServiceCard;
