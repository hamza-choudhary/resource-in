import React from "react";
import Layout from "../Layout/Layout";
import PersonalInfoCard from "../UI/PersonalInfoCard/PersonalInfoCard";

const Qualification = () => {
  const experienceOnClick = () => {};
  const qualificationOnClick = () => {};
  const certificationOnClick = () => {};
  return (
    <Layout>
      <PersonalInfoCard
        heading="Experiences"
        headingImageUrl="assests/images/icons/experience-icon.png"
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={experienceOnClick}
        dataForRows={[]}
        dataForHeading={[]}
      />

      <PersonalInfoCard
        heading="Educations/Qualifications"
        headingImageUrl="assests/images/icons/education-icon.png"
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={qualificationOnClick}
        dataForRows={[]}
        dataForHeading={[]}
      />

      <PersonalInfoCard
        heading="Certifications"
        headingImageUrl="assests/images/icons/certification-icon.png"
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={certificationOnClick}
        dataForRows={[]}
        dataForHeading={[]}
      />
    </Layout>
  );
};

export default Qualification;
