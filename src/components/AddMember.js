import React from "react";
import { Link } from "react-router-dom";

class AddMember extends React.Component {

  // Add State
  state = {
    name: "",
    job: "",
  };

  // Add function
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.job === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addMemberHandler(this.state);
    this.setState({ name: "", job: "" });
    this.props.history.push("/");
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
        <h2>Add Member</h2>

        {/* Add Form */}
        <form className="ui form" onSubmit={this.add}>
          {/* name input */}
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
          
          {/* job input */}
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

          {/* Add button */}
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddMember;
