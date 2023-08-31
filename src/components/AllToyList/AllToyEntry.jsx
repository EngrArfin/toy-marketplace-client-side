

const AllToyEntry = ({toys}) => {
    const {_id, customerName,ToyName, SubToyName, AvailableQuality, price, img} =toys;

  return (
    <div>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>{customerName}</td>
        <td>{ToyName}</td>
        <td>{SubToyName}</td>
        <td>{price}</td>
        <td>{AvailableQuality}</td>

        <th>
          <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">
            View Details
          </button>
        </th>
      </tr>
    </div>
  );
};

export default AllToyEntry;
