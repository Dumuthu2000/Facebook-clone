import React from 'react'
import './post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';

export default function Post(props) {
  return (
    <div className='postContainer'>
      <div className="postContainerItems">
        <div className="itemsOfPost">
            <div className="postBox">
                <div className="postOwner">
                    <img src={props.postCreatePersonImage} alt="postCreatePersonImage" className="profileImageOfPostCreatedPerson" />
                    <span className="postCreatedPerson">{props.postCreatePersonName}</span>
                </div>
                {props.children}
            </div>
            <div className="postImageBoxOutline">
                <div className="postImage">
                    <img src={props.postImage} alt="post Image" className="postImage" />
                </div>
                <div className="postSharedPersonBox">
                    <img src={props.postSharedPersonImage} alt="shared person" className="postSharedPersonImage" />
                    <span className="postSharedPersonName">{props.postSharedPersonName}</span>
                </div>
            </div>
            <div className="reviewSectionOutline">
                <div className="reactViewBox">
                    <li className="reactView">
                        <ThumbUpIcon  htmlColor='blue' className='reactionsIcons'/>
                    </li>
                    <li className="reactView">
                        <FavoriteIcon  htmlColor='red' className='reactionsIcons'/>
                    </li>
                    <li className="reactView">
                        <EmojiEmotionsTwoToneIcon  htmlColor='gold' className='reactionsIcons'/>
                    </li>
                    <li className="reactView">
                        <span className="numberOfReacts">25</span>
                    </li>
                </div>
                <hr />
                <div className="postReacterBox">
                    <div className="reactionSet">
                        <li className="postRector">
                            <ThumbUpAltOutlinedIcon />
                            <span className="reactName">Like</span>
                        </li>
                    </div>
                    <div className="reactionSet">
                        <li className="postRector">
                            <SmsOutlinedIcon />
                            <span className="reactName">Comment</span>
                        </li>
                    </div>
                    <div className="reactionSet">
                        <li className="postRector">
                            <ShortcutOutlinedIcon />
                            <span className="reactName">Share</span>
                        </li>
                    </div>
                </div>
                <hr />
                <div className="commentSectionBox">
                    <img src="/images/dmj.png" alt="shared person" className="accountOwnerProfile" />
                    <input type="text" className="commentWriteInputForAccountOwner" placeholder=' Write a comment....'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
