import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.error(error))
    }

    return (
        <div className='flex'>
            <div className="navbar bg-neutral text-neutral-content ">
                 <Link className="btn btn-ghost normal-case text-xl"  to="/">Kid Toy</Link>   
            </div>
            <div className='navbar bg-neutral text-neutral-content  text-right  '>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/product">Product</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/contract">Contract</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                {
                    user? <>
                    <span>{user.email}</span> :
                    <button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
                    </> : <Link to="/login">LogIn</Link>
                }
                {
                    user && <Link 
                    className="btn btn-ghost normal-case text-xl" 
                    to="/profile"
                    >Profile</Link>
                }
            </div>
        </div>
        
    );
};

export default Header;