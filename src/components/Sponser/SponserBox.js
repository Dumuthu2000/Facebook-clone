import React from 'react'
import './sponserBox.css'

export default function SponserBox() {
  return (
    <div className='sponserBox'>
      <div className="sponserBoxContent">
        <h3 className='sponsorTitle'>Sponsored</h3>
      </div>
      <div className="sponserBoxContent">
        <div className="sponsorBoxItems">
            <img src="/images/sponsor1.png" alt="Sponsor Image" className="sponsorImage" />
            <div className="sponsorItemField">
                <span className='sponsorName'>asian paints world</span><br />
                <span className="url">www.asianpaints.com</span>
            </div> 
        </div>
      </div>
      <div className="sponserBoxContent">
        <div className="sponsorBoxItems">
            <img src="/images/sponsor2.jpg" alt="Sponsor Image" className="sponsorImage" />
            <div className="sponsorItemField">
                <span className='sponsorName'>addidas smart</span><br />
                <span className="url">www.addidas.com</span>
            </div> 
        </div>
      </div>
    </div>
  )
}
