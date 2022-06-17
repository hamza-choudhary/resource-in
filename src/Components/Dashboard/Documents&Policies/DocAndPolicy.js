import React from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";

const DocAndPolicy = (props) => {
  return (
    <>
      <div className={props.className}>
        <CardHeading
          url="assests/images/documents-icon.png"
          heading=" Company Documents and Policies"
        />
        <Card className="py-5 h-[100%]">
          <div className="flex justify-center">
            <p className="text-black/[0.5] text-[14px] text-center font-semibold">
              No Documents Found!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default DocAndPolicy;
