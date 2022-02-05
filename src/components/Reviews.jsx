import './Reviews.css';
import { useEffect, useState } from "react";
import Review from "./Review";

export default function Reviews({product}) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getReviews(productId) {
            const response = await fetch('http://localhost:3000/reviews.json');
            const reviews = JSON.parse(await response.text());
            return reviews.filter((review) => review.productId === productId);
        }
        getReviews(product.id).then((_reviews) => {
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