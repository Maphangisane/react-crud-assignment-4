//Imports
import Member from "./Member"

// Definitions
const Members = ({ members, onDelete, onToggle }) => {
    // -> name , function = default

// Returns
  return (
    <>
        {members.map((member, index) => (
          
            // passing each task as prop
            <Member 
                key= {index} 
                member= {member} 
                onDelete= {onDelete}
                onToggle= {onToggle} 
            />
        ))}
    </>
  )
}

//Exports
export default Members