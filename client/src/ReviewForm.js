import React, { useState} from 'react';
import axios from 'axios';
import {Form} from "react-bootstrap";
import {ToggleButtonGroup} from "react-bootstrap";
import {ToggleButton} from "react-bootstrap";
import StarRating from './StarRating';

const ReviewForm = () => {
    let [name,setName] = useState('');
    let [ContactNumber,setContactNumber] = useState('');
    let [email,setEmail] = useState('');
    let [reviewComment,setReviewComment] = useState("");
    let [reviewName, setReviewName] = useState("");
    let [comment, setComment] = useState('');
    let [value, setValue] = useState([1, 3,]);
    let [standard, setStandard] = useState('');
    let [outdoor, setOutdoor] = useState('');
    let [learning, setLearning] = useState([])
    let [ict, setICT] = useState([]);
    let [care, setCare] = useState([]);
    let [activities, setActivities] = useState([]);
    let [staff, setStaff] = useState([]);
    let [food, setFood] = useState([]);
    let [managment, setManagemnet] = useState([]);
    let [clean, setClean] = useState([]);
    let [safe, setSafe] = useState([]);
    let [money, setMoney] = useState([]);
    let [recommend, setRecommend] = useState([]);
    let [overall, setOverall] = useState([]);

   
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

    const handleChange = (val) => setValue(val);
      
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
                <p>How likely are you to recommend this nursery?</p>
                <ToggleButtonGroup type="checkbox" value={recommend} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Likely</ToggleButton>
                  <ToggleButton value={2}>Likely</ToggleButton>
                  <ToggleButton value={3}>Neutral</ToggleButton>
                  <ToggleButton value={4}>Unlikely</ToggleButton>
                  <ToggleButton value={5}>Very Unlikely</ToggleButton>
              </ToggleButtonGroup>
                <p>How would you rate the nursery overall?</p>
                <ToggleButtonGroup type="checkbox" value={overall} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>How would you rate the nurseries</p>
                <p>Overall Standard</p>
                <ToggleButtonGroup type="checkbox" value={standard} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Facilities/Outdoor Space</p>
                <ToggleButtonGroup type="checkbox" value={outdoor} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Learning</p>
                <ToggleButtonGroup type="checkbox" value={learning} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Recources/ICT</p>
                <ToggleButtonGroup type="checkbox" value={ict} size="sm" onChange={onclick}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Care</p>
                <ToggleButtonGroup type="checkbox" value={care} size="sm" onChange={handleChange}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Activites</p>
                <ToggleButtonGroup type="checkbox" value={activities} size="sm" onChange={handleChange}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Staff</p>
                <ToggleButtonGroup type="checkbox" value={staff} size="sm" onChange={handleChange}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Food/Nutrition</p>
                <ToggleButtonGroup type="checkbox" value={food} size="sm" onChange={handleChange}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Management</p>
                <ToggleButtonGroup type="checkbox" value={managment} size="sm" onChange={handleChange}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Cleanliness</p>
                <ToggleButtonGroup type="checkbox" value={clean} size="sm" onChange={handleChange}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Safeguarding</p>
                <ToggleButtonGroup type="checkbox" value={safe} size="sm" onChange={handleChange}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
                <p>Value for money</p>
                <ToggleButtonGroup type="checkbox" value={money} size="sm" class="btn btn-default" onChange={handleChange}>
                  <ToggleButton value={1}>Very Poor</ToggleButton>
                  <ToggleButton value={2}>Poor</ToggleButton>
                  <ToggleButton value={3}>Satisfactory</ToggleButton>
                  <ToggleButton value={4}>Good</ToggleButton>
                  <ToggleButton value={5}>Excellent</ToggleButton>
              </ToggleButtonGroup>
              {StarRating}

        <button type="submit">submit!</button>
            </form>
            <p>{reviewName}</p>
            <p>{comment}</p>
        </div>
        </>
    )}
  
  
    export default ReviewForm