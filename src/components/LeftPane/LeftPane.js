import React, { PureComponent } from 'react'
import './leftPane.css'
import SubLikedPages from '../SubLikedPages/SubLikedPages';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import ApartmentIcon from '@mui/icons-material/Apartment';
import TvIcon from '@mui/icons-material/Tv';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LayersIcon from '@mui/icons-material/Layers';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
        <div className="leftPaneContainer">
          <div className="leftPaneMenu">
            <li className="leftPaneMenuItems">
              <MarkUnreadChatAltIcon className='lefPaneMenuIcon' htmlColor='blue'/>
              <span className="leftPaneIconName">Messanger</span>
            </li>
            <li className="leftPaneMenuItems">
              <GroupIcon className='lefPaneMenuIcon' htmlColor='purple'/>
              <span className="leftPaneIconName">Friends</span>
            </li>
            <li className="leftPaneMenuItems">
              <GroupsIcon className='lefPaneMenuIcon' htmlColor='brown'/>
              <span className="leftPaneIconName">Groups</span>
            </li>
            <li className="leftPaneMenuItems">
              <ApartmentIcon className='lefPaneMenuIcon' htmlColor='green'/>
              <span className="leftPaneIconName">Marketplace</span>
            </li>
            <li className="leftPaneMenuItems">
              <TvIcon className='lefPaneMenuIcon' htmlColor='grey'/>
              <span className="leftPaneIconName">Watch</span>
            </li>
            <li className="leftPaneMenuItems">
              <MoreTimeIcon className='lefPaneMenuIcon' htmlColor='gold'/>
              <span className="leftPaneIconName">Memory</span>
            </li>
            <li className="leftPaneMenuItems">
              <BookmarkIcon className='lefPaneMenuIcon' htmlColor='red'/>
              <span className="leftPaneIconName">Saved</span>
            </li>
            <li className="leftPaneMenuItems">
              <LayersIcon className='lefPaneMenuIcon' htmlColor='yellow'/>
              <span className="leftPaneIconName">Pages</span>
            </li>
            <li className="leftPaneMenuItems">
              <SportsEsportsIcon className='lefPaneMenuIcon' htmlColor='purple'/>
              <span className="leftPaneIconName">Games</span>
            </li>
            <hr />
            <div className="youLikedPages">
              <h3 className='likedPageTitle'>Pages you liked</h3>
            </div>
            <SubLikedPages LikedPageProfile = "/images/ramuwa.jpg" LikedProfileName = "Ramuwa-රාමුව" />
            <SubLikedPages LikedPageProfile = "/images/vini.jpg" LikedProfileName = "Vini Production" />
            <SubLikedPages LikedPageProfile = "/images/wasthi.jpg" LikedProfileName ='Wasthi Productions "වස්ති"' />
            <SubLikedPages LikedPageProfile = "/images/slvlog.jpg" LikedProfileName = "SLvlog Community" />
            <SubLikedPages LikedPageProfile = "/images/siril aiya.png" LikedProfileName = "සිරිල් අයියා/ Siril Ayya" />
            <SubLikedPages LikedPageProfile = "/images/block and dino.jpg" LikedProfileName = "Block & Dino" />
            <SubLikedPages LikedPageProfile = "/images/ratta.png" LikedProfileName = "Ratta" />
            <SubLikedPages LikedPageProfile = "/images/brave harts.png" LikedProfileName = "Brave Hearts- සැබෑ මිනිසුන්ගේ සංසදය" />
            <SubLikedPages LikedPageProfile = "/images/kuveni.png" LikedProfileName = "Kuveni Group" />
            <SubLikedPages LikedPageProfile = "/images/adiswawabawika.png" LikedProfileName = "supernatural | අධිස්වභාවික" />
          </div>
        </div>
    </div>
  )
}
