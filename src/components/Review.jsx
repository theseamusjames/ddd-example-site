import {ThumbsUp, ThumbsDown} from 'react-feather';
import Stars from './Stars';

export default function Review({review}) {
    const _vote = () => {

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
                Did you find this review helpful? <span className='feedbackButton' onClick={_vote}><ThumbsUp size={12}/> Yes</span> or <span className='feedbackButton' onClick={_vote}><ThumbsDown size={12}/> No</span>
            </div>
        </div>
    );
}