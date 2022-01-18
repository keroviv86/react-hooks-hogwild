import React, {useState} from "react";
import HogCard from "./HogCard"

function HogContainer({hogs}){
    const[myHogs, myHogsSetter]= useState(hogs)
    const[greased, greasedSetter] = useState(false)
    const[currentSort, currentSortSetter]= useState("All")

    function onhandleGreasedChange(){
        greasedSetter((greased)=> !greased)
        console.log(greased)
        if(greased){
            const hogFilter= myHogs.filter((hog)=>{
                return hog.greased === true
            })
            myHogsSetter(hogFilter)
        }else{
            return myHogsSetter(hogs)
        }
    }


    function sortHogs(){
        const hogsToSort = [...myHogs]
        if(currentSort === "weight"){
            return hogsToSort.sort((hog1, hog2)=> hog1.weight>hog2.weight ? 1 : -1)
        }else if(currentSort === "name"){
            return hogsToSort.sort((hog1, hog2)=> hog1.name > hog2.name? 1 : -1)
        }else{
            return myHogs
        }
    }

    console.log(sortHogs())

    let pigsToDisplay = sortHogs().map((hog) => {
        return (
        <HogCard 
            key = {hog.name}
            name = {hog.name}
            specialty = {hog.specialty}
            gresaed= {hog.greased}
            weight= {hog.weight}
            image= {hog.image}
            medal ={hog['highest medal achieved']}
        
        />
        )
    })
    
    
    return(
        <div className = "ui grid container">
            <button onClick={onhandleGreasedChange}>{greased ? "Show Greased Pigs": "Hide Greased Pigs"}</button>
            <div>
                Sort by name:
                <input onChange={(e)=>currentSortSetter(e.target.value)} type="checkbox" name= "name" id="sort" value= "name"></input>
            </div>
            <div>
                Sort by weight:
                <input onChange={(e)=>currentSortSetter(e.target.value)} type="checkbox" name= "weight" id="sort" value="weight"></input>
            </div>
            <br/>
            <div>{pigsToDisplay}</div>
        </div>
    )


}

export default HogContainer;