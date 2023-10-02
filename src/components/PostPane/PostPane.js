import React from 'react'
import './postPane.css'
import AddPost from '../AddPost/AddPost'
import Post from '../Post/Post'
import Stories from '../Stories/Stories'

export default function PostPane() {
  return (
    <div className='postPaneBox'>
      <Stories />
      <AddPost />
      <Post 
        postCreatePersonImage = "/images/campus set eka.png"
        postCreatePersonName = "Campus Set Eka/කැම්පස් අපේ පිටුව"
        postImage = "/images/post4.png"
        postSharedPersonImage = "images/harith.png"
        postSharedPersonName = "Harith Kapuge"
      >
        <p className='captionText'>මෙන්ශන් කරපං ඕකව😂😂</p>
      </Post>
      <Post 
        postCreatePersonImage = "/images/campus gatta.png"
        postCreatePersonName = "Campus Gatta / කැම්පස් ගැට්ට"
        postImage = "/images/post2.png"
        postSharedPersonImage = "images/naditha.png"
        postSharedPersonName = "Naditha Hewapathirana"
      >
        <p className='captionText'>😂😂😂😂</p>
      </Post>
      <Post 
        postCreatePersonImage = "/images/inter university students fedaration.png"
        postCreatePersonName = "Inter University Students' Federation"
        postImage = "/images/post3.png"
        postSharedPersonImage = "images/deepana.png"
        postSharedPersonName = "Deepana Vishwajith"
      >
        <p className='captionText'>සාමකාමී සත්‍යග්‍රහයට රනිල්-රාජපක්ෂ ආණ්ඩුව එල්ල කළ නින්දිත මැර ප්‍රහාරය හෙළා දකිමු.
අත්තඩංගුවට ගත් අරගලකරුවන් වහා නිදහස් කරනු!.
අන්තර් විශ්වවිද්‍යාලයීය ශිෂ්‍ය බලමණ්ඩලය</p>
      </Post>
      <Post 
        postCreatePersonImage = "/images/dmj.png"
        postCreatePersonName = "Dumuthu Jaysinghe"
        postImage = "/images/post.jpg"
        postSharedPersonImage = "/images/dmj.png"
        postSharedPersonName = "Dumuthu Jayasinghe"
      >
        <p className='captionText'>"Life is a journey, make the most of every stop 🌍✨ #adventureseeker"</p>
      </Post>
      <Post 
        postCreatePersonImage = "/images/lions cricket.png"
        postCreatePersonName = "Lions Cricket[ක්‍රිකට් පිස්සන්ටයි]"
        postImage = "/images/post6.png"
        postSharedPersonImage = "/images/dmj.png"
        postSharedPersonName = "Dumuthu Jayasinghe"
      >
        <p className='captionText'>අනිවා 😌❤️
එකෙන්ම වැඩ්ඩෙක් වනියා 🇱🇰</p>
      </Post>
      
    </div>
  )
}
