import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import EntryRow from "./EntryRow";

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
    <div>
      <h2>Entry: {toying.length}</h2>

      <div className="overflow-x-auto items-center p-29 bg-center">
        <table className="table">
          {/* head */}
          <thead>
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
      </div>
    </div>
  );
};

export default ToyEntry;
