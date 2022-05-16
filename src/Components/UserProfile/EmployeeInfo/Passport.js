import React , {useState} from 'react'

const Passport = (props) => {

    const initialInputValue = {
        passport_no: '',
        passport_expiry_date: '',
    }

    const [inputValue, setInputValue] = useState(initialInputValue);
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
                <label htmlFor="">Passport No.</label>
                <input type="text"
                    value={inputValue.passport_no}
                    name="passport_no"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="personal-info-feild">
                <label htmlFor="">Passport Attachment</label>
                <input type="file"
                    name="passport_file"
                    onChange={onFileChangeHandler}
                />
            </div>

            <div className="personal-info-feild">
                <label htmlFor="">Passport Expiry Date</label>
                <input type="date"
                    value={inputValue.passport_expiry_date}
                    name="passport_expiry_date"
                    onChange={onChangeHandler}
                />
            </div>
        </>
    )
}

export default Passport