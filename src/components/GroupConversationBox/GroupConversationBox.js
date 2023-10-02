import React, { useState } from 'react'
import './groupConversationBox.css'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function GroupConversationBox() {
  let[number ,setNumber ] = useState(0);

  function increment(){
    setNumber(++number);
  }

  return (
    <div className='goupCovercationBox'>
      <div className="groupTitle">
        <h3 className="groupConvercationBoxTitle">Group convercation</h3>
        <li className="convercationList">
          <AddCircleOutlineOutlinedIcon className='convercationIcon' htmlColor='purple'/>
          <span className="convercationName">Create new group</span>
        </li>
      </div>
      <h2>counter = {number}</h2>
      <button onClick={e => increment()}>Click me</button>
    </div>
  )
}
