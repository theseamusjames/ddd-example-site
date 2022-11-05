import * as React from 'react';
import { useState } from 'react';
import {ThumbsUp, ThumbsDown} from 'react-feather';
import Stars from './Stars';

export default function Review({review}) {
    const [voted, setVoted] = useState(false);
    
    const _vote = () => {
        setVoted(true);
    }

    return (
        <div className='review'>
            <Stars rating={review.rating} />
            <div className='body'>
                {review.message}
            </div>
            <div className='name'>
                <em>{review.customerName}</em>
            </div>
            <div className='feedback'>
                Did you find this review helpful? 
                {
                    (!voted) ? (
                        <>
                            <span className='feedbackButton' onClick={_vote}><ThumbsUp size={12}/> Yes</span> or <span className='feedbackButton' onClick={_vote}><ThumbsDown size={12}/> No</span>
                        </>
                    ) : (
                        <span>Thanks!</span>
                    )
                }
            </div>
        </div>
    );
}