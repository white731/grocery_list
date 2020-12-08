const Item = (props) => {

    const handleChange = () => {
        props.toggle(props.id)
    }

    const handleRemove = () => {
        props.remove(props.id)
    }

    const renderItems = () => {
      return (
        <li>
            <input type="checkbox" onChange = {handleChange} checked={props.completed ? "checked":""}/>
            <span>{props.name} -- {props.size} ${props.price} - {props.quantity} </span> 
            <i onClick={handleRemove} style={{cursor: "pointer"}} class="fa fa-trash"></i>
        </li>
      ) 
    }
return renderItems()
}

export default Item