import React, { useState } from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";
import "./PersonalInfo.css";

const QuickContact = (props) => {
  const initialInputValue = {
    mobile_no: "",
    landline_no: "",
    email: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setInputValue({
      ...inputValue,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <Card className="my-5 py-6 px-5">
        <CardHeading
          url="assests/images/icons/contact-icon.png"
          heading="Quick Contact"
        />
        <div className="">
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="personal-info">
              <label htmlFor=""></label>
              <input
                type="tel"
                value={inputValue.mobile_no}
                name="mobile_no"
                onChange={onChangeHandler}
                placeholder="Mobile Number"
              />
            </div>

            <div className="personal-info">
              <label htmlFor=""></label>
              <input
                type="tel"
                value={inputValue.landline_no}
                name="landline_no"
                onChange={onChangeHandler}
                placeholder="Landline Number"
              />
            </div>
          </div>

          <div>
            <div className="personal-info">
              <label htmlFor=""></label>
              <input
                type="email"
                value={inputValue.email}
                name="email"
                onChange={onChangeHandler}
                placeholder="Email"
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default QuickContact;
