import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import SocialLogin from "../Share/SocialLogin/SocialLogin";
import { data } from "autoprefixer";
import { useForm } from "react-hook-form";


const Register = () => {
    const {register, formState: { errors }, } = useForm();
  
  const { user, createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password, photoURL)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL).then(() => {
          console.log("user profile info updated");
        });
        form.reset();
        navigate("/");
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className=" bg-primary hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold uppercase p-3">
              
              Register Here{" "}
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-200">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )} 
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
               
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className="label-text-alt link link-hover">
                    I have an account?
                  </Link>
                </label>
              </div> */}
              <div className="form-control mt-7">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="mb-4 ml-8"> Have no account?
              <Link to="/login" className="level-text-alt link-hover">
                 Login Here 
              </Link>
            </p>
              <SocialLogin></SocialLogin>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
