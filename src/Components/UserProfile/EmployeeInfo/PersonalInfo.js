import React, { useState } from "react";
import Card from "../../UI/Card";
import CardHeading from "../../UI/CardHeading";
import SelectInputField from "./SelectInputField";
import "./PersonalInfo.css";

const PersonalInfo = (props) => {
  const initialInputValue = {
    f_name: "",
    m_name: "",
    l_name: "",
    father_name: "",
    dob: "",
  };

  const [inputValue, setInputValue] = useState(initialInputValue);
  const [selectedFile, setSelectedFile] = useState("");

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    setInputValue({
      ...inputValue,
      [event.target.name]: value,
    });
  };

  const onFileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  // console.log(selectedFile);

  const selectOnChangeHandler = (value) => {
    console.log(value);
  };

  const options = {
    salutations: [
      { value: "mr", label: "Mr" },
      { value: "mrs", label: "Mrs" },
      { value: "na", label: "Not Applied" },
    ],
    gender: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "na", label: "Not Applied" },
    ],
    martalStatus: [
      { value: "single", label: "Single" },
      { value: "married", label: "Married" },
    ],
    nationality: [
      { value: "pak", label: "Pakistani" },
      { value: "other", label: "Other" },
    ],
    religion: [
      { value: "islam", label: "Islam" },
      { value: "chris", label: "Christianity" },
      { value: "hindu", label: "Hindu" },
    ],
    bloodGroup: [
      { value: "a+", label: "A+" },
      { value: "b+", label: "B+" },
      { value: "o+", label: "O+" },
    ],
  };

  //   For Changing CSS of react-select
  const customStyles = {
    control: (base) => ({
      ...base,
      border: "0",
      // This line disable the blue border
      boxShadow: "none",
      height: "48px",
      borderRadius: "6px",
      background: "#f5f6ff",
    }),
    valueContainer: (base) => ({
      ...base,
      fontSize: "15px",
      top: "0px",
      marginLeft: "2px",
      overflow: "visible",
      height: "48px",
    }),
    Input: (base) => ({
      ...base,
      height: "48px",
      padding: 0,
      margin: 0,
    }),
    placeholder: (base) => ({
      ...base,
      marginTop: "-4px",
      position: "absolute",
      color: "rgb(0,0,0,0.4)",
      fontWeight: "600",
      fontSize: "14px",
    }),
  };

  return (
    <>
      <Card className="py-6 px-5">
        <CardHeading
          url="assests/images/icons/personalinfo-icon.png"
          heading="Personal Info"
        />
        <div className="grid grid-cols-2 gap-5 personal-info">
          <div className="personal-info-feild">
            <input
              type="file"
              // value={photoInput}
              name="userPhoto"
              onChange={onFileChangeHandler}
              placeholder="Photo"
              className="custom-file-input"
              title=" "
            />
          </div>
          <div className="personal-info-feild">
            <SelectInputField
              options={options.salutations}
              onChange={selectOnChangeHandler}
              placeholder="Salutation *"
              styles={customStyles}
            />
          </div>

          <div className="personal-info-feild">
            <input
              type="text"
              value={inputValue.f_name}
              name="f_name"
              onChange={onChangeHandler}
              placeholder="First Name"
            />
          </div>

          <div className="personal-info-feild">
            <input
              type="text"
              value={inputValue.m_name}
              name="m_name"
              onChange={onChangeHandler}
              placeholder="Middle Name"
            />
          </div>

          <div className="personal-info-feild">
            <input
              type="text"
              value={inputValue.l_name}
              name="l_name"
              onChange={onChangeHandler}
              placeholder="Last Name"
            />
          </div>

          <div className="personal-info-feild">
            <input
              type="text"
              value={inputValue.father_name}
              name="father_name"
              onChange={onChangeHandler}
              placeholder="Father's / Husband's Name"
            />
          </div>

          <div className="personal-info-feild">
            <SelectInputField
              options={options.gender}
              onChange={selectOnChangeHandler}
              placeholder="Gender"
              styles={customStyles}
            />
          </div>

          <div className="personal-info-feild">
            <input
              type="text"
              value={inputValue.dob}
              name="dob"
              onChange={onChangeHandler}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="D.O.B"
            />
          </div>

          <div className="personal-info-field">
            <SelectInputField
              options={options.martalStatus}
              onChange={selectOnChangeHandler}
              placeholder="Marital Status"
              styles={customStyles}
            />
          </div>

          <div className="personal-info-field">
            <SelectInputField
              options={options.religion}
              onChange={selectOnChangeHandler}
              placeholder="Religion"
              styles={customStyles}
            />
          </div>

          <div className="personal-info-field">
            <SelectInputField
              options={options.nationality}
              onChange={selectOnChangeHandler}
              placeholder="Nationality"
              styles={customStyles}
            />
          </div>

          <div className="personal-info-field">
            <SelectInputField
              options={options.bloodGroup}
              onChange={selectOnChangeHandler}
              placeholder="Blood Group"
              styles={customStyles}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default PersonalInfo;
