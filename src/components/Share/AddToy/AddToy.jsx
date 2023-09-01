import Footer from "../Footer/Footer";

const AddToy = () => {
  return (
    <div className="bg-red-100 mt-1">
      <h2 className="text-center text-3xl uppercase">Add Toy</h2>
      <br /> <br />
      <form className="m-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Product Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Brand Name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Release Date</span>
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
              <span className="label-text">Add amount</span>
            </label>
            <input
              type="text"
              placeholder="Product Amount"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-xx" ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Discount</span>
            </label>
            <input
              type="text"
              placeholder="00 %"
              className="input input-bordered"
            />
          </div>
          
        </div>

        <div className="form-control mt-6">
          <input
            className="btn bg-sky-400 btn-block btn-outline border-0 border-b-4 mt-4"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddToy;
