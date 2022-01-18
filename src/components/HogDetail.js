import React from "react";


function HogDetail({specialty, weight,greased, medal}){
    return (
         <div className="description">
             <h3>Specialty: {specialty}</h3>
             <h3>Weight: {weight}</h3>
             <h3>Greased: {greased ? "Greased" : "Nongreased"}</h3>
             <br/>
             <h3 className="achievementText">Highest Medal Achieved: {medal}</h3>



         </div>
    )
}


export default HogDetail;