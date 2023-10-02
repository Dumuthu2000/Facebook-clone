import React from 'react'
import Navbar from '../../components/Navbar'
import './home.css'
import LeftPane from '../../components/LeftPane/LeftPane'
import PostPane from '../../components/PostPane/PostPane'
import RightPane from '../../components/RightPane/RightPane'

export default function Home() {
  return (
    <div>
      {/* <h1>HEllo wprld</h1> */}
      {/* <Navbar /> */}
      <div className="bottomContainer">
      <LeftPane />
      <PostPane />
      <RightPane />
      </div>
    </div>
  )
}
