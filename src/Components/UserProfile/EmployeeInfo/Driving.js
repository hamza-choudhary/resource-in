import React , {useState} from 'react'

const Driving = (props) => {
    const initialInputValue = {
        driving_license_no: '',
        driving_license_expiry_date: '',
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
                <label htmlFor="">Driving License No.</label>
                <input type="text"
                    value={inputValue.driving_license_no}
                    name="driving_license_no"
                    onChange={onChangeHandler}
                />
            </div>

            <div className="personal-info-feild">
                <label htmlFor="">Driving License Attachment</label>
                <input type="file"
                    name="driving_license_file"
                    onChange={onFileChangeHandler}
                />
            </div>

            <div className="personal-info-feild">
                <label htmlFor="">Driving License Expiry Date</label>
                <input type="date"
                    value={inputValue.driving_license_expiry_date}
                    name="driving_license_expiry_date"
                    onChange={onChangeHandler}
                />
            </div>
        </>
    )
}

export default Driving