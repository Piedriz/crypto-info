import React from 'react'
import Switch from 'react-switch'

export default function Switcher({state,setState}) {
  return (
    <Switch checked={state}
            onChange={()=>setState(!state)}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"/>
  )
}
