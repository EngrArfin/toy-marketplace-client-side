import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import EntryRow from "./EntryRow";
import Footer from "../Share/Footer/Footer";

const ToyEntry = () => {
  const { user } = useContext(AuthContext);
  const [toying, setEntry] = useState([]);

  const url = `http://localhost:5000/toying?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEntry(data));
  }, []);

  return (
    <section>
      <div className="flex p-6">
      
      <div><div className="overflow-x-auto items-center  bg-center w-200">
        <table className="table ">
          {/* head */}
          <thead className="text-red-600">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {toying.map((entry => <EntryRow 
              key={entry._id} 
              entry={entry}
              ></EntryRow>
            ))}
          </tbody>
        </table>
      </div></div>
      <div className="ml-20"><div className="overflow-x-auto items-center  bg-center w-200">
        <table className="table ">
          {/* head */}
          <thead className="text-red-600">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {toying.map((entry => <EntryRow 
              key={entry._id} 
              entry={entry}
              ></EntryRow>
            ))}
          </tbody>
        </table>
      </div></div>
    </div>
    <Footer></Footer>
    
    </section>
    
  );
};

export default ToyEntry;
