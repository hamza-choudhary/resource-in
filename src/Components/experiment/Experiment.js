import React, { Component } from 'react'
import Select from 'react-select'


const Experiment = (props) => (
  <>
  <label htmlFor="">{props.label}</label>
  <Select options={props.options} onChange={props.onChange} />
  </>
)

export default Experiment;