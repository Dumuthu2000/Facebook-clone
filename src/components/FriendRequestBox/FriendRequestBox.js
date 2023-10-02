import React from 'react'
import './friendRequestBox.css'
import Requested from '../RequestedBox/Requested'

export default function FriendRequestBox() {
  return (
    <div>
      <div className="friendRequestContent">
        <h3 className="requestTitle">Friend Requests</h3>
      </div>
      <Requested profileImage ="/images/milan.png" nameOfFriend = "Milan Wijesooriya"/>
      <Requested profileImage ="/images/buddima.png" nameOfFriend = "Buddhima Bandaranayake"/>
      <Requested profileImage ="/images/yasiru.png" nameOfFriend = "Yasiru Maduwantha"/>
    </div>
  )
}
