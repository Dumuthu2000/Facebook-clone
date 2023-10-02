import React from 'react'
import './rightPane.css'
import SponserBox from '../Sponser/SponserBox'
import PagesAndProfileBox from '../PagesAndProfileBox/PagesAndProfileBox'
import FriendRequestBox from '../FriendRequestBox/FriendRequestBox'
import BirthdaysBox from '../BirthdaysBox/BirthdaysBox'
import ContactsBox from '../ContactsBox/ContactsBox'
import GroupConversationBox from '../GroupConversationBox/GroupConversationBox'

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <SponserBox />
      <hr />
      <PagesAndProfileBox />
      <hr />
      <FriendRequestBox />
      <hr />
      <BirthdaysBox />
      <hr />
      <ContactsBox />
      <hr />
      <GroupConversationBox />
    </div>
  )
}
