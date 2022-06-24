import React from "react";
import Card from "../Card";
import CardHeading from "../CardHeading";
import PersonalInfoTable from "./PersonalInfoTable";

const personalInfoCard = (props) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <CardHeading
          heading={props.heading}
          url={props.headingImageUrl}
          className="mb-0"
        />
        <div>
          <button onClick={props.onClick}>
            <img src={props.image} alt="" />
          </button>
        </div>
      </div>
      <div>
        <Card className="py-5 px-5 my-3">
          {/* <PersonalInfoTable
            dataForHeading={tableHeadingData}
            dataForRows={dataForRows}
          /> */}
          {props.dataForRows.length === 0 && (
            <p className="text-xs text-black/[0.5]">{props.dataToShow}</p>
          )}
          {props.dataForRows.length > 0 && (
            <PersonalInfoTable
              dataForHeading={props.dataForHeading}
              dataForRows={props.dataForRows}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default personalInfoCard;
