import React from "react";
import Layout from "../Layout/Layout";
import PersonalInfoCard from "../UI/PersonalInfoCard/PersonalInfoCard";

const contactHeading = [
  {
    i1: "Name",
    i2: "Contact",
    i3: "Realtion",
  },
];

const contactRows = [
  {
    data1: "Zakria",
    data2: "0323-0417571",
    data3: "Self",
  },
];

const addressData = [];

const addressHeading = [];

const ContactInfo = () => {
  const addressOnClick = () => {};

  const contactOnClick = () => {};
  return (
    <Layout>
      <PersonalInfoCard
        heading="Address"
        headingImageUrl="assests/images/icons/address-icon.png"
        image="assests/images/icons/reload-icon.png"
        // data={addressData}
        dataToShow="No Records Found"
        onClick={addressOnClick}
        dataForRows={addressData}
        dataForHeading={addressHeading}
      />

      <PersonalInfoCard
        heading="Contacts"
        headingImageUrl="assests/images/icons/contact-icon.png "
        image="assests/images/icons/reload-icon.png"
        dataToShow="No Records Found!"
        onClick={contactOnClick}
        dataForRows={contactRows}
        dataForHeading={contactHeading}
      />
    </Layout>
  );
};

export default ContactInfo;
