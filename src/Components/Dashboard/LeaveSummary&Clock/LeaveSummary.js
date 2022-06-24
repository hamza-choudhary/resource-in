import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";
import "./LeaveSummary.css";

// const data = [
//   {
//     type: "Annual Leave",
//     totalBalance: "21",
//     availibleLeaves: "10",
//     leavesAvailed: "11",
//   },
//   {
//     type: "Unpaid Leave",
//     totalBalance: "7",
//     availibleLeaves: "6",
//     leavesAvailed: "1",
//   },
// ];

const LeaveSummary = (props) => {
  const [data, setData] = useState([]);

  const fetchSummary = async () => {
    const response = await fetch("http://localhost:8080/leave-summary", {
      body: JSON.stringify({
        empId: "1",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const data = await response.json();
    setData(data.data);
    // data.data.map((item) => console.log(item.type));
    // console.log(data.data.map((item) => item));
  };
  // fetchSummary();

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <>
      <div className={props.className}>
        <CardHeading
          url="assests/images/attendance-icon.png"
          heading="Leave Attendance Summary"
          className="w-[49%]"
        />
        <Card className="px-5 py-10 h-[100%]">
          <table className="w-full">
            <thead className="bg-light-blue text-white">
              <tr className="text-[14px]">
                <th className="font-semibold">Leave Type</th>
                <th className="font-semibold">Balance</th>
                <th className="font-semibold">Availed</th>
                <th className="font-semibold">Available</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                // console.log(item)
                return (
                  <tr className="text-center text-[14px]" key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.totalBalance}</td>
                    <td>{item.availibleLeaves}</td>
                    <td>{item.leavesAvailed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default LeaveSummary;
