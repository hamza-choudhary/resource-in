import React, { useState } from "react";
import { useRef } from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";
import "./PersonalInfo.css";

const IdentityCard = (props) => {
  const ref = useRef();
  const initialInputValue = {
    cnic_no: "",
    cnic_expiry_date: "",
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
      <Card className="py-6 px-5">
        <CardHeading
          url="assests/images/icons/id-card-icon.png"
          heading="Identity Card"
        />
        <div>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="personal-info">
              <label htmlFor=""></label>
              <input
                type="text"
                value={inputValue.cnic_no}
                name="cnic_no"
                onChange={onChangeHandler}
                placeholder="CNIC No."
              />
            </div>

            <div className="personal-info cnic_file">
              <label htmlFor="cnic_file" className="input-label">
                CNIC Attachment
              </label>
              <input
                type="file"
                name="cnic_file"
                onChange={onFileChangeHandler}
                // placeholder="CNIC Attachment"
                title="okay"
                className="file-input"
              />
            </div>
          </div>

          <div>
            <div className="personal-info">
              <label htmlFor=""></label>
              <input
                type="text"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                value={inputValue.cnic_expiry_date}
                name="cnic_expiry_date"
                onChange={onChangeHandler}
                placeholder="CNIC Expiry Date"
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default IdentityCard;
