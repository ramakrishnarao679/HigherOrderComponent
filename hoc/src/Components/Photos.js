import React from 'react';
import HigherOrderComponents from '../HigherOrderComponent';

const Photos = ({data}) =>{
    return (
        <div>
            <h2>Date from the Photos</h2>
            {data.slice(0,10).map((photo)=>{
                return <p>{photo.url}</p>
            })}
        </div>
    )
}
const PhotosComp = HigherOrderComponents('Photos', Photos, 'photos');
export default PhotosComp;