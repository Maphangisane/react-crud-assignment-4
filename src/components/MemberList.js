// Imports
import React from "react";
import { Link } from "react-router-dom";

import MemberCard from "./MemberCard";

// Component Function
const MemberList = (props) => {
  console.log(props);

  // delete function
  const deleteMemberHandler = (id) => {
    props.getMemberId(id);
  };

  // display members function
  const renderMemberList = props.members.map((member) => {
    return (
      // calling component as a prop
      <MemberCard
        member={member}
        clickHander={deleteMemberHandler}
        key={member.id}
      />
    );
  });

// Component return using render
return (
    <div className="main">
      {/* header and button */}
      <h2>
      Members List
        <Link to="/add">
          <button className="ui button blue right">Add Member</button>
        </Link>
      </h2>

      {/* display members */}
      <div className="ui celled list">{renderMemberList}</div>
    </div>
  );
};

export default MemberList;
