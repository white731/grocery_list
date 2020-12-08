const Item = (props) => {

    const handleChange = () => {
        props.toggle(props.id)
    }

    const handleRemove = () => {
        props.remove(props.id)
    }

    const renderItems = () => {
      return (
        <tr>
            <td> <input type="checkbox" onChange = {handleChange} checked={props.completed ? "checked":""}/></td>
            <td>{props.name}</td>
            <td>{props.size}</td>
            <td>${props.price}</td>
            <td>{props.quantity}</td>
            <td><i onClick={handleRemove} style={{cursor: "pointer"}} class="fa fa-trash"></i></td>
        </tr>
      ) 
    }
return renderItems()
}

export default Item