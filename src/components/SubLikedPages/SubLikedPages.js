import React from 'react'
import './subLikedPages.css'

export default function SubLikedPages(props) {
  return (
    <div>
        <div className="pageListItems">
            <li className="pagesList">
                <img src={props.LikedPageProfile} alt="page" className="pageImage" />
                <span className="pageName">{props.LikedProfileName}</span>
            </li>
        </div>
    </div>
  )
}
