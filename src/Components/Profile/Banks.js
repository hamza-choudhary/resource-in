import React from "react";
import Layout from "../Layout/Layout";
import Button from "../UI/Button";
import PersonalInfoCard from "../UI/PersonalInfoCard/PersonalInfoCard";

const tableHeadingData = [
  "Bank Name",
  "Branch Name",
  "Branch Code",
  "Effective Date",
];

const dataForRows = [
  {
    id: "1",
    items: ["Mezaan", "MughalPura", "321", "21-03-2022"],
  },
  {
    id: "2",
    items: ["HBL", "MughalPura", "789", "1-09-2022"],
  },
];

const Banks = () => {
  const banksOnClick = () => {};
  const createClickHandler = () => {};
  return (
    <Layout>
      <PersonalInfoCard
        heading="Banks"
        headingImageUrl="assests/images/icons/assets-icon.png"
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={banksOnClick}
        dataForHeading={tableHeadingData}
        dataForRows={dataForRows}
      />
      <div className="text-center mt-10">
        <Button
          content="+ CREATE"
          onClick={createClickHandler}
          className="bg-light-blue"
        />
      </div>
    </Layout>
  );
};

export default Banks;
