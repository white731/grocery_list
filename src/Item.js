const Item = (props) => {
    const renderItems = () => {
      return (
        <li>
            <input type="checkbox"/>
            {props.name} -- {props.size} ${props.price} - {props.quantity}
        </li>
      ) 
    }
return renderItems()
}

export default Item