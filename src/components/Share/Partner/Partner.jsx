import partner1 from "../../../../public/partner/partner1.jpg";
import partner2 from "../../../../public/partner/partner2.jpg";
import partner3 from "../../../../public/partner/partner3.jpg";
import partner4 from "../../../../public/partner/partner4.jpg";
import partner6 from "../../../../public/partner/partner6.jpg";
import partner7 from "../../../../public/partner/partner7.jpg";
import Title from "../Title/Title";
const Partner = () => {
  return (
    <section>
      <Title
        heading="RETAIL PARTNERS"
        subHeading="Here Out Partner company "
      ></Title>

      <div className="ml-14">
        <div className="flex p-5 ml-20">
        <div className="card w-96 bg-red-100 shadow-xl mr-8">
            <figure className="px-10 pt-10">
              <img src={partner1} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase">Shopno Shop</h2>
              <div className="card-actions">
                <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">Go About Details</button>
              </div>
            </div>
          </div>
          
          <div className="card w-96 bg-red-100 shadow-xl mr-8">
            <figure className="px-10 pt-10">
              <img src={partner2} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase">Unimart</h2>
              <div className="card-actions">
                <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">Go About Details</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-red-100 shadow-xl mr-8">
            <figure className="px-10 pt-10">
              <img src={partner3} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase">Kids Champ</h2>
              <div className="card-actions">
                <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">Go About Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-5 ml-20">
        <div className="card w-96 bg-red-100 shadow-xl mr-8">
            <figure className="px-10 pt-10">
              <img src={partner4} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase">Kids ABC</h2>
              <div className="card-actions">
                <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">Go About Details</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-red-100 shadow-xl mr-8">
            <figure className="px-10 pt-10">
              <img src={partner6} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase">Toy Shop</h2>
              <div className="card-actions">
                <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">Go About Details</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-red-100 shadow-xl mr-8">
            <figure className="px-10 pt-10">
              <img src={partner7} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title uppercase">Yoy teks Shop</h2>
              <div className="card-actions">
                <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">Go About Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
