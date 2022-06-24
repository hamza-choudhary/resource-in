const TableHeading = ({ data }) => {
  return (
    <tr>
      {data.map((item) => {
        return (
          <th key={item.id} className="font-semibold">
            {item}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeading;
