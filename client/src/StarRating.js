import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";
import './StarRating.css';

const StarRating = () => {
    let [rating, setRating] = useState();
    let [hover, setHover] = useState(null);

    return (
        <div>
             <p>Your Rating {rating}</p>
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                
                return (
                <label>
                    <input 
                    type="radio"
                    name= "rating"
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)} 
                    />
                    <FaStar className="star" 
                    color={ratingValue <= (hover || rating) ? "yellow" : "lightgrey"} 
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    size={40}
                    />
                    </label> 
            );
            })} 
        </div>
    );
};

export default StarRating