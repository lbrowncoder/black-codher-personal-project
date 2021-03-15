import React, { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import StarRating from "../components/StarRating";
import "../App.css";
import { TextField } from "@material-ui/core";
import  ButtonGroup from '../components/Button';

const ReviewForm = () => {
 let [name, setName] = useState("");
 let [ContactNumber, setContactNumber] = useState("");
 let [email, setEmail] = useState("");
 let [reviewComment, setReviewComment] = useState("");
 let [reviewName, setReviewName] = useState("");
 let [comment, setComment] = useState("");
 let [recommend] = useState([]);
 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = async event => {
  event.preventDefault();

  axios
   .post("/api/review", {
    name: name,
    ContactNumber: ContactNumber,
    email: email,
    reviewComment: reviewComment,
    recommend: recommend,
   })
   .then(async () => {
    const review = await axios.get("/api/review").then(res => res.data);
    const result = review[review.length - 1];
    setComment(result.reviewComment);
    setReviewName(result.name);
    setEmail(result.email);
   });
  setIsSubmitted(true);
 };


 return (
  <>
   <div>
    <h2 className="reviewNursery">Review A Nursery</h2>

    <Container className="container">
     <form onSubmit={event => handleSubmit(event)}>
      <div className="reviewForm">
         <TextField
        placeholder="Name*"
        className="reviewContact"
        id="filled-basic"
        variant="filled"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
       />
       <TextField
        placeholder="Contact Number*"
        id="filled-basic"
        variant="filled"
        type="text"
        value={ContactNumber}
        onChange={e => setContactNumber(e.target.value)}
       />
       <TextField
        placeholder="Email*"
        id="filled-basic"
        variant="filled"
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
       />
       <TextField
        placeholder="Review*"
        id="filled-basic"
        variant="filled"
        type="text"
        fullWidth
        value={reviewComment}
        onChange={e => setReviewComment(e.target.value)}
       />
       <div>
        <p className="overall">How would you rate the nursery overall?</p>
        <ButtonGroup />
       </div>
       <div className="points">
       <p className="rate">How would you rate the nurseries:</p>
       <p>Overall Standard</p>
       <ButtonGroup />
       <p className="points" Two>Facilities/Outdoor Space</p>
       <ButtonGroup />
       <p>Learning</p>
       <ButtonGroup />
       <p>Resources/ICT</p>
       <ButtonGroup />
       <p>Care</p>
       <ButtonGroup />
       <p>Activities</p>
        <ButtonGroup />
       <p>Staff</p>
       <ButtonGroup />
       <p>Food/Nutrition</p>
       <ButtonGroup />
       <p>Management</p>
       <ButtonGroup />
       <p>Cleanliness</p>
       <ButtonGroup />
       <p>Safeguarding</p>
       <ButtonGroup />
       <p>Value for money</p>
       <ButtonGroup />
       </div>
      </div>
      <div className="starForm">
      <StarRating />
      </div>

      <button
       className="reviewButton"
       onClick={handleSubmit}
       variant="btn btn-outline-dark"
      >
       Submit
      </button>
     </form>
    </Container>
    {isSubmitted && <h3 className="checkReview">Please check your review</h3>}
    {isSubmitted && <p className="checkReview">Name: {reviewName}</p>}
    {isSubmitted && <p className="checkReview">Review Comment: {comment}</p>}
    {/* Ability to edit review- added later */}
   </div>
  </>
 );
};

export default ReviewForm;
