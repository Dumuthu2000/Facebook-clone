import React from 'react'
import './requested.css'

export default function Requested(props) {
  return (
    <div className='friendRequestBox'>
      <div className="requestContent">
        <img src={props.profileImage} alt="" className="requestedFriendProfileImage" />
        <div className="requestBoxItem">
          <li className="requestedFriendInfomationBox">
            <span className="friendName">{props.nameOfFriend}</span>
            <div className="mutualFriendBox">
              <img src="/images/ds.jpeg" alt="mutual friends" className="mutualFriends" />
              <img src="/images/dumuthu.jpg" alt="mutual friends" className="mutualFriends" />
              <span className="mutualTitle">25 mutual firends</span>
            </div>
            <div className="requestButton">
              <button className="confirmButton">Confirm</button>
              <button className="deleteButton">Delete</button>
            </div>
          </li>
        </div>
      </div>
    </div>
  )
}
