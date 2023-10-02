import React from 'react'
import './addpost.css'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import FilterIcon from '@mui/icons-material/Filter';
import MoodIcon from '@mui/icons-material/Mood';

export default function AddPost() {
  return (
    <div className='addPostBlock'>
      <div className="addPostItems">
        <div className="addItemBox">
            <div className="addPostInput">
                <img src="/images/dmj.png" alt="profile" className="profileImage" />
                <input type="text" placeholder="What's on your mind, Dumuthu?" className="inputPost" />
            </div>
            <hr />
            <div className="addActivity">
                <li className="activity">
                    <VideoCameraBackIcon htmlColor='red' className='activityIcon'/>
                    <span className="activityName">Live video</span>
                </li>
                <li className="activity">
                    <FilterIcon htmlColor='green' className='activityIcon'/>
                    <span className="activityName">Photo/video</span>
                </li>
                <li className="activity">
                    <MoodIcon htmlColor='gold' className='activityIcon'/>
                    <span className="activityName">Feeling/activity</span>
                </li>
            </div>
        </div>
      </div>
    </div>
  )
}
