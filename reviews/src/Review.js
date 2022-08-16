import React, { useState } from "react";
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const { index, setIndex } = useState(0);
    const { name, job, image, text } = people[2];
    return <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className='person-img' />
            <span>
                <FaQuoteRight />
            </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
            <button className="prev-btn">
                <FaChevronLeft />
            </button>
            <button className="next-btn">
                <FaChevronRight />
            </button>
        </div>
        <button className="random-btn">
            Suprise me
        </button>
    </article>
};

export default Review;