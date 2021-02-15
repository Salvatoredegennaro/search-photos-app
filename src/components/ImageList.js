import React from 'react';
import ImageCard from './ImageCard';
import './styles.css';
const ImageList = (props) => {
 
     
    const arrayList = props.imgList.map(image =>{

        return(
            <ImageCard key={image.id} messCard={image} />)
    })

       return(
            <div className="style-card">{arrayList}</div>)
   
}


export default ImageList;