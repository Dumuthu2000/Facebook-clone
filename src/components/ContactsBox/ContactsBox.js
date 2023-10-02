import React from 'react'
import SubContact from '../SubContactBox/SubContact'
import './contactsBox.css'

export default function ContactsBox() {
  return (
    <div >
      <h3 className="contactTitle">Contacts</h3>
      <SubContact user="Heshan Jaysinghe" profile="/images/heshan.png"/>
      <SubContact user="D K Jayasinghe" profile="/images/dk.png"/>
      <SubContact user="Subodha Munasinghe" profile="/images/subodha.png"/>
      <SubContact user="Malith Heshan" profile="/images/malith.png"/>
      <SubContact user="Tharindu Jayasinghe" profile="/images/tharindu.png"/>
      <SubContact user="Harith Kapuge" profile="/images/harith.png"/>
      <SubContact user="Naditha Hewapathirana" profile="/images/naditha.png"/>
      <SubContact user="Yashodya Chethakee Jayasinghe" profile="/images/yasa.png"/>
      <SubContact user="Chathuni Nawarathne" profile="/images/chathu.png"/>
      <SubContact user="Deepana Vishwajith" profile="/images/deepana.png"/>
      <SubContact user="Hashini Nawarathne" profile="/images/hashini.png"/>
      <SubContact user="Udyogi Munasinghe" profile="/images/udyogi.png"/>
      <SubContact user="Manula Bopage" profile="/images/manula.png"/>
    </div>
  )
}
