import React, { useState } from 'react'

const IdentityCard = (props) => {
    const initialInputValue = {
        cnic_no: '',
        cnic_expiry_date: '',
    }

    const [inputValue , setInputValue] = useState(initialInputValue);
    const [selectedFile , setSelectedFile] = useState(null);

    const onFileChangeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const onChangeHandler = (event) => {
        const value = event.target.value;
        setInputValue({
            ...inputValue,
            [event.target.name]: value,
        })
    }
    return (
        <>
            <h2>{props.heading}</h2>
            <div className="personal-info-feild">
                <label htmlFor="">CNIC No.</label>
                <input type="text"
                    value={inputValue.cnic_no}
                    name="cnic_no"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="personal-info-feild">
                <label htmlFor="">CNIC Attachment</label>
                <input type="file"
                    name="cnic_file"
                    onChange={onFileChangeHandler}
                />
            </div>

            <div className="personal-info-feild">
                <label htmlFor="">CNIC Expiry Date</label>
                <input type="date"
                    value={inputValue.cnic_expiry_date}
                    name="cnic_expiry_date"
                    onChange={onChangeHandler}
                />
            </div>
        </>
    )
}

export default IdentityCard