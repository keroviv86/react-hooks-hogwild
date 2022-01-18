import React, {useState} from "react";
import HogDetail from './HogDetail'

function Hog({name,image, specialty, weight, greased, medal}){
    const [showDetails, showDetailsSetter]= useState(false);

    function handleShowInfo(){
        showDetailsSetter((showDetails)=> !showDetails)
    }

    function renderDetails(){
        if(showDetails){
            return (
                <div>
                {showDetails ? <HogDetail 
                specialty={specialty}
                weight={weight}
                greased={greased}
                medal={medal}
                /> : null}
                </div>
            )
        }else{
            return (
                <div>
                     <h3 className="header"> {name} </h3>
                    <img height= '200' width= '300' 
                    style={{objectFit: "cover"}}
                    src ={image} alt= "hogphoto"/>
                </div>
            )
        }
    }

    return(
        <>
            <div className ="ui eight wide column" onClick={handleShowInfo}>
                {renderDetails()}
            </div>
        </>


    )

}

export default Hog;