import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
// import { response } from 'express';


const ReviewForm = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [reviewComment,setReviewComment] = useState('');

    const [review, setReview] = useState("");
    // const [post, setPost] = useState([]);
 
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
         console.log(result)
      })
    //   .then((response) => {
    //     console.log('Response', response);
    //   });
    }
    

    // .then(res=> {
    //     console.log(res)
    // })
    // .catch(function (error) {
    //     console.log(error);
    //   })

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
                  <input type="text" value={reviewComment}  onChange={(e) => setReviewComment(e.target.value)} />
                </label>
               
                <button type="submit">Press ME!</button>
            </form>
        </div>
        </>
    )}
    

    
    export default ReviewForm


    
        //   const getAllReveiews = () => {
        //       axios.get(`${`/api/review`}past`)
        //       .then((response) => {
        //           const review = response.data.review.allReview;
        //           getReveiew(getAllReveiews)
        //       })
        //       .catch(function (error) {
        //         console.log(error);
        //       })
        // };

// const displaygetReviewForm = (props) => {
//     const {review} = props;

//     if (review.length > 0) {
//         return (
//             review.map(( review, index) => {
//                 return (
//             <div key={review.id}>
//                 <p>{review.name}</p>
//                 <p>{review.body}</p>
//             </div>
//         )
//     }))
// } else {
//     return (<h2></h2>)
// }}