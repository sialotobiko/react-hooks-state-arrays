import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

// const foodList = foods.map((food) => (
//   <li key={food.id}>
//     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
//   </li>
// ));

// return (
//   <div>
//     <button onClick={handleAddFood}>Add New Food</button>
//     <ul>{foodList}</ul>
//   </div>
// );

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  const newFoodArray2 = foods.filter((food)=>{
    if(filterBy === "All"){
      return true;
    } else{
      return food.cuisine === filterBy
    }      
  })

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray);
    //console.log(newFood);
  }

  function handleClick(index){
    const newFoodArray1 = foods.map((food)=>{
      if (food.id === index){
        return {
          ...food, heatLevel: food.heatLevel+1,
        }
      }
        else {
          return food
        }
      
    })
    setFoods(newFoodArray1)
  }
  
  function Handlefilter(event){
    
    
    
    console.log(event.target.value)
    
    setFilterBy(event.target.value)

  }

  const foodList2 = newFoodArray2.map((food) => (
    <li key={food.id} onClick={()=>{handleClick(food.id)}}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={Handlefilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
      <ul>{foodList2}</ul>
    </div>
  );
}

export default SpicyFoodList;