import React from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Navbar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className="logo">facebook</span>
        </div>
        <div className="navBarCenter">
            <div className="serachBarBox">
                <input type="text" className="serachInput" placeholder='Serch Your Friend...' />
                <SearchIcon className="search"/>
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <a href='/'><span className="navLink">Home</span></a>    
                <a href='/add'><span className="navLink">Profile</span></a>    
            </div>
            <div className="navBarIcons">
                <div className="navIcon">
                    <PersonIcon className='icon'/>
                    <span className="iconTag">3</span>
                </div>
                <div className="navIcon">
                    <MessageIcon className='icon'/>
                    <span className="iconTag">5</span>
                </div>
                <div className="navIcon">
                    <SettingsIcon className='icon'/>
                    <span className="iconTag">2</span>
                </div>
            </div>
            <div className="pic">
                <img src="/images/dmj.png" alt="profile" className='profilePic' />    
            </div> 
        </div>
    </div>
  )
}
