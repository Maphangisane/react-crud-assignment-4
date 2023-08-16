//Imports
import { FaPen, FaTrash } from 'react-icons/fa'

// Definitions
// catching props 
const Member = ({ member, onDelete, onToggle }) => {

// Returns
  return (

    <div  > 
        <h3>
            {member.name}{'  '}
            < FaPen
                 style={{ color: 'red', cursor: 'pointer'}}
                //  onClick= {onDelete} //calls object thas passed in id by default
                //actually passing id in..call function n the call ondelet and pass in task.id
                 onClick={() => onToggle(member.id)}                 
            />
            < FaTrash
                 style={{ color: 'red', cursor: 'pointer'}}
                //  onClick= {onDelete} //calls object thas passed in id by default
                //actually passing id in..call function n the call ondelet and pass in task.id
                 onClick={() => onDelete(member.id)}                 
            /> 
        </h3>
        <p>{member.job}</p>

    </div>

  )
}

//Exports
export default Member