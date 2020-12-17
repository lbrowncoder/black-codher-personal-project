import React, { useState} from 'react';
import axios from 'axios';


const ReviewForm = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [reviewComment,setReviewComment] = useState("");
    let [reviewName, setReviewName] = useState("");
    let [comment, setComment] = useState('');
   
    function handleSubmit(event) {
        event.preventDefault()
      console.log(name, ContactNumber, email)
    //   history.push('/pages/ThankYou')

    axios.post('/api/review',{
        name: name,
        number: ContactNumber,
        email: email,
        reviewComment: reviewComment,
        })
        .then(async () => {
         const review= await axios.get('/api/review').then (res => res.data)
         const result =review[review.length -1]
         setComment (result.reviewComment);  
         setReviewName (result.name)
         console.log(result)
      })
    }
      
    return (
        <>
        <div>
          <form onSubmit={(event) => handleSubmit(event)} className="form">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Contact Number
                    <input  type="text" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </label>
                <label>
                    Email
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Review Comment
                  <input type="text" value={reviewComment} onChange={(e) => setReviewComment(e.target.value)} />
                </label>
                <button type="submit">Press ME!</button>
            </form>
            <p>{reviewName}</p>
            <p>{comment}</p>
        </div>
        </>
    )}
  
  
    export default ReviewForm