import React from "react";
import Driving from "./Driving";
import IdentityCard from "./IdentityCard";
import PersonalInfo from "./PersonalInfo";
import QuickContact from "./QuickContact";
import Layout from "../../Layout/Layout";
import Button from "../../UI/Button";

const EmployeeInfoMain = () => {
  return (
    <Layout>
      <div>
        <PersonalInfo />
        <QuickContact />
        <IdentityCard />
        <Driving />
        <div className="text-center">
          <Button
            content="SAVE"
            className="bg-light-blue mb-10 mt-2"
            onClick={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </Layout>
  );
};

export default EmployeeInfoMain;
