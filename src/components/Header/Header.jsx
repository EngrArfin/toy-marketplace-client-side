import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import img from "../../../public/img/d-10.jpg";
import KidToy from "../../assets/KidToy.jpg";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex">
      <div className="navbar bg-blue-300">
        <div className="flex-1">
          <img src={KidToy} alt="" className="w-10 rounded-full" />
          <a className="btn btn-ghost text-red-800 text-xl m-2 uppercase">
            Kid Toy
          </a>
        </div>

        <div>
          <Link
            className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
            to="/"
          >
            Home
          </Link>

          <Link
            className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
            to="/alltoyList"
          >
            All Toy List
          </Link>
          <Link
            className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
            to="/orders"
          >
            My Toys
          </Link>

          {user?.email ? (
            <>
              <Link
                className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
                to="/add"
              >
                Add Toy
              </Link>
            </>
          ) : (
            <Link
              className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
              to={"/login"}
            >
              Add Toy
            </Link>
          )}

          <Link
            className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
            to="/contract"
          >
            Contract
          </Link>
          <Link
            className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
            to="/blog"
          >
            Blog
          </Link>

          {user?.email ? (
            <>
              <Link
                className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
                to="/entry"
              >
                Buy Product
              </Link>
            </>
          ) : (
            <Link
              className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
              to={"/login"}
            >
              Login
            </Link>
          )}

          <Link
            className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
            to="/register"
          >
            Register
          </Link>
        </div>

        <div className="flex-none ">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2 btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="border-yellow-200 badge-sm indicator-item">
                  1
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">1 Items</span>
                <span className="text-info">Subtotal: $ 00.00</span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={img} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-sky-600 rounded-box w-52"
            >
              <a className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2">
                Profile
              </a>
              <a className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2">
                Settings/Privacy
              </a>
              <a className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2">
                Help & Support
              </a>
              <a className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2">
                FeedBack
              </a>
              {user?.email ? (
                <>
                  <button
                    className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2"
                  to={"/login"}
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
