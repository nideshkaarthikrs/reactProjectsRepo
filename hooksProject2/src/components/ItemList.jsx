import React, {useState} from 'react'
import Item from './Item'

// when button is clicked we wanna create a new item and add it to the item list
// we should render the item list

function ItemList() {
    const initialId = 0
    // creating an item
    const [item , setItem] =  useState({
        id: initialId,
        name: 'Item' + initialId ,
    });
    // declaring the itemList
    const [itemList] = useState([]);
    // function to be called when button is clicked
    function addItem() {
        setItem({
            ...item,
            id: item.id+1,
            name: 'Item' + (item.id + 1 )
        })
        itemList.push(item)
    }
    // preparing the itemList for rendering
    const items = itemList.map((i) => <Item key={i.id} id={i.id} name={i.name} ></Item>)
  return (
    <div>
      <button onClick={addItem}>ADD ITEM</button>
      {items}
    </div>
  )
}

export default ItemList
