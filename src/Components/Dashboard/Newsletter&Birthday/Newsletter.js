import React from "react";
import CardHeading from "../../UI/CardHeading";
import Card from "../../UI/Card";

const Newsletter = (props) => {
  return (
    <div className={props.className}>
      <CardHeading
        url="assests/images/newsletter-icon.png"
        heading="News Letter"
      />
      <Card className="h-[100%] flex justify-center items-center">
        <div className="py-5">
          <p className="text-black/[0.5] font-semibold text-[14px]">
            No News Feed!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Newsletter;
