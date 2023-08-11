import { useContext } from 'react';
import img from '../../../../public/G_Logo.svg.png'
import { AuthContext } from '../../../Providers/AuthProviders';
const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn =() =>{
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center p-2">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
          <img src={img} alt=""/>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
