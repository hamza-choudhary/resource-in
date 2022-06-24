import React from "react";
import Layout from "../Layout/Layout";
import PersonalInfoCard from "../UI/PersonalInfoCard/PersonalInfoCard";

const MyProbation = () => {
  const probationOnClick = () => {};
  return (
    <Layout>
      <PersonalInfoCard
        heading="My Probabtion"
        headingImageUrl="assests/images/icons/assets-icon.png"
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={probationOnClick}
        dataForHeading={[]}
        dataForRows={[]}
      />
    </Layout>
  );
};

export default MyProbation;
