import React, { useState } from "react";
import axios from "axios";
import { ToggleButtonGroup, Container } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import StarRating from "../components/StarRating";
import "../App.css";
import { TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";

const ReviewForm = () => {
 let [name, setName] = useState("");
 let [ContactNumber, setContactNumber] = useState("");
 let [email, setEmail] = useState("");
 let [reviewComment, setReviewComment] = useState("");
 let [reviewName, setReviewName] = useState("");
 let [comment, setComment] = useState("");
 let [setValue] = useState([1, 2, 3, 4, 5]);
 let [standard] = useState([]);
 let [outdoor] = useState([]);
 let [learning] = useState([]);
 let [ict] = useState([]);
 let [care] = useState([]);
 let [activities] = useState([]);
 let [staff] = useState([]);
 let [food] = useState([]);
 let [managment] = useState([]);
 let [clean] = useState([]);
 let [safe] = useState([]);
 let [money] = useState([]);
 let [recommend] = useState([]);
 let [overall] = useState([]);
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
       <p className="overallOne">
        How likely are you to recommend this nursery?
       </p>
       <ToggleButtonGroup
        className="checkbox"
        type="checkbox"
        value={recommend}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>VeryLikely</ToggleButton>
        <ToggleButton value={2}>Likely</ToggleButton>
        <ToggleButton value={3}>Neutral</ToggleButton>
        <ToggleButton value={4}>Unlikely</ToggleButton>
        <ToggleButton value={5}>Very Unlikely</ToggleButton>
       </ToggleButtonGroup>
       <div className="rateOverall">
        <p className="overall">How would you rate the nursery overall?</p>
        <ToggleButtonGroup
         className="checkboxTwo"
         type="checkbox"
         value={overall}
         size="sm"
         onChange={onclick}
        >
         <ToggleButton value={1}>Very Poor</ToggleButton>
         <ToggleButton value={2}>Poor</ToggleButton>
         <ToggleButton value={3}>Satisfactory</ToggleButton>
         <ToggleButton value={4}>Good</ToggleButton>
         <ToggleButton value={5}>Excellent</ToggleButton>
        </ToggleButtonGroup>
       </div>
       <p className="rate">How would you rate the nurseries:</p>
       <p className="points">Overall Standard</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={standard}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points" Two>
        Facilities/Outdoor Space
       </p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={outdoor}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Learning</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={learning}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Recources/ICT</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={ict}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Care</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={care}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Activites</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={activities}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Staff</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={staff}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Food/Nutrition</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={food}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Management</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={managment}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Cleanliness</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={clean}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Safeguarding</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={safe}
        size="sm"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
       <p className="points">Value for money</p>
       <ToggleButtonGroup
        className="ratingForm"
        type="checkbox"
        value={money}
        size="sm"
        class="btn btn-default"
        onChange={onclick}
       >
        <ToggleButton value={1}>Very Poor</ToggleButton>
        <ToggleButton value={2}>Poor</ToggleButton>
        <ToggleButton value={3}>Satisfactory</ToggleButton>
        <ToggleButton value={4}>Good</ToggleButton>
        <ToggleButton value={5}>Excellent</ToggleButton>
       </ToggleButtonGroup>
      </div>
      <StarRating className="starForm" />
      <br />
      <Button
       className="reviewButton"
       onClick={handleSubmit}
       variant="btn btn-outline-dark"
      >
       Submit
      </Button>
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
