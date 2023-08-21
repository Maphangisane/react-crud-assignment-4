// Imports
import React from "react";
import { Link } from "react-router-dom";

import user from "../images/user.png";

// Component Function
const MemberCard = (props) => {
  const { id, name, job } = props.member;

// Component return
  return (
    <div className="item">
      {/* image */}
      <img className="ui avatar image" src={user} alt="user" />
      
      {/* member details */}
      <div className="content">
        <Link
          to={{ pathname: `/member/${id}`, state: { member: props.member } }}
        >
          <div className="header">{name}</div>
          <div>{job}</div>
        </Link>
      </div>

      {/* delete icons */}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      >
      </i>

      {/* edit icon with route */}
      <Link to={{ pathname: `/edit`, state: { member: props.member } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        >
        </i>
      </Link>
    </div>
  );
};

export default MemberCard;
