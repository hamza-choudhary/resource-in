import React from "react";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

const PersonalInfoTable = (props) => {
  return (
    // <TableHeading data={tableHeadingData} />
    <div>
      <table className="w-full">
        <thead className="bg-light-blue text-white">
          <TableHeading data={props.dataForHeading} />
        </thead>
        <tbody>
          {props.dataForRows.map((item) => {
            return <TableRow data={item.items} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PersonalInfoTable;
