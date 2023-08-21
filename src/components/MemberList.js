import React from "react";
import { Link } from "react-router-dom";
import MemberCard from "./MemberCard";

const MemberList = (props) => {
  console.log(props);

  const deleteMemberHandler = (id) => {
    props.getMemberId(id);
  };

  const renderMemberList = props.members.map((member) => {
    return (
      <MemberCard
        member={member}
        clickHander={deleteMemberHandler}
        key={member.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
      Members List
        <Link to="/add">
          <button className="ui button blue right">Add Member</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderMemberList}</div>
    </div>
  );
};

export default MemberList;
