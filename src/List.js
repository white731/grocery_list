import Item from "./Item"

const List = (props) => {

    const renderList = () => {
        return props.items.map((item) => {
            return (
                    <Item 
                    name = {item.itemName}
                    key = {item.id}
                    id = {item.id}
                    size = {item.size}
                    price = {item.price}
                    quantity = {item.quantity}
                    toggle = {props.toggle}
                    completed = {item.completed}
                    remove = {props.remove}
                    />
            )
        })
    }
    return renderList();
}

export default List