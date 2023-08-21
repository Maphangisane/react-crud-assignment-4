import React from "react";
import { Link } from "react-router-dom";

class EditMember extends React.Component {
  constructor(props) {
    super(props);
    // update State inherited
    const { id, name, job } = props.location.state.member;
    this.state = {
      id,
      name,
      job,
    };
  }

  // update function
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.job === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateMemberHandler(this.state);
    this.setState({ name: "", job: "" });
    this.props.history.push("/"); // programmatic rendering
  };

  render() {
    return (
      <div className="ui main">

        {/* back button */}
        <div className="center-div">
          <Link to="/">
            <button className="ui button blue center">
              Back to Member List
            </button>
          </Link>
        </div>

        {/* Heading */}
        <h2>Edit Member</h2>

        {/* update Form */}
        <form className="ui form" onSubmit={this.update}>

          {/* name input field*/}
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          {/* job input field*/}
          <div className="field">
            <label>Job Title</label>
            <input
              type="text"
              name="job"
              placeholder="Job Title"
              value={this.state.job}
              onChange={(e) => this.setState({ job: e.target.value })}
            />
          </div>

          {/* update button */}
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditMember;
