/* import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Orders from "./Orders";


const OrderToying = () => {
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
            {toying.map((entry => <Orders 
              key={entry._id} 
              entry={entry}
              ></Orders>
            ))}
            
        </div>
    );
};

export default OrderToying; */