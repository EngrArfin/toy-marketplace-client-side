
const Title = ({heading, subHeading}) => {
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
        <h3 className="text-3xl uppercase ">{heading}</h3>
        <p className="text-2xl text-red-500">{subHeading}</p>
      </div>
    </div>
  );
};

export default Title;
