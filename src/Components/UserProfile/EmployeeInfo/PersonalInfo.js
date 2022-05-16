import React, { useState } from 'react'
import SelectInputField from './SelectInputField';

const PersonalInfo = (props) => {

    const initialInputValue = {
        f_name: "",
        m_name: "",
        l_name: "",
        father_name: "",
        dob: "",
    }

    const [inputValue, setInputValue] = useState(initialInputValue);
    const [selectedFile , setSelectedFile] = useState('');

    const onChangeHandler = (event) => {
        console.log(event.target.value);
        const value = event.target.value;
        setInputValue({
            ...inputValue,
            [event.target.name]: value,

        });
    }

    const onFileChangeHandler = (event) => {
        setSelectedFile(event.target.files[0])
    }
    console.log(selectedFile);

    const selectOnChangeHandler = (value) => {
        console.log(value);
    }

    const options = {
        salutations: [
            { value: 'mr', label: 'Mr' },
            { value: 'mrs', label: 'Mrs' },
            { value: 'na', label: 'Not Applied' },
        ],
        gender: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'na', label: 'Not Applied' },
        ],
        martalStatus: [
            { value: 'single', label: 'Single' },
            { value: 'married', label: 'Married' },
        ],
        nationality: [
            { value: 'pak', label: 'Pakistani' },
            { value: 'other', label: 'Other' },
        ],
        religion: [
            { value: 'islam', label: 'Islam' },
            { value: 'chris', label: 'Christianity' },
            { value: 'hindu', label: 'Hindu' },
        ],
        bloodGroup: [
            { value: 'a+', label: 'A+' },
            { value: 'b+', label: 'B+' },
            { value: 'o+', label: 'O+' },
        ],
    }

    return (
        <>
            <h2>{props.heading}</h2>
            <div className="personal-info">
                <div className="personal-info-feild">
                    <label htmlFor="">Photo</label>
                    <input type="file"
                        // value={photoInput}
                        name="userPhoto"
                        onChange={onFileChangeHandler}
                    />
                </div>
                <div className="personal-info-feild">
                    <SelectInputField options={options.salutations}
                        onChange={selectOnChangeHandler}
                        label="Salutation"
                    />
                </div>

                <div className="personal-info-feild">
                    <label htmlFor="">FirstName</label>
                    <input type="text"
                        value={inputValue.f_name}
                        name="f_name"
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="personal-info-feild">
                    <label htmlFor="">MiddleName</label>
                    <input type="text"
                        value={inputValue.m_name}
                        name="m_name"
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="personal-info-feild">
                    <label htmlFor="">Last Name</label>
                    <input type="text"
                        value={inputValue.l_name}
                        name="l_name"
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="personal-info-feild">
                    <label htmlFor="">Father's / Husband's Name</label>
                    <input type="text"
                        value={inputValue.father_name}
                        name="father_name"
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="personal-info-feild">
                    <SelectInputField options={options.gender}
                        onChange={selectOnChangeHandler}
                        label="Gender"
                    />
                </div>

                <div className="personal-info-feild">
                    <label htmlFor="">D.O.B</label>
                    <input type="date"
                        value={inputValue.dob}
                        name="dob"
                        onChange={onChangeHandler}
                    />
                </div>

                <div className="personal-info-field">
                    <SelectInputField options={options.martalStatus }
                        onChange={selectOnChangeHandler}
                        label="Marital Status"
                    />
                </div>
                
                <div className="personal-info-field">
                    <SelectInputField options={options.religion }
                        onChange={selectOnChangeHandler}
                        label="Religion"
                    />
                </div>

                <div className="personal-info-field">
                    <SelectInputField options={options.nationality }
                        onChange={selectOnChangeHandler}
                        label="Nationality"
                    />
                </div>

                <div className="personal-info-field">
                    <SelectInputField options={ options.bloodGroup}
                        onChange={selectOnChangeHandler}
                        label="Blood Group"
                    />
                </div>

            </div>
        </>
    )
}

export default PersonalInfo