import React,{useEffect, useState} from 'react';
import RequestCard from '../Components/RequestCard'
import './Comments.css';

const Comments = (props) => {
    console.log(props.userNOW)
    //for creating request cards
    const [title, setTitle] = useState('')
    // const [reset, setReset] = useState('')
    const [details, setDetails] = useState('')

    // const typingName =(synthEvent)=>{
    //     setName(synthEvent.target.value)
    // }
    const tpyingTitle=(synthEvent)=>{
        setTitle(synthEvent.target.value)
    }
    const typingDetails=(synthEvent)=>{
        setDetails(synthEvent.target.value)
    }
    //fetching seeded request cards
    const [request, setRequest] = useState([])
    // console.log(request)
    useEffect(() =>{
        fetch('http://localhost:3000/requests')
        .then(resp => resp.json())
        .then(requestdata => {
            setRequest(requestdata)
        })
    }, [])

    const handlePostRequest = (synthEvent) => {
        synthEvent.preventDefault()
        const reqObj = {
            // name: name,
            user_id: props.userNOW.id,
            title: title,
            details: details,
        }
    fetch('http://localhost:3000/requests', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(reqObj),
    })
    .then(resp => resp.json())
    .then(newPost => {
        setRequest([...request, newPost])
        setTitle('')
        setDetails('')
    })
}
    
    const handleRequestDelete =(id) => {
        fetch(`http://localhost:3000/requests/${id}`, {
            method: 'DELETE',
        })
        .then(resp => resp.json)
        .then(() => {setRequest(request.filter((deleteReq)=> deleteReq.id !== id))})
    }

    return(
        <div className='comments-container'>
            <video className='video' src='/Pexels Videos 946146.mp4' autoPlay loop /> 
            <div className='comments-wrapper' >
               {request.map(eachRequest => {
                   return (
                       <RequestCard key={eachRequest.id} eachRequest={eachRequest} title={eachRequest.title} name={eachRequest.name} details={eachRequest.details} delete={handleRequestDelete} />
                   )
               }) }
            <div className='form-container'>
               <form className='request-form'style={{backgroundColor: 'white'}} onSubmit={handlePostRequest}>
                    {/* <label>Username: </label>
                    <input classnName='request-form-input'type='text' placeholder='Your Name' value={name} onChange={typingName}/> */}
                    <label>Request: </label>
                    <input type='text' placeholder='Title of request' value={title} onChange={tpyingTitle} />
                    <br></br>
                    <label>Details:</label>
                    <input type='text' placeholder='Details' value={details} onChange={typingDetails} />
                    <input type='submit' value='Submit' />
               </form>
            </div>
            </div> 
        </div>
    )
}

export default Comments;