//Imports
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
// import api from "../api/contacts";
import api from "../api/members";
import "./App.css";
import Header from "./Header";
import AddMember from "./AddMember";
import MemberList from "./MemberList";
import MemberDetail from "./MemberDetail";
import EditMember from "./EditMember";
import MemberCard from "./MemberCard";

function App() {
  // States
  const LOCAL_STORAGE_KEY = "members";
  const [members, setMembers] = useState([]);

  //RetrieveContacts
  const retrieveMembers = async () => {
    const response = await api.get("/members");
    return response.data;
  };
  
  // Add Contacts
  const addMemberHandler = async (member) => {
    console.log(member);
    const request = {
      id: uuidv4(),
      ...member,
    };

    const response = await api.post("/members", request);
    console.log(response);
    setMembers([...members, response.data]);
  };

  // Update Contacts
  const updateMemberHandler = async (member) => {
    const response = await api.put(`/members/${member.id}`, member);
    const { id, name, job } = response.data;
    setMembers(
      members.map((member) => {
        return member.id === id ? { ...response.data } : member;
      })
    );
  };
  
  // Delete Contacts
  const removeMemberHandler = async (id) => {
    await api.delete(`/members/${id}`);
    const newMemberList = members.filter((member) => {
      return member.id !== id;
    });

    setMembers(newMemberList);
  };
  
  // Fetch all  Data
  useEffect(() => {
    const getAllMembers = async () => {
      const allMembers = await retrieveMembers();
      if (allMembers) setMembers(allMembers);
    };

    getAllMembers();
  }, []);

  useEffect(() => {
  }, [members]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <MemberList
                {...props}
                members={members}
                getMemberId={removeMemberHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddMember 
                {...props} 
                addMemberHandler={addMemberHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditMember
                {...props}
                updateMemberHandler={updateMemberHandler}
              />
            )}
          />

          <Route 
              path="/member/:id" 
              component={MemberDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

