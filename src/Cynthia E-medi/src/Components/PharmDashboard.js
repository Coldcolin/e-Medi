import React from 'react'
import Right from "../../../BlessingEmedi/new/Pharmacy/PharmacyDashboard"
import Left from "../../../BlessingEmedi/src/component/pages/Pharmacy/DetailAdmin"
import styled from 'styled-components'

const PharmDashboard = () => {
  return (
    <Div>
        <Left/>
        <Right/>
    </Div>
  )
}

export default PharmDashboard

const Div = styled.div`
    width: 100%;
    display: flex;
`