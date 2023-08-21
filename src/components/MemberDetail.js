// Imports
import React from "react";
import { Link } from "react-router-dom";

import user from "../images/user.jpg";

// Component Function
const MemberDetail = (props) => {
  // props
  const { name, job } = props.location.state.member;

  // Component return
  return (
    <div className="main">

      {/* back button */}
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">Back to Member List</button>
        </Link>
      </div>

      <div className="ui card centered">
        {/* image */}
        <div className="image">
          <img src={user} alt="user" />
        </div>

        {/* content - member details - card*/}
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{job}</div>
        </div>
        
      </div>
    </div>
  );
};

export default MemberDetail;
