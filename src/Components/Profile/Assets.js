import React from "react";
import PersonalInfoCard from "../UI/PersonalInfoCard/PersonalInfoCard";
import Layout from "../Layout/Layout";

const Assets = () => {
  const assetsOnClick = () => {};
  const assetsRows = [];
  const assetsHeading = [];
  return (
    <Layout>
      <div>
        <PersonalInfoCard
          heading="Assets"
          headingImageUrl="assests/images/icons/assets-icon.png"
          image="assests/images/icons/reload-icon.png"
          dataToShow="No Records Found!"
          onClick={assetsOnClick}
          dataForRows={assetsRows}
          dataForHeading={assetsHeading}
        />
      </div>
    </Layout>
  );
};

export default Assets;
