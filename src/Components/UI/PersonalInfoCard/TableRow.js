import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr className="text-center">
      {data.map((item) => {
        return <td className="text-[14px]">{item}</td>;
      })}
    </tr>
  );
};

export default TableRow;
