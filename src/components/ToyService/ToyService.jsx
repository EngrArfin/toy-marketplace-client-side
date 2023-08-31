import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import Footer from "../Share/Footer/Footer";

const ToyService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleToyService = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
  
    const email = user?.email.value;
    const toying = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price
    };
    console.log(toying);

    fetch("http://localhost:5000/toying", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toying),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
        }
      })
  }

  return (
    <div>
      <br /> <br />
      <h2 className="text-center text-3xl">Toy Product:{title}</h2>
      <br /> <br />
      <form onSubmit={handleToyService} className="m-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Today Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <input
            className="btn bg-sky-400 btn-block btn-outline border-0 border-b-4 mt-4"
            type="submit"
            value="Order Now"
          />
        </div>
      </form>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ToyService;
