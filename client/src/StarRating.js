import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";
import './StarRating.css';

const StarRating = () => {
    let [rating, setRating] = useState(null);
    const [hoover, setHoover] = useState(null);

    return (
        <div>
             <p>The Rating is {rating}</p>
            {[ ...Array(5)].map((star, i) => {
                let ratingValue = i + 1;
                
                return (
                <label>
                    <input type="radio"
                    name= "rating"
                    value={ratingValue} 
                    onClick={() => setRating=(ratingValue)} 
                    />
                    <FaStar className="star" 
                    color={ratingValue <= (hoover || rating) ? "yellow" : "lightgrey"} 
                    onMouseEnter={() => setHoover(ratingValue)}
                    onMouseLeave={() => setHoover(null)}
                    size={40}
                    />
                    </label> 
            );
            })} 
        </div>
    );
};

export default StarRating