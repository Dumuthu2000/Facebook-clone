import React from 'react'
import './pagesAndProfileBox.css'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

export default function PagesAndProfileBox() {
  return (
    <div className='pagesAndProfileBox'>
      <div className="pageAndProfileTitle">
        <h3 className="pageAndProfileTitleName">Your Pages and Profiles</h3>
      </div>
      <div className="pageAndProfileNameContent">
        <img src="/images/page.png" alt="" className="pageAndProfileNameImage" />
        <span className="pageAndProfileName">අපි වෙනුවෙන් අපි </span>
      </div>
      <div className="accessModuleOfPage">
        <li className="notificationContent">
          <NotificationsActiveOutlinedIcon htmlColor='blue'/>
          <span className="notificationName">1 Notification</span>
        </li>
        <li className="notificationContent">
          <SwitchAccountOutlinedIcon htmlColor='green'/>
          <span className="notificationName">Switch into page</span>
        </li>
        <li className="notificationContent">
          <EmojiEventsOutlinedIcon htmlColor='gold'/>
          <span className="notificationName">Create pramotions</span>
        </li>
      </div>
    </div>
  )
}
