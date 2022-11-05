import * as React from 'react';
import './Reviews.css';
import { useEffect, useState } from "react";
import Api from '../services/api';
import Review from "./Review";

export default function Reviews({product}) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        Api.getReviewsForProductId(product.id).then((_reviews) => {
            setReviews(_reviews.map((review, index) => (<Review review={review} key={index}/>)) )
        });
    }, [product.id]);

    return (
        <div id='reviews'>
            <h3>Reviews</h3>
            <div className='reviews'>
                {reviews}
            </div>
        </div>
    );
}