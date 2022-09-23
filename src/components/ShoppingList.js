import React,{ useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory] = useState("All")
  //const [data,setData] = useState(items)

  const handleChange = (event) => {
    const { target } = event

    setSelectedCategory(target.value)  
    // setData(prevData => {         
    //   return target.value ==="All" ? items: items.filter(({category}) => {
    //     return category === target.value
    //   })
    //})      
  }
  const selectedItems = items.filter(({category}) => {
    if(selectedCategory === "All"){
      return true
    }else {
      return category === selectedCategory
    }
  
  })
  items = selectedItems
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" 
          value={selectedCategory}
          onChange={handleChange}>          
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
