import React from 'react';
import './RequestCard.css'

const RequestCard = (props) => {
    // console.log(props.delete)
    console.log(props)
    const Goodbye =() => {
        props.delete(props.eachRequest.id)
    }
    
    return(
       <div className="card-container">
           <div className='wrapper'>
                <h2 className="title">{props.eachRequest.title}</h2>
                    <div className='details'>{props.eachRequest.details}</div>
                    <button className='request-done' onClick={Goodbye}>
                        Done
                    </button>
           </div>
       </div>
    )
}
export default RequestCard;