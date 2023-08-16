//Imports
import { useState } from "react"

// Definitions
const EditMember = ( {onEdit} ) => {

    // State Management
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    // const [reminder, setReminder] = useState(false)
    
    // onsubmit function
    const onSubmit = (e) => {
        e.preventDefault()

        // validation
        if (!name) {
            alert('Please add a Member')
            return
        }
        // call on add method and pass in text day and reminder as objects

        onEdit({name, job})

        // clear form
        setName('')
        setJob('')

    }

// Returns    
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Name</label>
            <input
                 type='text'
                 placeholder='Add Member' 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
            />
        </div>
        
        <div className="form-control">
            <label>Job Title</label>
            <input 
                type='text' 
                placeholder='Job Title'
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
        </div>

        <input type="submit" value="Save Member" className="btn btn-block"/>
    </form>
  )
}

export default EditMember