import { useState } from "react";

const Form = (props) => {

    const [newItem, setNewItem] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(newItem)
        props.addAnItem(newItem)
        setNewItem("")
    }

    const handleChange = (e) => {
       console.log(e.target.value)
       setNewItem(e.target.value)
    }



    return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input
            placeholder = "Enter Grocery Item"
            value = {newItem}
            onChange = {handleChange}
            />
        </form>
    </div>  
    )
}

export default Form
