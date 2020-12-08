import React from 'react'
import List from './List'
import Form from './Form'

class Groceries extends React.Component {
    state = {
        groceries: [
            {id: 1, itemName: "Bread", size: "12 slices", price: 4.99, quantity:2, completed:false },
            {id: 2, itemName: "Milk", size: "1 Gallon", price: 1.69, quantity:2, completed:true },
            {id: 3, itemName: "Eggs", size: "18 pack", price: 2.30, quantity:1, completed:false },
            {id: 4, itemName: "Twinkies", size: "6 pack", price: 5.89, quantity:1, completed:true },
            {id: 5, itemName: "Pears", size: "single", price: 4.99, quantity:6, completed:false }
        ],
        storeName: "Ridleys"
    }

    toggle = (id) => {
        let updateList = this.state.groceries.map((item)=>{
            if (item.id !== id) {
                return item 
            } return {...item, completed: !item.completed}
        })

    this.setState({
        groceries: updateList
    })
    }

    addItem = (newItem) => {
        console.log("you made it to addItem")
        console.log(newItem)
        const newItems = {
            id: Math.random(), 
            itemName: newItem, 
            size: "", 
            price: "", 
            quantity:"", 
            completed:false }

    this.setState({
        groceries: [...this.state.groceries,newItems]
    })
    }

    remove = (id) => {
       let afterDeleteList = this.state.groceries.filter((item)=>{
           return item.id !== id
        })
        this.setState({
            groceries: afterDeleteList
        })


    }

    render(){
        return (
            <div>
                <h1>{this.state.storeName}</h1>
                <Form
                addAnItem = {this.addItem}
                groceryName = {this.state.groceries.itemName}
                />
                <table>
                    <tr>
                        <th>Completed</th>
                        <th>Grocery Item</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                    </tr>
                <List 
                items = {this.state.groceries}
                toggle = {this.toggle}
                remove = {this.remove}
                />
                </table>
                
            </div>
        )
    }


} 

export default Groceries