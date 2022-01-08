import React, {useEffect, useState} from "react";
import HobbyCard from "./HobbyCard";
import '../Components/HobbyCard.css';



const Hobby = () => {

    const [hobbies, setHobbies] = useState([])
    // console.log(hobbies)

    useEffect(() => {
        fetch('http://localhost:3000/hobbies')
        .then(resp =>resp.json())
        .then(hobbyData => {
            setHobbies(hobbyData)
        })
    }, [])

    
    return  ( 
        <div className="hobbies-container" >
            {hobbies.map(eachHobby => {
                return (
                    <HobbyCard 
                    
                    key={eachHobby.id} 
                    eachHobby={eachHobby}  
                    label={eachHobby.name} 
                    />
                )
            })}
        </div>
    )  
}
export default Hobby;
