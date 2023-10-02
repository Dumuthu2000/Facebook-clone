import React from 'react'
import './birthdaysBox.css'
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

export default function BirthdaysBox() {
  return (
    <div className='birthdayBox'>
      <div className="birthdayBoxContent">
        <h3 className="birthdayTitle">Birthdays</h3>
      </div>
      <li className="birthdayItemList">
        <CardGiftcardOutlinedIcon className='birthdayIcon' htmlColor='red'/>
        <span className="ownerofBirthdayName"><strong>Dumuthu Jaaysinghe</strong>'s birthday is today.</span>
      </li>
    </div>
  )
}
