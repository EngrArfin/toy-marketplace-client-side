import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import AllToyEntry from "./AllToyEntry";
import Footer from "../Share/Footer/Footer";
import Services from "../Services/Services";

const AllToyList = () => {
  const { user } = useContext(AuthContext);
  const [toy, setEntry] = useState([]);

  const url = `http://localhost:5000/toy?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEntry(data));
  }, []);
  return (
    <section>
        <Services></Services>

      <div className="flex">
        <div>
          <div className="overflow-x-auto  mr-20 bg-center w-200">
            <table className="table mr-20">
              {/* head */}
              <thead className="text-red-600 items-left">
                <tr className="start">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="mr-10">Sell Name</th>
                  <th>Toy Name</th>
                  <th>Sub Category</th>
                  <th>Price</th>
                  <th>Available Quality</th>
                  <th>View Details </th>
                </tr>
              </thead>

              <tbody>
                {toy.map((toys) => (
                  <AllToyEntry key={toys._id} toys={toys}></AllToyEntry>
                ))}
              </tbody>
            </table>
          </div>
        </div>
     
      </div>
      <Footer></Footer>
    </section>
  );
};

export default AllToyList;
