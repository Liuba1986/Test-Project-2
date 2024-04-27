import React from 'react'
import styles from './ProductCard.module.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ProductCard({ images, title, price }) {
  return (
    <div className={styles.productCard}>
      <Carousel showThumbs={false}>
        {images.map((el) => (
          <div>
            <img src={el} alt=""></img>
          </div>
        ))}
      </Carousel>
      <p>{title}</p>
      <p>{price}$</p>
    </div>
  );
}
