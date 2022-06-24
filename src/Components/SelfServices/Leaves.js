import Layout from "../Layout/Layout";
import PersonalInfoCard from "../UI/PersonalInfoCard/PersonalInfoCard";

const Leaves = () => {
  const leavesOnClick = () => {};
  const requestsOnClick = () => {};

  const leaveTableHeading = ["Leave Type", "Balance", "	Availed", "Available"];

  const fetchLeavesData = async () => {
    const res = await fetch("http://localhost:8080/leave-summary", {
      body: JSON.stringify({
        empid: "1",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const data = res.json();
    // console.log(data);
  };
  // fetchLeavesData();
  return (
    <Layout>
      <PersonalInfoCard
        heading="Balance"
        headingImageUrl="assests/images/icons/assets-icon.png"
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={leavesOnClick}
        dataForHeading={leaveTableHeading}
        dataForRows={[]}
      />

      <PersonalInfoCard
        heading="Requests"
        headingImageUrl="assests/images/icons/requests-icon.png"
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={requestsOnClick}
        dataForHeading={[]}
        dataForRows={[]}
      />
    </Layout>
  );
};

export default Leaves;
