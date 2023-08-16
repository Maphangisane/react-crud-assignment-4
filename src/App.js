//Imports
import { useState, useEffect } from "react"
  //Components
import Header from "./components/Header";
import Members from "./components/Members";
import AddMember from "./components/AddMember";


// App Main Function
function App() {

// Defintions

  // States
      // form wil be dependent on this state
      const [showAddTask, setShowAddTask] = useState(false)

      // cut and paste sates in db.json and leave empty array
      const [members, setMembers] = useState([])

      // useEffect function to fetch data
      useEffect(() => {
          const getMembers = async () => {
            const membersFromSever = await fetchMembers()
            setMembers(membersFromSever)
          }

          getMembers()
        }, [] // dependency array
      )

      // fetch members
    const fetchMembers = async () => {
      const res = await fetch('http://localhost:5000/members')
      const data = await res.json()
      
      //console log to test
      // console.log(data)
      return data
    }

        // fetch member -getting a single member - add id and chamge to bCKTICKS
        const fetchMember = async (id) => {
          const res = await fetch(`http://localhost:5000/members/${id}`)
          const data = await res.json()
          
          //console log to test
          // console.log(data)
          return data
        }

      // Add Task
      const addMember = async (member) => {
        // no need to create id cos dynamically created for us
                const res =  await fetch('http://localhost:5000/members', 
                {
                  method: 'POST',
                  headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify(member),
                })
        
                const data = await res.json()
        
                setMembers([...members, data])
      }

       // Delete member
       const deleteMember = async (id) => {
        await fetch(`http://localhost:5000/members/${id}`, 
        {method: 'DELETE'})

        setMembers(members.filter((member) => member.id !== id))
      }             

             
      // Update member
       const updateMember = async (id) => {
          const memberToUpdate = await fetchMember(id)
          const updatedMember = {...memberToUpdate,
            name: memberToUpdate.name
          }
      
       const res = await fetch(`http://localhost:5000/members/${id}`,
          {
              method: 'PUT',
              headers: {
                'Content-type': 'application/json'
                },
              body: JSON.stringify(updatedMember)
          }
        )
      
        const data = await res.json()
      
        // console.log(id)

          setMembers(
            members.map((member) => 
            member.id === id ? 
            { ...member, name: data.name} : member 
           )
          )
        }


// Returns
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddMember onAdd= {addMember}/>}  

      { members.length > 0 ? 
      (<Members 
          members={members} 
          onDelete= {deleteMember} 
          onToggle= {updateMember}
        />
      ) : 
      ('No Members to show')
      }

    </div>
  );
}

//Exports
export default App;
