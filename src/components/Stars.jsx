import './Stars.css';

export default function Stars({rating}) {
    let stars = [];

    for(let i=1; i<=5; i++) {   
        stars.push((i <= rating) ? (<span className='starFilled' key={i}>★</span>) : (<span className='starEmpty' key={i}>★</span>));
    }

    return (
        <div className='stars'>
            {stars}
        </div>
    )
}