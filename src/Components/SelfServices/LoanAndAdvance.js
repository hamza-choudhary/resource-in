import React from "react";
import Layout from "../Layout/Layout";
import PersonalInfoCard from "../UI/PersonalInfoCard/PersonalInfoCard";

const LoanAndAdvance = () => {
  const loanOnClick = () => {};
  return (
    <Layout>
      <PersonalInfoCard
        heading="My Loan & Advance"
        headingImageUrl="assests/images/icons/loan-icon.png"
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={loanOnClick}
        dataForHeading={[]}
        dataForRows={[]}
      />
    </Layout>
  );
};

export default LoanAndAdvance;
