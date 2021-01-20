import React, { useState} from 'react';
import axios from 'axios';
import {ToggleButtonGroup, Container} from "react-bootstrap";
import {ToggleButton} from "react-bootstrap";
import StarRating from '../components/StarRating';
import '../App.css'
import { Checkbox, FormControlLabel, Radio,Select, TextField, MenuItem, Switch } from '@material-ui/core';
import {Button} from "react-bootstrap";


const ReviewForm = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [reviewComment,setReviewComment] = useState("");
    let [reviewName, setReviewName] = useState("");
    let [comment, setComment] = useState('');
    let [value, setValue] = useState([1, 3,]);
    let [standard] = useState([]);
    let [outdoor] = useState([]);
    let [learning] = useState([])
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
    let [overall, setOverall] = useState([]);
    const [submit, setSubmit] = useState(true);
   
    const handleSubmit = async (event) => {
        event.preventDefault()
     
    axios.post('/api/review',{
        name: name,
        ContactNumber: ContactNumber,
        email: email,
        reviewComment: reviewComment,
        recommend: recommend,
        })
        .then(async () => {
         const review= await axios.get('/api/review').then (res => res.data)
         const result =review[review.length -1]
         setComment (result.reviewComment);  
         setReviewName (result.name)
         setSubmit(false)
        //  setOverall (result.recommend)
      })
  }
 
    const handleChange = (val) => setValue(val);
    return (
        <>
        <div>
          <h2 className="reviewNursery">Review A Nursery</h2>
          <Container className="container">
          <form onSubmit={(event) => handleSubmit(event)} className="reviewForm">
                    <TextField placeholder="Name" className='reviewContact' id="filled-basic"  variant="filled" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                     <TextField placeholder="Contact Number" id="filled-basic"  variant="filled" type="text" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                     <TextField placeholder="Email" id="filled-basic"  variant="filled" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                     <TextField placeholder="Review" id="filled-basic"  variant="filled" type="text" fullWidth value={reviewComment} onChange={(e) => setReviewComment(e.target.value)} />
                <div className="boxItems">
                <p className="overallOne">How likely are you to recommend this nursery?</p>
                <ToggleButtonGroup className="checkbox" type="checkbox" value={recommend} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Likely</ToggleButton>
                  <ToggleButton value={2}>Likely</ToggleButton>
                  <ToggleButton value={3}>Neutral</ToggleButton>
                  <ToggleButton value={4}>Unlikely</ToggleButton>
                  <ToggleButton value={5}>Very Unlikely</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItems">
                <p className="overall">How would you rate the nursery overall?</p>
                <ToggleButtonGroup className="checkbox" type="checkbox" value={overall} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
                <p className="rate">How would you rate the nurseries:</p>
                <div className="boxItemMain">
                <p className="points">Overall Standard</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={standard} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
               <div className="boxItemMain">
                <p className="pointsTwo"Two>Facilities/Outdoor Space</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={outdoor} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItemMain">
                <p className="pointsThree">Learning</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={learning} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItemMain">
                <p className="pointsFour">Recources/ICT</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={ict} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItemMain">
                <p className="pointsFive">Care</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={care} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItemMain">
                <p className="pointsSix">Activites</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={activities} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItemMain">
                <p className="pointsSeven">Staff</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={staff} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItemMain">
                <p className="pointsEight">Food/Nutrition</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={food} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItemMain">
                <p className="pointsNine">Management</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={managment} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div> 
              <div className="boxItemMain">
                <p className="pointsTen">Cleanliness</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={clean} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <div className="boxItemMain">
                <p className="pointsEleven">Safeguarding</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={safe} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
               <div className="boxItemMain">
                <p className="pointsTwelve">Value for money</p>
                <ToggleButtonGroup className="rating" type="checkbox" value={money} size="sm" class="btn btn-default" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              </div>
              <StarRating/>
              <br/>
              <Button className="reviewButton" onClick={handleSubmit} variant="btn btn-outline-dark"> Submit </Button>{' '}
            </form>
                   </Container>

                  <h2>Please Check your review</h2>
    
            <p>{reviewName}</p>
            <p>{comment}</p>
        </div>
        </>
    )}
    
  
    export default ReviewForm