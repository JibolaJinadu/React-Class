import React from "react";
import { UsersData } from "./UsersData";
import './profile.css'
import {useState} from 'react';

const Profile = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const usersList = UsersData.filter((val) => {
      if (searchTerm == "") {
        return val;
      } else if (
        val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    }).map((datum) => (
      <div key={datum.id} className="List-container">
        <img src={datum.picture} Alt="User pix" />
        <div>
          <div>{datum.id}</div>
          <div>
            {datum.title} {datum.firstName} {datum.lastName}
          </div>
        </div>
      </div>
    ));

  return (
    <div className="App-content">
      <div>
        <input type="text" placeholder="Search by name..." onChange={event =>{setSearchTerm(event.target.value)}}/>
        <div>{usersList}</div>
      </div>
    </div>
  );
};

export default Profile;
