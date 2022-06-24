import React from "react";
import Layout from "../Layout/Layout";
import PersonalInfoCard from "../UI/PersonalInfoCard/PersonalInfoCard";

const Relatives = () => {
  const relativesOnClick = () => {};
  return (
    <Layout>
      <div>
        <PersonalInfoCard
          heading="Relatives"
          headingImageUrl="assests/images/icons/relatives-icon.png"
          image="assests/images/icons/reload-icon.png"
          dataToShow="No Records Found!"
          onClick={relativesOnClick}
          dataForRows={[]}
          dataForHeading={[]}
        />
      </div>
    </Layout>
  );
};

export default Relatives;
