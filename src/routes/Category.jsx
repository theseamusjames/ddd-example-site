import {useParams} from 'react-router-dom';

export default function Category() {
    const params = useParams();
    
    return (
        <h2>{params.categoryName}</h2>
    );
}