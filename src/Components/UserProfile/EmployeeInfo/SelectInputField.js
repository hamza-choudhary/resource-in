import React from 'react';
import Select from 'react-select';

const SelectInputField = (props) => {
  return (
      <>
    <label htmlFor="">{props.label}</label>
    <Select options={props.options} onChange={props.onChange} name={props.name} />
    </>
  )
}

export default SelectInputField