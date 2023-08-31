import  { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2> {user && <span>{user.displayName}</span>}</h2>
      <div>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="/public/head.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">Chef Recipe</h1>
                <p className="py-6">
                  {" "}
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Modi officiis dolorum, nihil iure re <br />
                  obcaecati inventore harum , magnam et ipsam error. <br /> .
                </p>
                <button className="btn btn-primary">Submit Recipe</button>
              </div>
            </div>
          </div>
        </div>
        {/* Food Recipe */}

        <div>
          <div className="carousel carousel-end rounded-box">
            <div className="carousel-item">
              <img
                src="/public/chef11.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
              />
            </div>
            <div className="carousel-item">
              <img src="/public/chef13.jpg" alt="Drink" />
            </div>
            <div className="carousel-item">
              <img src="/public/chef13.jpg" alt="Drink" />
            </div>
            <div className="carousel-item">
              <img src="/public/chef13.jpg" alt="Drink" />
            </div>
            <div className="carousel-item">
              <img src="/public/chef13.jpg" alt="Drink" />
            </div>
            <div className="carousel-item">
              <img src="/public/chef13.jpg" alt="Drink" />
            </div>
            <div className="carousel-item">
              <img src="/public/chef17.jpg" alt="Drink" />
            </div>
          </div>
        </div>

        {/* Election Comession photo */}
        <div className="bg-primary m-3 p-4 justify-end">
          <h1 className="text-align-center">Chef Service Provider </h1>
        </div>

        <div className="">
          <div className="bg-center flex p-4 m-3">
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
              <figure>
                <img src="/public/chef1.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">CZN Barak</h2>
                <p>Head Shef</p>
                <p>Experience: 10 Years</p>
                <p>Numbers of recipes: 4</p>
                <button>Likes</button>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Recipes</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
              <figure>
                <img src="/public/chef2.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">SALT Bae</h2>
                <p>Head Shef</p>
                <p>Experience: 10 Years</p>
                <p>Numbers of recipes: 4</p>
                <button>Likes</button>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Recipes</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
              <figure>
                <img src="/public/chef3.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Floyd Cardoz </h2>
                <p>Head Shef</p>
                <p>Experience: 10 Years</p>
                <p>Numbers of recipes: 4</p>
                <button>Likes</button>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Recipes</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex p-4 m-3">
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
              <figure>
                <img src="/public/chef1.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">CZN Barak</h2>
                <p>Head Shef</p>
                <p>Experience: 10 Years</p>
                <p>Numbers of recipes: 4</p>
                <button>Likes</button>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Recipes</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
              <figure>
                <img src="/public/chef2.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">SALT Bae</h2>
                <p>Head Shef</p>
                <p>Experience: 10 Years</p>
                <p>Numbers of recipes: 4</p>
                <button>Likes</button>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Recipes</button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl p-3 m-3">
              <figure>
                <img src="/public/chef3.jpg" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Floyd Cardoz </h2>
                <p>Head Shef</p>
                <p>Experience: 10 Years</p>
                <p>Numbers of recipes: 4</p>
                <button>Likes</button>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Recipes</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Here */}
        <div>
          <footer className="footer p-10 bg-base-300 text-base-content">
            <div>
              <span className="text-primary footer-title">Services</span>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </div>
            <div>
              <span className="footer-title">Company</span>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </div>
            <div>
              <span className="footer-title">Social</span>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Home;