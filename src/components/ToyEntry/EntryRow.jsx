

const EntryRow = ({entry}) => {
    const {_id, customerName,price, date, email, img} =entry;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        
      </td>
      <td>{customerName}</td>
      <td>{email}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-outline bg-sky-400 border-0 border-b-4 mt-4">details</button>
      </th>
    </tr>
  );
};

export default EntryRow;
