import React, { useState } from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";
import "./PersonalInfo.css";

const Driving = (props) => {
  const initialInputValue = {
    driving_license_no: "",
    driving_license_expiry_date: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setInputValue({
      ...inputValue,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <Card className="py-6 px-5 my-5">
        <CardHeading
          url="assests/images/icons/driving-icon.png"
          heading="Driving"
        />
        <div>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="personal-info">
              <label htmlFor=""></label>
              <input
                type="text"
                value={inputValue.driving_license_no}
                placeholder="Driving License No."
                name="driving_license_no"
                onChange={onChangeHandler}
              />
            </div>

            <div className="personal-info">
              {/* <label htmlFor="">Driving License Attachment</label> */}
              <input
                type="file"
                name="driving_license_file"
                onChange={onFileChangeHandler}
              />
            </div>
          </div>

          <div>
            <div className="personal-info">
              <label htmlFor=""></label>
              <input
                type="text"
                value={inputValue.driving_license_expiry_date}
                name="driving_license_expiry_date"
                placeholder="Driving License Expiry Date"
                onChange={onChangeHandler}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Driving;
