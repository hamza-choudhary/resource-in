import React from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";

const Accolades = (props) => {
  return (
    <>
      <div className={props.className}>
        <CardHeading
          url="assests/images/icons/accolade-icon.png"
          heading="Accolades"
        />
        <Card className="px-3 py-6">
          <div className="flex flex-col items-center">
            <p className="font-semibold text-[12px] text-black/[0.5]">
              No Accolades!
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Accolades;
