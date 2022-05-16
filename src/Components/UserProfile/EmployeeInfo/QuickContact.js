import React, { useState } from 'react'

const QuickContact = (props) => {

    const initialInputValue = {
        mobile_no: '',
        landline_no: '',
        email: '',
    }

    const [inputValue, setInputValue] = useState(initialInputValue);

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
                <label htmlFor="">Mobile Number</label>
                <input type="tel"
                    value={inputValue.mobile_no}
                    name="mobile_no"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="personal-info-feild">
                <label htmlFor="">Landline Number</label>
                <input type="tel"
                    value={inputValue.landline_no}
                    name="landline_no"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="personal-info-feild">
                <label htmlFor="">Email</label>
                <input type="email"
                    value={inputValue.email}
                    name="email"
                    onChange={onChangeHandler}
                />
            </div>
        </>
    )
}

export default QuickContact