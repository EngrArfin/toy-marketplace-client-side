
import Footer from "../Share/Footer/Footer";
import contract from "../../../public/gallery/contract.jpg";

const Contract = () => {
  return (
    <div>
      <div>
        <div className=" hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={contract} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Contract Shop Info </h1>
              <p className="py-6">
                <span className="footer-title">Contract</span>
                <br />
                <p>Gmail: <br /><a className="link link-hover">
                  arfin.cse.green.edu.bd@gmail.com
                </a> </p>
                <br />
                <p>Phone: <br />  <a className="link link-hover"> +880 192475639</a> </p>
               
              </p>
              <button  className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
               <a href="https://web.facebook.com/engrarfin">Contract Here</a> 
              </button>
            </div>
          </div>
        </div>
      </div>

   

      {/* Footer */}

      <Footer></Footer>
    </div>
  );
};

export default Contract;
