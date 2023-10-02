import React from 'react'
import './subContact.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function SubContact(props) {
  return (
    <div className='subContact'>
      <div className="subContactBox">
        <div className="subContactList">
            <div className='subContactImageBox'>
              <img src={props.profile} alt="profile picture" className="contactPersonImage" />
            </div>
            <span className="contactPersonName">{props.user}</span>
        </div>
      </div>
    </div>
  )
}
