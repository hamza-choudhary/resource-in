import React from 'react'
import Driving from './Driving'
import IdentityCard from './IdentityCard'
import Passport from './Passport'
import PersonalInfo from './PersonalInfo'
import QuickContact from './QuickContact'

const EmployeeInfoMain = () => {
  return (
      <div>
          <PersonalInfo heading="Personal Info"/>
          <QuickContact heading="Quick Contact"/>
          <IdentityCard heading="Identity Card"/>
          <Passport heading="Passport"/>
          <Driving heading="Driving" />
      </div>
  )
}

export default EmployeeInfoMain